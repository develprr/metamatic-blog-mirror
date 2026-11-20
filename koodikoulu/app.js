// =============================================
//  METAMATIC KOODIKOULU - App Engine
//  Pyodide integration + gamification
// =============================================

let pyodide = null;
let currentLesson = 0;
let lessonStars = {};       // { lessonId: starsEarned }
let completedLessons = {};  // { lessonId: true }
let hintUsed = false;
let attempts = 0;
let currentUser = null;  // Azure Easy Auth user
let lessonAudio = null;  // Current lesson audio player

// ── Azure Easy Auth ──
async function checkAuth() {
    try {
        const resp = await fetch('/.auth/me');
        if (resp.ok) {
            const data = await resp.json();
            const principal = data.clientPrincipal;
            if (principal && principal.userId) {
                currentUser = {
                    id: principal.userId,
                    name: principal.userDetails || 'User',
                    provider: principal.identityProvider || 'github',
                    avatarUrl: `https://avatars.githubusercontent.com/u/${principal.userId}?s=40`
                };
                showLoggedIn();
                await loadProgressFromCloud();
                return;
            }
        }
    } catch (e) { /* offline mode */ }
    showLoggedOut();
    loadProgress();
}

function showLoggedIn() {
    document.getElementById('auth-logged-out').style.display = 'none';
    const loggedIn = document.getElementById('auth-logged-in');
    loggedIn.style.display = 'flex';
    document.getElementById('user-avatar').src = currentUser.avatarUrl;
    document.getElementById('user-name').textContent = currentUser.name;
}

function showLoggedOut() {
    document.getElementById('auth-logged-out').style.display = '';
    document.getElementById('auth-logged-in').style.display = 'none';
}

async function saveProgressToCloud() {
    if (!currentUser) return;
    try {
        await fetch('/api/progress', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                stars: lessonStars,
                completed: completedLessons,
                sidebarWidth: parseInt(localStorage.getItem('koodikoulu_sidebar_width') || '0')
            })
        });
    } catch (e) { /* offline */ }
}

async function loadProgressFromCloud() {
    if (!currentUser) return;
    try {
        const resp = await fetch('/api/progress');
        if (resp.ok) {
            const data = await resp.json();
            if (data.stars && Object.keys(data.stars).length > 0) {
                lessonStars = data.stars;
                completedLessons = data.completed || {};
                saveProgress();  // sync to localStorage
                if (data.sidebarWidth) {
                    localStorage.setItem('koodikoulu_sidebar_width', data.sidebarWidth);
                }
            } else {
                loadProgress();  // fallback to local
            }
        }
    } catch (e) { loadProgress(); }
}
function saveProgress() {
    localStorage.setItem('koodikoulu_stars', JSON.stringify(lessonStars));
    localStorage.setItem('koodikoulu_completed', JSON.stringify(completedLessons));
    saveProgressToCloud();
}

function loadProgress() {
    try {
        const stars = localStorage.getItem('koodikoulu_stars');
        const completed = localStorage.getItem('koodikoulu_completed');
        if (stars) lessonStars = JSON.parse(stars);
        if (completed) completedLessons = JSON.parse(completed);

        // 🚀 Migration Layer: Convert Legacy/ID-based progress to Slug-based progress
        let migrated = false;
        LESSONS.forEach(lesson => {
            const legacyId = lesson.legacyId; // Original baseline ID
            const newSlug = lesson.slug;

            if (newSlug) {
                // Try migrating from legacyId first (most reliable for shifted tasks)
                if (legacyId && lessonStars[legacyId] !== undefined && lessonStars[newSlug] === undefined) {
                    lessonStars[newSlug] = lessonStars[legacyId];
                    // Don't delete yet, might be needed for other tasks if logic was complex
                    migrated = true;
                }
                if (legacyId && completedLessons[legacyId] !== undefined && completedLessons[newSlug] === undefined) {
                    completedLessons[newSlug] = completedLessons[legacyId];
                    migrated = true;
                }
            }
        });

        // Cleanup: Once migrated, we can remove the numeric keys to prevent double-migration or confusion
        // But only if they look like baseline IDs (1-200)
        if (migrated) {
            console.log("Progress migrated to slug-based system.");
            Object.keys(lessonStars).forEach(k => { if (!isNaN(k)) delete lessonStars[k]; });
            Object.keys(completedLessons).forEach(k => { if (!isNaN(k)) delete completedLessons[k]; });
            saveProgress();
        }

    } catch (e) { /* fresh start */ }
}

