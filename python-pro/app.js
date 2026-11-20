// Python Pro - App Engine
// Based on Metamatic Koodikoulu, adapted for advanced Python course

let pyodide = null;
let currentLesson = 0;
let lessonStars = {};
let completedLessons = {};
let hintUsed = false;
let attempts = 0;

// Initialize Pyodide
async function initPyodide() {
    try {
        pyodide = await loadPyodide();
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('app').classList.remove('hidden');
        loadProgress();
        buildSidebar();
        updateProgressBar();
    } catch (err) {
        document.querySelector('.loading-content p').textContent =
            'Virhe ladattaessa Python-ympäristöä. Yritä päivittää sivu.';
    }
}

function loadProgress() {
    try {
        const savedStars = localStorage.getItem('python_pro_stars');
        const savedCompleted = localStorage.getItem('python_pro_completed');
        if (savedStars) lessonStars = JSON.parse(savedStars);
        if (savedCompleted) completedLessons = JSON.parse(savedCompleted);
    } catch (e) {}
}

function saveProgress() {
    localStorage.setItem('python_pro_stars', JSON.stringify(lessonStars));
    localStorage.setItem('python_pro_completed', JSON.stringify(completedLessons));
}

// Section divider config: maps section property to display label
const SECTION_LABELS = {
    'moduulit': '📦 Moduulit & Paketit',
    'virheet': '🔧 Virheidenkäsittely',
    'tiedostot': '📁 Tiedostot & Data',
    'tietorakenteet': '🧩 Edistyneet Tietorakenteet',
    'kirjastot': '🌐 Kirjastot & APIt',
    'edistynyt_oop': '🎮 Edistynyt OOP',
    'lopputyo': '🏆 Lopputyö'
};

function buildSidebar() {
    const list = document.getElementById('lesson-list');
    list.innerHTML = '';
    let currentSection = null;

    LESSONS.forEach((lesson, i) => {
        // Check if this lesson starts a new section
        if (lesson.section && lesson.section !== currentSection) {
            currentSection = lesson.section;
            const divider = document.createElement('li');
            divider.className = 'section-divider';
            const label = SECTION_LABELS[lesson.section] || lesson.section;
            divider.innerHTML = `<span class="section-label">${label}</span>`;
            list.appendChild(divider);
        }

        const li = document.createElement('li');
        li.onclick = () => goToLesson(i);

        const isCompleted = completedLessons[lesson.id];
        if (isCompleted) li.classList.add('completed');
        if (i === currentLesson) li.classList.add('active');

        const stars = lessonStars[lesson.id] || 0;
        const starDisplay = isCompleted ? '⭐'.repeat(stars) : '';

        li.innerHTML = `
            <span class="lesson-num">${lesson.id}</span>
            <span class="lesson-name">${lesson.icon} ${lesson.title}</span>
            <span class="lesson-stars">${starDisplay}</span>
        `;
        list.appendChild(li);
    });
}

function updateProgressBar() {
    const completed = Object.keys(completedLessons).length;
    const total = LESSONS.length;
    const pct = Math.round((completed / total) * 100);

    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').textContent = `${completed}/${total} suoritettu`;

    const totalStars = Object.values(lessonStars).reduce((a, b) => a + b, 0);
    document.getElementById('total-stars').textContent = totalStars;
}

function goToLesson(index) {
    currentLesson = index;
    hintUsed = false;
    attempts = 0;

    const lesson = LESSONS[index];

    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('lesson-view').classList.remove('hidden');

    document.getElementById('lesson-badge').textContent = `Tehtävä ${lesson.id} / ${LESSONS.length}`;
    document.getElementById('lesson-title').textContent = `${lesson.icon} ${lesson.title}`;
    document.getElementById('lesson-description').textContent = lesson.description;
    document.getElementById('theory-section').innerHTML = lesson.theory;
    document.getElementById('challenge-text').innerHTML = lesson.challenge;
    document.getElementById('code-editor').value = lesson.starterCode;
    document.getElementById('output-area').textContent = '';
    document.getElementById('hint-box').classList.add('hidden');
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('result-box').className = 'hidden';

    // Nav buttons
    document.getElementById('btn-prev').style.display = index === 0 ? 'none' : 'inline-block';
    const nextBtn = document.getElementById('btn-next');
    nextBtn.textContent = index === LESSONS.length - 1 ? '🏆 Valmis!' : 'Seuraava ▶';

    buildSidebar();
}