// ── Initialize Pyodide ──
async function initPyodide() {
    const loadingScreen = document.getElementById('loading-screen');
    const app = document.getElementById('app');

    try {
        pyodide = await loadPyodide();
        await new Promise(r => setTimeout(r, 500));
        loadingScreen.classList.add('hidden');
        app.classList.remove('hidden');
        await checkAuth();
        if (!currentUser) loadProgress();
        buildSidebar();
        updateProgressBar();
    } catch (err) {
        document.querySelector('.loading-content p').textContent =
            'Virhe ladattaessa Pythonia 😢 Kokeile päivittää sivu!';
        console.error(err);
    }
}

// ── Section config (data-driven) ──
const SECTIONS = [
    { key: 'perus',          label: '🐣 Perus',        emoji: '🐣', belt: 0 },
    { key: 'syote',          label: '💬 Syöte',        emoji: '💬', belt: 10 },
    { key: 'turtle',         label: '🐢 Turtle',       emoji: '🐢', belt: 15 },
    { key: 'ekspertti',      label: '🚀 Ekspertti',    emoji: '🚀', belt: 20 },
    { key: 'syventava',      label: '🧠 Syventävä',    emoji: '🧠', belt: 40 },
    { key: 'operaattorit',   label: '🧮 Operaattorit', emoji: '🧮', belt: 60 },
    { key: 'merkkijonot',    label: '🔤 Merkkijonot',  emoji: '🔤', belt: 80 },
    { key: 'listat',         label: '📋 Listat',       emoji: '📋', belt: 100 },
    { key: 'sanakirjat',     label: '📖 Sanakirjat',   emoji: '📖', belt: 120 },
    { key: 'funktiot_easy',  label: '🌱 Funktiot Easy',emoji: '🌱', belt: 140 },
    { key: 'funktiot_easy2', label: '🌱 Funktiot Easy 2',emoji: '🌱', belt: 150 },
    { key: 'funktiot',       label: '🔧 Funktiot',     emoji: '🔧', belt: 160 },
    { key: 'funktiot2',      label: '🛠️ Funktiot 2',   emoji: '🛠️', belt: 170 },
    { key: 'ehtolauseet',    label: '🔀 Ehtolauseet',  emoji: '🔀', belt: 180 },
    { key: 'silmukat',       label: '🔁 Silmukat',     emoji: '🔁', belt: 190 },
    { key: 'promptikoodaus', label: '🤖 Promptikoodaus',emoji: '🤖', belt: 210 },
];

// Track which sections are expanded (persists across rebuilds)
window.expandedSections = { "perus": true }; // Default to Perus expanded

// ── Build Sidebar ──
function buildSidebar() {
    const list = document.getElementById('lesson-list');
    if (!list) return;
    list.innerHTML = '';

    // Group lessons by section key
    const groups = new Map();
    LESSONS.forEach((lesson, index) => {
        const key = lesson.section || 'perus';
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push({ lesson, index });
    });

    SECTIONS.forEach(sec => {
        const items = groups.get(sec.key);
        if (!items || items.length === 0) return;

        const isExpanded = !!window.expandedSections[sec.key];
        const sectionCompleted = items.filter(i => {
            const key = i.lesson.slug || i.lesson.id;
            return completedLessons[key];
        }).length;
        const sectionTotal = items.length;

        // Section header
        const divider = document.createElement('li');
        divider.className = 'section-divider section-toggle' + (isExpanded ? ' expanded' : '');
        divider.dataset.section = sec.key;
        divider.innerHTML = `
            <span class="section-chevron">▶</span>
            <span class="section-label">${sec.label}</span>
            <span class="section-count">${sectionCompleted}/${sectionTotal}</span>
        `;
        list.appendChild(divider);

        // Lesson items (only if expanded)
        if (isExpanded) {
            items.forEach(({ lesson, index }) => {
                const li = document.createElement('li');
                const key = lesson.slug || lesson.id;
                li.id = `lesson-item-${key}`;
                li.dataset.lessonIndex = index;

                const isCompleted = completedLessons[key];
                const stars = lessonStars[key] || 0;

                if (isCompleted) li.classList.add('completed');
                if (index === currentLesson) li.classList.add('active');

                li.innerHTML = `
                    <span class="lesson-num">${isCompleted ? '✓' : lesson.id}</span>
                    <span class="lesson-name">${lesson.title}</span>
                    <span class="lesson-stars">${isCompleted ? '⭐'.repeat(stars) : ''}</span>
                `;
                list.appendChild(li);
            });
        }
    });
}

// ── Sidebar Event Delegation ──
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('lesson-list');
    if (list) {
        list.onclick = (e) => {
            const divider = e.target.closest('.section-divider');
            if (divider) {
                const sectionKey = divider.dataset.section;
                window.expandedSections[sectionKey] = !window.expandedSections[sectionKey];
                buildSidebar();
                return;
            }

            const lessonItem = e.target.closest('li[data-lesson-index]');
            if (lessonItem) {
                const index = parseInt(lessonItem.dataset.lessonIndex);
                goToLesson(index);
                return;
            }
        };
    }
});

// ── Update Progress Bar ──
const BELTS = [
    { name: 'Explorer',   emoji: '🔰', min: 0 },
    { name: 'Coder',      emoji: '🟢', min: 20 },
    { name: 'Builder',    emoji: '🔵', min: 50 },
    { name: 'Developer',  emoji: '🟣', min: 90 },
    { name: 'Engineer',   emoji: '🟠', min: 140 },
    { name: 'Architect',  emoji: '💎', min: 200 },
    { name: 'Master',     emoji: '👑', min: 230 },
];

function updateProgressBar() {
    const completedCount = Object.keys(completedLessons).length;
    const percent = (completedCount / LESSONS.length) * 100;

    document.getElementById('progress-fill').style.width = percent + '%';
    document.getElementById('progress-text').textContent =
        `${completedCount} / ${LESSONS.length}`;

    const totalStars = Object.values(lessonStars).reduce((a, b) => a + b, 0);
    document.getElementById('total-stars').textContent = totalStars;
    document.getElementById('max-stars').textContent = LESSONS.length * 3;

    // Belt system
    let currentBelt = BELTS[0];
    for (let i = BELTS.length - 1; i >= 0; i--) {
        if (completedCount >= BELTS[i].min) {
            currentBelt = BELTS[i];
            break;
        }
    }
    document.getElementById('belt-emoji').textContent = currentBelt.emoji;
    document.getElementById('belt-label').textContent = currentBelt.name;
}