function startFirstLesson() { goToLesson(0); }

function prevLesson() {
    if (currentLesson > 0) goToLesson(currentLesson - 1);
}

function nextLesson() {
    if (currentLesson < LESSONS.length - 1) goToLesson(currentLesson + 1);
}

function showHint() {
    const lesson = LESSONS[currentLesson];
    const hintBox = document.getElementById('hint-box');
    hintBox.innerHTML = `💡 <strong>Vihje:</strong> ${lesson.hint}`;
    hintBox.classList.remove('hidden');
    hintUsed = true;
}

function resetCode() {
    document.getElementById('code-editor').value = LESSONS[currentLesson].starterCode;
    document.getElementById('output-area').textContent = '';
    document.getElementById('hint-box').classList.add('hidden');
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('result-box').className = 'hidden';
}

async function runCode() {
    const code = document.getElementById('code-editor').value;
    const outputEl = document.getElementById('output-area');
    const resultBox = document.getElementById('result-box');

    outputEl.textContent = '';
    resultBox.classList.add('hidden');
    resultBox.className = 'hidden';

    attempts++;

    try {
        // Capture stdout
        pyodide.runPython(`
import sys, io
sys.stdout = io.StringIO()
`);

        await pyodide.runPythonAsync(code);

        const output = pyodide.runPython('sys.stdout.getvalue()');
        outputEl.textContent = output;

        // Validate
        const lesson = LESSONS[currentLesson];
        const success = lesson.validate(output);

        if (success) {
            let stars = lesson.maxStars || 3;
            if (hintUsed) stars = Math.min(stars, 2);
            if (attempts > 3) stars = Math.min(stars, 1);

            // Only update if better
            const prevStars = lessonStars[lesson.id] || 0;
            if (stars > prevStars) lessonStars[lesson.id] = stars;
            completedLessons[lesson.id] = true;
            saveProgress();
            updateProgressBar();
            buildSidebar();

            resultBox.className = 'result-box success';
            resultBox.innerHTML = `${'⭐'.repeat(stars)} ${lesson.successMsg}`;
            resultBox.classList.remove('hidden');
            launchConfetti();
        } else {
            resultBox.className = 'result-box fail';
            resultBox.innerHTML = lesson.failMsg;
            resultBox.classList.remove('hidden');
        }

    } catch (err) {
        let msg = err.message || String(err);
        // Extract the last line of Python error
        const lines = msg.split('\n').filter(l => l.trim());
        const lastLine = lines[lines.length - 1] || msg;

        // Kid-friendly error messages
        if (lastLine.includes('SyntaxError')) {
            outputEl.textContent = `❌ Syntaksivirhe! Tarkista kirjoitusvirheet, sulut ja kaksoispisteet.\n\n${lastLine}`;
        } else if (lastLine.includes('NameError')) {
            outputEl.textContent = `❌ Tuntematon nimi! Tarkista muuttujien nimet.\n\n${lastLine}`;
        } else if (lastLine.includes('IndentationError')) {
            outputEl.textContent = `❌ Sisennysongelma! Tarkista välilyönnit rivin alussa.\n\n${lastLine}`;
        } else if (lastLine.includes('TypeError')) {
            outputEl.textContent = `❌ Tyypin virhe! Tarkista tietotyypit (teksti vs numero).\n\n${lastLine}`;
        } else if (lastLine.includes('AttributeError')) {
            outputEl.textContent = `❌ Attribuuttivirhe! Tarkista olion metodit ja ominaisuudet.\n\n${lastLine}`;
        } else {
            outputEl.textContent = `❌ Virhe: ${lastLine}`;
        }
    }
}

function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#b388ff', '#00d26a', '#4fc3f7', '#e2b714', '#ff6b6b', '#ff80ab'];
    const particles = [];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            rot: Math.random() * 360,
            rv: (Math.random() - 0.5) * 8
        });
    }

    let frame = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rot * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.rv;
            p.vy += 0.05;
        });
        frame++;
        if (frame < 150) requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    draw();
}

// Tab key support in editor
document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = editor.selectionStart;
                const end = editor.selectionEnd;
                editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
                editor.selectionStart = editor.selectionEnd = start + 4;
            }
        });
    }
});

// Start
initPyodide();