// ── Go To Lesson ──
function goToLesson(index) {
    currentLesson = index;
    const lesson = LESSONS[index];

    // Auto-expand the active section
    const activeSectionKey = lesson.section || 'perus';
    window.expandedSections[activeSectionKey] = true;

    // Reset state
    hintUsed = false;
    attempts = 0;
    stopLessonAudio();

    // Hide welcome, show lesson
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('lesson-view').classList.remove('hidden');

    // Populate content
    document.getElementById('lesson-badge').textContent = `Tehtävä ${lesson.id} / ${LESSONS.length}`;
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-description').textContent = lesson.description;
    document.getElementById('theory-section').innerHTML = lesson.theory;
    document.getElementById('challenge-text').innerHTML = lesson.challenge;
    document.getElementById('code-editor').value = lesson.starterCode;
    
    // Handle Input area
    const inputContainer = document.getElementById('input-container');
    const inputArea = document.getElementById('input-area');
    if (inputContainer && inputArea) {
        if (lesson.requiresInput) {
            inputContainer.classList.remove('hidden');
            inputArea.value = lesson.defaultInput || '';
        } else {
            inputContainer.classList.add('hidden');
            inputArea.value = '';
        }
    }

    // Handle Turtle canvas
    const turtleContainer = document.getElementById('turtle-container');
    if (turtleContainer) {
        if (lesson.section === 'turtle') {
            turtleContainer.classList.remove('hidden');
            initTurtle();
            if (lesson.targetSvg) showTargetSvg(lesson.targetSvg);
            else hideTargetSvg();
        } else {
            turtleContainer.classList.add('hidden');
            hideTargetSvg();
        }
    }
    
    document.getElementById('output-area').textContent = '';
    document.getElementById('hint-text').textContent = lesson.hint;
    document.getElementById('hint-box').classList.add('hidden');
    document.getElementById('result-box').classList.add('hidden');

    // Detailed help (Etkö ymmärrä?) - show button only if lesson has detailedHelp
    const detailedHelpBtn = document.getElementById('btn-detailed-help');
    const detailedHelpBox = document.getElementById('detailed-help-box');
    detailedHelpBox.classList.add('hidden');
    detailedHelpBox.innerHTML = '';
    if (lesson.detailedHelp) {
        detailedHelpBtn.style.display = 'inline-block';
        detailedHelpBox.innerHTML = lesson.detailedHelp;
    } else {
        detailedHelpBtn.style.display = 'none';
    }

    // Navigation buttons
    document.getElementById('btn-prev').style.visibility = index === 0 ? 'hidden' : 'visible';
    document.getElementById('btn-next').textContent =
        index === LESSONS.length - 1 ? '🏆 Valmis!' : 'Seuraava ➡️';

    // Update sidebar active state
    buildSidebar();

    // Scroll to top
    document.getElementById('main-content').scrollTop = 0;
    window.scrollTo(0, 0);
}

function startFirstLesson() {
    goToLesson(0);
}

function nextLesson() {
    if (currentLesson < LESSONS.length - 1) {
        goToLesson(currentLesson + 1);
    }
}

function prevLesson() {
    if (currentLesson > 0) {
        goToLesson(currentLesson - 1);
    }
}

// ── Turtle Graphics ──
let turtleInitialized = false;

function clearTurtle() {
    const canvas = document.getElementById('turtle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

async function initTurtle() {
    if (turtleInitialized || !pyodide) return;
    turtleInitialized = true;

    const canvasId = 'turtle-canvas';
    await pyodide.runPythonAsync(`
from js import document
_canvas = document.getElementById("${canvasId}")
_ctx = _canvas.getContext("2d")
_w = _canvas.width
_h = _canvas.height

_turtle_x = _w / 2
_turtle_y = _h / 2
_turtle_angle = 0
_turtle_pen = True
_turtle_color = "#4fc3f7"
_turtle_size = 2
_turtle_log = []

import math

def forward(n):
    global _turtle_x, _turtle_y
    rad = math.radians(_turtle_angle)
    nx = _turtle_x + n * math.cos(rad)
    ny = _turtle_y - n * math.sin(rad)
    if _turtle_pen:
        _ctx.beginPath()
        _ctx.moveTo(_turtle_x, _turtle_y)
        _ctx.lineTo(nx, ny)
        _ctx.strokeStyle = _turtle_color
        _ctx.lineWidth = _turtle_size
        _ctx.stroke()
    _turtle_log.append({"type": "line", "dist": n, "angle": _turtle_angle})
    _turtle_x, _turtle_y = nx, ny

def backward(n):
    forward(-n)

def left(a):
    global _turtle_angle
    _turtle_angle = (_turtle_angle + a) % 360
    _turtle_log.append({"type": "turn", "angle": a})

def right(a):
    global _turtle_angle
    _turtle_angle = (_turtle_angle - a) % 360
    _turtle_log.append({"type": "turn", "angle": -a})

def penup():
    global _turtle_pen
    _turtle_pen = False
    _turtle_log.append({"type": "penup"})

def pendown():
    global _turtle_pen
    _turtle_pen = True
    _turtle_log.append({"type": "pendown"})

def pensize(s):
    global _turtle_size
    _turtle_size = s

def pencolor(c):
    global _turtle_color
    _turtle_color = c
    _turtle_log.append({"type": "color", "color": c})

def goto(x, y):
    global _turtle_x, _turtle_y
    if _turtle_pen:
        _ctx.beginPath()
        _ctx.moveTo(_turtle_x, _turtle_y)
        _ctx.lineTo(x, y)
        _ctx.strokeStyle = _turtle_color
        _ctx.lineWidth = _turtle_size
        _ctx.stroke()
    _turtle_x, _turtle_y = x, y

def setpos(x, y):
    goto(x, y)

def home():
    global _turtle_x, _turtle_y, _turtle_angle
    _turtle_x = _w / 2
    _turtle_y = _h / 2
    _turtle_angle = 0

def circle(r):
    global _turtle_x, _turtle_y
    _ctx.beginPath()
    _ctx.arc(_turtle_x, _turtle_y, r, 0, 2*math.pi)
    _ctx.strokeStyle = _turtle_color
    _ctx.lineWidth = _turtle_size
    _ctx.stroke()
    _turtle_log.append({"type": "circle", "radius": r})

def t_clear():
    _ctx.clearRect(0, 0, _w, _h)
    home()
    `);
}

// ── Turtle Validation Helpers ──
function getTurtleLog() {
    try {
        const logStr = pyodide.runPython(`import json; json.dumps(_turtle_log)`);
        return JSON.parse(logStr);
    } catch(e) {
        return [];
    }
}
function countLines(log) { return log.filter(l => l.type === 'line').length; }
function countCircles(log) { return log.filter(l => l.type === 'circle').length; }
function countColors(log) { return log.filter(l => l.type === 'color').length; }
function getTurnAngles(log) { return log.filter(l => l.type === 'turn').map(l => l.angle); }

// ── Spatial Validation Engine (replay turtle log → coordinates) ──
const CW = 600, CH = 400;

function replayLogToCoords(log) {
    const strokes = [];
    let x = CW / 2, y = CH / 2, angle = 0;
    const TAU = Math.PI * 180;
    for (const e of log) {
        if (e.type === 'turn') { angle = (angle + e.angle) % 360; continue; }
        if (e.type === 'penup' || e.type === 'pendown') continue;
        if (e.type === 'color') continue;
        if (e.type === 'line') {
            const rad = Math.PI * angle / 180;
            const nx = x + e.dist * Math.cos(rad);
            const ny = y - e.dist * Math.sin(rad);
            strokes.push({ type: 'line', x1: x, y1: y, x2: nx, y2: ny });
            x = nx; y = ny;
        } else if (e.type === 'circle') {
            strokes.push({ type: 'circle', cx: x, cy: y, r: e.radius });
        }
    }
    return strokes;
}

function strokeBounds(s) {
    if (s.type === 'line') return { xmin: Math.min(s.x1,s.x2), xmax: Math.max(s.x1,s.x2),
                                      ymin: Math.min(s.y1,s.y2), ymax: Math.max(s.y1,s.y2) };
    if (s.type === 'circle') return { xmin: s.cx-s.r, xmax: s.cx+s.r,
                                      ymin: s.cy-s.r, ymax: s.cy+s.r };
    return null;
}
function strokeCenter(s) { const b = strokeBounds(s); return b ? { x:(b.xmin+b.xmax)/2, y:(b.ymin+b.ymax)/2 } : null; }
function strokeMidY(s) { return s.type==='line' ? (s.y1+s.y2)/2 : s.cy; }

function countInRegion(strokes, region) {
    if (!region) return strokes.length;
    let n=0;
    for (const s of strokes) { const c=strokeCenter(s); if (!c) continue;
        if (region==='upper'&&c.y<CH/2) n++;
        else if (region==='lower'&&c.y>CH/2) n++;
        else if (region==='left'&&c.x<CW/2) n++;
        else if (region==='right'&&c.x>CW/2) n++;
        else if (region==='top20'&&c.y<CH*0.25) n++;
        else if (region==='bottom20'&&c.y>CH*0.75) n++;
    }
    return n;
}

function hasCircleInRegion(strokes, region) {
    return strokes.some(s=>s.type==='circle'&&(()=>{const c={cx:s.cx,cy:s.cy};
        if(region==='top20')return c.cy<CH*0.25;if(region==='bottom20')return c.cy>CH*0.75;
        if(region==='upper')return c.cy<CH/2;if(region==='lower')return c.cy>CH/2;
        return true;})());
}

function spatialValidate(rules, log) {
    const s = replayLogToCoords(log);
    const lines = s.filter(x=>x.type==='line');
    const circles = s.filter(x=>x.type==='circle');
    for (const r of rules) {
        if (r.check === 'minLines' && lines.length < r.val) return r.msg || `Tarvitaan vähintään ${r.val} viivaa!`;
        if (r.check === 'maxLines' && lines.length > r.val) return r.msg || `Liian monta viivaa!`;
        if (r.check === 'minCircles' && circles.length < r.val) return r.msg || `Tarvitaan vähintään ${r.val} ympyrää!`;
        if (r.check === 'circlesAboveLines' && !hasCircleAboveLines(circles, lines)) return r.msg || 'Ympyrän pitää olla viivojen yläpuolella!';
        if (r.check === 'circlesBelowLines' && !hasCircleBelowLines(circles, lines)) return r.msg || 'Ympyrän pitää olla viivojen alapuolella!';
        if (r.check === 'linesInUpper' && countInRegion(s,'upper') < r.val) return r.msg || `Tarvitaan vähintään ${r.val} elementtiä yläosassa!`;
        if (r.check === 'linesInLower' && countInRegion(s,'lower') < r.val) return r.msg || `Tarvitaan vähintään ${r.val} elementtiä alaosassa!`;
        if (r.check === 'circlesInTop' && !hasCircleInRegion(s,r.region||'top20')) return r.msg || 'Ympyrän pitää olla yläosassa!';
        if (r.check === 'circlesInBottom' && !hasCircleInRegion(s,r.region||'bottom20')) return r.msg || 'Ympyrän pitää olla alaosassa!';
        if (r.check === 'minStrokes' && s.length < r.val) return r.msg || `Piirrä enemmän! Tarvitaan vähintään ${r.val} vetoa.`;
        if (r.check === 'symmetry' && symmetryScore(s) < r.val) return r.msg || 'Kuva ei näytä tarpeeksi symmetriseltä. Kokeile kääntää molempiin suuntiin!';
    }
    return true;
}

function hasCircleAboveLines(circles, lines) {
    if (!circles.length||!lines.length) return false;
    const cMinY = Math.min(...circles.map(c=>c.cy-c.r));
    const lMaxY = Math.max(...lines.flatMap(l=>[l.y1,l.y2]));
    return cMinY < lMaxY - 10;
}
function hasCircleBelowLines(circles, lines) {
    if (!circles.length||!lines.length) return false;
    const cMaxY = Math.max(...circles.map(c=>c.cy+c.r));
    const lMinY = Math.min(...lines.flatMap(l=>[l.y1,l.y2]));
    return cMaxY > lMinY + 10;
}
function symmetryScore(strokes) {
    const centers = strokes.map(s=>strokeCenter(s)).filter(Boolean);
    if (centers.length<3) return 0;
    const midX = CW/2;
    let score=0, matched=0;
    for (const c of centers) {
        const mirror = 2*midX - c.x;
        const found = centers.some(o=>Math.abs(o.x-mirror)<30&&Math.abs(o.y-c.y)<30);
        if(found) matched++;
    }
    return matched/Math.max(centers.length,1);
}

// ── Target SVG display ──
function showTargetSvg(svgHtml) {
    const el = document.getElementById('turtle-target-svg');
    if (el) el.innerHTML = svgHtml;
    const container = document.getElementById('turtle-target-container');
    if (container) container.classList.remove('hidden');
}
function hideTargetSvg() {
    const container = document.getElementById('turtle-target-container');
    if (container) container.classList.add('hidden');
}

function showHint() {
    const hintBox = document.getElementById('hint-box');
    hintBox.classList.toggle('hidden');
    hintUsed = true;
}

// ── Show Detailed Help (Etkö ymmärrä?) ──
function showDetailedHelp() {
    const helpBox = document.getElementById('detailed-help-box');
    helpBox.classList.toggle('hidden');
    hintUsed = true;
}

// ── Reset Code ──
function resetCode() {
    const lesson = LESSONS[currentLesson];
    document.getElementById('code-editor').value = lesson.starterCode;
    if (lesson.requiresInput) {
        document.getElementById('input-area').value = lesson.defaultInput || '';
    }
    document.getElementById('output-area').textContent = '';
    document.getElementById('result-box').classList.add('hidden');
}

// ── Run Code ──
async function runCode() {
    if (!pyodide) return;

    const code = document.getElementById('code-editor').value;
    const inputArea = document.getElementById('input-area');
    const inputStr = inputArea ? inputArea.value : '';

    const outputArea = document.getElementById('output-area');
    const resultBox = document.getElementById('result-box');
    const lesson = LESSONS[currentLesson];

    // Reset UI
    outputArea.textContent = 'Ajaa koodia... ⏳';
    outputArea.className = '';
    resultBox.classList.add('hidden');

    try {
        // Clear turtle canvas before running
        if (lesson.section === 'turtle') {
            clearTurtle();
            initTurtle();
            pyodide.runPython('_turtle_log = []');
        }

        // Set user input directly as a python global to avoid injection escaping issues
        pyodide.globals.set("js_input_string", inputStr);
        
        // Capture stdout and inject stdin
        pyodide.runPython(`
import sys
import io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
sys.stdin = io.StringIO(js_input_string)
        `);

        // Run user code
        await pyodide.runPythonAsync(code);

        // Get output
        const stdout = pyodide.runPython('sys.stdout.getvalue()');
        const stderr = pyodide.runPython('sys.stderr.getvalue()');

        let output = stdout || '';
        if (stderr) output += '\n⚠️ ' + stderr;

        outputArea.textContent = output || '(ei tulostetta)';

        // Validate
        const validateResult = lesson.validate(output);
        if (validateResult === true) {
            // Calculate stars
            let stars = 3;
            if (hintUsed) stars = Math.min(stars, 2);
            if (attempts > 3) stars = Math.min(stars, 1);

            // Save progress
            const key = lesson.slug || lesson.id;
            if (!lessonStars[key] || stars > lessonStars[key]) {
                lessonStars[key] = stars;
            }
            completedLessons[key] = true;
            saveProgress();
            updateProgressBar();
            buildSidebar();

            // Show success
            resultBox.className = 'result-box success';
            resultBox.innerHTML = `
                ${lesson.successMsg}
                <span class="result-stars">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</span>
            `;
            resultBox.classList.remove('hidden');

            // Confetti + Fanfare!
            launchConfetti();
            playFanfare();

        } else {
            const failMsg = typeof validateResult === 'string' ? validateResult : lesson.failMsg;
            resultBox.className = 'result-box fail';
            resultBox.innerHTML = failMsg;
            resultBox.classList.remove('hidden');
        }

    } catch (err) {
        let errorMsg = err.message || String(err);
        // Make Python errors more kid-friendly
        if (errorMsg.includes('SyntaxError')) {
            errorMsg = '❌ Kirjoitusvirhe koodissa! Tarkista sulkeet, lainausmerkit ja sisennykset.\n\n' + errorMsg;
        } else if (errorMsg.includes('NameError')) {
            errorMsg = '❌ Tuntematon sana! Tarkista että muuttujan nimi on kirjoitettu oikein.\n\n' + errorMsg;
        } else if (errorMsg.includes('IndentationError')) {
            errorMsg = '❌ Sisennysongelma! Käytä 4 välilyöntiä tai tabulaattoria.\n\n' + errorMsg;
        } else {
            errorMsg = '❌ Virhe: ' + errorMsg;
        }
        outputArea.textContent = errorMsg;
    }
}

// ── Lesson Audio Playback ──
function playLessonAudio() {
    const lesson = LESSONS[currentLesson];
    const btn = document.getElementById('btn-listen');

    // If already playing, stop
    if (lessonAudio && !lessonAudio.paused) {
        lessonAudio.pause();
        lessonAudio.currentTime = 0;
        btn.textContent = '🔊 Kuuntele ohje';
        return;
    }

    const audioSrc = `audio/lesson-${lesson.id}.mp3`;
    lessonAudio = new Audio(audioSrc);

    btn.textContent = '⏹️ Pysäytä';

    lessonAudio.addEventListener('ended', () => {
        btn.textContent = '🔊 Kuuntele ohje';
    });

    lessonAudio.addEventListener('error', () => {
        btn.textContent = '🔊 Kuuntele ohje';
    });

    lessonAudio.play().catch(() => {
        btn.textContent = '🔊 Kuuntele ohje';
    });
}

function stopLessonAudio() {
    if (lessonAudio) {
        lessonAudio.pause();
        lessonAudio.currentTime = 0;
        lessonAudio = null;
    }
    const btn = document.getElementById('btn-listen');
    if (btn) btn.textContent = '🔊 Kuuntele ohje';
}

// ── Fanfare Sound Effect ──
function playFanfare() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();

        // Triumphant fanfare notes: C5 E5 G5 C6 (major chord arpeggio)
        const notes = [
            { freq: 523.25, start: 0.0,  dur: 0.15 },  // C5
            { freq: 659.25, start: 0.12, dur: 0.15 },  // E5
            { freq: 783.99, start: 0.24, dur: 0.15 },  // G5
            { freq: 1046.50, start: 0.36, dur: 0.4 },   // C6 (held longer)
        ];

        notes.forEach(n => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.value = n.freq;

            gain.gain.setValueAtTime(0, ctx.currentTime + n.start);
            gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + n.start + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.start + n.dur);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + n.start);
            osc.stop(ctx.currentTime + n.start + n.dur + 0.05);
        });

        // Close context after fanfare finishes
        setTimeout(() => ctx.close(), 1500);
    } catch (e) {
        // Audio not supported — no problem, just skip
    }
}

// ── Confetti Effect ──
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#e2b714', '#00d26a', '#4fc3f7', '#b388ff', '#ff6b6b', '#ff9800'];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 10
        });
    }

    let frame = 0;
    const maxFrames = 150;

    function animate() {
        if (frame >= maxFrames) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 1 - (frame / maxFrames);
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();

            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05;
            p.rotation += p.rotSpeed;
        });

        frame++;
        requestAnimationFrame(animate);
    }

    animate();
}

// ── Tab key support and Paste prevention ──
document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = this.selectionStart;
                const end = this.selectionEnd;
                this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
                this.selectionStart = this.selectionEnd = start + 4;
            }
        });

        // Estetään koodin liittäminen (paste), jotta oppilaat kirjoittavat itse
        editor.addEventListener('paste', function(e) {
            e.preventDefault();
            const outputArea = document.getElementById('output-area');
            if (outputArea) {
                outputArea.textContent = '⚠️ Koodikoulussa koodi pitää kirjoittaa itse, jotta se tarttuu sormiin! Liittäminen (paste) on estetty.';
                outputArea.className = '';
                
                // Show result box as fail
                const resultBox = document.getElementById('result-box');
                if (resultBox) {
                    resultBox.className = 'result-box fail';
                    resultBox.innerHTML = 'Koodin kopioiminen on estetty! Kirjoitathan koodin itse. ✨';
                    resultBox.classList.remove('hidden');
                }
            }
        });
    }
});

// ── Sidebar Resize ──
(function initSidebarResize() {
    const sidebar = document.getElementById('sidebar');
    const handle = document.querySelector('.sidebar-resize-handle');
    if (!sidebar || !handle) return;

    const savedWidth = localStorage.getItem('koodikoulu_sidebar_width');
    if (savedWidth) {
        document.documentElement.style.setProperty('--sidebar-w', savedWidth + 'px');
    }

    let isResizing = false;

    handle.addEventListener('mousedown', (e) => {
        isResizing = true;
        handle.classList.add('resizing');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        const newWidth = Math.max(200, Math.min(e.clientX, window.innerWidth * 0.5));
        document.documentElement.style.setProperty('--sidebar-w', newWidth + 'px');
    });

    document.addEventListener('mouseup', () => {
        if (!isResizing) return;
        isResizing = false;
        handle.classList.remove('resizing');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        const width = document.documentElement.style.getPropertyValue('--sidebar-w');
        localStorage.setItem('koodikoulu_sidebar_width', parseInt(width));
    });
})();

// ── Start! ──
initPyodide();
