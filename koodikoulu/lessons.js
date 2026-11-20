// =============================================
//  METAMATIC KOODIKOULU - Tehtävät
//  166 tehtävää: 10x Perus + 6x Ekspertti (AI) + 10x Syventävä + 20x Operaattorit + 20x Merkkijonot + 20x Listat + 20x Sanakirjat + 20x Funktiot + 20x Ehtolauseet + 20x Silmukat
// =============================================

const LESSONS = [
    // ═══════════════════════════════════════
    //  PERUS-OSIO (Tehtävät 1-10)
    // ═══════════════════════════════════════

    // ─────────────────────────────────────
    // TEHTÄVÄ 1: Ensimmäinen ohjelma    // ─────────────────────────────────────
    {
    id: 1,


        legacyId: 1,
        title: "Hei Maailma! 👋",
        slug: "perus-hei-maailma",
        icon: "👋",
        description: "Kirjoita ensimmäinen Python-ohjelmasi! Jokainen ohjelmoija aloittaa tästä.",
        theory: `
            <h4>📚 Mitä on ohjelmointi?</h4>
            <p>Ohjelmointi tarkoittaa ohjeiden kirjoittamista tietokoneelle. Python on ohjelmointikieli jolla voit käskeä tietokonetta tekemään asioita!</p>
            <p>Komento <code>print()</code> tulostaa tekstiä ruudulle. Teksti laitetaan lainausmerkkien sisään:</p>
            <pre><code>print("Hei maailma!")</code></pre>
            <p>Voit tulostaa mitä tahansa tekstiä:</p>
            <pre><code>print("Minun nimeni on Python!")
print("Olen 10-vuotias!")</code></pre>
        `,
        challenge: "Kirjoita ohjelma joka tulostaa: <strong>Hei maailma!</strong>",
        starterCode: `# Kirjoita koodisi tähän alle:\nprint()`,
        hint: "Kirjoita lainausmerkkien sisään teksti 'Hei maailma!' - muista iso H-kirjain!",
        validate: function(output) {
            return output.trim().toLowerCase().includes("hei maailma");
        },
        successMsg: "Mahtavaa! 🎉 Kirjoitit ensimmäisen ohjelmasi!",
        failMsg: "Hmm, tarkista että tulostuksessa lukee 'Hei maailma!' - muista lainausmerkit!",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 2: Muuttujat    // ─────────────────────────────────────
    {
    id: 2,


        legacyId: 2,
        title: "Muuttujat - Tiedon tallentaminen 📦",
        slug: "perus-muuttujat-tiedon-tallentaminen",
        icon: "📦",
        description: "Opi tallentamaan tietoa muuttujiin - tietokoneen muistilaatikkoihin!",
        theory: `
            <h4>📚 Mikä on muuttuja?</h4>
            <p>Muuttuja on kuin nimetty laatikko johon voit tallentaa tietoa. Pythonissa muuttuja luodaan näin:</p>
            <pre><code>nimi = "Masa"
ika = 10</code></pre>
            <p>Voit käyttää muuttujia print-komennossa:</p>
            <pre><code>nimi = "Masa"
print("Hei, minun nimeni on", nimi)</code></pre>
            <p><strong>Huom!</strong> Teksti (string) laitetaan lainausmerkkeihin, mutta numerot eivät tarvitse niitä!</p>
        `,
        challenge: "Luo muuttuja <code>nimi</code> johon tallennat oman nimesi, ja muuttuja <code>ika</code> johon tallennat ikäsi. Tulosta ne sitten!",
        starterCode: `# Tallenna nimesi ja ikäsi muuttujiin:\nnimi = \nika = \n\n# Tulosta ne:\nprint("Nimeni on", nimi)\nprint("Olen", ika, "vuotta vanha")`,
        hint: "Kirjoita nimesi lainausmerkkeihin: nimi = \"Masa\" ja ikä numerona: ika = 10",
        validate: function(output) {
            const lower = output.toLowerCase();
            return lower.includes("nimeni on") && lower.includes("vuotta vanha");
        },
        successMsg: "Hienoa! 📦 Nyt osaat tallentaa tietoa muuttujiin!",
        failMsg: "Tarkista että molemmat muuttujat (nimi ja ika) on määritelty ja tulostettu.",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 3: Laskutoimitukset    // ─────────────────────────────────────
    {
    id: 3,


        legacyId: 3,
        title: "Python-laskin 🔢",
        slug: "perus-python-laskin",
        icon: "🔢",
        description: "Python osaa laskea! Opi käyttämään Pythonia laskimena.",
        theory: `
            <h4>📚 Laskutoimitukset</h4>
            <p>Python osaa laskea kaikki peruslaskutoimitukset:</p>
            <pre><code>print(5 + 3)    # Yhteenlasku = 8
print(10 - 4)   # Vähennyslasku = 6
print(3 * 7)    # Kertolasku = 21
print(20 / 4)   # Jakolasku = 5.0</code></pre>
            <p>Voit myös laskea muuttujilla:</p>
            <pre><code>hinta = 15
maara = 3
yhteensa = hinta * maara
print("Yhteensä:", yhteensa, "euroa")</code></pre>
            <p><strong>Vinkki:</strong> <code>#</code>-merkillä voit kirjoittaa kommentteja jotka eivät vaikuta ohjelmaan!</p>
        `,
        challenge: "Laske kuinka monta tuntia on viikossa! Tallenna tulos muuttujaan <code>tunnit</code> ja tulosta se. (Vinkki: 7 päivää × 24 tuntia)",
        starterCode: `# Laske tunnit viikossa:\npaivat = 7\ntunteja_paivassa = 24\n\ntunnit = \n\nprint("Viikossa on", tunnit, "tuntia!")`,
        hint: "Kerro päivät tunneilla: tunnit = paivat * tunteja_paivassa",
        validate: function(output) {
            return output.includes("168");
        },
        successMsg: "Oikein! 🔢 168 tuntia viikossa! Olet Python-laskumestari!",
        failMsg: "Tarkista kertolasku. Viikossa on 7 × 24 = 168 tuntia.",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 4: Ehtolauseet (if/else)    // ─────────────────────────────────────
    {
    id: 4,


        legacyId: 4,
        title: "Jos... niin! 🚦",
        slug: "perus-jos-niin",
        icon: "🚦",
        description: "Opi tekemään päätöksiä koodissa - if ja else lauseet!",
        theory: `
            <h4>📚 Ehtolauseet</h4>
            <p>Ehtolauseilla tietokone voi tehdä päätöksiä! <code>if</code> tarkoittaa "jos" ja <code>else</code> tarkoittaa "muuten":</p>
            <pre><code>ika = 10

if ika >= 18:
    print("Olet aikuinen!")
else:
    print("Olet lapsi!")</code></pre>
            <p><strong>Tärkeää:</strong> Koodin sisennys (4 välilyöntiä) kertoo mikä koodi kuuluu ehdon sisälle!</p>
            <p>Vertailuoperaattorit:</p>
            <pre><code>==  tarkoittaa "on yhtä suuri"
!=  tarkoittaa "ei ole yhtä suuri"
>   tarkoittaa "suurempi kuin"
<   tarkoittaa "pienempi kuin"
>=  tarkoittaa "suurempi tai yhtä suuri"</code></pre>
        `,
        challenge: "Muuttuja <code>pisteet</code> on 75. Kirjoita ehtolause: jos pisteet on 50 tai enemmän, tulosta <strong>\"Läpäisit!\"</strong>, muuten tulosta \"Yritä uudelleen!\"",
        starterCode: `pisteet = 75\n\n# Kirjoita if-lause tähän:\nif pisteet >= 50:\n    print()\nelse:\n    print()`,
        hint: "Kirjoita print()-komentojen sisään tekstit: \"Läpäisit!\" ja \"Yritä uudelleen!\"",
        validate: function(output) {
            const lower = output.toLowerCase();
            return lower.includes("läpäisit") || lower.includes("lapaisit");
        },
        successMsg: "Loistavaa! 🚦 Nyt koodisi osaa tehdä päätöksiä!",
        failMsg: "Tarkista ehtolause. pisteet on 75, joka on >= 50, joten pitäisi tulostaa 'Läpäisit!'",
        maxStars: 3
    },

    // ═══════════════════════════════════════
    //  UUDET PERUSHARJOITUKSET (5-10)
    // ═══════════════════════════════════════

    // ─────────────────────────────────────
    // TEHTÄVÄ 5: Kysy käyttäjältä (input)    // ─────────────────────────────────────
    {
    id: 5,

        section: "syote",
        title: "Kuka olet? (input) 💬",
        slug: "syote-kuka-olet-input",
        icon: "💬",
        description: "Opitaan kysymään käyttäjältä tekstiä!",
        requiresInput: true,
        defaultInput: "Eliel",
        theory: `
            <h4>📚 Mitä on input?</h4>
            <p><code>input()</code>-komennolla voit kysyä tietokoneen käyttäjältä asioita, ja tallentaa vastauksen muuttujaan.</p>
            <pre><code>nimi = input("Mikä on nimesi? ")
print("Hei", nimi)</code></pre>
            <p>Tässä Koodikoulussa input-vastaukset kirjoitetaan erilliseen "Syöte"-laatikkoon koodieditorin alle. Kokeile!</p>
        `,
        challenge: "Koodi kysyy nimeä. Kirjoita tulostus joka sanoo \"Hauska tutustua, Nimi!\"",
        starterCode: `nimi = input("Mikä on nimesi? ")\n\n# Kirjoita tulostus tähän:\nprint()`,
        hint: "Käytä muuttujaa nimi. Esim: print(\"Hauska tutustua,\", nimi)",
        validate: function(output) {
            const lower = output.toLowerCase();
            return lower.includes("hauska tutustua") && lower.includes("eliel");
        },
        successMsg: "Loistavaa! Osaat nyt kysyä käyttäjältä syötettä 💬",
        failMsg: "Varmista että tulostat 'Hauska tutustua, ' ja perään käyttäjän antaman nimen (joka on oletuksena 'Eliel' syötekentässä).",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 6: Tekstin yhdistely    // ─────────────────────────────────────
    {
    id: 6,


        legacyId: 5,
        title: "Tekstin taikuus ✨",
        slug: "syote-tekstin-taikuus",
        icon: "✨",
        description: "Opi yhdistelemään tekstiä ja muuttujia - tee oma esittelykortti!",
        theory: `
            <h4>📚 Tekstin yhdistäminen</h4>
            <p>Pythonissa voit yhdistää tekstejä <code>+</code>-merkillä:</p>
            <pre><code>etunimi = "Masa"
sukunimi = "Meikäläinen"
koko_nimi = etunimi + " " + sukunimi
print(koko_nimi)  # Masa Meikäläinen</code></pre>
            <p>Vielä helpompaa on käyttää <strong>f-stringiä</strong>! Laita <code>f</code> ennen lainausmerkkiä ja muuttujat aaltosulkuihin:</p>
            <pre><code>nimi = "Masa"
ika = 10
print(f"Hei, olen {nimi} ja olen {ika}-vuotias!")</code></pre>
            <p>F-stringi on ohjelmoijan paras kaveri - sillä voit sekoittaa tekstiä ja muuttujia helposti! 🎯</p>
        `,
        challenge: "Täytä muuttujat ja käytä f-stringiä tulostaaksesi esittelykortin muodossa: <strong>\"Hei! Olen [nimi], [ika] vuotta. Lempiväri: [vari]\"</strong>",
        starterCode: `# Täytä omat tietosi:\nnimi = \nika = \nvari = \n\n# Tulosta esittelykortti f-stringillä:\nprint(f"Hei! Olen {nimi}, {ika} vuotta. Lempiväri: {vari}")`,
        hint: "Täytä muuttujat: nimi = \"Masa\", ika = 10, vari = \"sininen\" - muista lainausmerkit tekstin ympärille!",
        validate: function(output) {
            const lower = output.toLowerCase();
            return lower.includes("hei! olen") && lower.includes("vuotta") && lower.includes("lempiväri:") || lower.includes("lempivari:");
        },
        successMsg: "Hienoa! ✨ F-stringit ovat todella kätevä työkalu - käytät niitä paljon jatkossa!",
        failMsg: "Tarkista että kaikki kolme muuttujaa (nimi, ika, vari) on täytetty oikein.",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 7: Matikkapeli    // ─────────────────────────────────────
    {
    id: 7,


        legacyId: 6,
        title: "Matikkapeli 🎯",
        slug: "syote-matikkapeli",
        icon: "🎯",
        description: "Yhdistä laskeminen ja ehtolauseet - tee matikkapeli joka tarkistaa vastauksen!",
        theory: `
            <h4>📚 Yhdistä taitojasi!</h4>
            <p>Nyt kun osaat muuttujat, laskutoimitukset ja if/else-lauseet, voit yhdistää ne!</p>
            <pre><code># Tee laskutehtävä:
oikea_vastaus = 7 + 5
pelaajan_vastaus = 12

if pelaajan_vastaus == oikea_vastaus:
    print("Oikein!")
else:
    print("Väärin! Oikea vastaus oli", oikea_vastaus)</code></pre>
            <p>Huomaa: <code>==</code> vertailee kahta arvoa (onko sama?), mutta <code>=</code> tallentaa arvon muuttujaan!</p>
            <p><strong>int()</strong> muuttaa tekstin numeroksi: <code>int("42")</code> → <code>42</code></p>
        `,
        challenge: "Tee ohjelma joka laskee oikean vastauksen kertolaskuun ja vertaa sitä pelaajan vastaukseen. Tulosta onko vastaus oikein vai väärin!",
        starterCode: `# Kertolaskupeli!\nluku1 = 8\nluku2 = 7\n\n# Laske oikea vastaus:\noikea = luku1 * luku2\n\n# Pelaajan vastaus:\nvastaus = 56\n\n# Tarkista - kirjoita if/else:\nif vastaus == oikea:\n    print()\nelse:\n    print()`,
        hint: "Tulosta esim. print(\"Oikein! 🎉\") ja print(\"Väärin! Oikea vastaus on\", oikea)",
        validate: function(output) {
            const lower = output.toLowerCase();
            return lower.includes("oikein");
        },
        successMsg: "Mahtavaa! 🎯 Osaat jo yhdistää laskentaa ja päätöksentekoa!",
        failMsg: "8 × 7 = 56, joka on sama kuin vastaus. Tarkista if-lause ja print-komento.",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 8: Listat perusteet    // ─────────────────────────────────────
    {
    id: 8,


        legacyId: 7,
        title: "Listat - tiedon kokoelmat 📋",
        slug: "syote-listat-tiedon-kokoelmat",
        icon: "📋",
        description: "Opi käyttämään listoja - tallenna monta asiaa yhteen muuttujaan!",
        theory: `
            <h4>📚 Mikä on lista?</h4>
            <p>Lista on kuin reppusi johon mahtuu monta tavaraa! Se luodaan hakasulkeilla:</p>
            <pre><code>hedelmat = ["omena", "banaani", "kirsikka"]
print(hedelmat[0])  # omena (ensimmäinen!)
print(hedelmat[1])  # banaani
print(hedelmat[2])  # kirsikka</code></pre>
            <p><strong>Tärkeää:</strong> Listan indeksointi alkaa <strong>nollasta</strong>! Ensimmäinen alkio on [0], toinen on [1], jne.</p>
            <p>Voit myös selvittää listan pituuden:</p>
            <pre><code>print(len(hedelmat))  # 3</code></pre>
            <p>Ja lisätä uusia alkioita:</p>
            <pre><code>hedelmat.append("mango")
print(len(hedelmat))  # 4</code></pre>
        `,
        challenge: "Luo lista lempieläimistäsi (vähintään 3). Tulosta ensimmäinen ja viimeinen eläin, sekä montako eläintä listassa on!",
        starterCode: `# Luo lista lempieläimistäsi:\nelaimet = [\n    \n]\n\n# Tulosta ensimmäinen eläin (indeksi 0):\nprint("Ensimmäinen:", elaimet[0])\n\n# Tulosta viimeinen eläin (indeksi -1 = viimeinen!):\nprint("Viimeinen:", elaimet[-1])\n\n# Tulosta montako eläintä listassa on:\nprint("Yhteensä:", len(elaimet), "eläintä")`,
        hint: "Lisää eläimiä listaan lainausmerkeissä pilkuilla erotettuna: \"koira\", \"kissa\", \"hamsteri\"",
        validate: function(output) {
            const lower = output.toLowerCase();
            return lower.includes("ensimmäinen:") && lower.includes("viimeinen:") && lower.includes("eläintä") || lower.includes("elaint");
        },
        successMsg: "Hienoa! 📋 Listat ovat ohjelmoinnin peruspilari - käytät niitä jatkuvasti!",
        failMsg: "Tarkista että listassa on vähintään 3 eläintä lainausmerkeissä, pilkuilla erotettuna.",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 9: Boolean-logiikka    // ─────────────────────────────────────
    {
    id: 9,


        legacyId: 8,
        title: "Totta vai tarua? 🔍",
        slug: "syote-totta-vai-tarua",
        icon: "🔍",
        description: "Opi Boolean-logiikkaa - tietokoneen tapa ajatella totta ja tarua!",
        theory: `
            <h4>📚 Boolean - True ja False</h4>
            <p>Tietokone ajattelee kaiken joko <strong>True</strong> (totta) tai <strong>False</strong> (tarua). Tätä kutsutaan Boolean-logiikaksi:</p>
            <pre><code>print(5 > 3)      # True  (5 on suurempi kuin 3)
print(10 == 20)   # False (10 ei ole 20)
print(7 != 7)     # False (7 ON sama kuin 7)</code></pre>
            <p>Voit yhdistellä ehtoja sanoilla <code>and</code> (ja) ja <code>or</code> (tai):</p>
            <pre><code>ika = 10
onko_oppilas = True

# Molemmat pitää olla totta:
if ika < 18 and onko_oppilas:
    print("Olet koululainen!")

# Riittää että toinen on totta:
if ika > 5 or ika < 100:
    print("Ikä on järkevä!")</code></pre>
            <p><code>not</code> kääntää arvon päinvastaiseksi: <code>not True</code> → <code>False</code></p>
        `,
        challenge: "Tee henkilökortti-tarkistaja! Tarkista onko henkilö 1) tarpeeksi vanha (vähintään 15) JA 2) onko hänellä lupa (True/False).",
        starterCode: `# Henkilökortti-tarkistaja:\nika = 16\non_lupa = True\n\n# Tarkista molemmat ehdot AND-sanalla:\nif ika >= 15 and on_lupa:\n    print()\nelse:\n    print()`,
        hint: "Tulosta esim. \"Pääsy sallittu! ✅\" jos molemmat ehdot täyttyvät, muuten \"Pääsy estetty! ❌\"",
        validate: function(output) {
            const lower = output.toLowerCase();
            return (lower.includes("sallittu") || lower.includes("pääsy") || lower.includes("paasy")) && !lower.includes("estetty");
        },
        successMsg: "Loistavaa! 🔍 Boolean-logiikka on kaiken ohjelmoinnin perusta - true ja false!",
        failMsg: "ikä on 16 (≥ 15) ja on_lupa on True → molemmat ehdot täyttyvät! Tarkista print-komento.",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 10: Funktiot intro    // ─────────────────────────────────────
    {
    id: 10,


        legacyId: 9,
        title: "Omat komennot - funktiot 🔧",
        slug: "syote-omat-komennot-funktiot",
        icon: "🔧",
        description: "Opi tekemään omia komentoja eli funktioita! Tämä on ohjelmoinnin supervoima.",
        theory: `
            <h4>📚 Mikä on funktio?</h4>
            <p>Funktio on oma komento jonka voit nimetä ja käyttää uudelleen! Se luodaan sanalla <code>def</code>:</p>
            <pre><code>def tervehdi(nimi):
    print(f"Moi {nimi}! Tervetuloa!")

tervehdi("Masa")    # Moi Masa! Tervetuloa!
tervehdi("Liisa")   # Moi Liisa! Tervetuloa!</code></pre>
            <p>Funktio voi myös <strong>palauttaa</strong> arvon sanalla <code>return</code>:</p>
            <pre><code>def tuplaa(luku):
    return luku * 2

tulos = tuplaa(5)
print(tulos)  # 10</code></pre>
            <p><strong>Miksi funktiot?</strong> Kirjoitat koodin kerran ja käytät sitä monta kertaa! Kuin oma resepti keittiössä. 🍳</p>
        `,
        challenge: "Tee funktio <code>laske_hinta</code> joka ottaa tuotteen hinnan ja kappalemäärän, ja palauttaa kokonaishinnan. Testaa kahdella eri tuotteella!",
        starterCode: `# Tee funktio joka laskee kokonaishinnan:\ndef laske_hinta(hinta, maara):\n    return \n\n# Testaa funktiota:\nkirjat = laske_hinta(15, 3)\nkynät = laske_hinta(2, 10)\n\nprint(f"Kirjat maksavat: {kirjat} euroa")\nprint(f"Kynät maksavat: {kynät} euroa")\nprint(f"Yhteensä: {kirjat + kynät} euroa")`,
        hint: "return hinta * maara — funktio kertoo hinnan ja määrän ja palauttaa tuloksen!",
        validate: function(output) {
            return output.includes("45") && output.includes("20") && output.includes("65");
        },
        successMsg: "Mahtavaa! 🔧 Funktiot ovat ohjelmoinnin supervoima - osaat nyt tehdä omia komentoja!",
        failMsg: "Tarkista return-lause. 15 × 3 = 45 ja 2 × 10 = 20, yhteensä 65.",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 11: Miniprojekti - Tietokilpailu    // ─────────────────────────────────────
    {
    id: 11,


        legacyId: 10,
        title: "Tietokilpailu 🏆",
        slug: "syote-tietokilpailu",
        icon: "🏆",
        description: "Yhdistä kaikki opittu ja rakenna oma tietokilpailu! Tämä on oikea ohjelma!",
        theory: `
            <h4>📚 Kaikki yhteen!</h4>
            <p>Nyt osaat: muuttujat, laskemisen, if/else, tekstit, listat, boolean-logiikan ja funktiot! Yhdistetään ne:</p>
            <pre><code># Tietokilpailukysymys:
kysymys = "Mikä on Suomen pääkaupunki?"
vaihtoehdot = ["Turku", "Helsinki", "Tampere"]
oikea = "Helsinki"

# Näytä vaihtoehdot:
for i, vaihtoehto in enumerate(vaihtoehdot, 1):
    print(f"{i}. {vaihtoehto}")

# Tarkista vastaus:
vastaus = "Helsinki"
if vastaus == oikea:
    print("Oikein! 🎉")</code></pre>
            <p>Tietokilpailu yhdistää kaiken: listoja, ehtolauseita, funktioita ja tulostusta! 🧩</p>
        `,
        challenge: "Täydennä tietokilpailu lisäämällä oikeat vastaukset ja pistelaskuri. Kilpailussa on 3 kysymystä — laske montako oikein!",
        starterCode: `# 🏆 TIETOKILPAILU!\nprint("=== TIETOKILPAILU ===")\nprint()\n\n# Kysymykset, vaihtoehdot ja oikeat vastaukset:\nkysymykset = [\n    "Mikä on Suomen pääkaupunki?",\n    "Montako jalkaa hämähäkillä on?",\n    "Mikä planeetta on lähinnä aurinkoa?"\n]\n\nvaihtoehdot = [\n    ["Turku", "Helsinki", "Oulu"],\n    ["6", "8", "10"],\n    ["Venus", "Mars", "Merkurius"]\n]\n\n# Täytä oikeat vastaukset:\noikeat = [\n    ,\n    ,\n    \n]\n\n# Pelaajan vastaukset (indeksit 0-2):\nvastaukset = ["Helsinki", "8", "Merkurius"]\n\npisteet = 0\n\nfor i in range(3):\n    print(f"Kysymys {i+1}: {kysymykset[i]}")\n    print(f"  Vastaus: {vastaukset[i]}")\n    if vastaukset[i] == oikeat[i]:\n        print("  ✅ Oikein!")\n        pisteet = pisteet + 1\n    else:\n        print(f"  ❌ Väärin! Oikea: {oikeat[i]}")\n    print()\n\nprint(f"Tuloksesi: {pisteet}/3 pistettä!")`,
        hint: "Täytä oikeat vastaukset: \"Helsinki\", \"8\", \"Merkurius\" - samassa järjestyksessä kuin kysymykset!",
        validate: function(output) {
            return output.includes("3/3") && output.includes("TIETOKILPAILU") && output.includes("Oikein");
        },
        successMsg: "🏆 HUIPPUA! Rakensit kokonaisen ohjelman! Osaat nyt Python-ohjelmoinnin perusteet - olet valmis eksperttitehtäviin!",
        failMsg: "Tarkista oikeat vastaukset: Helsinki, 8, Merkurius",
        maxStars: 3
    },

    // ═══════════════════════════════════════
    //  TURTLE-OSIO (4 tehtävää)
    // ═══════════════════════════════════════

    // ─────────────────────────────────────
    // TEHTÄVÄ 12: Piirrä 3 eri viivaa 📏
    // ─────────────────────────────────────
    {
        id: 12,
        section: "turtle",
        title: "Piirrä 3 eri viivaa 📏",
        slug: "turtle-piirra-3-eri-viivaa",
        icon: "📏",
        description: "Opi liikuttamaan turtlea ja piirtämään viivoja eri suuntiin.",
        theory: `<h4>📚 Komentoja</h4><p><code>forward(pituus)</code> piirtää viivan eteenpäin.<br><code>left(kulma)</code> kääntää konnaa vasemmalle (astetta).<br><code>right(kulma)</code> kääntää oikealle.<br><code>backward(pituus)</code> piirtää taaksepäin.</p><p>Tällä koodilla piirretään kolme viivaa eri suuntiin:</p><pre><code>forward(100)\nleft(90)\nforward(50)\nleft(90)\nforward(75)</code></pre>`,
        challenge: "Kirjoita koodi, joka piirtää <strong>kolme eri mittaista viivaa eri suuntiin</strong>. Kokeile eri lukuja!",
        starterCode: `# Piirrä 3 eri viivaa\n`,
        hint: "Kokeile: forward(100), left(90), forward(50), left(90), forward(75)",
        validate: function(output) {
            const log = getTurtleLog();
            const lines = countLines(log);
            if (lines < 3) return "Piirsit vain " + lines + " viivaa. Tarvitaan 3!";
            const distances = log.filter(l => l.type === 'line').map(l => Math.round(l.dist));
            const diffs = new Set(distances.map(d => Math.round(d / 10) * 10));
            if (diffs.size < 2) return "Viivojen pitää olla eri pituisia! Kokeile forward(100), forward(50) jne.";
            const angles = log.filter(l => l.type === 'line').map(l => l.angle % 360);
            const uniqueAngles = new Set(angles.map(a => Math.round(a / 5) * 5));
            if (uniqueAngles.size < 2) return "Viivojen pitää mennä eri suuntiin! Kokeile kääntää left() tai right().";
            return true;
        },
        successMsg: "Mahtavaa! 📏 Piirsit 3 eri viivaa eri suuntiin!",
        failMsg: "",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 13: Piirrä suorakulma ﹂    // ─────────────────────────────────────
    {
    id: 13,
        section: "turtle",
        title: "Piirrä suorakulma ﹂",
        slug: "turtle-piirra-suorakulma",
        icon: "﹂",
        description: "Opi kääntämään turtlea ja piirtämään suorakulma.",
        theory: `<h4>📚 Kääntyminen</h4><p><code>left(90)</code> kääntää 90 astetta vasemmalle.<br><code>right(90)</code> kääntää oikealle.</p><p>Suorakulma = kaksi viivaa 90° kulmassa:</p><pre><code>forward(80)\nleft(90)\nforward(80)</code></pre>`,
        challenge: "Piirrä kaksi viivaa 90 asteen kulmassa (L-kirjain).",
        starterCode: `# Piirrä suorakulma:\n`,
        hint: "Esim: forward(80) + left(90) + forward(80)",
        validate: function(output) {
            const log = getTurtleLog();
            const lines = countLines(log);
            if (lines < 2) return "Piirsit vain " + lines + " viivaa. Tarvitaan kaksi viivaa!";
            const angles = log.filter(l => l.type === 'line').map(l => l.angle % 360);
            const rounded = angles.map(a => Math.round(a / 10) * 10);
            const hasTurn = new Set(rounded).size >= 2;
            if (!hasTurn) return "Viivojen pitää olla eri suunnissa! Käytä left(90) kääntyäksesi.";
            return true;
        },
        successMsg: "Hienoa! ﹂ Piirsit suorakulman!",
        failMsg: "",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 14: Piirrä neliö 🔲    // ─────────────────────────────────────
    {
    id: 14,
        section: "turtle",
        title: "Piirrä neliö 🔲",
        slug: "turtle-piirra-nelio",
        icon: "🔲",
        description: "Käytä silmukkaa neliön piirtämiseen.",
        theory: `<h4>📚 Neliö silmukalla</h4><p>Neliössä on 4 samanpituista sivua ja 90° kulmat. Silmukka toistaa samaa 4 kertaa:</p><pre><code>for i in range(4):\n    forward(80)\n    left(90)</code></pre>`,
        challenge: "Piirrä neliö silmukalla: 4 kertaa forward() ja left(90).",
        starterCode: `# Piirrä neliö:\n`,
        hint: "for i in range(4): forward(80); left(90)",
        validate: function(output) {
            const log = getTurtleLog();
            const lines = countLines(log);
            if (lines < 4) return "Piirsit vain " + lines + " viivaa. Neliöön tarvitaan 4 sivua!";
            const angles = log.filter(l => l.type === 'line').map(l => Math.round(l.angle % 360 / 10) * 10);
            const has90 = angles.some(a => a === 90 || a === 270 || a === -90);
            if (!has90) return "Neliön kulmat ovat 90 astetta. Käytä left(90) tai right(90)!";
            return true;
        },
        successMsg: "Mahtavaa! 🔲 Piirsit neliön!",
        failMsg: "",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 15: Piirrä kolmio 🔺    // ─────────────────────────────────────
    {
    id: 15,
        section: "turtle",
        title: "Piirrä kolmio 🔺",
        slug: "turtle-piirra-kolmio",
        icon: "🔺",
        description: "Kolmion kulma on 120 astetta.",
        theory: `<h4>📚 Kolmio</h4><p>Kolmion jokainen kulma on 120° (180 - 60). Toistetaan 3 kertaa:</p><pre><code>for i in range(3):\n    forward(80)\n    left(120)</code></pre>`,
        challenge: "Piirrä kolmio silmukalla: 3 kertaa forward() ja left(120).",
        starterCode: `# Piirrä kolmio:\n`,
        hint: "for i in range(3): forward(80); left(120)",
        validate: function(output) {
            const log = getTurtleLog();
            const lines = countLines(log);
            if (lines < 3) return "Piirsit vain " + lines + " viivaa. Kolmioon tarvitaan 3 sivua!";
            const angles = log.filter(l => l.type === 'line').map(l => Math.round(l.angle % 360 / 10) * 10);
            const has120 = angles.some(a => a === 120 || a === 240 || a === -120);
            if (!has120) return "Kolmion kulmat ovat 120 astetta. Käytä left(120)!";
            return true;
        },
        successMsg: "Hienoa! 🔺 Piirsit kolmion!",
        failMsg: "",
        maxStars: 3
    },
    // ═══════════════════════════════════════
    //  EKSPERTTI-OSIO (Tehtävät 16-21)
    //  Silmukat, AI ja edistynyt logiikka
    // ═══════════════════════════════════════

    // ─────────────────────────────────────
    // TEHTÄVÄ 16: Silmukat (for-loop)
    // ─────────────────────────────────────
    {
        id: 16,


        legacyId: 11,
        section: "ekspertti",
        title: "Toisto - for-silmukka 🔁",
        slug: "ekspertti-toisto-for-silmukka",
        icon: "🔁",
        description: "Opi toistamaan komentoja automaattisesti silmukoilla!",
        theory: `
            <h4>📚 For-silmukka</h4>
            <p>Silmukalla voit toistaa koodia monta kertaa ilman että kirjoitat sitä uudelleen:</p>
            <pre><code># Tulosta numerot 1-5:
for i in range(1, 6):
    print(i)</code></pre>
            <p><code>range(1, 6)</code> tarkoittaa numerot 1, 2, 3, 4, 5 (huom: 6 ei ole mukana!)</p>
            <p>Voit myös käydä listan läpi:</p>
            <pre><code>hedelmät = ["omena", "banaani", "appelsiini"]
for hedelmä in hedelmät:
    print("Tykkään:", hedelmä)</code></pre>
        `,
        challenge: "Käytä for-silmukkaa tulostaaksesi kertotaulun 5:lle (1×5, 2×5, ... 10×5). Tulosta muodossa: <strong>\"1 x 5 = 5\"</strong>",
        starterCode: `# Tulosta 5:n kertotaulu:\nfor i in range(1, 11):\n    tulos = i * 5\n    print()`,
        hint: "Käytä print-komentoa näin: print(i, \"x 5 =\", tulos)",
        validate: function(output) {
            return output.includes("5 = 5") && output.includes("10") && output.includes("50");
        },
        successMsg: "Mahtavaa! 🔁 Silmukat ovat ohjelmoinnin supervoimia!",
        failMsg: "Tarkista print-komento. Muoto pitäisi olla: 1 x 5 = 5",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 17: Listat ja AI-data    // ─────────────────────────────────────
    {
    id: 17,


        legacyId: 12,
        section: "ekspertti",
        title: "Listat - AI:n muisti 🧠",
        slug: "ekspertti-listat-ain-muisti",
        icon: "🧠",
        description: "Tekoäly tarvitsee dataa! Opi käyttämään listoja - ne ovat AI:n muisti.",
        theory: `
            <h4>📚 Listat ja tekoäly</h4>
            <p>Tekoäly oppii <strong>datasta</strong> - se on kuin faktojen lista! Pythonissa data tallennetaan usein listoihin:</p>
            <pre><code>arvosanat = [9, 7, 10, 8, 6, 9]

# Kuinka monta arvosanaa?
print(len(arvosanat))  # 6

# Paras arvosana?
print(max(arvosanat))  # 10

# Keskiarvo?
print(sum(arvosanat) / len(arvosanat))</code></pre>
            <p>Tekoäly tekee juuri näin - analysoi suuria määriä dataa löytääkseen kaavoja! 🤖</p>
        `,
        challenge: "Sinulla on lista lämpötiloja viikon ajalta. Laske ja tulosta: montako päivää datassa on, <strong>korkein</strong> lämpötila, <strong>matalin</strong> lämpötila ja <strong>keskiarvo</strong>.",
        starterCode: `# Viikon lämpötilat (celsius):\nlampotilat = [22, 25, 19, 28, 24, 21, 26]\n\n# Laske tiedot käyttäen len(), max(), min() ja sum():\npaivia = \nkorkein = \nmatalin = \nkeskiarvo = \n\n# Tulosta tulokset:\nprint("Päiviä:", paivia)\nprint("Korkein:", korkein, "°C")\nprint("Matalin:", matalin, "°C")\nprint("Keskiarvo:", round(keskiarvo, 1), "°C")`,
        hint: "Käytä funktioita: len(lampotilat) laskee montako, max() korkein, min() matalin, sum()/len() keskiarvo!",
        validate: function(output) {
            return output.includes("7") && output.includes("28") && output.includes("19");
        },
        successMsg: "Hienoa! 🧠 Juuri näin tekoäly analysoi dataa - laskee tilastoja!",
        failMsg: "Suorita koodi sellaisenaan ja tutki tulokset!",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 18: Sanakirjat ja chatbot    // ─────────────────────────────────────
    {
    id: 18,


        legacyId: 13,
        section: "ekspertti",
        title: "Oma Chatbot 🤖",
        slug: "ekspertti-oma-chatbot",
        icon: "🤖",
        description: "Rakenna oma yksinkertainen chatbot Pythonilla! Tämä on tekoälyn perusidea.",
        theory: `
            <h4>📚 Sanakirjat ja chatbotit</h4>
            <p>Chatbot on ohjelma joka vastaa viesteihin. Yksinkertainen chatbot käyttää <strong>sanakirjaa</strong> (dictionary) vastaustensa tallentamiseen:</p>
            <pre><code>vastaukset = {
    "hei": "Moi! Miten menee?",
    "mitä kuuluu": "Kiitos hyvää!",
    "kuka olet": "Olen robotti 🤖"
}

viesti = "hei"
print(vastaukset[viesti])</code></pre>
            <p>Oikeat tekoälychatbotit (kuten ChatGPT) käyttävät samaa ideaa, mutta miljoonilla esimerkeillä! 🚀</p>
        `,
        challenge: "Täydennä chatbotin vastaukset sanakirjaan. Lisää ainakin vastaukset viesteille: <strong>\"hei\"</strong>, <strong>\"nimi\"</strong> ja <strong>\"heippa\"</strong>.",
        starterCode: `# Rakenna chatbot!\n# Täytä sanakirjaan vastaukset kolmelle viestille:\nvastaukset = {\n    "hei": ,\n    "nimi": ,\n    "heippa": \n}\n\n# Testaa chatbottia:\nfor viesti in ["hei", "nimi", "heippa"]:\n    print("Sinä:", viesti)\n    print("Botti:", vastaukset[viesti])\n    print()`,
        hint: "Kirjoita vastaukset lainausmerkkeihin, esim: \"hei\": \"Moi! Kiva jutella!\" - muista pilkut vastausten väliin!",
        validate: function(output) {
            const lower = output.toLowerCase();
            return lower.includes("sinä:") && lower.includes("botti:") && output.split("Botti:").length >= 3;
        },
        successMsg: "Mahtavaa! 🤖 Rakensit oman chatbotin! Oikeat AI:t toimivat samalla periaatteella!",
        failMsg: "Tarkista että sanakirjassa on vastaukset kaikille kolmelle viestille.",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 19: Random ja AI-arvaukset    // ─────────────────────────────────────
    {
    id: 19,


        legacyId: 14,
        section: "ekspertti",
        title: "AI Arvauspeli 🎲",
        slug: "ekspertti-ai-arvauspeli",
        icon: "🎲",
        description: "Tee peli jossa tekoäly yrittää arvata ajatuksesi! Opi satunnaisuudesta.",
        theory: `
            <h4>📚 Satunnaisuus ja tekoäly</h4>
            <p>Tekoäly käyttää usein <strong>satunnaislukuja</strong> oppiessaan uusia asioita. Pythonissa satunnaislukuja saa <code>random</code>-kirjastolla:</p>
            <pre><code>import random

# Satunnainen luku 1-10 väliltä:
luku = random.randint(1, 10)
print(luku)

# Satunnainen valinta listasta:
lista = ["kivi", "paperi", "sakset"]
valinta = random.choice(lista)
print(valinta)</code></pre>
            <p>Tekoäly aloittaa usein <strong>arvaamalla satunnaisesti</strong> ja oppii vähitellen tekemään parempia arvauksia! Tätä kutsutaan <strong>koneoppimiseksi</strong>. 🧪</p>
        `,
        challenge: "Tee ohjelma jossa AI yrittää arvata lempivärisi! AI tekee 5 arvausta satunnaisesta värilistasta. Tulosta jokainen arvaus ja lopuksi tulosta montako arvausta AI teki.",
        starterCode: `import random\n\n# AI:n tuntemat värit:\nvarit = ["punainen", "sininen", "vihreä", "keltainen", "violetti", "oranssi"]\n\n# Sinun lempivärisi:\nlempivari = "sininen"\n\nprint("🤖 AI yrittää arvata lempivärisi!")\nprint()\n\n# AI tekee 5 arvausta:\nfor i in range(1, 6):\n    # Valitse satunnainen väri listasta random.choice()-funktiolla:\n    arvaus = \n    print(f"Arvaus {i}: {arvaus}")\n    \n    # Jos arvaus on sama kuin lempivärisi, tulosta viesti ja lopeta:\n    if arvaus == lempivari:\n        print("🎉 AI arvasi oikein!")\n        break\n\nprint("\\n🤖 AI teki arvauksensa!")`,
        hint: "Käytä random.choice(varit) valitaksesi satunnaisen värin listasta!",
        validate: function(output) {
            return output.includes("Arvaus 1:") && output.includes("AI");
        },
        successMsg: "Siistiä! 🎲 Näin tekoäly aloittaa oppimisen - ensin arvaa, sitten oppii!",
        failMsg: "Suorita koodi ja katso miten satunnaisuus toimii!",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 20: Funktiot ja AI-luokitin    // ─────────────────────────────────────
    {
    id: 20,


        legacyId: 15,
        section: "ekspertti",
        title: "AI-luokittelija 🏷️",
        slug: "ekspertti-ai-luokittelija",
        icon: "🏷️",
        description: "Rakenna tekoäly joka osaa luokitella asioita! Tämä on oikean AI:n perustaito.",
        theory: `
            <h4>📚 Funktiot ja luokittelu</h4>
            <p><strong>Funktio</strong> on nimetty koodinpätkä jonka voit kutsua uudelleen:</p>
            <pre><code>def tervehdi(nimi):
    print("Hei", nimi, "!")

tervehdi("Masa")   # Hei Masa !
tervehdi("Liisa")  # Hei Liisa !</code></pre>
            <p><strong>Luokittelu</strong> on AI:n perustaito: se katsoo dataa ja päättää mihin luokkaan se kuuluu.</p>
            <p>Esimerkiksi AI voi luokitella lämpötilan: alle 0 = "jäätävä", 0-15 = "viileä", 15-25 = "lämmin", yli 25 = "kuuma"</p>
        `,
        challenge: "Tee funktio <code>luokittele_lampotila</code> joka ottaa lämpötilan ja palauttaa luokan. Testaa sitä useilla arvoilla!",
        starterCode: `# AI-luokittelija lämpötiloille:\n# Täydennä funktio! Palauta oikea luokka lämpötilan mukaan.\ndef luokittele_lampotila(asteet):\n    if asteet < 0:\n        return \n    elif asteet < 15:\n        return \n    elif asteet < 25:\n        return \n    else:\n        return \n\n# Testaa AI-luokittelijaa:\ntesti_lampotilat = [-5, 8, 20, 32, 0, 14, 25]\n\nprint("🤖 AI Lämpötilaluokittelija")\nprint("=" * 30)\n\nfor lampo in testi_lampotilat:\n    luokka = luokittele_lampotila(lampo)\n    print(f"{lampo}°C → {luokka}")`,
        hint: "Palauta teksti jokaiselle: esim. return \"🥶 Jäätävä\" kun alle 0, \"🧥 Viileä\" kun alle 15, \"😊 Lämmin\" kun alle 25, muuten \"🔥 Kuuma\"",
        validate: function(output) {
            return output.includes("Jäätävä") && output.includes("Kuuma") && output.includes("Lämmin");
        },
        successMsg: "Huippua! 🏷️ Rakensit oikean AI-luokittelijan! Näin oikeat AI:tkin toimivat!",
        failMsg: "Suorita koodi ja tarkista että kaikki luokat tulostuvat.",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 21: AI tekstitunnistin    // ─────────────────────────────────────
    {
    id: 21,


        legacyId: 16,
        section: "ekspertti",
        title: "AI Tunnetunnistin 😊😡",
        slug: "ekspertti-ai-tunnetunnistin",
        icon: "😊",
        description: "Rakenna tekoäly joka tunnistaa onko viesti iloinen vai surullinen! Tämä on oikeaa NLP:tä (Natural Language Processing)!",
        theory: `
            <h4>📚 Sentimenttianalyysi</h4>
            <p><strong>Sentimenttianalyysi</strong> tarkoittaa tekstin tunteen tunnistamista. Se on yksi tekoälyn tärkeimmistä taidoista!</p>
            <p>Yksinkertainen tapa: lasketaan positiivisia ja negatiivisia sanoja tekstissä:</p>
            <pre><code># Positiiviset sanat:
pos = ["hyvä", "kiva", "mahtava", "rakastan"]

# Negatiiviset sanat:
neg = ["huono", "kamala", "vihaan", "tylsä"]

# Laske montako positiivista/negatiivista
# sanaa tekstissä on → päätä tunne!</code></pre>
            <p>Oikeat AI:t kuten ChatGPT tekevät tämän miljardeilla sanoilla - mutta idea on sama! 🧠</p>
        `,
        challenge: "Täydennä AI tunnetunnistin joka analysoi viestejä ja päättää onko tunne positiivinen 😊, negatiivinen 😡 vai neutraali 😐.",
        starterCode: `# 🤖 AI Tunnetunnistin\n\n# Positiiviset sanat:\npositiiviset = ["hyvä", "kiva", "mahtava", "rakastan", "ihana", \n                "loistava", "hauska", "paras", "onnellinen", "siisti"]\n\n# Negatiiviset sanat:\nnegatiiviset = ["huono", "kamala", "vihaan", "tylsä", "surullinen",\n                "ärsyttävä", "kauhea", "inhottava", "paha", "tyhmä"]\n\ndef analysoi_tunne(teksti):\n    sanat = teksti.lower().split()\n    pos_pisteet = 0\n    neg_pisteet = 0\n    \n    # Käy kaikki sanat läpi ja laske pisteet:\n    for sana in sanat:\n        # Jos sana on positiivisten listassa, lisää pos_pisteet:\n        \n        # Jos sana on negatiivisten listassa, lisää neg_pisteet:\n        \n    \n    # Päätä tunne pisteiden perusteella:\n    if pos_pisteet > neg_pisteet:\n        return "😊 Positiivinen", pos_pisteet, neg_pisteet\n    elif neg_pisteet > pos_pisteet:\n        return "😡 Negatiivinen", pos_pisteet, neg_pisteet\n    else:\n        return "😐 Neutraali", pos_pisteet, neg_pisteet\n\n# Testaa AI:ta!\nviestit = [\n    "Tämä peli on mahtava ja hauska",\n    "Kamala ja tylsä päivä",\n    "Rakastan tätä kiva juttua",\n    "Ihan ok päivä tänään",\n    "Huono ja kauhea elokuva"\n]\n\nprint("🤖 AI TUNNETUNNISTIN")\nprint("=" * 40)\n\nfor viesti in viestit:\n    tunne, pos, neg = analysoi_tunne(viesti)\n    print(f"\\n📝 \\"{viesti}\\"") \n    print(f"   Tulos: {tunne} (pos:{pos} neg:{neg})")`,
        hint: "Käytä if-lauseita: if sana in positiiviset: pos_pisteet += 1 ja sama negatiivisille!",
        validate: function(output) {
            return output.includes("Positiivinen") && output.includes("Negatiivinen") && output.includes("TUNNETUNNISTIN");
        },
        successMsg: "🏆 HUIPPUA! Rakensit oikean AI tunnetunnistimen! Tämä on samaa teknologiaa jota käytetään oikeissa sovelluksissa! Olet nyt Python & AI -koodari! 🐍🤖",
        failMsg: "Suorita koodi ja tutki miten tunnetunnistin analysoi viestejä!",
        maxStars: 3
    },

    // ========================================
    // 🚀 SYVENTÄVÄT TEHTÄVÄT (17-26)
    // Laajemmat Python-ominaisuudet
    // ========================================

    {
    id: 22,


        legacyId: 16,
        title: "While-silmukka 🔄",
        slug: "ekspertti-while-silmukka",
        icon: "🔄",
        section: "syventava",
        description: "Opi while-silmukka — toista niin kauan kuin ehto on totta!",
        theory: `
            <h3>🔄 While-silmukka</h3>
            <p><code>for</code>-silmukka toistaa tietyn määrän kertoja. Mutta mitä jos et tiedä etukäteen montako kertaa tarvitaan?</p>
            <pre><code># While toistaa niin kauan kuin ehto on True
luku = 1
while luku <= 5:
    print(luku)
    luku += 1   # TÄRKEÄÄ: muista kasvattaa!

# Varo ikuista silmukkaa! 
# Jos unohdat luku += 1, ohjelma ei lopu koskaan! 💀</code></pre>
            <p>While on kuin ovenvartija: "Pääsethän sisään, kunhan salasana on oikein!" 🚪</p>
            <p><strong>Vinkki:</strong> <code>while True</code> + <code>break</code> on tehokas yhdistelmä:</p>
            <pre><code>while True:
    vastaus = input("Sano 'lopeta': ")
    if vastaus == "lopeta":
        break   # Hyppää ulos silmukasta!</code></pre>
        `,
        challenge: "Rakenna laskuri joka tuplaa luvun (×2) kunnes se ylittää 1000. Tulosta joka askel!",
        starterCode: `# 🔄 Tuplaaja — while-silmukka\n\nluku = 1\naskeleet = 0\n\nprint("🔄 TUPLAAJA")\nprint("Aloitetaan luvusta 1, tuplataan kunnes yli 1000!")\nprint("=" * 40)\n\n# Jatka niin kauan kuin luku on korkeintaan 1000:\nwhile luku <= 1000:\n    print(f"Askel {askeleet}: {luku}")\n    # Tuplaa luku (kerro kahdella):\n    \n    # Kasvata askeleet yhdellä:\n    \n\nprint(f"\\n🏁 Lopputulos: {luku}")\nprint(f"📊 Askeleita tarvittiin: {askeleet}")`,
        hint: "Tuplaa: luku = luku * 2 (tai luku *= 2). Kasvata: askeleet += 1",
        validate: function(output) {
            return output.includes("TUPLAAJA") && output.includes("1024") && output.includes("Askeleita");
        },
        successMsg: "🎉 Mahtavaa! While-silmukka on hallussa! Tuplaaminen on eksponentiaalista kasvua — 10 askeleella pääsee jo yli tuhannen! 📈",
        failMsg: "Tuplaa luku joka kierroksella: luku = luku * 2 ja muista askeleet += 1!",
        detailedHelp: `
            <h4>Askel askeleelta — While-silmukka</h4>
            <p>Koodissa on kaksi tyhjää kohtaa jotka sinun pitää täydentää. Molemmat ovat <code>while</code>-silmukan sisällä:</p>
            <ol>
                <li><strong>Rivi "Tuplaa luku"</strong> — tähän kirjoita:
                    <div class="step-line">luku = luku * 2</div>
                    Tämä tarkoittaa: ota nykyinen luku ja kerro se kahdella. Eli 1→2→4→8→16... Voit myös kirjoittaa <code>luku *= 2</code>, se tekee saman asian lyhyemmin.
                </li>
                <li><strong>Rivi "Kasvata askeleet"</strong> — tähän kirjoita:
                    <div class="step-line">askeleet += 1</div>
                    Tämä kasvattaa askellaskuria yhdellä joka kierroksella. <code>+=</code> tarkoittaa "lisää tähän". Eli <code>askeleet += 1</code> on sama kuin <code>askeleet = askeleet + 1</code>.
                </li>
            </ol>
            <p>⚠️ <strong>Tärkeää:</strong> Molemmat rivit pitää sisentää (tabilla tai 4 välilyöntiä) koska ne ovat while-silmukan sisällä!</p>
        `,
        maxStars: 3
    },

    {
    id: 23,


        legacyId: 16,
        title: "Merkkijonometodit ✂️",
        slug: "syventava-merkkijonometodit",
        icon: "✂️",
        section: "syventava",
        description: "Opi muokkaamaan tekstiä Pythonin merkkijonometodeilla!",
        theory: `
            <h3>✂️ Merkkijonometodit</h3>
            <p>Pythonissa merkkijonoilla (string) on paljon hyödyllisiä <strong>metodeja</strong> — komentoja jotka muokkaavat tekstiä:</p>
            <pre><code>teksti = "Hei Maailma"

teksti.upper()        # → "HEI MAAILMA"
teksti.lower()        # → "hei maailma"
teksti.replace("Hei", "Moi")  # → "Moi Maailma"
teksti.count("a")     # → 3 (kolme a-kirjainta)
teksti.startswith("Hei")  # → True
teksti.endswith("!")   # → False
teksti.split(" ")     # → ["Hei", "Maailma"]
"-".join(["a","b","c"])  # → "a-b-c"</code></pre>
            <p>Nämä ovat kuin Sveitsin armeijan linkkuveitsi teksteille! 🔪</p>
        `,
        challenge: "Rakenna tekstinkäsittelyohjelma joka analysoi lauseen ja näyttää eri muokkaukset!",
        starterCode: `# ✂️ Tekstityöpaja\n\nlause = "Python On Todella Hauska Ohjelmointikieli"\n\nprint("✂️ TEKSTITYÖPAJA")\nprint("=" * 40)\nprint(f"Alkuperäinen: {lause}")\nprint()\n\n# 1. Muuta isoiksi kirjaimiksi:\nprint(f"ISOT KIRJAIMET: {lause.upper()}")\n\n# 2. Muuta pieniksi kirjaimiksi:\nprint(f"pienet kirjaimet: {lause.lower()}")\n\n# 3. Laske montako kirjainta 'a' löytyy (pienellä):\na_maara = lause.lower().count("a")\nprint(f"A-kirjaimia: {a_maara}")\n\n# 4. Korvaa "Python" sanalla "Koodaus" käyttäen .replace():\nkorvattu = # Täydennä tähän!\nprint(f"Korvattu: {korvattu}")\n\n# 5. Pilko lause sanoiksi käyttäen .split():\nsanat = # Täydennä tähän!\nprint(f"Sanat listana: {sanat}")\nprint(f"Sanoja yhteensä: {len(sanat)}")\n\n# 6. Yhdistä sanat takaisin käyttäen " 🐍 ".join():\nyhdistetty = " 🐍 ".join(sanat)\nprint(f"Yhdistetty: {yhdistetty}")`,
        hint: "Korvaa: lause.replace(\"Python\", \"Koodaus\"). Pilko: lause.split(\" \")",
        validate: function(output) {
            return output.includes("TEKSTITYÖPAJA") && output.includes("Koodaus") && output.includes("Sanoja yhteensä");
        },
        successMsg: "✂️ Loistavaa! Merkkijonometodit ovat Python-koodarin tärkeimpiä työkaluja! Nyt osaat muokata tekstejä kuin ammattilainen! 🎩",
        failMsg: "Käytä .replace('Python', 'Koodaus') ja .split(' ') — ne tekevät taikoja!",
        detailedHelp: `
            <h4>Askel askeleelta — Merkkijonometodit</h4>
            <p>Koodissa on kaksi tyhjää kohtaa merkitty kommentilla "Täydennä tähän!":</p>
            <ol>
                <li><strong>Rivi <code>korvattu = </code></strong> — tähän kirjoita:
                    <div class="step-line">korvattu = lause.replace("Python", "Koodaus")</div>
                    <code>.replace("vanha", "uusi")</code> korvaa tekstissä yhden sanan toisella. Tässä vaihdetaan "Python" sanaksi "Koodaus".
                </li>
                <li><strong>Rivi <code>sanat = </code></strong> — tähän kirjoita:
                    <div class="step-line">sanat = lause.split(" ")</div>
                    <code>.split(" ")</code> pilkkoo tekstin listaksi välilyöntien kohdalta. Esim. "Hei Maailma" → ["Hei", "Maailma"].
                </li>
            </ol>
            <p>💡 Muista: metodin kutsussa piste tulee muuttujan jälkeen: <code>lause.metodi()</code></p>
        `,
        maxStars: 3
    },

    {
    id: 24,


        legacyId: 16,
        title: "Listan viipalointi 🍕",
        slug: "syventava-listan-viipalointi",
        icon: "🍕",
        section: "syventava",
        description: "Opi ottamaan listasta palasia — slicing on Pythonin supervoimia!",
        theory: `
            <h3>🍕 Listan viipalointi (slicing)</h3>
            <p>Pythonissa voit ottaa listasta "viipaleita" eli osia käyttäen <code>[alku:loppu]</code> -syntaksia:</p>
            <pre><code>kirjaimet = ["a", "b", "c", "d", "e", "f"]

kirjaimet[1:4]    # → ["b", "c", "d"]  (indeksi 1-3)
kirjaimet[:3]     # → ["a", "b", "c"]  (alusta 3 ekaa)
kirjaimet[3:]     # → ["d", "e", "f"]  (indeksistä 3 loppuun)
kirjaimet[-2:]    # → ["e", "f"]       (2 viimeistä)
kirjaimet[::2]    # → ["a", "c", "e"]  (joka toinen)
kirjaimet[::-1]   # → ["f","e","d","c","b","a"] (käänteinen!)</code></pre>
            <p>Ajattele sliceja kuin pitsanleikkausta: valitset mistä mihin leikataan! 🍕</p>
        `,
        challenge: "Käytä listan viipalointia eri tavoilla ja tulosta tulokset!",
        starterCode: `# 🍕 Listan viipalointi\n\nnumerot = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]\n\nprint("🍕 VIIPALOINTI")\nprint(f"Koko lista: {numerot}")\nprint("=" * 40)\n\n# 1. Kolme ensimmäistä (käytä [:3]):\nprint(f"3 ekaa: {numerot[:3]}")\n\n# 2. Kolme viimeistä (käytä [-3:]):\nprint(f"3 vikaa: {numerot[-3:]}")\n\n# 3. Indeksistä 2 indeksiin 6 (käytä [2:6]):\nkeskelta = # Täydennä!\nprint(f"Keskeltä: {keskelta}")\n\n# 4. Joka toinen luku (käytä [::2]):\njoka_toinen = # Täydennä!\nprint(f"Joka toinen: {joka_toinen}")\n\n# 5. Lista käänteisessä järjestyksessä (käytä [::-1]):\nkaannetty = # Täydennä!\nprint(f"Käännetty: {kaannetty}")\n\n# 6. Joka kolmas alkaen indeksistä 1 (käytä [1::3]):\njoka_kolmas = numerot[1::3]\nprint(f"Joka kolmas (alkaen 20): {joka_kolmas}")\n\nprint("\\n🎯 Viipalointi on Pythonin supervoimia!")`,
        hint: "Keskeltä: numerot[2:6]. Joka toinen: numerot[::2]. Käännetty: numerot[::-1]",
        validate: function(output) {
            return output.includes("VIIPALOINTI") && output.includes("Käännetty") && output.includes("[100,") || output.includes("[100, ");
        },
        successMsg: "🍕 Fantastista! Slicing on yksi Pythonin tehokkaimmista ominaisuuksista! Pääset sillä käsiksi mihin tahansa osaan datasta! 🔥",
        failMsg: "numerot[2:6] antaa keskeltä, numerot[::2] joka toisen, numerot[::-1] kääntää!",
        detailedHelp: `
            <h4>Askel askeleelta — Listan viipalointi</h4>
            <p>Koodissa on kolme tyhjää kohtaa merkitty "Täydennä!". Jokainen käyttää <strong>slicing</strong>-syntaksia <code>[alku:loppu:askel]</code>:</p>
            <ol>
                <li><strong>Rivi <code>keskelta = </code></strong> — tähän kirjoita:
                    <div class="step-line">keskelta = numerot[2:6]</div>
                    Tämä ottaa alkiot indekseistä 2, 3, 4 ja 5 (eli 30, 40, 50, 60). Huomaa: loppu-indeksi 6 ei tule mukaan!
                </li>
                <li><strong>Rivi <code>joka_toinen = </code></strong> — tähän kirjoita:
                    <div class="step-line">joka_toinen = numerot[::2]</div>
                    <code>[::2]</code> tarkoittaa: koko lista, mutta ota vain joka toinen. Kolmas luku (2) on "askel" eli hyppy.
                </li>
                <li><strong>Rivi <code>kaannetty = </code></strong> — tähän kirjoita:
                    <div class="step-line">kaannetty = numerot[::-1]</div>
                    <code>[::-1]</code> kääntää listan! Askel -1 tarkoittaa "kulje takaperin".
                </li>
            </ol>
            <p>💡 Muista slicing-kaava: <code>[alku:loppu:askel]</code>. Jos jokin osa puuttuu, Python käyttää oletusta (alku=0, loppu=loppuun, askel=1).</p>
        `,
        maxStars: 3
    },

    {
    id: 25,


        legacyId: 16,
        title: "Tuple ja Set 📦",
        slug: "syventava-tuple-ja-set",
        icon: "📦",
        section: "syventava",
        description: "Opi kaksi uutta tietotyyppiä — tuple (muuttumaton lista) ja set (uniikki joukko)!",
        theory: `
            <h3>📦 Tuple ja Set</h3>
            <p>Pythonissa on listan ja sanakirjan lisäksi kaksi tärkeää tietotyyppiä:</p>
            <pre><code># TUPLE — muuttumaton lista (kaarisulut)
koordinaatti = (10, 20)
nimi_ika = ("Heikki", 45)
# Tuplea EI VOI muuttaa jälkikäteen!
# koordinaatti[0] = 5  ← VIRHE!

# Purkaminen muuttujiin:
x, y = koordinaatti  # x=10, y=20

# SET — uniikki joukko (aaltosulut)
luvut = {1, 2, 3, 2, 1}  # → {1, 2, 3} (duplikaatit pois!)
hedelmia = {"omena", "banaani", "omena"}  # → 2 uniikkia

# Set-operaatiot:
a = {1, 2, 3}
b = {2, 3, 4}
print(a & b)  # → {2, 3}    (yhteiset / leikkaus)
print(a | b)  # → {1,2,3,4} (kaikki / yhdiste)</code></pre>
        `,
        challenge: "Käytä tuplea ja settiä ratkaisemaan ongelmia — löydä uniikkeja ja yhteisiä elementtejä!",
        starterCode: `# 📦 Tuple ja Set\n\n# --- TUPLE ---\nprint("📦 TUPLE & SET")\nprint("=" * 40)\n\n# Tuple: oppilaan tiedot\noppilas = ("Liisa", 12, "6A")\nnimi, ika, luokka = oppilas  # purku!\nprint(f"Oppilas: {nimi}, {ika}v, luokka {luokka}")\n\n# Tuple listassa — koordinaatteja:\npisteet = [(0, 0), (3, 4), (6, 8)]\nfor x, y in pisteet:\n    etaisyys = (x**2 + y**2) ** 0.5\n    print(f"  Piste ({x},{y}) → etäisyys: {etaisyys:.1f}")\n\n# --- SET ---\nprint("\\n🎯 SET — uniikkien löytäminen:")\n\nkauppa_a = {"maito", "leipä", "juusto", "voi", "kananmunat"}\nkauppa_b = {"leipä", "mehu", "juusto", "omena", "voi"}\n\n# Yhteiset tuotteet (leikkaus &):\nyhteiset = # Täydennä! käytä & operaattoria\nprint(f"Molemmissa kaupoissa: {yhteiset}")\n\n# Vain kauppa A:ssa (erotus -):\nvain_a = # Täydennä! käytä - operaattoria\nprint(f"Vain kauppa A:ssa: {vain_a}")\n\n# Kaikki tuotteet yhteensä (yhdiste |):\nkaikki = # Täydennä! käytä | operaattoria\nprint(f"Kaikki tuotteet: {kaikki}")\nprint(f"Uniikkeja tuotteita: {len(kaikki)}")`,
        hint: "Yhteiset: kauppa_a & kauppa_b. Vain A: kauppa_a - kauppa_b. Kaikki: kauppa_a | kauppa_b",
        validate: function(output) {
            return output.includes("TUPLE & SET") && output.includes("Molemmissa") && output.includes("Uniikkeja tuotteita");
        },
        successMsg: "📦 Erinomaista! Tuple on turvallinen kun data ei saa muuttua, set on mahtava uniikkien löytämiseen! Nyt tunnet Pythonin kaikki perustietotyypit! 🎓",
        failMsg: "Käytä & (yhteiset), - (erotus) ja | (yhdiste) set-operaatioita!",
        detailedHelp: `
            <h4>Askel askeleelta — Tuple ja Set</h4>
            <p>Koodin yläosa (tuple-osuus) on valmis. Sinun tehtäväsi on täydentää kolme <strong>set-operaatiota</strong>:</p>
            <ol>
                <li><strong>Rivi <code>yhteiset = </code></strong> — tähän kirjoita:
                    <div class="step-line">yhteiset = kauppa_a & kauppa_b</div>
                    <code>&</code> on leikkaus-operaatio. Se palauttaa vain ne tuotteet jotka löytyvät <strong>molemmista</strong> kaupoista.
                </li>
                <li><strong>Rivi <code>vain_a = </code></strong> — tähän kirjoita:
                    <div class="step-line">vain_a = kauppa_a - kauppa_b</div>
                    <code>-</code> on erotus. Se palauttaa tuotteet jotka ovat A:ssa mutta <strong>eivät</strong> B:ssä.
                </li>
                <li><strong>Rivi <code>kaikki = </code></strong> — tähän kirjoita:
                    <div class="step-line">kaikki = kauppa_a | kauppa_b</div>
                    <code>|</code> on yhdiste. Se palauttaa <strong>kaikki</strong> uniikkien tuotteet molemmista kaupoista.
                </li>
            </ol>
            <p>💡 Ajattele näitä kuin Venn-diagrammia: & = keskiosa, - = vain vasen, | = koko alue.</p>
        `,
        maxStars: 3
    },

    {
    id: 26,


        legacyId: 16,
        title: "Virheenkäsittely 🛡️",
        slug: "syventava-virheenkasittely",
        icon: "🛡️",
        section: "syventava",
        description: "Opi käsittelemään virheitä try/except-rakenteella — ohjelmasi ei enää kaadu!",
        theory: `
            <h3>🛡️ Try / Except — Virheenkäsittely</h3>
            <p>Joskus koodi voi aiheuttaa virheen — esim. jako nollalla tai väärä tyyppi. <code>try/except</code> antaa sinun <strong>napata virheen</strong> kaatumisen sijaan:</p>
            <pre><code># Ilman try/except → ohjelma kaatuu!
# print(10 / 0)  ← ZeroDivisionError! 💥

# Try/except pelastaa:
try:
    tulos = 10 / 0
except ZeroDivisionError:
    print("Ei voi jakaa nollalla!")

# Monta virhetyyppiä:
try:
    luku = int("abc")
except ValueError:
    print("Se ei ole numero!")

# Yleinen kaappaus + finally:
try:
    # kokeillaan jotain...
    tulos = 100 / 5
except Exception as e:
    print(f"Virhe: {e}")
else:
    print(f"Onnistui: {tulos}")  # Suoritetaan JOS ei virhettä
finally:
    print("Tämä suoritetaan AINA")</code></pre>
        `,
        challenge: "Rakenna turvallinen laskin joka ei kaadu virheellisillä syötteillä!",
        starterCode: `# 🛡️ Turvallinen laskin\n\ndef turvallinen_jako(a, b):\n    """Jakaa a/b turvallisesti"""\n    try:\n        tulos = a / b\n    except ZeroDivisionError:\n        return "❌ Virhe: nollalla ei voi jakaa!"\n    else:\n        return f"✅ {a} / {b} = {tulos:.2f}"\n\ndef muunna_luvuksi(teksti):\n    """Muuntaa tekstin luvuksi turvallisesti"""\n    # Täydennä try/except joka:\n    # - yrittää: return float(teksti)\n    # - napataan ValueError: return None\n    try:\n        return float(teksti)\n    except ValueError:\n        return None\n\nprint("🛡️ TURVALLINEN LASKIN")\nprint("=" * 40)\n\n# Testaa jakoa:\nprint(turvallinen_jako(100, 3))\nprint(turvallinen_jako(50, 0))\nprint(turvallinen_jako(99, 7))\n\n# Testaa muunnosta:\nprint("\\n🔢 Muunnokset:")\ntestit = ["42", "3.14", "abc", "100", "🐍"]\nfor t in testit:\n    tulos = muunna_luvuksi(t)\n    if tulos is not None:\n        print(f"  '{t}' → {tulos} ✅")\n    else:\n        print(f"  '{t}' → Ei ole luku! ❌")\n\n# Bonus: try/except/else/finally:\nprint("\\n🎯 Koko ketju:")\ntry:\n    luku = int("42")\n    tulos = 1000 / luku\nexcept ValueError:\n    print("Virheellinen luku!")\nexcept ZeroDivisionError:\n    print("Nollajako!")\nelse:\n    print(f"Onnistui: {tulos:.1f}")\nfinally:\n    print("Laskin suljettu. 🔒")`,
        hint: "muunna_luvuksi: try: return float(teksti) except ValueError: return None",
        validate: function(output) {
            return output.includes("TURVALLINEN LASKIN") && output.includes("nollalla") && output.includes("Ei ole luku");
        },
        successMsg: "🛡️ Erinomaista! Try/except on ammattikoodarin perustyökalu — nyt ohjelmasi kestävät virheet kaatumatta! 💪",
        failMsg: "Tarkista että turvallinen_jako ja muunna_luvuksi käyttävät try/except oikein!",
        detailedHelp: `
            <h4>Askel askeleelta — Virheenkäsittely</h4>
            <p>Tässä tehtävässä koodi on <strong>lähes kokonaan valmiina</strong>! Sinun ei tarvitse lisätä paljon — tarkista vain nämä asiat:</p>
            <ol>
                <li><strong><code>muunna_luvuksi</code>-funktio</strong> — se on jo täydennetty valmiiksi:
                    <div class="step-line">try:<br>&nbsp;&nbsp;&nbsp;&nbsp;return float(teksti)<br>except ValueError:<br>&nbsp;&nbsp;&nbsp;&nbsp;return None</div>
                    <code>try</code> yrittää muuntaa tekstin luvuksi. Jos teksti on esim. "abc" tai "🐍", syntyy <code>ValueError</code> ja koodi hyppää <code>except</code>-osioon joka palauttaa <code>None</code>.
                </li>
                <li><strong>Paina vain ▶️ Suorita</strong> — koodi on valmis ajettavaksi! Se testaa:
                    <ul>
                        <li>Jakoa nollalla (turvallinen_jako)</li>
                        <li>Tekstin muuntamista luvuksi (muunna_luvuksi)</li>
                        <li>try/except/else/finally -ketjua</li>
                    </ul>
                </li>
            </ol>
            <p>💡 <code>try/except</code> on kuin turvamatto: ohjelma ei kaadu vaikka jotain menisi pieleen!</p>
        `,
        maxStars: 3
    },

    {
    id: 27,


        legacyId: 16,
        title: "List Comprehension ⚡",
        slug: "syventava-list-comprehension",
        icon: "⚡",
        section: "syventava",
        description: "Opi luomaan listoja yhdellä rivillä — Pythonin tyylikäs supervoimaominaisuus!",
        theory: `
            <h3>⚡ List Comprehension</h3>
            <p>Pythonissa voit luoda listan <strong>yhdellä rivillä</strong> käyttäen list comprehensionia:</p>
            <pre><code># Perinteinen tapa:
neliöt = []
for x in range(1, 6):
    neliöt.append(x ** 2)
# → [1, 4, 9, 16, 25]

# List comprehension — sama asia yhdellä rivillä!
neliöt = [x ** 2 for x in range(1, 6)]
# → [1, 4, 9, 16, 25]

# Ehdon kanssa (filtteri):
parilliset = [x for x in range(10) if x % 2 == 0]
# → [0, 2, 4, 6, 8]

# Muunnos + filtteri:
iso = [s.upper() for s in ["hei", "moi"] if len(s) == 3]
# → ["HEI", "MOI"]</code></pre>
            <p>Kaava: <code>[lauseke for muuttuja in iterable if ehto]</code></p>
        `,
        challenge: "Käytä list comprehensionia luodaksesi erilaisia listoja yhdellä rivillä!",
        starterCode: `# ⚡ List Comprehension\n\nprint("⚡ LIST COMPREHENSION")\nprint("=" * 40)\n\n# 1. Neliöt 1-10 (anna valmiiksi):\nneliot = [x**2 for x in range(1, 11)]\nprint(f"Neliöt 1-10: {neliot}")\n\n# 2. Parilliset luvut 1-20:\n# Täydennä: [x for x in range(1, 21) if ...]\nparilliset = # Täydennä!\nprint(f"Parilliset 1-20: {parilliset}")\n\n# 3. Sanojen pituudet:\nsanat = ["Python", "on", "paras", "kieli", "koskaan"]\n# Täydennä: [len(sana) for sana in ...]\npituudet = # Täydennä!\nprint(f"Sanat: {sanat}")\nprint(f"Pituudet: {pituudet}")\n\n# 4. Vain pitkät sanat (yli 3 kirjainta):\n# Täydennä: [sana for sana in sanat if ...]\npitkät = # Täydennä!\nprint(f"Pitkät sanat: {pitkät}")\n\n# 5. Fahrenheit → Celsius muunnos:\nfahrenheit = [32, 68, 100, 212]\n# Kaava: (f - 32) * 5/9\ncelsius = [(f - 32) * 5/9 for f in fahrenheit]\nprint(f"\\n🌡️ Fahrenheit: {fahrenheit}")\nprint(f"🌡️ Celsius: {[round(c,1) for c in celsius]}")\n\nprint("\\n⚡ Yksi rivi, paljon voimaa!")`,
        hint: "Parilliset: [x for x in range(1,21) if x % 2 == 0]. Pituudet: [len(s) for s in sanat]. Pitkät: [s for s in sanat if len(s) > 3]",
        validate: function(output) {
            return output.includes("LIST COMPREHENSION") && output.includes("Parilliset") && output.includes("Pitkät sanat") && output.includes("Celsius");
        },
        successMsg: "⚡ HUIPPUA! List comprehension on Pythonistin tavaramerkki — nyt koodisi on lyhyempää ja elegantimpaa! Tämä erottaa aloittelijan kokeneesta koodarista! 🐍",
        failMsg: "Muista kaava: [lauseke for muuttuja in lista if ehto]",
        detailedHelp: `
            <h4>Askel askeleelta — List Comprehension</h4>
            <p>Koodissa on kolme tyhjää kohtaa. Kaikissa käytetään samaa kaavaa: <code>[lauseke for muuttuja in lista if ehto]</code></p>
            <ol>
                <li><strong>Rivi <code>parilliset = </code></strong> — tähän kirjoita:
                    <div class="step-line">parilliset = [x for x in range(1, 21) if x % 2 == 0]</div>
                    Tämä luo listan luvuista 1-20, mutta ottaa mukaan vain ne joissa <code>x % 2 == 0</code> (eli parillinen). <code>%</code> on jakojäännös.
                </li>
                <li><strong>Rivi <code>pituudet = </code></strong> — tähän kirjoita:
                    <div class="step-line">pituudet = [len(s) for s in sanat]</div>
                    Tämä käy läpi <code>sanat</code>-listan ja laskee jokaisesta sanan pituuden <code>len()</code>-funktiolla.
                </li>
                <li><strong>Rivi <code>pitkät = </code></strong> — tähän kirjoita:
                    <div class="step-line">pitkät = [s for s in sanat if len(s) > 3]</div>
                    Tämä suodattaa <code>sanat</code>-listasta vain ne joiden pituus on yli 3 kirjainta.
                </li>
            </ol>
            <p>💡 Kaava: <code>[mitä for muuttuja in mistä if ehto]</code>. "if"-osa on valinnainen — ilman sitä kaikki tulevat mukaan.</p>
        `,
        maxStars: 3
    },

    {
    id: 28,


        legacyId: 16,
        title: "Luokat ja oliot 🏗️",
        slug: "syventava-luokat-ja-oliot",
        icon: "🏗️",
        section: "syventava",
        description: "Opi olio-ohjelmoinnin perusteet — luo omia tietotyyppejä class-avainsanalla!",
        theory: `
            <h3>🏗️ Luokat (class) — Olio-ohjelmointi</h3>
            <p>Luokka on kuin <strong>piirustus</strong> tai <strong>muotti</strong>. Siitä luodaan <strong>olioita</strong> (objekteja):</p>
            <pre><code>class Koira:
    def __init__(self, nimi, rotu):
        self.nimi = nimi      # attribuutti
        self.rotu = rotu
        self.energia = 100
    
    def hauku(self):          # metodi
        return f"{self.nimi}: Hau hau! 🐕"
    
    def juokse(self):
        self.energia -= 20
        return f"{self.nimi} juoksee! Energia: {self.energia}"

# Luodaan olioita:
rex = Koira("Rex", "Labradorinnoutaja")
print(rex.hauku())     # → "Rex: Hau hau! 🐕"
print(rex.juokse())    # → "Rex juoksee! Energia: 80"</code></pre>
            <p><code>self</code> viittaa aina olioon itseensä. <code>__init__</code> on erityismetodi joka ajetaan kun olio luodaan.</p>
        `,
        challenge: "Luo Pelaaja-luokka jolla on nimi, taso, kokemuspisteet ja metodeja!",
        starterCode: `# 🏗️ Luokat ja oliot — RPG-pelaaja\n\nclass Pelaaja:\n    def __init__(self, nimi):\n        self.nimi = nimi\n        self.taso = 1\n        self.xp = 0\n        self.hp = 100\n    \n    def tienaa_xp(self, maara):\n        """Lisää kokemuspisteitä ja tarkista tasokorotus"""\n        self.xp += maara\n        print(f"  ⭐ +{maara} XP! (yhteensä: {self.xp})")\n        # Jos XP >= taso * 100, nosta tasoa:\n        if self.xp >= self.taso * 100:\n            self.taso += 1\n            self.xp = 0\n            self.hp += 20\n            print(f"  🎉 TASOKOROTUS! Taso {self.taso}! HP: {self.hp}")\n    \n    def ota_vahinko(self, maara):\n        # Täydennä: vähennä hp, mutta älä anna mennä alle 0\n        # Tulosta tulos\n        self.hp = max(0, self.hp - maara)\n        print(f"  💥 -{maara} HP! (jäljellä: {self.hp})")\n    \n    def status(self):\n        # Täydennä: tulosta pelaajan tiedot\n        print(f"\\n👤 {self.nimi} | Taso {self.taso} | HP: {self.hp} | XP: {self.xp}")\n\n# 🎮 Pelitesti:\nprint("🏗️ LUOKAT JA OLIOT")\nprint("=" * 40)\n\nsankari = Pelaaja("Heikki")\nsankari.status()\n\nprint("\\n⚔️ Seikkailu alkaa!")\nsankari.tienaa_xp(50)\nsankari.tienaa_xp(60)\nsankari.ota_vahinko(30)\nsankari.tienaa_xp(80)\nsankari.status()\n\n# Toinen pelaaja:\nvelho = Pelaaja("Lila")\nvelho.tienaa_xp(150)\nvelho.status()`,
        hint: "ota_vahinko: self.hp = max(0, self.hp - maara). status: print f-stringillä self.nimi, self.taso jne.",
        validate: function(output) {
            return output.includes("LUOKAT JA OLIOT") && output.includes("TASOKOROTUS") && output.includes("Heikki") && output.includes("Lila");
        },
        successMsg: "🏗️ MAHTAVAA! Olio-ohjelmointi on ammattilaiskoodarin ydintyökalu! Nyt osaat luoda omia tietotyyppejä — tästä alkaa todellinen Python-mestaruus! 🏆",
        failMsg: "Täydennä ota_vahinko ja status -metodit. self.hp ja self.nimi sisältävät pelaajan tiedot!",
        detailedHelp: `
            <h4>Askel askeleelta — Luokat ja oliot</h4>
            <p>Tässä tehtävässä koodi on <strong>lähes valmis</strong>! Kaksi metodia ovat jo täydennetty:</p>
            <ol>
                <li><strong><code>ota_vahinko</code>-metodi</strong> — jo valmiina:
                    <div class="step-line">self.hp = max(0, self.hp - maara)<br>print(f"  💥 -{maara} HP! (jäljellä: {self.hp})")</div>
                    <code>max(0, ...)</code> varmistaa ettei HP mene alle nollan. <code>self.hp</code> viittaa tämän pelaaja-olion HP:hen.
                </li>
                <li><strong><code>status</code>-metodi</strong> — jo valmiina:
                    <div class="step-line">print(f"\\n👤 {self.nimi} | Taso {self.taso} | HP: {self.hp} | XP: {self.xp}")</div>
                    Tulostaa pelaajan kaikki tiedot. <code>self.</code> antaa pääsyn olion omiin attribuutteihin.
                </li>
                <li><strong>Paina ▶️ Suorita</strong> — katso miten pelaajat "Heikki" ja "Lila" seikkailevat ja keräävät XP:tä!</li>
            </ol>
            <p>💡 <code>self</code> on kuin "minä" — jokainen olio viittaa omiin tietoihinsa sen kautta.</p>
        `,
        maxStars: 3
    },

    {
    id: 29,


        legacyId: 16,
        title: "Lambda ja Map/Filter 🎯",
        slug: "syventava-lambda-ja-mapfilter",
        icon: "🎯",
        section: "syventava",
        description: "Opi lyhyet nimettömät funktiot ja funktionaalista ohjelmointia!",
        theory: `
            <h3>🎯 Lambda, Map ja Filter</h3>
            <p><strong>Lambda</strong> on lyhyt, nimetön funktio yhdellä rivillä:</p>
            <pre><code># Normaali funktio:
def tuplaa(x):
    return x * 2

# Sama lambdana:
tuplaa = lambda x: x * 2

# Map — sovella funktio joka elementtiin:
luvut = [1, 2, 3, 4, 5]
tuplatut = list(map(lambda x: x * 2, luvut))
# → [2, 4, 6, 8, 10]

# Filter — suodata ehdon perusteella:
parilliset = list(filter(lambda x: x % 2 == 0, luvut))
# → [2, 4]

# Sorted — järjestä custom-avaimella:
nimet = ["Liisa", "Bo", "Aleksanteri"]
sorted(nimet, key=lambda n: len(n))
# → ["Bo", "Liisa", "Aleksanteri"]</code></pre>
        `,
        challenge: "Käytä lambda, map, filter ja sorted -funktioita datan käsittelyyn!",
        starterCode: `# 🎯 Lambda & Map/Filter\n\nprint("🎯 LAMBDA & MAP/FILTER")\nprint("=" * 40)\n\n# Dataa:\nluvut = [15, 8, 23, 4, 42, 16, 7, 31, 12, 3]\nprint(f"Luvut: {luvut}")\n\n# 1. Map: laske jokaisen luvun neliö\n# Täydennä lambda: x: x**2\nneliot = list(map(lambda x: x**2, luvut))\nprint(f"Neliöt: {neliot}")\n\n# 2. Filter: vain yli 10 olevat luvut\n# Täydennä lambda ehtoa:\nisot = list(filter(lambda x: x > 10, luvut))\nprint(f"Yli 10: {isot}")\n\n# 3. Map + Filter yhdessä: parillisten tuplaaja\n# Ensin suodata parilliset, sitten tuplaa:\nparilliset_tuplatut = list(map(lambda x: x * 2, filter(lambda x: x % 2 == 0, luvut)))\nprint(f"Parilliset tuplattu: {parilliset_tuplatut}")\n\n# 4. Sorted: järjestä opiskelijat keskiarvon mukaan\nopiskelijat = [\n    {"nimi": "Liisa", "ka": 8.5},\n    {"nimi": "Ville", "ka": 7.2},\n    {"nimi": "Aino", "ka": 9.8},\n    {"nimi": "Eero", "ka": 6.5}\n]\n\n# Täydennä: sorted(..., key=lambda o: ...)\njarjestetty = sorted(opiskelijat, key=lambda o: o["ka"], reverse=True)\n\nprint(f"\\n📊 Ranking:")\nfor i, op in enumerate(jarjestetty, 1):\n    print(f"  {i}. {op['nimi']} — ka: {op['ka']}")`,
        hint: "Kaikki on jo melkein valmiina! Suorita koodi ja tarkista tulokset!",
        validate: function(output) {
            return output.includes("LAMBDA") && output.includes("Neliöt") && output.includes("Ranking") && output.includes("Aino");
        },
        successMsg: "🎯 Loistavaa! Lambda ja funktionaalinen ohjelmointi ovat edistyneitä Python-taitoja! Nyt osaat käsitellä dataa elegantisti ja tehokkaasti! 🚀",
        failMsg: "Suorita koodi sellaisenaan — suurin osa on valmiina. Tarkista lambda-syntaksi!",
        detailedHelp: `
            <h4>Askel askeleelta — Lambda ja Map/Filter</h4>
            <p>Tämä tehtävä on <strong>kokonaan valmiina</strong>! Sinun tarvitsee vain suorittaa koodi ja ymmärtää miten se toimii:</p>
            <ol>
                <li><strong><code>lambda x: x**2</code></strong> — nimetön funktio joka korottaa luvun toiseen potenssiin.
                    <code>map()</code> soveltaa tätä jokaiseen listan lukuun.</li>
                <li><strong><code>lambda x: x > 10</code></strong> — palauttaa True/False.
                    <code>filter()</code> pitää vain ne luvut joille ehto on True.</li>
                <li><strong><code>map + filter</code></strong> yhdessä — ensin suodatetaan parilliset, sitten tuplataan ne.</li>
                <li><strong><code>sorted(..., key=lambda o: o["ka"])</code></strong> — järjestää opiskelijat keskiarvon mukaan.</li>
            </ol>
            <p>💡 Lambda on lyhennys: <code>lambda x: x * 2</code> on sama kuin <code>def f(x): return x * 2</code>.</p>
            <p><strong>Paina ▶️ Suorita ja tutki tuloksia!</strong></p>
        `,
        maxStars: 3
    },

    {
    id: 30,


        legacyId: 16,
        title: "Zip ja Enumerate 🤝",
        slug: "syventava-zip-ja-enumerate",
        icon: "🤝",
        section: "syventava",
        description: "Opi yhdistämään listoja zip:llä ja numeroimaan enumerate:lla kuin ammattilainen!",
        theory: `
            <h3>🤝 Zip ja Enumerate</h3>
            <p><code>zip()</code> yhdistää kaksi listaa pareiksi. <code>enumerate()</code> antaa automaattisen indeksin:</p>
            <pre><code># ZIP — yhdistä listat:
nimet = ["Liisa", "Ville", "Aino"]
arvosanat = [9, 7, 10]

for nimi, arvosana in zip(nimet, arvosanat):
    print(f"{nimi}: {arvosana}")
# Liisa: 9, Ville: 7, Aino: 10

# Tee sanakirja zip:llä:
opiskelijat = dict(zip(nimet, arvosanat))
# → {"Liisa": 9, "Ville": 7, "Aino": 10}

# ENUMERATE — indeksi automaattisesti:
for i, nimi in enumerate(nimet):
    print(f"{i}. {nimi}")

# Aloitus numerosta 1:
for i, nimi in enumerate(nimet, 1):
    print(f"{i}. {nimi}")</code></pre>
        `,
        challenge: "Yhdistä eri tietolistoja zip:llä ja luo niistä raportteja!",
        starterCode: `# 🤝 Zip & Enumerate\n\nprint("🤝 ZIP & ENUMERATE")\nprint("=" * 40)\n\n# Data:\nkaupungit = ["Helsinki", "Espoo", "Tampere", "Turku", "Oulu"]\nasukkaat = [658457, 300382, 244315, 197200, 209648]\npinta_alat = [214, 312, 525, 246, 3817]\n\n# 1. Yhdistä zip:llä ja tulosta:\nprint("📊 Kaupunkitilastot:")\nfor kaupunki, asukas, ala in zip(kaupungit, asukkaat, pinta_alat):\n    tiheys = asukas / ala\n    print(f"  {kaupunki}: {asukas:,} asukasta, {ala} km² → tiheys: {tiheys:.0f}/km²")\n\n# 2. Tee sanakirja zip:llä:\n# Täydennä: dict(zip(...))\nkaupunki_data = dict(zip(kaupungit, asukkaat))\nprint(f"\\n📖 Sanakirja: {kaupunki_data}")\n\n# 3. Enumerate — numeroidut tulokset:\nprint("\\n🏆 Suuruusjärjestys (asukkaat):")\n# Järjestetään ensin:\njarjestetty = sorted(zip(asukkaat, kaupungit), reverse=True)\n\n# Täydennä enumerate aloittaen 1:stä:\nfor sija, (asukas, kaupunki) in enumerate(jarjestetty, 1):\n    print(f"  {sija}. {kaupunki}: {asukas:,}")\n\n# 4. Zip + list comprehension:\nprint("\\n📊 Asukastiheydet:")\ntiheydet = [a/p for a, p in zip(asukkaat, pinta_alat)]\nfor kaupunki, tiheys in zip(kaupungit, tiheydet):\n    palkit = "█" * int(tiheys / 100)\n    print(f"  {kaupunki:10s} {palkit} {tiheys:.0f}/km²")`,
        hint: "Koodi on lähes valmis — suorita se! dict(zip(kaupungit, asukkaat)) luo sanakirjan.",
        validate: function(output) {
            return output.includes("ZIP & ENUMERATE") && output.includes("Helsinki") && output.includes("Suuruusjärjestys") && output.includes("Asukastiheydet");
        },
        successMsg: "🤝 Fantastista! Zip ja enumerate ovat Python-mestarin työkalut — nyt osaat yhdistää ja numeroida dataa tyylikkäästi! 🐍✨",
        failMsg: "Suorita koodi! Tarkista zip() ja enumerate() -kohdat.",
        detailedHelp: `
            <h4>Askel askeleelta — Zip ja Enumerate</h4>
            <p>Tämä tehtävä on <strong>kokonaan valmiina</strong>! Suorita koodi ja opi miten zip ja enumerate toimivat:</p>
            <ol>
                <li><strong><code>zip(kaupungit, asukkaat, pinta_alat)</code></strong> — yhdistää kolme listaa rinnakkain.
                    Jokainen kierros antaa yhden kaupungin, sen asukasluvun ja pinta-alan.</li>
                <li><strong><code>dict(zip(kaupungit, asukkaat))</code></strong> — luo sanakirjan kahdesta listasta.
                    Avaimet tulevat ensimmäisestä, arvot toisesta.</li>
                <li><strong><code>enumerate(jarjestetty, 1)</code></strong> — antaa automaattisen järjestysnumeron alkaen 1:stä.
                    Ilman enumerate pitäisi ylläpitää omaa laskuria!</li>
                <li><strong>Zip + list comprehension</strong> — <code>[a/p for a, p in zip(asukkaat, pinta_alat)]</code> laskee tiheyden jokaiselle kaupungille yhdellä rivillä.</li>
            </ol>
            <p>💡 <code>zip</code> = "vetoketju" — yhdistää rinnakkaiset listat pareiksi!</p>
            <p><strong>Paina ▶️ Suorita ja tutki kaupunkitilastoja!</strong></p>
        `,
        maxStars: 3
    },

    {
    id: 31,


        legacyId: 16,
        title: "Rekursio 🪆",
        slug: "syventava-rekursio",
        icon: "🪆",
        section: "syventava",
        description: "Opi rekursio — funktio joka kutsuu itseään! Kuin maatuskanuket sisäkkäin!",
        theory: `
            <h3>🪆 Rekursio — funktio kutsuu itseään</h3>
            <p>Rekursio tarkoittaa että funktio <strong>kutsuu itse itseään</strong> ratkaistakseen ongelman:</p>
            <pre><code># Kertoma: 5! = 5 × 4 × 3 × 2 × 1 = 120
def kertoma(n):
    if n <= 1:        # Perustapaus (lopeta!)
        return 1
    return n * kertoma(n - 1)  # Rekursiivinen kutsu

print(kertoma(5))  # → 120

# Miten se toimii:
# kertoma(5) = 5 × kertoma(4)
#            = 5 × 4 × kertoma(3)
#            = 5 × 4 × 3 × kertoma(2)
#            = 5 × 4 × 3 × 2 × kertoma(1)
#            = 5 × 4 × 3 × 2 × 1 = 120</code></pre>
            <p>🔑 Kaksi sääntöä: 1) <strong>Perustapaus</strong> joka lopettaa, 2) <strong>Rekursiokutsu</strong> joka pienentää ongelmaa.</p>
        `,
        challenge: "Toteuta rekursiivisia funktioita — kertoma, fibonacci ja listan summa!",
        starterCode: `# 🪆 Rekursio\n\nprint("🪆 REKURSIO")\nprint("=" * 40)\n\n# 1. Kertoma (valmis esimerkki):\ndef kertoma(n):\n    if n <= 1:\n        return 1\n    return n * kertoma(n - 1)\n\nprint("Kertomia:")\nfor i in range(1, 8):\n    print(f"  {i}! = {kertoma(i)}")\n\n# 2. Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21...\n# Jokainen luku = kaksi edellistä yhteensä\ndef fibonacci(n):\n    # Perustapaus: jos n <= 0 → 0, jos n == 1 → 1\n    if n <= 0:\n        return 0\n    if n == 1:\n        return 1\n    # Rekursio: fibonacci(n-1) + fibonacci(n-2)\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint("\\nFibonacci:")\nfib_luvut = [fibonacci(i) for i in range(12)]\nprint(f"  {fib_luvut}")\n\n# 3. Listan summa rekursiivisesti:\ndef lista_summa(lista):\n    # Perustapaus: tyhjä lista → 0\n    if len(lista) == 0:\n        return 0\n    # Rekursio: ensimmäinen + loput\n    # Täydennä: return lista[0] + lista_summa(???)\n    return lista[0] + lista_summa(lista[1:])\n\nluvut = [3, 7, 2, 8, 1, 9]\nprint(f"\\nListan {luvut} summa: {lista_summa(luvut)}")\nprint(f"Tarkistus sum(): {sum(luvut)}")\n\n# 4. Lähtölaskenta:\ndef lahtolaskenta(n):\n    if n <= 0:\n        print("  🚀 LAUKAUS!")\n        return\n    print(f"  {n}...")\n    lahtolaskenta(n - 1)\n\nprint("\\n🚀 Lähtölaskenta:")\nlahtolaskenta(5)`,
        hint: "lista_summa: return lista[0] + lista_summa(lista[1:]) — ota ensimmäinen ja laske loput rekursiivisesti!",
        validate: function(output) {
            return output.includes("REKURSIO") && output.includes("120") && output.includes("Fibonacci") && output.includes("LAUKAUS");
        },
        successMsg: "🪆 LEGENDAARISTA! Rekursio on yksi ohjelmoinnin syvällisimmistä konsepteista! Tätä ymmärtämällä voit ratkaista todella monimutkaisia ongelmia! Olet nyt virallisesti Python-mestari! 🏆🐍",
        failMsg: "lista_summa: palauta lista[0] + lista_summa(lista[1:]). Fibonacci: return fibonacci(n-1) + fibonacci(n-2)",
        detailedHelp: `
            <h4>Askel askeleelta — Rekursio</h4>
            <p>Koodi on <strong>lähes kokonaan valmiina</strong>! Funktiot ovat täydennetty — sinun tarvitsee vain ymmärtää ne ja painaa Suorita:</p>
            <ol>
                <li><strong><code>kertoma(n)</code></strong> — valmiina. Perustapaus: <code>n &lt;= 1 → 1</code>. Rekursio: <code>n * kertoma(n-1)</code>.
                    Eli kertoma(5) = 5 × 4 × 3 × 2 × 1 = 120.</li>
                <li><strong><code>fibonacci(n)</code></strong> — valmiina. Kaksi perustapausta: n=0 → 0, n=1 → 1. Rekursio:
                    <div class="step-line">return fibonacci(n - 1) + fibonacci(n - 2)</div>
                    Jokainen Fibonacci-luku on kahden edellisen summa: 0, 1, 1, 2, 3, 5, 8, 13...</li>
                <li><strong><code>lista_summa(lista)</code></strong> — valmiina. Perustapaus: tyhjä lista → 0. Rekursio:
                    <div class="step-line">return lista[0] + lista_summa(lista[1:])</div>
                    Ota listan ensimmäinen alkio + kutsu itseä lopulla listasta. <code>lista[1:]</code> on lista ilman ensimmäistä alkiota.</li>
                <li><strong><code>lahtolaskenta(n)</code></strong> — valmiina. Tulostaa luvut ja lopussa "LAUKAUS!"</li>
            </ol>
            <p>💡 Rekursio = funktio kutsuu itseään yhä pienemmällä ongelmalla, kunnes saavuttaa perustapauksen. Kuin maatuskanuket! 🪆</p>
        `,
        maxStars: 3
    },

    // =============================================
    // OPERAATTORIT (27–46) — Päättele oikea operaattori!
    // =============================================

    {
    id: 32,


        legacyId: 16,
        section: "operaattorit",
        title: "Yhteenlasku ➕",
        slug: "operaattorit-yhteenlasku",
        icon: "➕",
        description: "Lisää puuttuva operaattori niin, että lasku menee oikein!",
        theory: `
            <h4>📚 Aritmeettiset operaattorit</h4>
            <p>Pythonissa laskutoimitukset tehdään operaattoreilla:</p>
            <pre><code>tulos = 3 + 5   # yhteenlasku → 8
tulos = 10 - 4  # vähennyslasku → 6
tulos = 2 * 6   # kertolasku → 12</code></pre>
            <p>Tässä tehtävässä sinun pitää keksiä, mikä operaattori puuttuu!</p>
        `,
        challenge: "Korvaa <code>___</code> oikealla operaattorilla niin, että ohjelma tulostaa <code>15</code>.",
        starterCode: `a = 7
b = 8
tulos = a ___ b
print(tulos)`,
        hint: "Mikä laskutoimitus antaa 7:stä ja 8:sta tuloksen 15?",
        validate: function(output) {
            return output.trim() === "15";
        },
        successMsg: "Hienoa! 7 + 8 = 15 — yhteenlasku toimii! ➕",
        failMsg: "Tarkista operaattori — tuloksen pitäisi olla 15.",
        maxStars: 3
    },
    {
    id: 33,


        legacyId: 16,
        section: "operaattorit",
        title: "Vähennyslasku ➖",
        slug: "operaattorit-vahennyslasku",
        icon: "➖",
        description: "Mikä operaattori antaa oikean erotuksen?",
        theory: `
            <h4>📚 Vähennyslasku</h4>
            <p>Miinusmerkkiä <code>-</code> käytetään vähentämiseen:</p>
            <pre><code>print(20 - 8)  # tulostaa 12</code></pre>
            <p>Vähennyslasku toimii myös desimaaliluvuilla!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>25</code>.",
        starterCode: `a = 100
b = 75
tulos = a ___ b
print(tulos)`,
        hint: "Mikä laskutoimitus muuttaa 100:n ja 75:n tulokseksi 25?",
        validate: function(output) {
            return output.trim() === "25";
        },
        successMsg: "Oikein! 100 - 75 = 25 ➖",
        failMsg: "Hmm, tulos ei ole 25. Kokeile eri operaattoria.",
        maxStars: 3
    },
    {
    id: 34,


        legacyId: 16,
        section: "operaattorit",
        title: "Kertolasku ✖️",
        slug: "operaattorit-kertolasku",
        icon: "✖️",
        description: "Löydä oikea operaattori kertolaskuun!",
        theory: `
            <h4>📚 Kertolasku</h4>
            <p>Pythonissa kertolasku tehdään tähdellä <code>*</code>:</p>
            <pre><code>print(4 * 5)  # tulostaa 20</code></pre>
            <p>Huomaa: Pythonissa kertolasku on <code>*</code> eikä <code>×</code>!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>42</code>.",
        starterCode: `a = 6
b = 7
tulos = a ___ b
print(tulos)`,
        hint: "6 ja 7... mikä laskutoimitus antaa 42?",
        validate: function(output) {
            return output.trim() === "42";
        },
        successMsg: "Loistavaa! 6 * 7 = 42 — elämän, maailmankaikkeuden ja kaiken vastaus! ✖️",
        failMsg: "Tarkista operaattori — 42 on oikea tulos.",
        maxStars: 3
    },
    {
    id: 35,


        legacyId: 16,
        section: "operaattorit",
        title: "Jakolasku ➗",
        slug: "operaattorit-jakolasku",
        icon: "➗",
        description: "Jaa luvut oikealla operaattorilla!",
        theory: `
            <h4>📚 Jakolasku</h4>
            <p>Jakolasku käyttää kauttaviivaa <code>/</code>:</p>
            <pre><code>print(10 / 2)  # tulostaa 5.0</code></pre>
            <p>⚠️ Huomaa: <code>/</code> palauttaa aina desimaaliluvun (float), vaikka tulos olisi tasaluku!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>5.0</code>.",
        starterCode: `a = 20
b = 4
tulos = a ___ b
print(tulos)`,
        hint: "Mikä laskutoimitus antaa 20:stä ja 4:stä tuloksen 5.0?",
        validate: function(output) {
            return output.trim() === "5.0";
        },
        successMsg: "Hyvä! 20 / 4 = 5.0 — jakolasku palauttaa aina desimaalin! ➗",
        failMsg: "Tuloksen pitäisi olla 5.0 (desimaali). Kokeile jakamista.",
        maxStars: 3
    },
    {
    id: 36,


        legacyId: 16,
        section: "operaattorit",
        title: "Kokonaisjakolasku 🔢",
        slug: "operaattorit-kokonaisjakolasku",
        icon: "🔢",
        description: "Jako ilman desimaaleja — mikä operaattori?",
        theory: `
            <h4>📚 Kokonaisjakolasku (floor division)</h4>
            <p>Kaksi kauttaviivaa <code>//</code> tekee jaon ja pyöristää alaspäin:</p>
            <pre><code>print(17 / 5)   # 3.4  (normaali jako)
print(17 // 5)  # 3    (kokonaisluku)</code></pre>
            <p>Tämä on hyödyllinen kun haluat vain kokonaislukuosan!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>3</code> (ei 3.5!).",
        starterCode: `a = 7
b = 2
tulos = a ___ b
print(tulos)`,
        hint: "7 jaettuna 2:lla on 3.5, mutta haluamme kokonaisluvun 3. Mikä operaattori pyöristää alaspäin?",
        validate: function(output) {
            return output.trim() === "3";
        },
        successMsg: "Oikein! 7 // 2 = 3 — kokonaisjakolasku leikkaa desimaalit pois! 🔢",
        failMsg: "Tulos pitäisi olla 3 (kokonaisluku, ei 3.5). Kokeile eri operaattoria.",
        maxStars: 3
    },
    {
    id: 37,


        legacyId: 16,
        section: "operaattorit",
        title: "Jakojäännös 🎯",
        slug: "operaattorit-jakojaannos",
        icon: "🎯",
        description: "Mikä jää yli jaettaessa? Etsi oikea operaattori!",
        theory: `
            <h4>📚 Jakojäännös (modulo)</h4>
            <p>Prosenttimerkki <code>%</code> antaa jakojäännöksen:</p>
            <pre><code>print(10 % 3)  # 1  (10 = 3×3 + 1)
print(15 % 4)  # 3  (15 = 3×4 + 3)</code></pre>
            <p>Tämä on superhyödyllinen! Esim. parillisten lukujen tarkistus: <code>luku % 2 == 0</code></p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>1</code> (jakojäännös).",
        starterCode: `a = 10
b = 3
tulos = a ___ b
print(tulos)`,
        hint: "10 jaettuna 3:lla on 3 jäännös 1. Mikä operaattori antaa jäännöksen?",
        validate: function(output) {
            return output.trim() === "1";
        },
        successMsg: "Mahtavaa! 10 % 3 = 1 — jakojäännösoperaattori on kätevä! 🎯",
        failMsg: "Tuloksen pitäisi olla 1 (jakojäännös). Muista %-merkki!",
        maxStars: 3
    },
    {
    id: 38,


        legacyId: 16,
        section: "operaattorit",
        title: "Potenssi 💪",
        slug: "operaattorit-potenssi",
        icon: "💪",
        description: "Nosta luku potenssiin — mikä on Pythonin tapa?",
        theory: `
            <h4>📚 Potenssi</h4>
            <p>Kaksi tähteä <code>**</code> on potenssioperaattori:</p>
            <pre><code>print(2 ** 3)   # 8   (2³ = 2×2×2)
print(5 ** 2)   # 25  (5² = 5×5)
print(10 ** 0)  # 1   (mikä tahansa⁰ = 1)</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>8</code> (2 potenssiin 3).",
        starterCode: `pohja = 2
eksponentti = 3
tulos = pohja ___ eksponentti
print(tulos)`,
        hint: "2³ = 2 × 2 × 2 = 8. Mikä operaattori nostaa potenssiin?",
        validate: function(output) {
            return output.trim() === "8";
        },
        successMsg: "Oikein! 2 ** 3 = 8 — potenssioperaattori on voimakas! 💪",
        failMsg: "Tuloksen pitäisi olla 8. Kokeile potenssioperaattoria!",
        maxStars: 3
    },
    {
    id: 39,


        legacyId: 16,
        section: "operaattorit",
        title: "Yhtäsuuruus 🟰",
        slug: "operaattorit-yhtasuuruus",
        icon: "🟰",
        description: "Onko kaksi arvoa samoja? Vertaile oikein!",
        theory: `
            <h4>📚 Vertailuoperaattorit</h4>
            <p>Vertailu palauttaa <code>True</code> tai <code>False</code>:</p>
            <pre><code>print(5 == 5)   # True  (onko yhtäsuuri?)
print(5 = 5)    # VIRHE! = on sijoitus, ei vertailu!
print(5 != 3)   # True  (onko eri?)</code></pre>
            <p>⚠️ <code>=</code> on sijoitus, <code>==</code> on vertailu! Tämä on yleinen virhe.</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>True</code>.",
        starterCode: `a = 10
b = 10
tulos = a ___ b
print(tulos)`,
        hint: "a ja b ovat molemmat 10. Mikä vertailuoperaattori tarkistaa yhtäsuuruuden?",
        validate: function(output) {
            return output.trim() === "True";
        },
        successMsg: "Hienoa! == vertailee yhtäsuuruutta! 🟰",
        failMsg: "Tuloksen pitää olla True. Muista: == on vertailu, = on sijoitus!",
        maxStars: 3
    },
    {
    id: 40,


        legacyId: 16,
        section: "operaattorit",
        title: "Erisuuruus ❌",
        slug: "operaattorit-erisuuruus",
        icon: "❌",
        description: "Ovatko arvot erilaisia? Löydä oikea operaattori!",
        theory: `
            <h4>📚 Erisuuruus</h4>
            <p><code>!=</code> tarkistaa, ovatko arvot eri:</p>
            <pre><code>print(5 != 3)   # True  (5 ei ole 3)
print(5 != 5)   # False (5 on 5)</code></pre>
            <p>Huutomerkki <code>!</code> tarkoittaa "ei" — eli <code>!=</code> = "ei yhtä suuri".</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>True</code>.",
        starterCode: `kissa = "Mirri"
koira = "Musti"
tulos = kissa ___ koira
print(tulos)`,
        hint: "Mirri ja Musti ovat eri nimiä. Mikä operaattori tarkistaa erisuuruuden?",
        validate: function(output) {
            return output.trim() === "True";
        },
        successMsg: "Oikein! 'Mirri' != 'Musti' on True — ne ovat eri! ❌",
        failMsg: "Tuloksen pitäisi olla True. Mirri ja Musti ovat eri arvoja...",
        maxStars: 3
    },
    {
    id: 41,


        legacyId: 16,
        section: "operaattorit",
        title: "Suurempi ja pienempi 📏",
        slug: "operaattorit-suurempi-ja-pienempi",
        icon: "📏",
        description: "Kumpi luku on suurempi? Vertaa oikein!",
        theory: `
            <h4>📚 Suurempi ja pienempi</h4>
            <p>Vertailuoperaattorit:</p>
            <pre><code>print(10 > 5)   # True  (suurempi kuin)
print(3 < 8)    # True  (pienempi kuin)
print(5 > 10)   # False</code></pre>
            <p>Nämä toimivat kuten matikassa — helppo muistaa!</p>
        `,
        challenge: "Korvaa molemmat <code>___</code> niin, että ohjelma tulostaa kaksi kertaa <code>True</code>.",
        starterCode: `a = 100
b = 50
print(a ___ b)   # 100 vs 50
print(b ___ a)   # 50 vs 100`,
        hint: "Ensimmäisellä rivillä 100 on suurempi kuin 50. Toisella rivillä 50 on pienempi kuin 100.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].trim() === "True" && lines[1].trim() === "True";
        },
        successMsg: "Loistavaa! 100 > 50 ja 50 < 100 — molemmat True! 📏",
        failMsg: "Molempien rivien pitäisi tulostaa True. Mieti kumpi on suurempi/pienempi.",
        maxStars: 3
    },
    {
    id: 42,


        legacyId: 16,
        section: "operaattorit",
        title: "Suurempi-yhtäsuuri 📐",
        slug: "operaattorit-suurempi-yhtasuuri",
        icon: "📐",
        description: "Entä kun arvo voi olla yhtäsuuri TAI suurempi?",
        theory: `
            <h4>📚 Suurempi-yhtäsuuri ja pienempi-yhtäsuuri</h4>
            <pre><code>print(5 >= 5)   # True  (suurempi TAI yhtäsuuri)
print(5 > 5)    # False (ei suurempi, vain yhtäsuuri)
print(3 <= 5)   # True  (pienempi TAI yhtäsuuri)
print(5 <= 5)   # True</code></pre>
            <p>Yhtäsuuruusmerkki tulee AINA jälkeen: <code>>=</code> ja <code><=</code>, ei <code>=></code>!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>True</code> ja <code>True</code>.",
        starterCode: `ika = 18
raja = 18
print(ika ___ raja)   # ikä on VÄHINTÄÄN raja
print(raja ___ 20)    # raja on ENINTÄÄN 20`,
        hint: "18 on vähintään 18 (>=). 18 on enintään 20 (<=).",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].trim() === "True" && lines[1].trim() === "True";
        },
        successMsg: "Täydellistä! >= tarkoittaa 'vähintään' ja <= tarkoittaa 'enintään'! 📐",
        failMsg: "Molempien rivien pitäisi olla True. Muista: >= ja <=, ei =>!",
        maxStars: 3
    },
    {
    id: 43,


        legacyId: 16,
        section: "operaattorit",
        title: "And-operaattori 🤝",
        slug: "operaattorit-and-operaattori",
        icon: "🤝",
        description: "Molemmat ehdot pitää täyttyä — mikä operaattori?",
        theory: `
            <h4>📚 Loogiset operaattorit: and</h4>
            <p><code>and</code> palauttaa True vain jos MOLEMMAT ehdot ovat True:</p>
            <pre><code>print(True and True)    # True
print(True and False)   # False
print(5 > 3 and 10 > 7) # True (molemmat totta)</code></pre>
            <p>Ajattele sitä kuin "JA" — molemmat pitää olla totta!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>True</code>.",
        starterCode: `ika = 15
lippu = True
paasee_sisaan = ika >= 12 ___ lippu == True
print(paasee_sisaan)`,
        hint: "Sisään pääsee kun ikä ON vähintään 12 JA lippu on True. Mikä yhdistää ehdot niin, että molemmat vaaditaan?",
        validate: function(output) {
            return output.trim() === "True";
        },
        successMsg: "Oikein! 'and' vaatii molemmat ehdot — JA-operaattori! 🤝",
        failMsg: "Tuloksen pitäisi olla True. Mikä operaattori vaatii molemmat ehdot?",
        maxStars: 3
    },
    {
    id: 44,


        legacyId: 16,
        section: "operaattorit",
        title: "Or-operaattori 🔀",
        slug: "operaattorit-or-operaattori",
        icon: "🔀",
        description: "Riittää, että yksikin ehto on totta!",
        theory: `
            <h4>📚 Loogiset operaattorit: or</h4>
            <p><code>or</code> palauttaa True jos EDES TOINEN ehto on True:</p>
            <pre><code>print(True or False)    # True (toinen riittää!)
print(False or False)   # False (kumpikaan ei)
print(5 > 10 or 3 < 8)  # True (jälkimmäinen totta)</code></pre>
            <p>Ajattele "TAI" — yksikin riittää!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>True</code>.",
        starterCode: `on_viikonloppu = False
on_loma = True
saa_nukkua = on_viikonloppu ___ on_loma
print(saa_nukkua)`,
        hint: "Saa nukkua pitkään jos on viikonloppu TAI loma. Yksikin riittää!",
        validate: function(output) {
            return output.trim() === "True";
        },
        successMsg: "Hienoa! 'or' — edes toinen riittää! Loma = saa nukkua! 🔀",
        failMsg: "Tuloksen pitäisi olla True. Kumpi operaattori: molemmat vai edes toinen?",
        maxStars: 3
    },
    {
    id: 45,


        legacyId: 16,
        section: "operaattorit",
        title: "Not-operaattori 🔄",
        slug: "operaattorit-not-operaattori",
        icon: "🔄",
        description: "Käännä totuusarvo — True muuttuu Falseksi!",
        theory: `
            <h4>📚 Loogiset operaattorit: not</h4>
            <p><code>not</code> kääntää totuusarvon:</p>
            <pre><code>print(not True)    # False
print(not False)   # True
print(not 5 > 10)  # True (5 > 10 on False → not False = True)</code></pre>
            <p><code>not</code> on kuin "EI" — kääntää kaiken toisinpäin!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>True</code>.",
        starterCode: `sataa = False
kuiva = ___ sataa
print(kuiva)`,
        hint: "Jos EI sada, on kuivaa. Mikä operaattori kääntää False → True?",
        validate: function(output) {
            return output.trim() === "True";
        },
        successMsg: "Oikein! 'not False' = True — ei sadetta, on kuivaa! 🔄",
        failMsg: "Tuloksen pitäisi olla True. Muista: not kääntää arvon!",
        maxStars: 3
    },
    {
    id: 46,


        legacyId: 16,
        section: "operaattorit",
        title: "Ketjutetut vertailut ⛓️",
        slug: "operaattorit-ketjutetut-vertailut",
        icon: "⛓️",
        description: "Python osaa ketjuttaa vertailuja — mahtava ominaisuus!",
        theory: `
            <h4>📚 Ketjutetut vertailut</h4>
            <p>Python tukee ketjutettuja vertailuja — tämä on ainutlaatuista!</p>
            <pre><code># Normaali tapa:
x = 5
print(1 < x and x < 10)  # True

# Pythonin ketjutettu tapa:
print(1 < x < 10)  # True — sama asia, siistimpi!</code></pre>
            <p>Voit ketjuttaa niin monta vertailua kuin haluat!</p>
        `,
        challenge: "Korvaa <code>___</code> operaattoreilla niin, että ohjelma tulostaa <code>True</code>. Käytä ketjutettua vertailua!",
        starterCode: `arvosana = 8
# Arvosana on hyväksytty jos se on 4-10 välillä
hyvaksytty = 4 ___ arvosana ___ 10
print(hyvaksytty)`,
        hint: "Arvosana 8 on välillä 4–10. Käytä <= molempiin suuntiin!",
        validate: function(output) {
            return output.trim() === "True";
        },
        successMsg: "Hienoa! 4 <= 8 <= 10 — ketjutettu vertailu on elegantti! ⛓️",
        failMsg: "Tuloksen pitäisi olla True. Arvosana 8 on välillä 4–10.",
        maxStars: 3
    },
    {
    id: 47,


        legacyId: 16,
        section: "operaattorit",
        title: "Merkkijonojen yhdistäminen 🔗",
        slug: "operaattorit-merkkijonojen-yhdistaminen",
        icon: "🔗",
        description: "Plus-operaattori toimii myös teksteillä!",
        theory: `
            <h4>📚 Merkkijonojen yhdistäminen (+)</h4>
            <p><code>+</code> yhdistää (konkatenoi) merkkijonoja:</p>
            <pre><code>etunimi = "Matti"
sukunimi = "Meikäläinen"
nimi = etunimi + " " + sukunimi
print(nimi)  # Matti Meikäläinen</code></pre>
            <p>Huomaa: välilyönti pitää lisätä erikseen!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>Hei maailma!</code>.",
        starterCode: `alku = "Hei "
loppu = "maailma!"
viesti = alku ___ loppu
print(viesti)`,
        hint: "Miten yhdistät kaksi tekstiä yhdeksi?",
        validate: function(output) {
            return output.trim() === "Hei maailma!";
        },
        successMsg: "Oikein! + yhdistää tekstejä — 'Hei ' + 'maailma!' 🔗",
        failMsg: "Tuloksen pitäisi olla 'Hei maailma!'. Millä operaattorilla tekstit liitetään yhteen?",
        maxStars: 3
    },
    {
    id: 48,


        legacyId: 16,
        section: "operaattorit",
        title: "Merkkijonojen toisto 🔁",
        slug: "operaattorit-merkkijonojen-toisto",
        icon: "🔁",
        description: "Toista tekstiä monta kertaa — mikä operaattori?",
        theory: `
            <h4>📚 Merkkijonojen toistaminen (*)</h4>
            <p><code>*</code> toistaa merkkijonon monta kertaa:</p>
            <pre><code>print("ha" * 3)     # hahaha
print("-" * 20)     # --------------------
print("🎵" * 5)    # 🎵🎵🎵🎵🎵</code></pre>
            <p>Kätevä tapa luoda toistuvaa tekstiä!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>NamNamNam</code>.",
        starterCode: `sana = "Nam"
tulos = sana ___ 3
print(tulos)`,
        hint: "Miten toistat 'Nam' kolme kertaa?",
        validate: function(output) {
            return output.trim() === "NamNamNam";
        },
        successMsg: "Hienoa! 'Nam' * 3 = 'NamNamNam' — kertomerkki toistaa tekstiä! 🔁",
        failMsg: "Tuloksen pitäisi olla NamNamNam. Mikä operaattori toistaa tekstin?",
        maxStars: 3
    },
    {
    id: 49,


        legacyId: 16,
        section: "operaattorit",
        title: "In-operaattori 🔍",
        slug: "operaattorit-in-operaattori",
        icon: "🔍",
        description: "Tarkista sisältyykö arvo johonkin — mikä operaattori?",
        theory: `
            <h4>📚 In-operaattori</h4>
            <p><code>in</code> tarkistaa, löytyykö arvo listasta tai tekstistä:</p>
            <pre><code>hedelmät = ["omena", "banaani", "mango"]
print("banaani" in hedelmät)   # True
print("kiivi" in hedelmät)     # False

teksti = "Hello World"
print("World" in teksti)       # True</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>True</code> ja <code>True</code>.",
        starterCode: `eläimet = ["kissa", "koira", "hamsteri"]
print("koira" ___ eläimet)

lause = "Python on kivaa"
print("kivaa" ___ lause)`,
        hint: "Mikä operaattori tarkistaa, löytyykö jokin listasta tai tekstistä?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].trim() === "True" && lines[1].trim() === "True";
        },
        successMsg: "Mahtavaa! 'in' tarkistaa jäsenyyden — löytyykö listasta tai tekstistä! 🔍",
        failMsg: "Molempien pitäisi olla True. Mikä operaattori tarkistaa löytyykö jokin jostakin?",
        maxStars: 3
    },
    {
    id: 50,


        legacyId: 16,
        section: "operaattorit",
        title: "Yhdistetty sijoitus 📝",
        slug: "operaattorit-yhdistetty-sijoitus",
        icon: "📝",
        description: "Lyhennä 'x = x + 1' — mikä on pikaversio?",
        theory: `
            <h4>📚 Yhdistetyt sijoitusoperaattorit</h4>
            <p>Nämä ovat pikakieltä yleisiin operaatioihin:</p>
            <pre><code>x = 10
x += 5   # sama kuin x = x + 5 → 15
x -= 3   # sama kuin x = x - 3 → 12
x *= 2   # sama kuin x = x * 2 → 24
print(x) # 24</code></pre>
            <p>Nämä ovat todella yleisiä oikeassa koodissa!</p>
        `,
        challenge: "Korvaa jokainen <code>___</code> oikealla yhdistetyllä sijoitusoperaattorilla niin, että tulos on <code>20</code>.",
        starterCode: `luku = 10
luku ___ 5    # lisää 5 → 15
luku ___ 3    # lisää 3 → 18
luku ___ 2    # lisää 2 → 20
print(luku)`,
        hint: "Jokainen rivi lisää luvun: 10 + 5 = 15, 15 + 3 = 18, 18 + 2 = 20. Mikä on +=?",
        validate: function(output) {
            return output.trim() === "20";
        },
        successMsg: "Täydellistä! += on lyhenne kaavalle x = x + lisäys! 📝",
        failMsg: "Tuloksen pitäisi olla 20. Lisää joka rivillä: += lisää lukuun.",
        maxStars: 3
    },
    {
    id: 51,


        legacyId: 16,
        section: "operaattorit",
        title: "Operaattorimestari 🏆",
        slug: "operaattorit-operaattorimestari",
        icon: "🏆",
        description: "Viimeinen haaste — käytä kaikkia oppimiasi operaattoreita!",
        theory: `
            <h4>📚 Kertaus — kaikki operaattorit!</h4>
            <table style="width:100%; border-collapse: collapse; font-size: 0.95em;">
            <tr style="background: var(--accent-blue); color: white;"><th style="padding:6px;">Operaattori</th><th style="padding:6px;">Merkitys</th><th style="padding:6px;">Esimerkki</th></tr>
            <tr><td style="padding:4px 6px;"><code>+</code> <code>-</code> <code>*</code> <code>/</code></td><td>Peruslaskut</td><td>3 + 4 → 7</td></tr>
            <tr><td style="padding:4px 6px;"><code>//</code> <code>%</code> <code>**</code></td><td>Kokonaisjako, jäännös, potenssi</td><td>7 // 2 → 3</td></tr>
            <tr><td style="padding:4px 6px;"><code>==</code> <code>!=</code></td><td>Yhtäsuuruus, erisuuruus</td><td>5 == 5 → True</td></tr>
            <tr><td style="padding:4px 6px;"><code>&gt;</code> <code>&lt;</code> <code>&gt;=</code> <code>&lt;=</code></td><td>Vertailut</td><td>10 > 5 → True</td></tr>
            <tr><td style="padding:4px 6px;"><code>and</code> <code>or</code> <code>not</code></td><td>Loogiset</td><td>True and True → True</td></tr>
            <tr><td style="padding:4px 6px;"><code>in</code></td><td>Jäsenyys</td><td>"a" in "abc" → True</td></tr>
            <tr><td style="padding:4px 6px;"><code>+=</code> <code>-=</code> <code>*=</code></td><td>Yhdistetty sijoitus</td><td>x += 1</td></tr>
            </table>
        `,
        challenge: "Korvaa KAIKKI <code>___</code> oikeilla operaattoreilla niin, että ohjelma tulostaa neljä kertaa <code>True</code>!",
        starterCode: `# 1. Laske 2 potenssiin 4
tulos1 = 2 ___ 4
print(tulos1 ___ 16)

# 2. Onko 17 pariton luku?
jaannos = 17 ___ 2
print(jaannos ___ 0)

# 3. Löytyykö "Python" tekstistä?
teksti = "Opin Python-kieltä"
print("Python" ___ teksti)

# 4. Onko luku välillä 1-100?
luku = 42
print(1 ___ luku ___ 100)`,
        hint: "1: potenssi (**) ja yhtäsuuruus (==). 2: jakojäännös (%) ja erisuuruus (!=). 3: in-operaattori. 4: ketjutettu vertailu (<=).",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 4 &&
                   lines[0].trim() === "True" &&
                   lines[1].trim() === "True" &&
                   lines[2].trim() === "True" &&
                   lines[3].trim() === "True";
        },
        successMsg: "MESTARI! 🏆 Osaat kaikki Pythonin operaattorit! Neljä True-vastausta — täydellistä!",
        failMsg: "Kaikkien neljän rivin pitäisi tulostaa True. Lue vihje ja yritä uudelleen!",
        maxStars: 3
    },

    // =============================================
    // MERKKIJONOT (47–66) — Opi käsittelemään tekstiä!
    // =============================================

    {
    id: 52,


        legacyId: 16,
        section: "merkkijonot",
        title: "Merkkijonon pituus 📏",
        slug: "merkkijonot-merkkijonon-pituus",
        icon: "📏",
        description: "Selvitä merkkijonon pituus — montako merkkiä tekstissä on?",
        theory: `
            <h4>📚 len() — merkkijonon pituus</h4>
            <p><code>len()</code> kertoo montako merkkiä merkkijonossa on:</p>
            <pre><code>print(len("Moi"))      # 3
print(len("Python"))   # 6
print(len(""))         # 0 (tyhjä merkkijono)</code></pre>
            <p>Välilyönnit lasketaan myös merkeiksi!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa sanan 'Koodikoulu' pituuden.",
        starterCode: `sana = "Koodikoulu"
pituus = ___(sana)
print(pituus)`,
        hint: "Mikä funktio kertoo merkkijonon pituuden? Se on kolme kirjainta pitkä...",
        validate: function(output) {
            return output.trim() === "10";
        },
        successMsg: "Oikein! len('Koodikoulu') = 10 — kymmenen merkkiä! 📏",
        failMsg: "Tuloksen pitäisi olla 10. Mikä funktio mittaa merkkijonon pituuden?",
        maxStars: 3
    },
    {
    id: 53,


        legacyId: 16,
        section: "merkkijonot",
        title: "Isoiksi kirjaimiksi 🔠",
        slug: "merkkijonot-isoiksi-kirjaimiksi",
        icon: "🔠",
        description: "Muuta teksti kokonaan isoiksi kirjaimiksi!",
        theory: `
            <h4>📚 .upper() — isot kirjaimet</h4>
            <p><code>.upper()</code> muuttaa kaikki kirjaimet isoiksi:</p>
            <pre><code>print("moi".upper())       # MOI
print("Python".upper())    # PYTHON</code></pre>
            <p>Tämä on metodi — se kutsutaan pisteellä merkkijonon perässä!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>TERVETULOA</code>.",
        starterCode: `teksti = "tervetuloa"
iso = teksti.___()
print(iso)`,
        hint: "Mikä metodi muuttaa kirjaimet isoiksi? Se on englantia ja tarkoittaa 'ylös'.",
        validate: function(output) {
            return output.trim() === "TERVETULOA";
        },
        successMsg: "Hienoa! .upper() muuttaa kaiken ISOIKSI! 🔠",
        failMsg: "Tuloksen pitäisi olla TERVETULOA. Mikä metodi tekee isot kirjaimet?",
        maxStars: 3
    },
    {
    id: 54,


        legacyId: 16,
        section: "merkkijonot",
        title: "Pieniksi kirjaimiksi 🔡",
        slug: "merkkijonot-pieniksi-kirjaimiksi",
        icon: "🔡",
        description: "Muuta teksti kokonaan pieniksi kirjaimiksi!",
        theory: `
            <h4>📚 .lower() — pienet kirjaimet</h4>
            <p><code>.lower()</code> muuttaa kaikki kirjaimet pieniksi:</p>
            <pre><code>print("MOI".lower())       # moi
print("Python".lower())    # python</code></pre>
            <p>Tämä on hyödyllinen esim. vertailuissa, jotta iso/pieni kirjain ei häiritse!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>hei maailma</code>.",
        starterCode: `teksti = "HEI MAAILMA"
pieni = teksti.___()
print(pieni)`,
        hint: "Mikä on .upper():n vastakohta?",
        validate: function(output) {
            return output.trim() === "hei maailma";
        },
        successMsg: "Oikein! .lower() tekee kaikista kirjaimista pieniä! 🔡",
        failMsg: "Tuloksen pitäisi olla 'hei maailma'. Mikä on isojen kirjainten vastakohta?",
        maxStars: 3
    },
    {
    id: 55,


        legacyId: 16,
        section: "merkkijonot",
        title: "Ensimmäinen kirjain 🅰️",
        slug: "merkkijonot-ensimmainen-kirjain",
        icon: "🅰️",
        description: "Ota merkkijonon ensimmäinen merkki — miten indeksointi toimii?",
        theory: `
            <h4>📚 Indeksointi — merkkijonon merkit</h4>
            <p>Merkkijonon jokaisella merkillä on numero (indeksi), alkaen 0:sta:</p>
            <pre><code>sana = "Python"
#        P y t h o n
#        0 1 2 3 4 5
print(sana[0])   # P  (ensimmäinen)
print(sana[1])   # y  (toinen)
print(sana[-1])  # n  (viimeinen)</code></pre>
            <p>⚠️ Indeksointi alkaa NOLLASTA, ei ykkösestä!</p>
        `,
        challenge: "Korvaa <code>___</code> numerolla niin, että ohjelma tulostaa <code>K</code> (ensimmäinen kirjain).",
        starterCode: `sana = "Koodi"
kirjain = sana[___]
print(kirjain)`,
        hint: "Ensimmäisen merkin indeksi on 0, ei 1!",
        validate: function(output) {
            return output.trim() === "K";
        },
        successMsg: "Oikein! sana[0] = 'K' — indeksointi alkaa nollasta! 🅰️",
        failMsg: "Tuloksen pitäisi olla K. Muista: ensimmäinen merkki on indeksissä 0!",
        maxStars: 3
    },
    {
    id: 56,


        legacyId: 16,
        section: "merkkijonot",
        title: "Viimeinen kirjain 🔚",
        slug: "merkkijonot-viimeinen-kirjain",
        icon: "🔚",
        description: "Ota merkkijonon viimeinen merkki — negatiivinen indeksi auttaa!",
        theory: `
            <h4>📚 Negatiivinen indeksi</h4>
            <p>Negatiiviset indeksit laskevat lopusta:</p>
            <pre><code>sana = "Koodi"
#        K  o  o  d  i
#        0  1  2  3  4
#       -5 -4 -3 -2 -1
print(sana[-1])   # i  (viimeinen)
print(sana[-2])   # d  (toiseksi viimeinen)</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>!</code> (viimeinen merkki).",
        starterCode: `lause = "Hei kaikki!"
viimeinen = lause[___]
print(viimeinen)`,
        hint: "Mikä negatiivinen indeksi antaa viimeisen merkin?",
        validate: function(output) {
            return output.trim() === "!";
        },
        successMsg: "Oikein! lause[-1] antaa viimeisen merkin! 🔚",
        failMsg: "Tuloksen pitäisi olla !. Kokeile negatiivista indeksiä.",
        maxStars: 3
    },
    {
    id: 57,


        legacyId: 16,
        section: "merkkijonot",
        title: "Merkkijonon viipalointi 🔪",
        slug: "merkkijonot-merkkijonon-viipalointi",
        icon: "🔪",
        description: "Leikkaa osa merkkijonosta — slice on tehokas työkalu!",
        theory: `
            <h4>📚 Viipalointi (slicing)</h4>
            <p><code>teksti[alku:loppu]</code> leikkaa osan merkkijonosta:</p>
            <pre><code>sana = "Python"
print(sana[0:3])    # Pyt  (indeksit 0, 1, 2)
print(sana[2:5])    # tho  (indeksit 2, 3, 4)
print(sana[:3])     # Pyt  (alusta indeksiin 3)
print(sana[3:])     # hon  (indeksistä 3 loppuun)</code></pre>
            <p>⚠️ Loppu-indeksi EI sisälly tulokseen!</p>
        `,
        challenge: "Korvaa <code>___</code> oikeilla luvuilla niin, että ohjelma tulostaa <code>Koodi</code>.",
        starterCode: `teksti = "Koodikoulu"
alku = teksti[___:___]
print(alku)`,
        hint: "'Koodi' on 5 ensimmäistä merkkiä. Indeksit 0-4, eli slice [0:5].",
        validate: function(output) {
            return output.trim() === "Koodi";
        },
        successMsg: "Hienoa! teksti[0:5] = 'Koodi' — viipalointi leikkaa siististi! 🔪",
        failMsg: "Tuloksen pitäisi olla 'Koodi'. Muista: loppu-indeksi ei sisälly mukaan!",
        maxStars: 3
    },
    {
    id: 58,


        legacyId: 16,
        section: "merkkijonot",
        title: "Korvaa tekstiä 🔄",
        slug: "merkkijonot-korvaa-tekstia",
        icon: "🔄",
        description: "Vaihda osa tekstistä toiseksi — .replace() auttaa!",
        theory: `
            <h4>📚 .replace() — korvaa tekstiä</h4>
            <p><code>.replace(vanha, uusi)</code> korvaa osan merkkijonosta:</p>
            <pre><code>lause = "Pidän kissasta"
uusi = lause.replace("kissasta", "koirasta")
print(uusi)   # Pidän koirasta</code></pre>
            <p>⚠️ .replace() luo UUDEN merkkijonon — alkuperäinen ei muutu!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>Rakastan Pythonia</code>.",
        starterCode: `lause = "Rakastan Javaa"
uusi = lause.___("Javaa", "Pythonia")
print(uusi)`,
        hint: "Mikä metodi korvaa osan tekstistä toisella? Englanninkielinen sana 'korvata'.",
        validate: function(output) {
            return output.trim() === "Rakastan Pythonia";
        },
        successMsg: "Oikein! .replace() vaihtaa tekstin osan toiseksi! 🔄",
        failMsg: "Tuloksen pitäisi olla 'Rakastan Pythonia'. Mikä metodi korvaa tekstiä?",
        maxStars: 3
    },
    {
    id: 59,


        legacyId: 16,
        section: "merkkijonot",
        title: "Etsi tekstistä 🔎",
        slug: "merkkijonot-etsi-tekstista",
        icon: "🔎",
        description: "Löytyykö sana tekstistä? .find() kertoo missä kohtaa!",
        theory: `
            <h4>📚 .find() — etsi sijainti</h4>
            <p><code>.find(teksti)</code> palauttaa indeksin, josta haettu teksti alkaa:</p>
            <pre><code>lause = "Hei maailma"
print(lause.find("maailma"))   # 4
print(lause.find("moi"))       # -1 (ei löytynyt)</code></pre>
            <p>Jos tekstiä ei löydy, .find() palauttaa -1.</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>6</code> (mistä indeksistä 'koulu' alkaa).",
        starterCode: `teksti = "Heikin koulu"
sijainti = teksti.___("koulu")
print(sijainti)`,
        hint: "Laske: H=0, e=1, i=2, k=3, i=4, n=5, ' '=6... ei, 'k'=7... Mikä metodi etsii?",
        validate: function(output) {
            return output.trim() === "7";
        },
        successMsg: "Oikein! .find('koulu') = 7 — 'koulu' alkaa indeksistä 7! 🔎",
        failMsg: "Tarkista tulos. Mikä metodi etsii tekstin sijainnin?",
        maxStars: 3
    },
    {
    id: 60,


        legacyId: 16,
        section: "merkkijonot",
        title: "Pilko tekstiä ✂️",
        slug: "merkkijonot-pilko-tekstia",
        icon: "✂️",
        description: "Jaa merkkijono osiin — .split() tekee listan!",
        theory: `
            <h4>📚 .split() — pilko listaksi</h4>
            <p><code>.split(erotin)</code> jakaa merkkijonon listaksi:</p>
            <pre><code>lause = "yksi kaksi kolme"
sanat = lause.split(" ")
print(sanat)        # ['yksi', 'kaksi', 'kolme']
print(sanat[0])     # yksi
print(len(sanat))   # 3</code></pre>
            <p>Ilman argumenttia .split() jakaa välilyöntien kohdalta.</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>3</code> (sanojen lukumäärä).",
        starterCode: `lause = "Python on kivaa"
sanat = lause.___()
print(len(sanat))`,
        hint: "Mikä metodi jakaa tekstin sanoiksi välilyöntien kohdalta?",
        validate: function(output) {
            return output.trim() === "3";
        },
        successMsg: "Hienoa! .split() jakaa tekstin listaksi — 3 sanaa! ✂️",
        failMsg: "Tuloksen pitäisi olla 3. Mikä metodi pilkkoo merkkijonon?",
        maxStars: 3
    },
    {
    id: 61,


        legacyId: 16,
        section: "merkkijonot",
        title: "Yhdistä lista 🧵",
        slug: "merkkijonot-yhdista-lista",
        icon: "🧵",
        description: "Yhdistä listan sanat yhdeksi merkkijonoksi — .join() on vastakohta .split():lle!",
        theory: `
            <h4>📚 .join() — yhdistä lista</h4>
            <p><code>erotin.join(lista)</code> yhdistää listan merkkijonot:</p>
            <pre><code>sanat = ["Hei", "kaikki", "yhdessä"]
print(" ".join(sanat))    # Hei kaikki yhdessä
print("-".join(sanat))    # Hei-kaikki-yhdessä
print("".join(sanat))     # Heikaikki yhdessä</code></pre>
            <p>Huomaa: .join() kutsutaan EROTTIMEN päältä, ei listan!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>Python-on-paras</code>.",
        starterCode: `sanat = ["Python", "on", "paras"]
tulos = "___".join(sanat)
print(tulos)`,
        hint: "Mikä merkki yhdistää sanat viivalla? Laita se lainausmerkkien sisään.",
        validate: function(output) {
            return output.trim() === "Python-on-paras";
        },
        successMsg: "Oikein! '-'.join() yhdistää viivalla — Python-on-paras! 🧵",
        failMsg: "Tuloksen pitäisi olla 'Python-on-paras'. Mikä erotin laitetaan väliin?",
        maxStars: 3
    },
    {
    id: 62,


        legacyId: 16,
        section: "merkkijonot",
        title: "Poista välilyönnit 🧹",
        slug: "merkkijonot-poista-valilyonnit",
        icon: "🧹",
        description: "Siivoa turhat välilyönnit pois tekstin alusta ja lopusta!",
        theory: `
            <h4>📚 .strip() — poista tyhjät</h4>
            <p><code>.strip()</code> poistaa välilyönnit ja rivinvaihdot alusta ja lopusta:</p>
            <pre><code>teksti = "   Hei!   "
print(teksti.strip())    # "Hei!"
print(teksti.lstrip())   # "Hei!   "  (vain vasemmalta)
print(teksti.rstrip())   # "   Hei!"  (vain oikealta)</code></pre>
            <p>Tämä on erittäin yleistä käyttäjän syötteen siivoamisessa!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>Tervetuloa</code> ilman välilyöntejä.",
        starterCode: `syote = "   Tervetuloa   "
siisti = syote.___()
print(siisti)`,
        hint: "Mikä metodi 'strippaa' välilyönnit pois alusta ja lopusta?",
        validate: function(output) {
            return output.trim() === "Tervetuloa";
        },
        successMsg: "Hienoa! .strip() siivoaa turhat välilyönnit! 🧹",
        failMsg: "Tuloksen pitäisi olla 'Tervetuloa' ilman välejä. Mikä metodi siivoaa?",
        maxStars: 3
    },
    {
    id: 63,


        legacyId: 16,
        section: "merkkijonot",
        title: "Alkukirjain isoksi 🎩",
        slug: "merkkijonot-alkukirjain-isoksi",
        icon: "🎩",
        description: "Muuta ensimmäinen kirjain isoksi — niin kuin lauseen alussa!",
        theory: `
            <h4>📚 .capitalize() ja .title()</h4>
            <p><code>.capitalize()</code> tekee ensimmäisestä kirjaimesta ison:</p>
            <pre><code>print("python".capitalize())    # Python
print("hei maailma".capitalize()) # Hei maailma</code></pre>
            <p><code>.title()</code> tekee JOKA sanan ensimmäisestä ison:</p>
            <pre><code>print("hei maailma".title())    # Hei Maailma</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>Hei Kaikki Yhdessä</code> (joka sanan alkukirjain iso).",
        starterCode: `teksti = "hei kaikki yhdessä"
tulos = teksti.___()
print(tulos)`,
        hint: "Mikä metodi tekee JOKA sanan alkukirjaimesta ison? Ajattele 'otsikkoa'...",
        validate: function(output) {
            return output.trim() === "Hei Kaikki Yhdessä";
        },
        successMsg: "Oikein! .title() tekee otsikkomuodon — joka sana isolla! 🎩",
        failMsg: "Tuloksen pitäisi olla 'Hei Kaikki Yhdessä'. Kokeile .title() tai .capitalize().",
        maxStars: 3
    },
    {
    id: 64,


        legacyId: 16,
        section: "merkkijonot",
        title: "Laske esiintymät 🔢",
        slug: "merkkijonot-laske-esiintymat",
        icon: "🔢",
        description: "Montako kertaa jokin kirjain tai sana esiintyy tekstissä?",
        theory: `
            <h4>📚 .count() — laske esiintymät</h4>
            <p><code>.count(teksti)</code> laskee montako kertaa teksti esiintyy:</p>
            <pre><code>lause = "banana"
print(lause.count("a"))     # 3
print(lause.count("na"))    # 2
print(lause.count("x"))     # 0</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa montako <code>o</code>-kirjainta sanassa 'Koodikoulu' on.",
        starterCode: `sana = "Koodikoulu"
maara = sana.___("o")
print(maara)`,
        hint: "Mikä metodi laskee merkin esiintymät? Se on englantia ja tarkoittaa 'laskea'.",
        validate: function(output) {
            return output.trim() === "3";
        },
        successMsg: "Oikein! .count('o') = 3 — Koodikoulu sisältää kolme o-kirjainta! 🔢",
        failMsg: "Laske o-kirjaimet: K-o-o-d-i-k-o-u-l-u. Mikä metodi laskee?",
        maxStars: 3
    },
    {
    id: 65,


        legacyId: 16,
        section: "merkkijonot",
        title: "Alkaa ja loppuu 🏷️",
        slug: "merkkijonot-alkaa-ja-loppuu",
        icon: "🏷️",
        description: "Tarkista alkaako tai loppuuko teksti tietyllä sanalla!",
        theory: `
            <h4>📚 .startswith() ja .endswith()</h4>
            <p>Nämä tarkistavat merkkijonon alun tai lopun:</p>
            <pre><code>nimi = "tiedosto.py"
print(nimi.endswith(".py"))     # True
print(nimi.startswith("tie"))   # True
print(nimi.endswith(".txt"))    # False</code></pre>
            <p>Erittäin hyödyllinen tiedostonimien tarkistamiseen!</p>
        `,
        challenge: "Korvaa molemmat <code>___</code> niin, että ohjelma tulostaa kaksi kertaa <code>True</code>.",
        starterCode: `tiedosto = "kuva.png"
print(tiedosto.___(".png"))
print(tiedosto.___("kuva"))`,
        hint: "Ensimmäinen tarkistaa LOPPUUKO tiedosto '.png':hen. Toinen tarkistaa ALKAAKO se 'kuva':lla.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].trim() === "True" && lines[1].trim() === "True";
        },
        successMsg: "Hienoa! .endswith() ja .startswith() tarkistavat alun ja lopun! 🏷️",
        failMsg: "Molempien pitäisi olla True. Mikä tarkistaa lopun, mikä alun?",
        maxStars: 3
    },
    {
    id: 66,


        legacyId: 16,
        section: "merkkijonot",
        title: "F-merkkijono ✨",
        slug: "merkkijonot-f-merkkijono",
        icon: "✨",
        description: "Upota muuttujia suoraan tekstiin — f-stringit ovat Pythonin paras tapa!",
        theory: `
            <h4>📚 F-merkkijonot (f-strings)</h4>
            <p>Laita <code>f</code> ennen lainausmerkkiä ja muuttujat aaltosulkeisiin:</p>
            <pre><code>nimi = "Matti"
ika = 10
print(f"Hei, olen {nimi} ja olen {ika} vuotta!")
# Hei, olen Matti ja olen 10 vuotta!</code></pre>
            <p>F-stringit ovat selkein tapa yhdistää tekstiä ja muuttujia! 🎯</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>Moi, nimeni on Ada!</code>.",
        starterCode: `nimi = "Ada"
viesti = f"Moi, nimeni on ___!"
print(viesti)`,
        hint: "F-stringissä muuttuja laitetaan aaltosulkeisiin: {muuttuja}",
        validate: function(output) {
            return output.trim() === "Moi, nimeni on Ada!";
        },
        successMsg: "Oikein! f'{nimi}' upottaa muuttujan arvon tekstiin! ✨",
        failMsg: "Tuloksen pitäisi olla 'Moi, nimeni on Ada!'. Muista aaltosulkeet: {nimi}",
        maxStars: 3
    },
    {
    id: 67,


        legacyId: 16,
        section: "merkkijonot",
        title: "Onko numero? 🔢",
        slug: "merkkijonot-onko-numero",
        icon: "🔢",
        description: "Tarkista koostuuko teksti pelkistä numeroista!",
        theory: `
            <h4>📚 .isdigit() ja .isalpha()</h4>
            <p>Nämä tarkistavat merkkijonon sisällön:</p>
            <pre><code>print("123".isdigit())    # True (pelkkiä numeroita)
print("12a".isdigit())    # False (a ei ole numero)
print("abc".isalpha())    # True (pelkkiä kirjaimia)
print("ab1".isalpha())    # False</code></pre>
        `,
        challenge: "Korvaa molemmat <code>___</code> oikeilla metodeilla niin, että ohjelma tulostaa <code>True</code> ja <code>True</code>.",
        starterCode: `numero = "2026"
print(numero.___())

kirjaimet = "Python"
print(kirjaimet.___())`,
        hint: "Ensimmäinen tarkistaa onko pelkkiä NUMEROMERKKEJÄ. Toinen tarkistaa onko pelkkiä KIRJAIMIA.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].trim() === "True" && lines[1].trim() === "True";
        },
        successMsg: "Oikein! .isdigit() tarkistaa numerot, .isalpha() kirjaimet! 🔢",
        failMsg: "Molempien pitäisi olla True. Onko '2026' pelkkiä numeroja? Onko 'Python' pelkkiä kirjaimia?",
        maxStars: 3
    },
    {
    id: 68,


        legacyId: 16,
        section: "merkkijonot",
        title: "Käännä teksti 🔃",
        slug: "merkkijonot-kaanna-teksti",
        icon: "🔃",
        description: "Kirjoita teksti takaperin — Pythonissa se on helppoa!",
        theory: `
            <h4>📚 Merkkijonon kääntäminen</h4>
            <p>Viipaloinnilla voi kääntää merkkijonon:</p>
            <pre><code>sana = "Python"
print(sana[::-1])    # nohtyP

# [::-1] tarkoittaa: ota kaikki merkit, askel -1 (takaperin)</code></pre>
            <p>Tämä on Pythonin taikatempu — lyhyt ja tehokas!</p>
        `,
        challenge: "Korvaa <code>___</code> oikealla slice-notaatiolla niin, että ohjelma tulostaa <code>iom</code>.",
        starterCode: `sana = "moi"
kaannetty = sana[___]
print(kaannetty)`,
        hint: "[::-1] kääntää merkkijonon. Kaksoispiste, kaksoispiste, miinus yksi.",
        validate: function(output) {
            return output.trim() === "iom";
        },
        successMsg: "Hienoa! [::-1] kääntää tekstin takaperin — moi → iom! 🔃",
        failMsg: "Tuloksen pitäisi olla 'iom'. Kokeile [::-1] viipaloinnilla.",
        maxStars: 3
    },
    {
    id: 69,


        legacyId: 16,
        section: "merkkijonot",
        title: "Monirivinen teksti 📄",
        slug: "merkkijonot-monirivinen-teksti",
        icon: "📄",
        description: "Kirjoita pitkää tekstiä usealle riville — kolme lainausmerkkiä auttaa!",
        theory: `
            <h4>📚 Monirivinen merkkijono</h4>
            <p>Kolme lainausmerkkiä <code>\"\"\"</code> tai <code>'''</code> sallii monta riviä:</p>
            <pre><code>runo = \"\"\"Ruusut on punaiset,
orvokit on siniset.\"\"\"
print(runo)</code></pre>
            <p>Rivinvaihdot säilyvät automaattisesti!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa kaksi riviä: <code>Rivi 1</code> ja <code>Rivi 2</code>.",
        starterCode: `teksti = ___Rivi 1
Rivi 2___
print(teksti)`,
        hint: "Kolme lainausmerkkiä aloittaa ja lopettaa monirivisen merkkijonon: \"\"\"...\"\"\"",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].trim() === "Rivi 1" && lines[1].trim() === "Rivi 2";
        },
        successMsg: "Oikein! Kolme lainausmerkkiä tekee monirivisen tekstin! 📄",
        failMsg: "Tulostuksen pitäisi olla kaksi riviä: 'Rivi 1' ja 'Rivi 2'. Kokeile kolmea lainausmerkkiä.",
        maxStars: 3
    },
    {
    id: 70,


        legacyId: 16,
        section: "merkkijonot",
        title: "Täytä merkkijono 📐",
        slug: "merkkijonot-tayta-merkkijono",
        icon: "📐",
        description: "Keskitä tai täytä teksti tiettyyn leveyteen!",
        theory: `
            <h4>📚 .center(), .ljust(), .rjust(), .zfill()</h4>
            <p>Nämä täyttävät merkkijonon tiettyyn leveyteen:</p>
            <pre><code>print("Hei".center(11))     #     Hei    
print("Hei".center(11, "-")) # ----Hei----
print("42".zfill(5))         # 00042</code></pre>
            <p><code>.zfill()</code> on kätevä numeroiden muotoiluun nollilla!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>007</code>.",
        starterCode: `agentti = "7"
koodi = agentti.___(3)
print(koodi)`,
        hint: "Mikä metodi täyttää merkkijonon vasemmalta nollilla? 'zero fill'...",
        validate: function(output) {
            return output.trim() === "007";
        },
        successMsg: "Oikein! .zfill(3) täyttää nollilla — 7 → 007! Bond, James Bond. 📐",
        failMsg: "Tuloksen pitäisi olla '007'. Mikä metodi täyttää nollilla?",
        maxStars: 3
    },
    {
    id: 71,


        legacyId: 16,
        section: "merkkijonot",
        title: "Merkkijonomestari 🏆",
        slug: "merkkijonot-merkkijonomestari",
        icon: "🏆",
        description: "Viimeinen haaste — käytä kaikkia oppimiasi merkkijonometodeja!",
        theory: `
            <h4>📚 Kertaus — merkkijonometodit!</h4>
            <table style="width:100%; border-collapse: collapse; font-size: 0.95em;">
            <tr style="background: var(--accent-blue); color: white;"><th style="padding:6px;">Metodi</th><th style="padding:6px;">Toiminto</th><th style="padding:6px;">Esimerkki</th></tr>
            <tr><td style="padding:4px 6px;"><code>len(s)</code></td><td>Pituus</td><td>len("Moi") → 3</td></tr>
            <tr><td style="padding:4px 6px;"><code>.upper()</code> <code>.lower()</code></td><td>Iso/pieni</td><td>"moi".upper() → MOI</td></tr>
            <tr><td style="padding:4px 6px;"><code>[i]</code> <code>[a:b]</code></td><td>Indeksi/viipale</td><td>"Moi"[0] → M</td></tr>
            <tr><td style="padding:4px 6px;"><code>.replace()</code></td><td>Korvaa</td><td>"abc".replace("a","x") → xbc</td></tr>
            <tr><td style="padding:4px 6px;"><code>.split()</code> <code>.join()</code></td><td>Pilko/yhdistä</td><td>"a b".split() → ['a','b']</td></tr>
            <tr><td style="padding:4px 6px;"><code>.strip()</code></td><td>Siivoa</td><td>" Hei ".strip() → Hei</td></tr>
            <tr><td style="padding:4px 6px;"><code>.find()</code> <code>.count()</code></td><td>Etsi/laske</td><td>"aaa".count("a") → 3</td></tr>
            <tr><td style="padding:4px 6px;"><code>f"...{x}"</code></td><td>F-string</td><td>f"Hei {nimi}" → Hei Matti</td></tr>
            <tr><td style="padding:4px 6px;"><code>[::-1]</code></td><td>Käännä</td><td>"abc"[::-1] → cba</td></tr>
            </table>
        `,
        challenge: "Korvaa KAIKKI <code>___</code> niin, että ohjelma tulostaa neljä kertaa <code>True</code>!",
        starterCode: `# 1. Pituus
sana = "Koodikoulu"
print(___(sana) == 10)

# 2. Isot kirjaimet
print("python".___() == "PYTHON")

# 3. Viimeinen merkki
print("ohjelmointi"[___] == "i")

# 4. Korvaa ja tarkista
lause = "Java on kiva"
print(lause.___("Java", "Python") == "Python on kiva")`,
        hint: "1: len(sana). 2: .upper(). 3: [-1] viimeinen merkki. 4: .replace().",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 4 &&
                   lines[0].trim() === "True" &&
                   lines[1].trim() === "True" &&
                   lines[2].trim() === "True" &&
                   lines[3].trim() === "True";
        },
        successMsg: "MESTARI! 🏆 Osaat merkkijonot! Neljä True-vastausta — olet merkkijonomestari!",
        failMsg: "Kaikkien neljän rivin pitäisi tulostaa True. Lue vihje ja yritä uudelleen!",
        maxStars: 3
    },

    // =============================================
    //  LISTAT (IDs 67–86)
    //  20 tehtävää: Pythonin listat
    // =============================================

    {
    id: 72,


        legacyId: 16,
        section: "listat",
        title: "Listan luominen 📋",
        slug: "listat-listan-luominen",
        icon: "📋",
        description: "Luo oma lista — Pythonin tärkein tietorakenne!",
        theory: `
            <h4>📚 Lista — kokoelma arvoja</h4>
            <p>Lista on järjestetty kokoelma arvoja hakasulkeissa <code>[]</code>:</p>
            <pre><code>numerot = [1, 2, 3, 4, 5]
hedelmät = ["omena", "banaani", "kiivi"]
tyhjä = []
print(numerot)     # [1, 2, 3, 4, 5]
print(hedelmät)    # ['omena', 'banaani', 'kiivi']</code></pre>
            <p>Lista voi sisältää mitä tahansa: numeroita, tekstiä, tai molempia!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että lista sisältää kolme eläintä: <code>koira</code>, <code>kissa</code> ja <code>kani</code>.",
        starterCode: `elaimet = [___, ___, ___]
print(elaimet)`,
        hint: "Kirjoita hakasulkeisiin kolme sanaa lainausmerkeissä, pilkuilla erotettuna.",
        validate: function(output) {
            return output.trim() === "['koira', 'kissa', 'kani']";
        },
        successMsg: "Hienoa! Loit ensimmäisen listasi! 📋",
        failMsg: "Listan pitäisi olla ['koira', 'kissa', 'kani']. Muista lainausmerkit!",
        maxStars: 3
    },
    {
    id: 73,


        legacyId: 16,
        section: "listat",
        title: "Listan pituus 📏",
        slug: "listat-listan-pituus",
        icon: "📏",
        description: "Montako alkiota listassa on? len() kertoo!",
        theory: `
            <h4>📚 len() — listan pituus</h4>
            <p><code>len()</code> toimii listoille samoin kuin merkkijonoille:</p>
            <pre><code>numerot = [10, 20, 30, 40]
print(len(numerot))   # 4

tyhjä = []
print(len(tyhjä))     # 0</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa listan pituuden.",
        starterCode: `kaupat = ["Prisma", "K-market", "Lidl", "S-market", "Alepa"]
print(___(kaupat))`,
        hint: "Sama funktio kuin merkkijonon pituudelle — kolme kirjainta!",
        validate: function(output) {
            return output.trim() === "5";
        },
        successMsg: "Oikein! Listassa on 5 kauppaa! 📏",
        failMsg: "Tuloksen pitäisi olla 5. Mikä funktio laskee pituuden?",
        maxStars: 3
    },
    {
    id: 74,


        legacyId: 16,
        section: "listat",
        title: "Listan indeksointi 🎯",
        slug: "listat-listan-indeksointi",
        icon: "🎯",
        description: "Hae tietty alkio listasta — indeksointi toimii kuten merkkijonoissa!",
        theory: `
            <h4>📚 Listan indeksointi</h4>
            <p>Jokaisella alkiolla on indeksi, alkaen 0:sta:</p>
            <pre><code>värit = ["punainen", "sininen", "vihreä"]
#          0            1           2
print(värit[0])    # punainen
print(värit[1])    # sininen
print(värit[-1])   # vihreä (viimeinen)</code></pre>
        `,
        challenge: "Korvaa <code>___</code> oikealla indeksillä niin, että ohjelma tulostaa <code>banaani</code>.",
        starterCode: `hedelmät = ["omena", "banaani", "kiivi"]
print(hedelmät[___])`,
        hint: "banaani on listan toinen alkio. Muista: indeksointi alkaa nollasta!",
        validate: function(output) {
            return output.trim() === "banaani";
        },
        successMsg: "Oikein! hedelmät[1] = 'banaani' — toinen alkio on indeksissä 1! 🎯",
        failMsg: "Tuloksen pitäisi olla 'banaani'. Muista: ensimmäinen on [0], toinen on [1].",
        maxStars: 3
    },
    {
    id: 75,


        legacyId: 16,
        section: "listat",
        title: "Lisää listaan ➕",
        slug: "listat-lisaa-listaan",
        icon: "➕",
        description: "Lisää uusi alkio listan loppuun — .append() on listojen perustyökalu!",
        theory: `
            <h4>📚 .append() — lisää loppuun</h4>
            <p><code>.append(arvo)</code> lisää uuden alkion listan loppuun:</p>
            <pre><code>numerot = [1, 2, 3]
numerot.append(4)
print(numerot)   # [1, 2, 3, 4]

numerot.append(5)
print(numerot)   # [1, 2, 3, 4, 5]</code></pre>
            <p>⚠️ .append() muuttaa ALKUPERÄISTÄ listaa (toisin kuin merkkijonometodeissa)!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että listaan lisätään <code>'mansikka'</code> ja tuloste on 4 alkiota pitkä.",
        starterCode: `hedelmät = ["omena", "banaani", "kiivi"]
hedelmät.___(___) 
print(hedelmät)
print(len(hedelmät))`,
        hint: "Mikä metodi lisää alkion listan loppuun? Se on englantia ja tarkoittaa 'liittää'.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].includes("mansikka") && lines[1].trim() === "4";
        },
        successMsg: "Hienoa! .append('mansikka') lisäsi uuden hedelmän listaan! ➕",
        failMsg: "Listaan pitäisi lisätä 'mansikka'. Käytä .append()-metodia.",
        maxStars: 3
    },
    {
    id: 76,


        legacyId: 16,
        section: "listat",
        title: "Lisää keskelle 📌",
        slug: "listat-lisaa-keskelle",
        icon: "📌",
        description: "Lisää alkio tiettyyn kohtaan listassa — .insert() osaa!",
        theory: `
            <h4>📚 .insert(indeksi, arvo) — lisää tiettyyn kohtaan</h4>
            <p><code>.insert()</code> lisää alkion haluttuun indeksiin:</p>
            <pre><code>nimet = ["Anna", "Kalle"]
nimet.insert(1, "Bertta")
print(nimet)   # ['Anna', 'Bertta', 'Kalle']</code></pre>
            <p>Muut alkiot siirtyvät oikealle!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että <code>'B'</code> lisätään indeksiin 1. Tulosteeksi pitäisi tulla <code>['A', 'B', 'C', 'D']</code>.",
        starterCode: `kirjaimet = ["A", "C", "D"]
kirjaimet.___(___,  ___)
print(kirjaimet)`,
        hint: ".insert(indeksi, arvo) — mihin indeksiin 'B' kuuluu?",
        validate: function(output) {
            return output.trim() === "['A', 'B', 'C', 'D']";
        },
        successMsg: "Oikein! .insert(1, 'B') lisäsi B:n oikeaan kohtaan! 📌",
        failMsg: "Tuloksen pitäisi olla ['A', 'B', 'C', 'D']. Mihin indeksiin B kuuluu?",
        maxStars: 3
    },
    {
    id: 77,


        legacyId: 16,
        section: "listat",
        title: "Poista nimellä ❌",
        slug: "listat-poista-nimella",
        icon: "❌",
        description: "Poista tietty alkio listasta — .remove() etsii ja poistaa!",
        theory: `
            <h4>📚 .remove(arvo) — poista alkio</h4>
            <p><code>.remove()</code> poistaa ENSIMMÄISEN vastaavan alkion:</p>
            <pre><code>numerot = [1, 2, 3, 2, 1]
numerot.remove(2)
print(numerot)   # [1, 3, 2, 1]  (vain ensimmäinen 2 poistui)</code></pre>
            <p>⚠️ Jos alkiota ei löydy, tulee virhe!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että <code>'maito'</code> poistetaan ostoslistalta.",
        starterCode: `ostoslista = ["leipä", "maito", "juusto", "voi"]
ostoslista.___(___)
print(ostoslista)`,
        hint: "Mikä metodi poistaa alkion nimellä? Anna sille poistettavan arvon.",
        validate: function(output) {
            return output.trim() === "['leipä', 'juusto', 'voi']";
        },
        successMsg: "Oikein! .remove('maito') poisti maidon listalta! ❌",
        failMsg: "Listasta pitäisi poistaa 'maito'. Käytä .remove()-metodia.",
        maxStars: 3
    },
    {
    id: 78,


        legacyId: 16,
        section: "listat",
        title: "Poista indeksillä 🗑️",
        slug: "listat-poista-indeksilla",
        icon: "🗑️",
        description: "Poista alkio tietystä kohdasta — .pop() poistaa ja palauttaa!",
        theory: `
            <h4>📚 .pop(indeksi) — poista ja palauta</h4>
            <p><code>.pop()</code> poistaa alkion ja palauttaa sen:</p>
            <pre><code>numerot = [10, 20, 30, 40]
poistettu = numerot.pop(0)    # poista ensimmäinen
print(poistettu)    # 10
print(numerot)      # [20, 30, 40]

viimeinen = numerot.pop()     # ilman indeksiä = viimeinen
print(viimeinen)    # 40</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että viimeinen alkio poistetaan ja tulostetaan erikseen.",
        starterCode: `pisteet = [85, 92, 78, 95]
paras = pisteet.___()
print(f"Paras: {paras}")
print(f"Loput: {pisteet}")`,
        hint: ".pop() ilman argumenttia poistaa ja palauttaa viimeisen alkion.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].trim() === "Paras: 95" && lines[1].trim() === "Loput: [85, 92, 78]";
        },
        successMsg: "Oikein! .pop() palautti viimeisen alkion 95 ja poisti sen! 🗑️",
        failMsg: "Tuloksen pitäisi olla 'Paras: 95' ja 'Loput: [85, 92, 78]'.",
        maxStars: 3
    },
    {
    id: 79,


        legacyId: 16,
        section: "listat",
        title: "Järjestä lista 🔢",
        slug: "listat-jarjesta-lista",
        icon: "🔢",
        description: "Laita listan alkiot järjestykseen — .sort() hoitaa homman!",
        theory: `
            <h4>📚 .sort() — järjestä lista</h4>
            <p><code>.sort()</code> järjestää listan pienimmästä suurimpaan:</p>
            <pre><code>luvut = [5, 2, 8, 1, 9]
luvut.sort()
print(luvut)   # [1, 2, 5, 8, 9]

# Käänteinen järjestys:
luvut.sort(reverse=True)
print(luvut)   # [9, 8, 5, 2, 1]</code></pre>
            <p>⚠️ .sort() muuttaa alkuperäistä listaa!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että numerot järjestetään pienimmästä suurimpaan.",
        starterCode: `numerot = [42, 7, 99, 13, 25]
numerot.___()
print(numerot)`,
        hint: "Mikä metodi järjestää listan? Se on englantia ja tarkoittaa 'lajitella'.",
        validate: function(output) {
            return output.trim() === "[7, 13, 25, 42, 99]";
        },
        successMsg: "Hienoa! .sort() laittoi numerot järjestykseen! 🔢",
        failMsg: "Tuloksen pitäisi olla [7, 13, 25, 42, 99]. Mikä metodi järjestää?",
        maxStars: 3
    },
    {
    id: 80,


        legacyId: 16,
        section: "listat",
        title: "Käännä lista 🔃",
        slug: "listat-kaanna-lista",
        icon: "🔃",
        description: "Käännä listan järjestys päinvastaiseksi!",
        theory: `
            <h4>📚 .reverse() — käännä järjestys</h4>
            <p><code>.reverse()</code> kääntää listan takaperin:</p>
            <pre><code>kirjaimet = ["A", "B", "C", "D"]
kirjaimet.reverse()
print(kirjaimet)   # ['D', 'C', 'B', 'A']</code></pre>
            <p>Voit myös käyttää viipaloinnin temppua: <code>lista[::-1]</code></p>
        `,
        challenge: "Korvaa <code>___</code> niin, että lista kääntyy takaperin.",
        starterCode: `luvut = [1, 2, 3, 4, 5]
luvut.___()
print(luvut)`,
        hint: "Mikä metodi kääntää listan? Sama idea kuin merkkijonoissa mutta listametodina.",
        validate: function(output) {
            return output.trim() === "[5, 4, 3, 2, 1]";
        },
        successMsg: "Oikein! .reverse() kääntää listan — 1,2,3,4,5 → 5,4,3,2,1! 🔃",
        failMsg: "Tuloksen pitäisi olla [5, 4, 3, 2, 1]. Mikä metodi kääntää?",
        maxStars: 3
    },
    {
    id: 81,


        legacyId: 16,
        section: "listat",
        title: "Onko listassa? 🔍",
        slug: "listat-onko-listassa",
        icon: "🔍",
        description: "Tarkista onko alkio listassa — in-sana on Pythonin helmi!",
        theory: `
            <h4>📚 in — tarkista jäsenyys</h4>
            <p><code>arvo in lista</code> palauttaa True tai False:</p>
            <pre><code>hedelmät = ["omena", "banaani", "kiivi"]
print("banaani" in hedelmät)    # True
print("mango" in hedelmät)      # False
print("mango" not in hedelmät)  # True</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tarkistaa onko 'Python' kielten listassa.",
        starterCode: `kielet = ["Python", "Java", "JavaScript", "C++"]
print("Python" ___ kielet)`,
        hint: "Mikä sana tarkistaa onko arvo listassa? Kaksi kirjainta...",
        validate: function(output) {
            return output.trim() === "True";
        },
        successMsg: "Oikein! 'Python' in kielet = True — kyllä löytyy! 🔍",
        failMsg: "Tuloksen pitäisi olla True. Mikä sana tarkistaa jäsenyyden?",
        maxStars: 3
    },
    {
    id: 82,


        legacyId: 16,
        section: "listat",
        title: "Etsi sijainti 📍",
        slug: "listat-etsi-sijainti",
        icon: "📍",
        description: "Missä kohdassa listaa alkio on? .index() kertoo!",
        theory: `
            <h4>📚 .index(arvo) — etsi indeksi</h4>
            <p><code>.index()</code> palauttaa ensimmäisen vastaavan alkion indeksin:</p>
            <pre><code>eläimet = ["koira", "kissa", "kani", "kissa"]
print(eläimet.index("kissa"))   # 1 (ensimmäinen osuma)
print(eläimet.index("kani"))    # 2</code></pre>
            <p>⚠️ Jos alkiota ei löydy, tulee ValueError-virhe!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>2</code> (missä indeksissä 'C' on).",
        starterCode: `arvosanat = ["A", "B", "C", "D", "E"]
sijainti = arvosanat.___("C")
print(sijainti)`,
        hint: "Mikä metodi etsii alkion sijainnin listasta? Ajattele 'indeksiä'.",
        validate: function(output) {
            return output.trim() === "2";
        },
        successMsg: "Oikein! .index('C') = 2 — C on indeksissä 2! 📍",
        failMsg: "Tuloksen pitäisi olla 2. Mikä metodi etsii alkion indeksin?",
        maxStars: 3
    },
    {
    id: 83,


        legacyId: 16,
        section: "listat",
        title: "Laske esiintymät 🔢",
        slug: "listat-laske-esiintymat",
        icon: "🔢",
        description: "Montako kertaa sama alkio esiintyy listassa?",
        theory: `
            <h4>📚 .count(arvo) — laske esiintymät</h4>
            <p><code>.count()</code> laskee montako kertaa arvo esiintyy listassa:</p>
            <pre><code>numerot = [1, 3, 1, 4, 1, 5]
print(numerot.count(1))   # 3
print(numerot.count(4))   # 1
print(numerot.count(9))   # 0</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma laskee montako kertaa <code>'kissa'</code> esiintyy.",
        starterCode: `eläimet = ["koira", "kissa", "kani", "kissa", "kissa"]
montako = eläimet.___(___)
print(montako)`,
        hint: "Sama metodi kuin merkkijonoissa! Laske 'kissa'-esiintymät.",
        validate: function(output) {
            return output.trim() === "3";
        },
        successMsg: "Oikein! .count('kissa') = 3 — kolme kissaa listassa! 🔢",
        failMsg: "Tuloksen pitäisi olla 3. Mikä metodi laskee esiintymät?",
        maxStars: 3
    },
    {
    id: 84,


        legacyId: 16,
        section: "listat",
        title: "Listan viipalointi 🔪",
        slug: "listat-listan-viipalointi",
        icon: "🔪",
        description: "Leikkaa osa listasta — viipalointi toimii kuten merkkijonoissa!",
        theory: `
            <h4>📚 Listan viipalointi</h4>
            <p>Samat säännöt kuin merkkijonoissa:</p>
            <pre><code>luvut = [10, 20, 30, 40, 50]
print(luvut[1:3])    # [20, 30]
print(luvut[:2])     # [10, 20]
print(luvut[3:])     # [40, 50]
print(luvut[::-1])   # [50, 40, 30, 20, 10]</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa kolme keskimmäistä: <code>[20, 30, 40]</code>.",
        starterCode: `luvut = [10, 20, 30, 40, 50]
keskellä = luvut[___:___]
print(keskellä)`,
        hint: "20 on indeksissä 1, 40 on indeksissä 3. Muista: loppu-indeksi ei sisälly!",
        validate: function(output) {
            return output.trim() === "[20, 30, 40]";
        },
        successMsg: "Hienoa! luvut[1:4] = [20, 30, 40] — viipalointi toimii listoillekin! 🔪",
        failMsg: "Tuloksen pitäisi olla [20, 30, 40]. Mitkä indeksit?",
        maxStars: 3
    },
    {
    id: 85,


        legacyId: 16,
        section: "listat",
        title: "Min, max ja summa 📊",
        slug: "listat-min-max-ja-summa",
        icon: "📊",
        description: "Etsi pienin, suurin ja laske yhteen — kolme hyödyllistä funktiota!",
        theory: `
            <h4>📚 min(), max(), sum()</h4>
            <p>Nämä toimivat suoraan listoille:</p>
            <pre><code>pisteet = [85, 92, 78, 95, 88]
print(min(pisteet))   # 78 (pienin)
print(max(pisteet))   # 95 (suurin)
print(sum(pisteet))   # 438 (summa)</code></pre>
        `,
        challenge: "Korvaa kaikki <code>___</code> niin, että ohjelma tulostaa pienimmän, suurimman ja summan.",
        starterCode: `arvot = [12, 45, 7, 23, 38]
print(___(arvot))
print(___(arvot))
print(___(arvot))`,
        hint: "Kolme funktiota: pienin = min, suurin = max, yhteensä = sum.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 && lines[0].trim() === "7" && lines[1].trim() === "45" && lines[2].trim() === "125";
        },
        successMsg: "Oikein! min=7, max=45, sum=125 — kolme hyödyllistä funktiota! 📊",
        failMsg: "Tuloksen pitäisi olla 7, 45 ja 125. Käytä min(), max() ja sum().",
        maxStars: 3
    },
    {
    id: 86,


        legacyId: 16,
        section: "listat",
        title: "Käy lista läpi 🔄",
        slug: "listat-kay-lista-lapi",
        icon: "🔄",
        description: "Tulosta jokainen alkio yksitellen — for-silmukka on listojen paras kaveri!",
        theory: `
            <h4>📚 for-silmukka listoille</h4>
            <p><code>for alkio in lista:</code> käy jokaisen alkion läpi:</p>
            <pre><code>värit = ["punainen", "sininen", "vihreä"]
for väri in värit:
    print(väri)
# punainen
# sininen
# vihreä</code></pre>
            <p>⚠️ Muista sisennys — for-lohkon koodi sisennetään 4 välilyönnillä!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa jokaisen hedelmän omalle rivilleen.",
        starterCode: `hedelmät = ["omena", "banaani", "kiivi"]
for hedelmä ___ hedelmät:
    print(hedelmä)`,
        hint: "for ... IN ... — mikä sana puuttuu? Se on lyhyt englanninkielinen sana!",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 && lines[0].trim() === "omena" && lines[1].trim() === "banaani" && lines[2].trim() === "kiivi";
        },
        successMsg: "Hienoa! for-silmukka tulosti kaikki hedelmät! 🔄",
        failMsg: "Jokaisen hedelmän pitäisi tulostua omalle rivilleen. Mikä sana puuttuu for-lauseesta?",
        maxStars: 3
    },
    {
    id: 87,


        legacyId: 16,
        section: "listat",
        title: "Yhdistä listat ➕",
        slug: "listat-yhdista-listat",
        icon: "➕",
        description: "Yhdistä kaksi listaa yhdeksi — plus-operaattori toimii!",
        theory: `
            <h4>📚 Listojen yhdistäminen</h4>
            <p><code>+</code> yhdistää kaksi listaa uudeksi listaksi:</p>
            <pre><code>a = [1, 2, 3]
b = [4, 5, 6]
c = a + b
print(c)   # [1, 2, 3, 4, 5, 6]</code></pre>
            <p><code>.extend()</code> lisää toisen listan alkiot alkuperäiseen:</p>
            <pre><code>a.extend(b)
print(a)   # [1, 2, 3, 4, 5, 6]</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että listat yhdistyvät ja tulosteena on <code>[1, 2, 3, 4, 5, 6]</code>.",
        starterCode: `alku = [1, 2, 3]
loppu = [4, 5, 6]
kaikki = alku ___ loppu
print(kaikki)`,
        hint: "Mikä operaattori yhdistää kaksi listaa? Sama kuin lukujen yhteenlasku!",
        validate: function(output) {
            return output.trim() === "[1, 2, 3, 4, 5, 6]";
        },
        successMsg: "Oikein! [1,2,3] + [4,5,6] = [1,2,3,4,5,6] — listat yhdistyivät! ➕",
        failMsg: "Tuloksen pitäisi olla [1, 2, 3, 4, 5, 6]. Mikä operaattori yhdistää?",
        maxStars: 3
    },
    {
    id: 88,


        legacyId: 16,
        section: "listat",
        title: "Muuta alkiota ✏️",
        slug: "listat-muuta-alkiota",
        icon: "✏️",
        description: "Vaihda listan yksittäinen alkio toiseksi — listat ovat muuttuvia!",
        theory: `
            <h4>📚 Alkion muuttaminen</h4>
            <p>Listan alkion voi vaihtaa suoraan indeksillä:</p>
            <pre><code>nimet = ["Anna", "Bertta", "Cecilia"]
nimet[1] = "Bella"
print(nimet)   # ['Anna', 'Bella', 'Cecilia']</code></pre>
            <p>⚠️ Merkkijonoissa tämä EI toimi — mutta listoissa toimii!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että 'vanha' muuttuu 'uusi':ksi.",
        starterCode: `tavarat = ["hyvä", "vanha", "kiva"]
tavarat[___] = "uusi"
print(tavarat)`,
        hint: "'vanha' on indeksissä 1. Vaihda se suoraan sijoitusoperaattorilla.",
        validate: function(output) {
            return output.trim() === "['hyvä', 'uusi', 'kiva']";
        },
        successMsg: "Oikein! tavarat[1] = 'uusi' — alkio vaihdettiin! ✏️",
        failMsg: "Tuloksen pitäisi olla ['hyvä', 'uusi', 'kiva']. Mikä on 'vanha':n indeksi?",
        maxStars: 3
    },
    {
    id: 89,


        legacyId: 16,
        section: "listat",
        title: "range()-lista 🔢",
        slug: "listat-range-lista",
        icon: "🔢",
        description: "Luo numerolista automaattisesti — range() ja list() ovat tehokas pari!",
        theory: `
            <h4>📚 range() + list()</h4>
            <p><code>range()</code> luo numerosarjan, <code>list()</code> muuttaa sen listaksi:</p>
            <pre><code>print(list(range(5)))        # [0, 1, 2, 3, 4]
print(list(range(1, 6)))     # [1, 2, 3, 4, 5]
print(list(range(0, 10, 2))) # [0, 2, 4, 6, 8]</code></pre>
            <p><code>range(alku, loppu, askel)</code> — loppu ei sisälly!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>[1, 2, 3, 4, 5]</code>.",
        starterCode: `numerot = list(range(___, ___))
print(numerot)`,
        hint: "range(1, 6) tuottaa luvut 1–5. Muista: loppu-arvo ei sisälly!",
        validate: function(output) {
            return output.trim() === "[1, 2, 3, 4, 5]";
        },
        successMsg: "Oikein! list(range(1, 6)) = [1, 2, 3, 4, 5] — helppo tapa tehdä numerolista! 🔢",
        failMsg: "Tuloksen pitäisi olla [1, 2, 3, 4, 5]. Mitä range() tarvitsee?",
        maxStars: 3
    },
    {
    id: 90,


        legacyId: 16,
        section: "listat",
        title: "Sisäkkäiset listat 📦",
        slug: "listat-sisakkaiset-listat",
        icon: "📦",
        description: "Lista listan sisällä — näin rakennetaan taulukoita!",
        theory: `
            <h4>📚 Lista listoja (2D-lista)</h4>
            <p>Listan alkio voi olla toinen lista:</p>
            <pre><code>matriisi = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(matriisi[0])      # [1, 2, 3]  (ensimmäinen rivi)
print(matriisi[1][2])   # 6  (toinen rivi, kolmas alkio)</code></pre>
            <p>Käytetään kahdella indeksillä: <code>[rivi][sarake]</code></p>
        `,
        challenge: "Korvaa <code>___</code> oikeilla indekseillä niin, että ohjelma tulostaa <code>5</code>.",
        starterCode: `taulukko = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(taulukko[___][___])`,
        hint: "5 on toisella rivillä (indeksi 1), keskimmäinen alkio (indeksi 1).",
        validate: function(output) {
            return output.trim() === "5";
        },
        successMsg: "Oikein! taulukko[1][1] = 5 — sisäkkäiset listat toimivat! 📦",
        failMsg: "Tuloksen pitäisi olla 5. Millä rivillä ja sarakkeessa 5 on?",
        maxStars: 3
    },
    {
    id: 91,


        legacyId: 16,
        section: "listat",
        title: "Listamestari 🏆",
        slug: "listat-listamestari",
        icon: "🏆",
        description: "Viimeinen haaste — käytä kaikkia oppimiasi listametodeja!",
        theory: `
            <h4>📚 Kertaus — listat!</h4>
            <table style="width:100%; border-collapse: collapse; font-size: 0.95em;">
            <tr style="background: var(--accent-blue); color: white;"><th style="padding:6px;">Metodi/funktio</th><th style="padding:6px;">Toiminto</th><th style="padding:6px;">Esimerkki</th></tr>
            <tr><td style="padding:4px 6px;"><code>len(l)</code></td><td>Pituus</td><td>len([1,2,3]) → 3</td></tr>
            <tr><td style="padding:4px 6px;"><code>l[i]</code></td><td>Indeksointi</td><td>[10,20,30][1] → 20</td></tr>
            <tr><td style="padding:4px 6px;"><code>.append(x)</code></td><td>Lisää loppuun</td><td>[1,2].append(3)</td></tr>
            <tr><td style="padding:4px 6px;"><code>.insert(i,x)</code></td><td>Lisää kohtaan</td><td>[1,3].insert(1,2)</td></tr>
            <tr><td style="padding:4px 6px;"><code>.remove(x)</code></td><td>Poista nimellä</td><td>[1,2,3].remove(2)</td></tr>
            <tr><td style="padding:4px 6px;"><code>.pop(i)</code></td><td>Poista indeksillä</td><td>[1,2,3].pop(0) → 1</td></tr>
            <tr><td style="padding:4px 6px;"><code>.sort()</code></td><td>Järjestä</td><td>[3,1,2].sort()</td></tr>
            <tr><td style="padding:4px 6px;"><code>.reverse()</code></td><td>Käännä</td><td>[1,2,3].reverse()</td></tr>
            <tr><td style="padding:4px 6px;"><code>x in l</code></td><td>Jäsenyys</td><td>2 in [1,2,3] → True</td></tr>
            <tr><td style="padding:4px 6px;"><code>min/max/sum</code></td><td>Laskenta</td><td>sum([1,2,3]) → 6</td></tr>
            </table>
        `,
        challenge: "Korvaa KAIKKI <code>___</code> niin, että ohjelma tulostaa neljä kertaa <code>True</code>!",
        starterCode: `# 1. Pituus
pisteet = [85, 92, 78, 95, 88]
print(___(pisteet) == 5)

# 2. Suurin arvo
print(___(pisteet) == 95)

# 3. Jäsenyys
print(92 ___ pisteet)

# 4. Järjestä ja tarkista ensimmäinen
pisteet.___()
print(pisteet[0] == 78)`,
        hint: "1: len(). 2: max(). 3: in. 4: .sort() järjestää → pienin tulee eteen.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 4 &&
                   lines[0].trim() === "True" &&
                   lines[1].trim() === "True" &&
                   lines[2].trim() === "True" &&
                   lines[3].trim() === "True";
        },
        successMsg: "MESTARI! 🏆 Osaat listat! Neljä True-vastausta — olet listamestari!",
        failMsg: "Kaikkien neljän rivin pitäisi tulostaa True. Lue vihje ja yritä uudelleen!",
        maxStars: 3
    },

    // ═══════════════════════════════════════
    //  SANAKIRJAT-OSIO (Tehtävät 87-106)
    // ═══════════════════════════════════════

    // ─────────────────────────────────────
    // TEHTÄVÄ 22: Luo sanakirja    // ─────────────────────────────────────
    {
    id: 92,


        legacyId: 87,
        section: "sanakirjat",
        title: "Luo sanakirja 📖",
        slug: "sanakirjat-luo-sanakirja",
        icon: "📖",
        description: "Sanakirja tallentaa tietoa avain-arvo-pareina — kuin oikea sanakirja!",
        theory: `
            <h4>📚 Mikä on sanakirja (dict)?</h4>
            <p>Sanakirja tallentaa tietoa <strong>avain: arvo</strong> -pareina aaltosulkeiden sisällä:</p>
            <pre><code>oppilas = {"nimi": "Masa", "ikä": 10, "luokka": "4A"}
print(oppilas)</code></pre>
            <p>Jokaisella avaimella on oma arvo. Avaimet ovat yleensä merkkijonoja!</p>
            <pre><code>auto = {"merkki": "Toyota", "väri": "punainen"}
print(auto)</code></pre>
        `,
        challenge: "Luo sanakirja <code>lemmikki</code> jossa on avaimet <code>\"nimi\"</code>, <code>\"laji\"</code> ja <code>\"ikä\"</code>. Tulosta se!",
        starterCode: `# Luo sanakirja lemmikistäsi:\nlemmikki = {"nimi": ___, "laji": ___, "ikä": ___}\nprint(lemmikki)`,
        hint: "Korvaa ___ arvoilla, esim: \"Musti\", \"koira\", 5. Teksti lainausmerkkeihin, numero ilman!",
        validate: function(output) {
            try {
                return output.includes("nimi") && output.includes("laji") && output.includes("ikä") && output.includes("{");
            } catch(e) { return false; }
        },
        successMsg: "Hienoa! 📖 Loit ensimmäisen sanakirjasi!",
        failMsg: "Tarkista että sanakirjassa on avaimet 'nimi', 'laji' ja 'ikä' ja tulostat sen.",
        detailedHelp: `
            <h4>Askel askeleelta — Luo sanakirja</h4>
            <p>Koodissa on kolme <code>___</code> kohtaa, jotka sinun pitää korvata arvoilla:</p>
            <ol>
                <li><strong>Katso koodia:</strong> Sanakirjassa on kolme avainta: <code>"nimi"</code>, <code>"laji"</code> ja <code>"ikä"</code>. Jokaisen avaimen jälkeen on kaksoispiste ja <code>___</code>.
                </li>
                <li><strong>Ensimmäinen ___</strong> on avaimen <code>"nimi"</code> arvo. Keksi lemmikille nimi, esim:
                    <div class="step-line">"Musti"</div>
                    Teksti kirjoitetaan aina lainausmerkkeihin!
                </li>
                <li><strong>Toinen ___</strong> on avaimen <code>"laji"</code> arvo. Mikä eläin se on?
                    <div class="step-line">"koira"</div>
                </li>
                <li><strong>Kolmas ___</strong> on avaimen <code>"ikä"</code> arvo. Numero EI tarvitse lainausmerkkejä:
                    <div class="step-line">5</div>
                </li>
            </ol>
            <p>Valmis rivi näyttää esim: <code>lemmikki = {"nimi": "Musti", "laji": "koira", "ikä": 5}</code></p>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 23: Hae arvo    // ─────────────────────────────────────
    {
    id: 93,


        legacyId: 88,
        section: "sanakirjat",
        title: "Hae arvo 🔑",
        slug: "sanakirjat-hae-arvo",
        icon: "🔑",
        description: "Avaimella haet arvon sanakirjasta — kuin etsisit sanaa sanakirjasta!",
        theory: `
            <h4>📚 Arvon hakeminen</h4>
            <p>Käytä hakasulkeita ja avainta:</p>
            <pre><code>oppilas = {"nimi": "Masa", "ikä": 10}
print(oppilas["nimi"])   # Masa
print(oppilas["ikä"])    # 10</code></pre>
            <p>⚠️ Jos avainta ei ole, tulee KeyError-virhe!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>Helsinki</code>.",
        starterCode: `kaupunki = {"nimi": "Helsinki", "maa": "Suomi", "asukkaat": 650000}\nprint(kaupunki[___])`,
        hint: "Millä avaimella saat kaupungin nimen? Muista lainausmerkit avaimen ympärille!",
        validate: function(output) {
            return output.trim() === "Helsinki";
        },
        successMsg: "Oikein! kaupunki[\"nimi\"] = Helsinki — avaimella haet arvon! 🔑",
        failMsg: "Tuloksen pitäisi olla Helsinki. Mikä avain antaa kaupungin nimen?",
        detailedHelp: `
            <h4>Askel askeleelta — Hae arvo</h4>
            <p>Koodissa on yksi <code>___</code> hakasulkeiden sisällä. Sinun pitää keksiä oikea avain.</p>
            <ol>
                <li><strong>Katso sanakirjaa:</strong> Siinä on kolme avainta:
                    <ul>
                        <li><code>"nimi"</code> → <code>"Helsinki"</code></li>
                        <li><code>"maa"</code> → <code>"Suomi"</code></li>
                        <li><code>"asukkaat"</code> → <code>650000</code></li>
                    </ul>
                </li>
                <li><strong>Mitä haluamme tulostaa?</strong> Tehtävässä sanotaan: tulosta <code>Helsinki</code>. Se on kaupungin <em>nimi</em>.
                </li>
                <li><strong>Mikä avain antaa nimen?</strong> Avain on <code>"nimi"</code>! Kirjoita se hakasulkeiden sisään:
                    <div class="step-line">"nimi"</div>
                </li>
            </ol>
            <p>⚠️ Muista lainausmerkit! <code>kaupunki["nimi"]</code> toimii, <code>kaupunki[nimi]</code> ei.</p>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 24: Lisää arvo    // ─────────────────────────────────────
    {
    id: 94,


        legacyId: 89,
        section: "sanakirjat",
        title: "Lisää arvo ➕",
        slug: "sanakirjat-lisaa-arvo",
        icon: "➕",
        description: "Sanakirjaan voi lisätä uuden avain-arvo-parin milloin tahansa!",
        theory: `
            <h4>📚 Uuden arvon lisääminen</h4>
            <p>Käytä uutta avainta hakasulkeissa:</p>
            <pre><code>oppilas = {"nimi": "Masa"}
oppilas["ikä"] = 10
oppilas["luokka"] = "4A"
print(oppilas)
# {'nimi': 'Masa', 'ikä': 10, 'luokka': '4A'}</code></pre>
        `,
        challenge: "Lisää sanakirjaan avain <code>\"maa\"</code> arvolla <code>\"Suomi\"</code> ja tulosta sanakirja.",
        starterCode: `henkilö = {"nimi": "Liisa", "ikä": 25}\nhenkilö[___] = ___\nprint(henkilö)`,
        hint: "henkilö[\"maa\"] = \"Suomi\" — uusi avain lainausmerkeissä, arvo myös!",
        validate: function(output) {
            return output.includes("maa") && output.includes("Suomi");
        },
        successMsg: "Hienoa! ➕ Lisäsit uuden avain-arvo-parin sanakirjaan!",
        failMsg: "Tarkista että lisäät avaimen 'maa' arvolla 'Suomi'.",
        detailedHelp: `
            <h4>Askel askeleelta — Lisää arvo</h4>
            <p>Koodissa on kaksi <code>___</code> kohtaa samalla rivillä: <code>henkilö[___] = ___</code></p>
            <ol>
                <li><strong>Mikä avain lisätään?</strong> Tehtävässä sanotaan: lisää avain <code>"maa"</code>. Kirjoita se hakasulkeiden sisään:
                    <div class="step-line">"maa"</div>
                </li>
                <li><strong>Mikä arvo sille annetaan?</strong> Tehtävässä sanotaan: arvolla <code>"Suomi"</code>. Kirjoita se yhtäsuuruusmerkin jälkeen:
                    <div class="step-line">"Suomi"</div>
                </li>
            </ol>
            <p>Valmis rivi: <code>henkilö["maa"] = "Suomi"</code></p>
            <p>Tämä lisää uuden avain-arvo-parin sanakirjaan. Avain ja arvo ovat molemmat tekstiä, joten molemmat tarvitsevat lainausmerkit!</p>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 25: Muokkaa arvoa    // ─────────────────────────────────────
    {
    id: 95,


        legacyId: 90,
        section: "sanakirjat",
        title: "Muokkaa arvoa ✏️",
        slug: "sanakirjat-muokkaa-arvoa",
        icon: "✏️",
        description: "Olemassa olevan avaimen arvon voi vaihtaa helposti!",
        theory: `
            <h4>📚 Arvon muuttaminen</h4>
            <p>Sama syntaksi kuin lisäämisessä — jos avain on jo olemassa, arvo vaihtuu:</p>
            <pre><code>peli = {"pisteet": 100, "taso": 1}
peli["pisteet"] = 250
peli["taso"] = 2
print(peli)   # {'pisteet': 250, 'taso': 2}</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ikä muuttuu 11:ksi ja tulostuu <code>11</code>.",
        starterCode: `oppilas = {"nimi": "Masa", "ikä": 10}\noppilas[___] = ___\nprint(oppilas["ikä"])`,
        hint: "oppilas[\"ikä\"] = 11 — sama avain, uusi arvo!",
        validate: function(output) {
            return output.trim() === "11";
        },
        successMsg: "Oikein! ✏️ Ikä päivittyi 10 → 11!",
        failMsg: "Tuloksen pitäisi olla 11. Muuta 'ikä'-avaimen arvo.",
        detailedHelp: `
            <h4>Askel askeleelta — Muokkaa arvoa</h4>
            <p>Koodissa on kaksi <code>___</code> kohtaa: <code>oppilas[___] = ___</code></p>
            <ol>
                <li><strong>Katso sanakirjaa:</strong> <code>oppilas</code> sisältää <code>"nimi": "Masa"</code> ja <code>"ikä": 10</code>.
                </li>
                <li><strong>Mitä muokataan?</strong> Tehtävässä sanotaan: ikä muuttuu 11:ksi. Siis muokkaamme <code>"ikä"</code>-avainta:
                    <div class="step-line">"ikä"</div>
                </li>
                <li><strong>Mikä on uusi arvo?</strong> Uusi ikä on 11. Se on numero, ei tarvitse lainausmerkkejä:
                    <div class="step-line">11</div>
                </li>
            </ol>
            <p>Valmis rivi: <code>oppilas["ikä"] = 11</code></p>
            <p>Kun avain on jo olemassa, arvo yksinkertaisesti vaihtuu uuteen!</p>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 26: Poista arvo    // ─────────────────────────────────────
    {
    id: 96,


        legacyId: 91,
        section: "sanakirjat",
        title: "Poista arvo 🗑️",
        slug: "sanakirjat-poista-arvo",
        icon: "🗑️",
        description: "del poistaa avain-arvo-parin sanakirjasta kokonaan!",
        theory: `
            <h4>📚 Poistaminen: del</h4>
            <p><code>del</code> poistaa avaimen ja sen arvon:</p>
            <pre><code>auto = {"merkki": "Toyota", "väri": "punainen", "vuosi": 2020}
del auto["vuosi"]
print(auto)   # {'merkki': 'Toyota', 'väri': 'punainen'}</code></pre>
            <p><code>.pop(avain)</code> poistaa JA palauttaa arvon:</p>
            <pre><code>poistettu = auto.pop("väri")
print(poistettu)   # punainen</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että <code>\"ikä\"</code> poistetaan ja tulostuu <code>2</code> (jäljellä olevien avainten määrä).",
        starterCode: `henkilö = {"nimi": "Masa", "ikä": 10, "luokka": "4A"}\ndel henkilö[___]\nprint(len(henkilö))`,
        hint: "del henkilö[\"ikä\"] — poistaa ikä-avaimen. Jäljelle jää 2 avainta.",
        validate: function(output) {
            return output.trim() === "2";
        },
        successMsg: "Oikein! 🗑️ del poisti avain-arvo-parin, jäljellä 2!",
        failMsg: "Tuloksen pitäisi olla 2. Poista 'ikä'-avain del-komennolla.",
        detailedHelp: `
            <h4>Askel askeleelta — Poista arvo</h4>
            <p>Koodissa on yksi <code>___</code>: <code>del henkilö[___]</code></p>
            <ol>
                <li><strong>Katso sanakirjaa:</strong> Siinä on kolme avainta: <code>"nimi"</code>, <code>"ikä"</code> ja <code>"luokka"</code> — yhteensä 3 kappaletta.
                </li>
                <li><strong>Mitä pitää poistaa?</strong> Tehtävässä sanotaan: poista <code>"ikä"</code>. Silloin jää 2 avainta jäljelle.
                </li>
                <li><strong>Kirjoita avain hakasulkeisiin:</strong>
                    <div class="step-line">"ikä"</div>
                </li>
            </ol>
            <p>Valmis rivi: <code>del henkilö["ikä"]</code></p>
            <p><code>del</code> poistaa avaimen ja sen arvon kokonaan. Sen jälkeen <code>len(henkilö)</code> on 2.</p>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 27: Onko avain olemassa?    // ─────────────────────────────────────
    {
    id: 97,


        legacyId: 92,
        section: "sanakirjat",
        title: "Onko avain olemassa? 🔍",
        slug: "sanakirjat-onko-avain-olemassa",
        icon: "🔍",
        description: "Tarkista onko avain sanakirjassa — in-operaattori toimii täälläkin!",
        theory: `
            <h4>📚 in-operaattori sanakirjoissa</h4>
            <p><code>in</code> tarkistaa onko AVAIN sanakirjassa (ei arvoa!):</p>
            <pre><code>oppilas = {"nimi": "Masa", "ikä": 10}
print("nimi" in oppilas)    # True
print("luokka" in oppilas)  # False
print("Masa" in oppilas)    # False (tarkistaa vain avaimia!)</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>True</code> ja <code>False</code>.",
        starterCode: `varasto = {"omena": 5, "banaani": 3, "kiivi": 8}\nprint("omena" ___ varasto)\nprint("mango" ___ varasto)`,
        hint: "in tarkistaa onko avain sanakirjassa. 'omena' löytyy, 'mango' ei!",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].trim() === "True" && lines[1].trim() === "False";
        },
        successMsg: "Oikein! 🔍 'omena' in varasto = True, 'mango' in varasto = False!",
        failMsg: "Pitäisi tulostaa True ja False. Mikä sana puuttuu?",
        detailedHelp: `
            <h4>Askel askeleelta — Onko avain olemassa?</h4>
            <p>Koodissa on kaksi <code>___</code> kohtaa, molemmat samassa paikassa: <code>"omena" ___ varasto</code></p>
            <ol>
                <li><strong>Mitä tarkistetaan?</strong> Haluamme tietää onko avain sanakirjassa. Python-sana tähän on <code>in</code>.
                </li>
                <li><strong>Ensimmäinen rivi:</strong> <code>"omena" in varasto</code> — onko "omena" varastossa? Kyllä on! Tulos: <code>True</code>.
                </li>
                <li><strong>Toinen rivi:</strong> <code>"mango" in varasto</code> — onko "mango" varastossa? Ei ole! Tulos: <code>False</code>.
                </li>
                <li><strong>Korvaa molemmat ___:</strong>
                    <div class="step-line">in</div>
                </li>
            </ol>
            <p>Sana <code>in</code> tarkistaa AVAIMIA, ei arvoja. <code>"omena" in varasto</code> = True, mutta <code>5 in varasto</code> = False!</p>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 28: Montako avainta?    // ─────────────────────────────────────
    {
    id: 98,


        legacyId: 93,
        section: "sanakirjat",
        title: "Montako avainta? 📏",
        slug: "sanakirjat-montako-avainta",
        icon: "📏",
        description: "len() kertoo sanakirjan avainten määrän — tuttu funktio!",
        theory: `
            <h4>📚 len() sanakirjoille</h4>
            <p><code>len()</code> palauttaa avain-arvo-parien lukumäärän:</p>
            <pre><code>oppilas = {"nimi": "Masa", "ikä": 10, "luokka": "4A"}
print(len(oppilas))   # 3</code></pre>
            <p>Tyhjä sanakirja: <code>len({}) → 0</code></p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa sanakirjan avainten määrän <code>4</code>.",
        starterCode: `peli = {"nimi": "Mario", "pisteet": 500, "taso": 3, "elämiä": 5}\nprint(___(peli))`,
        hint: "Sama funktio kuin listoilla ja merkkijonoilla — len()!",
        validate: function(output) {
            return output.trim() === "4";
        },
        successMsg: "Oikein! 📏 len() toimii sanakirjoillekin — 4 avain-arvo-paria!",
        failMsg: "Tuloksen pitäisi olla 4. Mikä funktio laskee avainten määrän?",
        detailedHelp: `
            <h4>Askel askeleelta — Montako avainta?</h4>
            <p>Koodissa on yksi <code>___</code>: <code>print(___(peli))</code></p>
            <ol>
                <li><strong>Katso sanakirjaa:</strong> <code>peli</code> sisältää 4 avainta: <code>"nimi"</code>, <code>"pisteet"</code>, <code>"taso"</code>, <code>"elämiä"</code>.
                </li>
                <li><strong>Mikä funktio laskee määrän?</strong> Sama tuttu funktio kuin listoilla ja merkkijonoilla — <code>len()</code>!
                </li>
                <li><strong>Korvaa ___:</strong>
                    <div class="step-line">len</div>
                    Huomaa: kirjoita vain <code>len</code>, koska sulkeet ja <code>peli</code> ovat jo koodissa!
                </li>
            </ol>
            <p><code>len()</code> palauttaa avain-arvo-parien lukumäärän. Tässä 4 paria → <code>len(peli) = 4</code>.</p>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 29: Kaikki avaimet    // ─────────────────────────────────────
    {
    id: 99,


        legacyId: 94,
        section: "sanakirjat",
        title: "Kaikki avaimet 🗝️",
        slug: "sanakirjat-kaikki-avaimet",
        icon: "🗝️",
        description: "Hae kaikki sanakirjan avaimet kerralla — .keys() näyttää ne!",
        theory: `
            <h4>📚 .keys() — avaimet</h4>
            <p><code>.keys()</code> palauttaa kaikki avaimet:</p>
            <pre><code>oppilas = {"nimi": "Masa", "ikä": 10, "luokka": "4A"}
print(list(oppilas.keys()))
# ['nimi', 'ikä', 'luokka']</code></pre>
            <p><code>list()</code> muuttaa avaimet tavalliseksi listaksi.</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa sanakirjan avaimet listana.",
        starterCode: `hedelmät = {"omena": 3, "banaani": 5, "kiivi": 2}\navaimet = list(hedelmät.___())\nprint(avaimet)`,
        hint: "Mikä metodi palauttaa kaikki avaimet? Se on englantia ja tarkoittaa 'avaimia'.",
        validate: function(output) {
            return output.includes("omena") && output.includes("banaani") && output.includes("kiivi") && output.includes("[");
        },
        successMsg: "Oikein! 🗝️ .keys() palauttaa kaikki avaimet!",
        failMsg: "Tuloksessa pitäisi näkyä kaikki avaimet listana. Mikä metodi?",
        detailedHelp: `
            <h4>Askel askeleelta — Kaikki avaimet</h4>
            <p>Koodissa on yksi <code>___</code>: <code>hedelmät.___()</code></p>
            <ol>
                <li><strong>Mitä halutaan?</strong> Haluamme saada kaikki sanakirjan avaimet (omena, banaani, kiivi).
                </li>
                <li><strong>Mikä metodi palauttaa avaimet?</strong> Englanniksi "avaimet" = "keys". Metodi on siis:
                    <div class="step-line">keys</div>
                    Huomaa: sulut <code>()</code> ovat jo koodissa, kirjoita vain <code>keys</code>.
                </li>
                <li><strong>Miksi <code>list()</code>?</strong> <code>.keys()</code> palauttaa erikoismuotoisen näkymän. <code>list()</code> muuttaa sen tavalliseksi listaksi.
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 30: Kaikki arvot    // ─────────────────────────────────────
    {
    id: 100,


        legacyId: 95,
        section: "sanakirjat",
        title: "Kaikki arvot 💎",
        slug: "sanakirjat-kaikki-arvot",
        icon: "💎",
        description: "Hae kaikki sanakirjan arvot — .values() kerää ne!",
        theory: `
            <h4>📚 .values() — arvot</h4>
            <p><code>.values()</code> palauttaa kaikki arvot:</p>
            <pre><code>oppilas = {"nimi": "Masa", "ikä": 10, "luokka": "4A"}
print(list(oppilas.values()))
# ['Masa', 10, '4A']</code></pre>
            <p>Arvoja voi käyttää esim. laskentaan:</p>
            <pre><code>varasto = {"omena": 3, "banaani": 5}
print(sum(varasto.values()))   # 8</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa arvojen summan <code>10</code>.",
        starterCode: `varasto = {"omena": 3, "banaani": 5, "kiivi": 2}\nyhteensä = sum(varasto.___())\nprint(yhteensä)`,
        hint: ".values() palauttaa arvot — sum() laskee ne yhteen!",
        validate: function(output) {
            return output.trim() === "10";
        },
        successMsg: "Oikein! 💎 sum(.values()) = 10 — arvojen summa!",
        failMsg: "Tuloksen pitäisi olla 10. Mikä metodi palauttaa arvot?",
        detailedHelp: `
            <h4>Askel askeleelta — Kaikki arvot</h4>
            <p>Koodissa on yksi <code>___</code>: <code>varasto.___()</code></p>
            <ol>
                <li><strong>Katso sanakirjaa:</strong> <code>varasto</code> sisältää arvot <code>3</code>, <code>5</code> ja <code>2</code>. Yhteensä 3+5+2 = 10.
                </li>
                <li><strong>Mikä metodi palauttaa arvot?</strong> Englanniksi "arvot" = "values":
                    <div class="step-line">values</div>
                </li>
                <li><strong>Miten laskenta toimii?</strong> <code>sum()</code> laskee yhteen kaikki <code>.values()</code>:n palauttamat luvut: 3+5+2 = 10.
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 31: Avaimet ja arvot yhdessä    // ─────────────────────────────────────
    {
    id: 101,


        legacyId: 96,
        section: "sanakirjat",
        title: "Avaimet ja arvot 🔗",
        slug: "sanakirjat-avaimet-ja-arvot",
        icon: "🔗",
        description: "Hae avaimet ja arvot pareina — .items() antaa molemmat!",
        theory: `
            <h4>📚 .items() — parit</h4>
            <p><code>.items()</code> palauttaa avain-arvo-parit tuplena:</p>
            <pre><code>oppilas = {"nimi": "Masa", "ikä": 10}
print(list(oppilas.items()))
# [('nimi', 'Masa'), ('ikä', 10)]</code></pre>
            <p>Tämä on erityisen hyödyllinen for-silmukassa!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa avain-arvo-parit listana.",
        starterCode: `arvosanat = {"matematiikka": 9, "äidinkieli": 8, "englanti": 10}\nparit = list(arvosanat.___())\nprint(parit)`,
        hint: ".items() palauttaa avaimet ja arvot yhdessä pareina!",
        validate: function(output) {
            return output.includes("matematiikka") && output.includes("9") && output.includes("englanti") && output.includes("10");
        },
        successMsg: "Oikein! 🔗 .items() antaa avain-arvo-parit!",
        failMsg: "Tuloksessa pitäisi näkyä parit. Mikä metodi palauttaa ne?",
        detailedHelp: `
            <h4>Askel askeleelta — Avaimet ja arvot yhdessä</h4>
            <p>Koodissa on yksi <code>___</code>: <code>arvosanat.___()</code></p>
            <ol>
                <li><strong>Mitä halutaan?</strong> Haluamme sekä avaimet (aineet) ETTä arvot (numerot) yhdessä pareina.
                </li>
                <li><strong>Vaihtoehdot:</strong>
                    <ul>
                        <li><code>.keys()</code> → vain avaimet</li>
                        <li><code>.values()</code> → vain arvot</li>
                        <li><code>.items()</code> → molemmat yhdessä!</li>
                    </ul>
                </li>
                <li><strong>Oikea vastaus:</strong> Englanniksi "kohteet/parit" = "items":
                    <div class="step-line">items</div>
                </li>
            </ol>
            <p><code>.items()</code> palauttaa listan tupleja: <code>[("matematiikka", 9), ("äidinkieli", 8), ("englanti", 10)]</code></p>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 32: Käy sanakirja läpi    // ─────────────────────────────────────
    {
    id: 102,


        legacyId: 97,
        section: "sanakirjat",
        title: "Käy läpi 🔄",
        slug: "sanakirjat-kay-lapi",
        icon: "🔄",
        description: "for-silmukka + .items() = tehokas tapa käydä sanakirja läpi!",
        theory: `
            <h4>📚 for-silmukka sanakirjoille</h4>
            <p>Käytä <code>.items()</code> for-silmukassa:</p>
            <pre><code>oppilas = {"nimi": "Masa", "ikä": 10}
for avain, arvo in oppilas.items():
    print(avain, "=", arvo)
# nimi = Masa
# ikä = 10</code></pre>
            <p>Pelkät avaimet: <code>for avain in sanakirja:</code></p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa jokaisen aineen ja arvosanan.",
        starterCode: `arvosanat = {"matematiikka": 9, "äidinkieli": 8, "englanti": 10}\nfor aine, numero in arvosanat.___():\n    print(aine, "=", numero)`,
        hint: "Mikä metodi antaa avain-arvo-parit for-silmukkaan? Ajattele 'kohteita'.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 && output.includes("matematiikka") && output.includes("9") && output.includes("englanti") && output.includes("10");
        },
        successMsg: "Hienoa! 🔄 for + .items() käy koko sanakirjan läpi!",
        failMsg: "Kolme riviä pitäisi tulostua. Mikä metodi antaa parit for-silmukkaan?",
        detailedHelp: `
            <h4>Askel askeleelta — Käy sanakirja läpi</h4>
            <p>Koodissa on yksi <code>___</code>: <code>arvosanat.___():</code> for-silmukan sisällä.</p>
            <ol>
                <li><strong>Mitä for-silmukka tekee?</strong> Se käy läpi jokaisen avain-arvo-parin. Muuttujat <code>aine</code> ja <code>numero</code> saavat vuorollaan jokaisen parin.
                </li>
                <li><strong>Mikä metodi antaa parit?</strong> Edellisessä tehtävässä opit: <code>.items()</code>!
                    <div class="step-line">items</div>
                </li>
                <li><strong>Miten se toimii?</strong>
                    <ul>
                        <li>1. kierros: <code>aine = "matematiikka"</code>, <code>numero = 9</code></li>
                        <li>2. kierros: <code>aine = "äidinkieli"</code>, <code>numero = 8</code></li>
                        <li>3. kierros: <code>aine = "englanti"</code>, <code>numero = 10</code></li>
                    </ul>
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 33: Turvallinen haku    // ─────────────────────────────────────
    {
    id: 103,


        legacyId: 98,
        section: "sanakirjat",
        title: "Turvallinen haku 🛡️",
        slug: "sanakirjat-turvallinen-haku",
        icon: "🛡️",
        description: ".get() hakee arvon turvallisesti — ei virhettä jos avainta ei ole!",
        theory: `
            <h4>📚 .get(avain, oletus)</h4>
            <p><code>.get()</code> palauttaa arvon tai oletusarvon jos avainta ei löydy:</p>
            <pre><code>oppilas = {"nimi": "Masa", "ikä": 10}
print(oppilas.get("nimi", "?"))     # Masa
print(oppilas.get("luokka", "?"))   # ? (ei löytynyt)</code></pre>
            <p>Vertaa: <code>oppilas["luokka"]</code> aiheuttaisi KeyError-virheen!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että puuttuva avain tulostaa <code>0</code> (ei virhettä!).",
        starterCode: `varasto = {"omena": 5, "banaani": 3}\nprint(varasto.___(\"omena\", 0))\nprint(varasto.___(\"mango\", 0))`,
        hint: ".get() hakee turvallisesti — jos avainta ei ole, palauttaa oletusarvon!",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].trim() === "5" && lines[1].trim() === "0";
        },
        successMsg: "Oikein! 🛡️ .get() on turvallinen — ei KeyError-virhettä!",
        failMsg: "Pitäisi tulostaa 5 ja 0. Mikä metodi hakee turvallisesti?",
        detailedHelp: `
            <h4>Askel askeleelta — Turvallinen haku</h4>
            <p>Koodissa on kaksi <code>___</code>: <code>varasto.___(\"omena\", 0)</code> ja <code>varasto.___(\"mango\", 0)</code></p>
            <ol>
                <li><strong>Mikä ongelma ratkaistaan?</strong> Jos haet <code>varasto["mango"]</code> ja "mango" ei ole varastossa → <em>virhe!</em> Tarvitaan turvallisempi tapa.
                </li>
                <li><strong>Mikä metodi hakee turvallisesti?</strong> <code>.get()</code> — se palauttaa oletusarvon jos avainta ei löydy:
                    <div class="step-line">get</div>
                </li>
                <li><strong>Miten se toimii?</strong>
                    <ul>
                        <li><code>varasto.get("omena", 0)</code> → "omena" löytyy → palauttaa <code>5</code></li>
                        <li><code>varasto.get("mango", 0)</code> → "mango" EI löydy → palauttaa oletuksen <code>0</code></li>
                    </ul>
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 34: Päivitä monta kerralla    // ─────────────────────────────────────
    {
    id: 104,


        legacyId: 99,
        section: "sanakirjat",
        title: "Päivitä monta 🔄",
        slug: "sanakirjat-paivita-monta",
        icon: "🔄",
        description: ".update() lisää tai päivittää monta avainta kerralla!",
        theory: `
            <h4>📚 .update(toinen_dict)</h4>
            <p><code>.update()</code> yhdistää toisen sanakirjan nykyiseen:</p>
            <pre><code>a = {"x": 1, "y": 2}
a.update({"y": 99, "z": 3})
print(a)   # {'x': 1, 'y': 99, 'z': 3}</code></pre>
            <p>Olemassa olevat avaimet päivittyvät, uudet lisätään!</p>
        `,
        challenge: "Korvaa <code>___</code> oikealla metodilla niin, että tulostuu <code>3</code> (avainten määrä).",
        starterCode: `peli = {"pisteet": 100}\npeli.___({"taso": 2, "elämiä": 3})\nprint(len(peli))`,
        hint: "Mikä metodi lisää toisen sanakirjan avaimet? Se 'päivittää' sanakirjan.",
        validate: function(output) {
            return output.trim() === "3";
        },
        successMsg: "Oikein! 🔄 .update() lisäsi kaksi uutta avainta!",
        failMsg: "Tuloksen pitäisi olla 3. Mikä metodi yhdistää sanakirjat?",
        detailedHelp: `
            <h4>Askel askeleelta — Päivitä monta kerralla</h4>
            <p>Koodissa on yksi <code>___</code>: <code>peli.___({"taso": 2, "elämiä": 3})</code></p>
            <ol>
                <li><strong>Mitä tapahtuu?</strong> <code>peli</code>-sanakirjassa on aluksi vain <code>"pisteet": 100</code> (1 avain).
                </li>
                <li><strong>Mitä halutaan?</strong> Lisätä kaksi uutta avainta (<code>"taso"</code> ja <code>"elämiä"</code>) yhdellä kertaa. Jälkeen avaimia on 3.
                </li>
                <li><strong>Mikä metodi tekee tämän?</strong> <code>.update()</code> — se "päivittää" sanakirjan lisäämällä uudet avaimet:
                    <div class="step-line">update</div>
                </li>
            </ol>
            <p>Valmis rivi: <code>peli.update({"taso": 2, "elämiä": 3})</code> → peli sisältää nyt 3 avainta.</p>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 35: Sisäkkäinen sanakirja    // ─────────────────────────────────────
    {
    id: 105,


        legacyId: 100,
        section: "sanakirjat",
        title: "Sisäkkäinen dict 📦",
        slug: "sanakirjat-sisakkainen-dict",
        icon: "📦",
        description: "Sanakirjan arvo voi olla toinen sanakirja — niin rakennetaan monimutkaista dataa!",
        theory: `
            <h4>📚 Sisäkkäiset sanakirjat</h4>
            <p>Arvo voi olla toinen sanakirja:</p>
            <pre><code>koulu = {
    "Masa": {"ikä": 10, "luokka": "4A"},
    "Liisa": {"ikä": 11, "luokka": "5B"}
}
print(koulu["Masa"]["luokka"])   # 4A</code></pre>
            <p>Käytä kahta hakasulkeparia: <code>[ulko-avain][sisä-avain]</code></p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa <code>Espoo</code>.",
        starterCode: `henkilöt = {\n    "Anna": {"ikä": 30, "kaupunki": "Helsinki"},\n    "Matti": {"ikä": 25, "kaupunki": "Espoo"}\n}\nprint(henkilöt[___][___])`,
        hint: "Ensin ulompi avain \"Matti\", sitten sisempi avain \"kaupunki\".",
        validate: function(output) {
            return output.trim() === "Espoo";
        },
        successMsg: "Oikein! 📦 henkilöt[\"Matti\"][\"kaupunki\"] = Espoo!",
        failMsg: "Tuloksen pitäisi olla Espoo. Käytä kahta avainta: ulko + sisä.",
        detailedHelp: `
            <h4>Askel askeleelta — Sisäkkäinen sanakirja</h4>
            <p>Koodissa on kaksi <code>___</code>: <code>henkilöt[___][___]</code></p>
            <ol>
                <li><strong>Katso rakennetta:</strong> <code>henkilöt</code> on sanakirja, jonka avaimet ovat <code>"Anna"</code> ja <code>"Matti"</code>. Jokaisen arvo on <em>toinen sanakirja</em>.
                </li>
                <li><strong>Mitä haetaan?</strong> Espoo. Se on Matin kaupunki. Siis tarvitaan:
                    <ul>
                        <li>Ensin ulompi avain: kenen tiedot? → <code>"Matti"</code></li>
                        <li>Sitten sisempi avain: mikä tieto? → <code>"kaupunki"</code></li>
                    </ul>
                </li>
                <li><strong>Ensimmäinen ___:</strong>
                    <div class="step-line">"Matti"</div>
                </li>
                <li><strong>Toinen ___:</strong>
                    <div class="step-line">"kaupunki"</div>
                </li>
            </ol>
            <p>Lue oikealta vasemmalle: <code>henkilöt["Matti"]["kaupunki"]</code> = "Matti-sanakirjan kaupunki-arvo" = Espoo!</p>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 36: Sanakirja zip:llä    // ─────────────────────────────────────
    {
    id: 106,


        legacyId: 101,
        section: "sanakirjat",
        title: "dict + zip 🤐",
        slug: "sanakirjat-dict-zip",
        icon: "🤐",
        description: "Yhdistä kaksi listaa sanakirjaksi — zip() ja dict() tekevät taikoja!",
        theory: `
            <h4>📚 dict(zip(avaimet, arvot))</h4>
            <p><code>zip()</code> yhdistää kaksi listaa pareiksi, <code>dict()</code> tekee niistä sanakirjan:</p>
            <pre><code>nimet = ["Masa", "Liisa", "Kalle"]
iät = [10, 11, 9]
oppilas_iät = dict(zip(nimet, iät))
print(oppilas_iät)
# {'Masa': 10, 'Liisa': 11, 'Kalle': 9}</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että kahdesta listasta syntyy sanakirja ja tulostuu <code>10</code>.",
        starterCode: `aineet = ["matematiikka", "englanti", "liikunta"]\narvosanat = [10, 8, 9]\ntodistus = dict(___(aineet, arvosanat))\nprint(todistus["matematiikka"])`,
        hint: "zip() yhdistää kaksi listaa pareiksi. dict(zip(...)) tekee sanakirjan!",
        validate: function(output) {
            return output.trim() === "10";
        },
        successMsg: "Oikein! 🤐 dict(zip()) yhdisti listat sanakirjaksi!",
        failMsg: "Tuloksen pitäisi olla 10. Mikä funktio yhdistää listat pareiksi?",
        detailedHelp: `
            <h4>Askel askeleelta — dict + zip</h4>
            <p>Koodissa on yksi <code>___</code>: <code>dict(___(aineet, arvosanat))</code></p>
            <ol>
                <li><strong>Mitä meillä on?</strong> Kaksi listaa:
                    <ul>
                        <li><code>aineet = ["matematiikka", "englanti", "liikunta"]</code></li>
                        <li><code>arvosanat = [10, 8, 9]</code></li>
                    </ul>
                </li>
                <li><strong>Mitä halutaan?</strong> Yhdistää ne sanakirjaksi: <code>{"matematiikka": 10, "englanti": 8, "liikunta": 9}</code>.
                </li>
                <li><strong>Mikä funktio yhdistää listat pareiksi?</strong> <code>zip()</code> — se ottaa kaksi listaa ja tekee parit:
                    <div class="step-line">zip</div>
                </li>
                <li><strong>Miten ketju toimii?</strong>
                    <code>zip()</code> → parit → <code>dict()</code> → sanakirja!
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 37: Laskuri    // ─────────────────────────────────────
    {
    id: 107,


        legacyId: 102,
        section: "sanakirjat",
        title: "Laskuri 🔢",
        slug: "sanakirjat-laskuri",
        icon: "🔢",
        description: "Laske esiintymät sanakirjalla — klassinen ohjelmoinnin tehtävä!",
        theory: `
            <h4>📚 Laskuri-sanakirja</h4>
            <p>Sanakirjalla voi laskea kuinka monta kertaa jokin asia esiintyy:</p>
            <pre><code>sanat = ["kissa", "koira", "kissa", "kala", "kissa"]
laskuri = {}
for sana in sanat:
    laskuri[sana] = laskuri.get(sana, 0) + 1
print(laskuri)
# {'kissa': 3, 'koira': 1, 'kala': 1}</code></pre>
            <p><code>.get(sana, 0)</code> palauttaa 0 jos sanaa ei vielä ole!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että laskuri toimii ja 'a' esiintyy <code>3</code> kertaa.",
        starterCode: `kirjaimet = ["a", "b", "a", "c", "a", "b"]\nlaskuri = {}\nfor k in kirjaimet:\n    laskuri[k] = laskuri.___(k, 0) + 1\nprint(laskuri["a"])`,
        hint: ".get(k, 0) palauttaa nykyisen arvon tai 0 jos avainta ei ole. +1 kasvattaa!",
        validate: function(output) {
            return output.trim() === "3";
        },
        successMsg: "Oikein! 🔢 Laskuri-sanakirja: 'a' esiintyy 3 kertaa!",
        failMsg: "Tuloksen pitäisi olla 3. Mikä metodi hakee turvallisesti oletusarvolla?",
        detailedHelp: `
            <h4>Askel askeleelta — Laskuri</h4>
            <p>Koodissa on yksi <code>___</code>: <code>laskuri.___(k, 0) + 1</code></p>
            <ol>
                <li><strong>Mitä laskuri tekee?</strong> Käy läpi jokaisen kirjaimen ja laskee kuinka monta kertaa se esiintyy.
                </li>
                <li><strong>Miksi tarvitaan oletusarvo?</strong> Kun kirjain tulee ensimmäistä kertaa vastaan, sitä ei vielä ole laskurissa. Hakeminen <code>laskuri[k]</code> aiheuttaisi virheen!
                </li>
                <li><strong>Mikä metodi hakee turvallisesti?</strong> <code>.get(k, 0)</code> — palauttaa nykyisen arvon tai 0 jos avainta ei ole:
                    <div class="step-line">get</div>
                </li>
                <li><strong>Miten +1 toimii?</strong>
                    <ul>
                        <li>Ensimmäinen "a": <code>get("a", 0)</code> → 0 → 0+1 = <code>1</code></li>
                        <li>Toinen "a": <code>get("a", 0)</code> → 1 → 1+1 = <code>2</code></li>
                        <li>Kolmas "a": <code>get("a", 0)</code> → 2 → 2+1 = <code>3</code></li>
                    </ul>
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 38: Järjestä avaimet    // ─────────────────────────────────────
    {
    id: 108,


        legacyId: 103,
        section: "sanakirjat",
        title: "Järjestä avaimet 🔤",
        slug: "sanakirjat-jarjesta-avaimet",
        icon: "🔤",
        description: "sorted() järjestää sanakirjan avaimet aakkosjärjestykseen!",
        theory: `
            <h4>📚 sorted() sanakirjoille</h4>
            <p><code>sorted()</code> järjestää avaimet:</p>
            <pre><code>d = {"banaani": 3, "omena": 5, "appelsiini": 2}
print(sorted(d))
# ['appelsiini', 'banaani', 'omena']</code></pre>
            <p>Arvon mukaan järjestäminen:</p>
            <pre><code>print(sorted(d, key=d.get))
# ['appelsiini', 'banaani', 'omena']</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että avaimet tulostuvat aakkosjärjestyksessä.",
        starterCode: `maat = {"Suomi": "Helsinki", "Ruotsi": "Tukholma", "Norja": "Oslo"}\nprint(___(maat))`,
        hint: "sorted() järjestää minkä tahansa — myös sanakirjan avaimet!",
        validate: function(output) {
            return output.trim() === "['Norja', 'Ruotsi', 'Suomi']";
        },
        successMsg: "Oikein! 🔤 sorted() järjesti avaimet aakkosiin!",
        failMsg: "Tuloksen pitäisi olla ['Norja', 'Ruotsi', 'Suomi']. Mikä funktio järjestää?",
        detailedHelp: `
            <h4>Askel askeleelta — Järjestä avaimet</h4>
            <p>Koodissa on yksi <code>___</code>: <code>print(___(maat))</code></p>
            <ol>
                <li><strong>Katso sanakirjaa:</strong> <code>maat</code> sisältää avaimet <code>"Suomi"</code>, <code>"Ruotsi"</code>, <code>"Norja"</code>. Ne eivät ole aakkosjärjestyksessä.
                </li>
                <li><strong>Mitä halutaan?</strong> Tulostaa avaimet aakkosjärjestyksessä: Norja, Ruotsi, Suomi.
                </li>
                <li><strong>Mikä funktio järjestää?</strong> <code>sorted()</code> — sama tuttu funktio kuin listoilla:
                    <div class="step-line">sorted</div>
                </li>
            </ol>
            <p><code>sorted(maat)</code> järjestää sanakirjan <em>avaimet</em> aakkosjärjestykseen ja palauttaa listan.</p>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 39: Dict comprehension    // ─────────────────────────────────────
    {
    id: 109,


        legacyId: 104,
        section: "sanakirjat",
        title: "Dict yhdellä rivillä ⚡",
        slug: "sanakirjat-dict-yhdella-rivilla",
        icon: "⚡",
        description: "Dict comprehension luo sanakirjan yhdellä tehokkaalla rivillä!",
        theory: `
            <h4>📚 Dict comprehension</h4>
            <p>Kuten lista-comprehension, mutta sanakirjalle:</p>
            <pre><code># Neliöt-sanakirja
neliöt = {x: x**2 for x in range(1, 6)}
print(neliöt)
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</code></pre>
            <p>Syntaksi: <code>{avain: arvo for muuttuja in joukko}</code></p>
        `,
        challenge: "Korvaa <code>___</code> niin, että syntyy sanakirja jossa avain on luku ja arvo on luku × 3.",
        starterCode: `kolminkertaiset = {x: x*___ for x in range(1, 5)}\nprint(kolminkertaiset)`,
        hint: "x*3 antaa kolminkertaisen arvon. range(1,5) = [1,2,3,4].",
        validate: function(output) {
            return output.includes("1: 3") && output.includes("2: 6") && output.includes("3: 9") && output.includes("4: 12");
        },
        successMsg: "Oikein! ⚡ Dict comprehension — tehokas yhdellä rivillä!",
        failMsg: "Tuloksessa pitäisi olla {1: 3, 2: 6, 3: 9, 4: 12}. Mikä on kertoimen?",
        detailedHelp: `
            <h4>Askel askeleelta — Dict yhdellä rivillä</h4>
            <p>Koodissa on yksi <code>___</code>: <code>x*___</code> dict comprehensionin sisällä.</p>
            <ol>
                <li><strong>Mitä comprehension tekee?</strong> <code>{x: x*___ for x in range(1, 5)}</code> luo sanakirjan, jossa:
                    <ul>
                        <li>Avain = <code>x</code> (luvut 1, 2, 3, 4)</li>
                        <li>Arvo = <code>x * jotain</code></li>
                    </ul>
                </li>
                <li><strong>Mikä kerroin?</strong> Tehtävässä sanotaan "kolminkertaiset". Siis <code>x * 3</code>:
                    <div class="step-line">3</div>
                </li>
                <li><strong>Tulos:</strong> <code>{1: 3, 2: 6, 3: 9, 4: 12}</code> — jokainen luku kerrottuna kolmella!
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 40: JSON-muoto    // ─────────────────────────────────────
    {
    id: 110,


        legacyId: 105,
        section: "sanakirjat",
        title: "JSON-muoto 🌐",
        slug: "sanakirjat-json-muoto",
        icon: "🌐",
        description: "Sanakirjat ja JSON ovat melkein sama asia — näin data liikkuu internetissä!",
        theory: `
            <h4>📚 Sanakirja ↔ JSON</h4>
            <p>JSON (JavaScript Object Notation) on tapa tallentaa dataa — se näyttää melkein samalta kuin Python-sanakirja!</p>
            <pre><code>import json

# Sanakirja → JSON-merkkijono
oppilas = {"nimi": "Masa", "ikä": 10}
teksti = json.dumps(oppilas)
print(teksti)   # {"nimi": "Masa", "ik\\u00e4": 10}

# JSON → sanakirja
takaisin = json.loads(teksti)
print(takaisin["nimi"])   # Masa</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että sanakirja muuttuu JSON-merkkijonoksi ja sen pituus tulostuu.",
        starterCode: `import json\ndata = {"kieli": "Python", "versio": 3}\nteksti = json.___(data)\nprint(len(teksti))`,
        hint: "json.dumps() muuttaa sanakirjan JSON-merkkijonoksi. 'dumps' = dump string.",
        validate: function(output) {
            const val = parseInt(output.trim());
            return val > 20 && val < 50;
        },
        successMsg: "Oikein! 🌐 json.dumps() muutti sanakirjan JSON-tekstiksi!",
        failMsg: "Käytä json.dumps() muuttaaksesi sanakirjan merkkijonoksi.",
        detailedHelp: `
            <h4>Askel askeleelta — JSON-muoto</h4>
            <p>Koodissa on yksi <code>___</code>: <code>json.___(data)</code></p>
            <ol>
                <li><strong>Mitä JSON on?</strong> JSON on tapa muuttaa sanakirja tekstiksi. Sitä käytetään kaikkialla internetissä datan lähettämiseen.
                </li>
                <li><strong>Mitä halutaan?</strong> Muuttaa <code>data</code>-sanakirja JSON-merkkijonoksi (= tekstiksi).
                </li>
                <li><strong>Mikä funktio tekee sen?</strong> <code>json.dumps()</code> — "dump string" = "muunna merkkijonoksi":
                    <div class="step-line">dumps</div>
                    Huomaa: <code>dumps</code> eikä <code>dump</code> — s-kirjain tulee sanasta "string"!
                </li>
            </ol>
            <p><code>len(teksti)</code> mittaa JSON-merkkijonon pituuden merkkeinä.</p>
        `,
        maxStars: 3
    },

    
    // ═══════════════════════════════════════
    //  FUNKTIOT EASY - Helpot (20 tehtävää)
    // ═══════════════════════════════════════

    // ─────────────────────────────────────
    // TEHTÄVÄ 41: Mitä on def? 🔧    // ─────────────────────────────────────
    {
    id: 111,

        section: "funktiot_easy",
        title: "Mitä on def? 🔧",
        slug: "funktiot_easy-mita-on-def",
        icon: "🔧",
        description: "Funktiot ovat omia komentoja. Ne luodaan sanalla def.",
        theory: `<h4>📚 Funktiot</h4><p>Voit tehdä omia komentoja! Pythonissa funktio luodaan sanalla <code>def</code> (lyhenne sanasta define).</p><pre><code>def tervehdi():
    print("Heippa!")</code></pre><p>Muista sisennys (välilyönnit) ja kaksoispiste!</p>`,
        challenge: "Luo funktio nimeltä <code>sano_moi</code>, joka tulostaa \"Moi!\". (Vain funktion luominen riittää nyt).",
        starterCode: `___ sano_moi():
    print("Moi!")`,
        hint: "Käytä def-sanaa.",
        validate: function(output) { return true; },
        successMsg: "Hienoa! Osaat luoda funktion. 🔧",
        failMsg: "Käytä def-sanaa.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 42: Funktion kutsuminen 📞    // ─────────────────────────────────────
    {
    id: 112,

        section: "funktiot_easy",
        title: "Funktion kutsuminen 📞",
        slug: "funktiot_easy-funktion-kutsuminen",
        icon: "📞",
        description: "Pelkkä luominen ei tee mitään, funktiota pitää kutsua!",
        theory: `<h4>📚 Kutsuminen</h4><p>Kun funktio on luotu, sitä voi käyttää (eli kutsua) kirjoittamalla sen nimi ja sulut:</p><pre><code>tervehdi()</code></pre>`,
        challenge: "Kutsu <code>hauku</code>-funktiota kerran.",
        starterCode: `def hauku():
    print("Hau hau!")

# Kutsu funktiota tähän:
`,
        hint: "Kirjoita hauku()",
        validate: function(output) { return output.includes('Hau hau!'); },
        successMsg: "Oikein! 📞 Funktio suoritti koodinsa.",
        failMsg: "Kirjoita hauku() kutsuaksesi sitä.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 43: Monta kutsua 🔁    // ─────────────────────────────────────
    {
    id: 113,

        section: "funktiot_easy",
        title: "Monta kutsua 🔁",
        slug: "funktiot_easy-monta-kutsua",
        icon: "🔁",
        description: "Funktion paras puoli on, että sitä voi käyttää monta kertaa!",
        theory: `<h4>📚 Uudelleenkäyttö</h4><p>Voit kutsua samaa funktiota niin monta kertaa kuin haluat. Koodia ei tarvitse kirjoittaa uudelleen.</p>`,
        challenge: "Kutsu <code>sano_hep</code>-funktiota kolme kertaa peräkkäin.",
        starterCode: `def sano_hep():
    print("Hep!")

# Kutsu 3 kertaa:
`,
        hint: "Kirjoita sano_hep() kolmelle eri riville.",
        validate: function(output) { return output.split('Hep!').length >= 4; },
        successMsg: "Loistavaa! 🔁 Funktiot säästävät paljon kirjoittamista.",
        failMsg: "Pitäisi tulostua kolme kertaa 'Hep!'. Kutsu funktiota kolmesti.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 44: Anna sille tietoa 📨    // ─────────────────────────────────────
    {
    id: 114,

        section: "funktiot_easy",
        title: "Anna sille tietoa 📨",
        slug: "funktiot_easy-anna-sille-tietoa",
        icon: "📨",
        description: "Funktio voi ottaa vastaan tietoa. Sitä kutsutaan parametriksi.",
        theory: `<h4>📚 Parametrit</h4><p>Sulkujen sisään voi laittaa muuttujan, jolle annetaan arvo kutsuessa:</p><pre><code>def tervehdi(nimi):
    print("Moi", nimi)</code></pre>`,
        challenge: "Täydennä funktio ottamaan parametri <code>nimi</code>.",
        starterCode: `def moikkaa( ___ ):
    print("Heippa", nimi)

moikkaa("Masa")`,
        hint: "Kirjoita nimi sulkujen sisään.",
        validate: function(output) { return output.includes('Heippa Masa'); },
        successMsg: "Hienoa! 📨 Nyt funktio ottaa vastaan tietoa.",
        failMsg: "Laita nimi sulkujen sisään.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 45: Kutsu parametrilla 🎯    // ─────────────────────────────────────
    {
    id: 115,

        section: "funktiot_easy",
        title: "Kutsu parametrilla 🎯",
        slug: "funktiot_easy-kutsu-parametrilla",
        icon: "🎯",
        description: "Miten annetaan arvo parametrille?",
        theory: `<h4>📚 Arvon antaminen</h4><p>Kun kutsut funktiota, laita haluamasi arvo sulkujen sisään:</p><pre><code>tervehdi("Liisa")</code></pre>`,
        challenge: "Kutsu <code>tervehdi</code>-funktiota ja anna sille oma nimesi (lainausmerkeissä).",
        starterCode: `def tervehdi(nimi):
    print("Tervetuloa", nimi)

# Kutsu tässä:
`,
        hint: "Esim. tervehdi(\"Eliel\")",
        validate: function(output) { return output.includes('Tervetuloa') && output.trim().length > 11; },
        successMsg: "Mahtavaa! 🎯 Kutsuit funktiota omalla tiedollasi.",
        failMsg: "Kutsu tervehdi(\"OmaNimi\").",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 46: Kaksi parametria ✌️    // ─────────────────────────────────────
    {
    id: 116,

        section: "funktiot_easy",
        title: "Kaksi parametria ✌️",
        slug: "funktiot_easy-kaksi-parametria",
        icon: "✌️",
        description: "Funktiolla voi olla monta parametria, ne erotetaan pilkulla.",
        theory: `<h4>📚 Useita parametreja</h4><p><pre><code>def summaa(a, b):
    print(a + b)</code></pre></p>`,
        challenge: "Täydennä funktiokutsu niin, että luvut ovat 5 ja 10.",
        starterCode: `def laske_yhteen(a, b):
    print(a + b)

laske_yhteen( ___ , ___ )`,
        hint: "laske_yhteen(5, 10)",
        validate: function(output) { return output.includes('15'); },
        successMsg: "Hienoa! ✌️ Funktio sai kaksi numeroa ja laski ne yhteen.",
        failMsg: "Laita sulkujen sisään 5, 10.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 47: Tekstiä ja numeroita 🔢    // ─────────────────────────────────────
    {
    id: 117,

        section: "funktiot_easy",
        title: "Tekstiä ja numeroita 🔢",
        slug: "funktiot_easy-tekstia-ja-numeroita",
        icon: "🔢",
        description: "Parametrit voivat olla eri tyyppisiä.",
        theory: `<h4>📚 Eri tyypit</h4><p>Voit antaa funktion toiselle parametrille tekstin ja toiselle numeron.</p>`,
        challenge: "Luo funktio <code>esittele(nimi, ika)</code> joka tulostaa nimen ja iän.",
        starterCode: `def esittele(nimi, ika):
    print(nimi, "on", ika)

# Kutsu esittele-funktiota omalla nimelläsi ja iälläsi:
`,
        hint: "Esim. esittele(\"Heikki\", 10)",
        validate: function(output) { return output.includes('on'); },
        successMsg: "Aivan oikein! 🔢",
        failMsg: "Kutsu esittele(\"Nimi\", ikä) (muista tekstin lainausmerkit!).",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 48: Palauta arvo (return) 🎁    // ─────────────────────────────────────
    {
    id: 118,

        section: "funktiot_easy",
        title: "Palauta arvo (return) 🎁",
        slug: "funktiot_easy-palauta-arvo-return",
        icon: "🎁",
        description: "Tulostamisen sijaan funktio voi palauttaa arvon takaisin.",
        theory: `<h4>📚 return</h4><p><code>return</code> tarkoittaa että funktio antaa tuloksen takaisin, ja sitä voi käyttää myöhemmin koodissa. <code>return</code> lopettaa funktion välittömästi.</p>`,
        challenge: "Palauta luku 10 käyttäen <code>return</code>.",
        starterCode: `def anna_kymppi():
    ___ 10

print(anna_kymppi())`,
        hint: "Käytä sanaa return",
        validate: function(output) { return output.includes('10'); },
        successMsg: "Juuri näin! 🎁 Nyt funktio palauttaa arvon.",
        failMsg: "Käytä return-sanaa.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 49: Tallenna palautusarvo 📥    // ─────────────────────────────────────
    {
    id: 119,

        section: "funktiot_easy",
        title: "Tallenna palautusarvo 📥",
        slug: "funktiot_easy-tallenna-palautusarvo",
        icon: "📥",
        description: "Palautettu arvo voidaan tallentaa muuttujaan.",
        theory: `<h4>📚 Muuttujaan tallennus</h4><p><pre><code>tulos = anna_kymppi()
print(tulos)</code></pre></p>`,
        challenge: "Tallenna funktion palauttama arvo muuttujaan <code>vastaus</code> ja tulosta se.",
        starterCode: `def paras_kieli():
    return "Python"

vastaus = 
print(vastaus)`,
        hint: "vastaus = paras_kieli()",
        validate: function(output) { return output.includes('Python'); },
        successMsg: "Oikein! 📥",
        failMsg: "Aseta vastaus = paras_kieli()",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 50: Laske ja palauta 🧮    // ─────────────────────────────────────
    {
    id: 120,

        section: "funktiot_easy",
        title: "Laske ja palauta 🧮",
        slug: "funktiot_easy-laske-ja-palauta",
        icon: "🧮",
        description: "Yleensä funktio tekee laskun ja palauttaa tuloksen.",
        theory: `<h4>📚 Lasku returnissa</h4><p>Voit laittaa laskutoimituksen suoraan return-riville: <code>return a + b</code></p>`,
        challenge: "Täydennä funktio tuplaamaan sille annettu luku (kerro kahdella) ja palauttamaan se.",
        starterCode: `def tuplaa(luku):
    return 

print(tuplaa(5))  # Pitäisi olla 10`,
        hint: "return luku * 2",
        validate: function(output) { return output.includes('10'); },
        successMsg: "Mahtavaa! 🧮",
        failMsg: "Palauta luku * 2",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 51: Vähennyslasku ➖    // ─────────────────────────────────────
    {
    id: 121,

        section: "funktiot_easy",
        title: "Vähennyslasku ➖",
        slug: "funktiot_easy-vahennyslasku",
        icon: "➖",
        description: "Tehdään funktio vähentämiseen.",
        theory: `<h4>📚 Miinus</h4><p>Vähennyslasku toimii aivan yhtä helposti.`,
        challenge: "Tee funktio joka palauttaa a miinus b.",
        starterCode: `def vahenna(a, b):
    return 

print(vahenna(10, 3))`,
        hint: "return a - b",
        validate: function(output) { return output.includes('7'); },
        successMsg: "Oikein! ➖",
        failMsg: "Palauta a - b",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 52: Print vs Return 🤔    // ─────────────────────────────────────
    {
    id: 122,

        section: "funktiot_easy",
        title: "Print vs Return 🤔",
        slug: "funktiot_easy-print-vs-return",
        icon: "🤔",
        description: "Mitä eroa näillä on?",
        theory: `<h4>📚 Ero</h4><p><code>print</code> näyttää arvon ruudulla. <code>return</code> antaa sen koodin jatkokäyttöön. Funktioissa käytetään yleensä <code>return</code>ia, jotta funktio on hyödyllisempi.</p>`,
        challenge: "Korvaa print() sanalla return, jotta koodi toimii oikein.",
        starterCode: `def anna_tervehdys(nimi):
    print("Moi " + nimi)

# Tämä ei toimi oikein jos funktio käyttää printiä returnin sijaan:
viesti = anna_tervehdys("Masa")
print("Viesti on:", viesti)`,
        hint: "Vaihda print -> return funktiossa.",
        validate: function(output) { return output.includes('Viesti on: Moi Masa'); },
        successMsg: "Hienoa! 🤔 Ymmärrät nyt eron.",
        failMsg: "Korvaa funktion print-komento return-komennolla.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 53: Jos-lause funktiossa 🚦    // ─────────────────────────────────────
    {
    id: 123,

        section: "funktiot_easy",
        title: "Jos-lause funktiossa 🚦",
        slug: "funktiot_easy-jos-lause-funktiossa",
        icon: "🚦",
        description: "Funktiossa voi olla if-lauseita.",
        theory: `<h4>📚 Ehdot sisällä</h4><p>Voit tarkistaa asioita ennen kuin palautat mitään.</p>`,
        challenge: "Jos luku on yli nollan, palauta True. Muuten False.",
        starterCode: `def onko_positiivinen(luku):
    if luku > 0:
        return True
    else:
        return 

print(onko_positiivinen(5))
print(onko_positiivinen(-2))`,
        hint: "Palauta False else-lohkossa.",
        validate: function(output) { return output.includes('True') && output.includes('False'); },
        successMsg: "Toimii! 🚦",
        failMsg: "Pitäisi tulostaa True ja False.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 54: Onko pitkä sana? 📏    // ─────────────────────────────────────
    {
    id: 124,

        section: "funktiot_easy",
        title: "Onko pitkä sana? 📏",
        slug: "funktiot_easy-onko-pitka-sana",
        icon: "📏",
        description: "Palautetaan tekstiä if-lauseen perusteella.",
        theory: `<h4>📚 Pituus</h4><p>Käytä <code>len(sana)</code> sanan pituuden mittaamiseen.</p>`,
        challenge: "Täydennä ehto: jos pituus on suurempi kuin 5.",
        starterCode: `def onko_pitka(sana):
    if len(sana) ___ 5:
        return "Pitkä"
    else:
        return "Lyhyt"

print(onko_pitka("krokotiili"))`,
        hint: "Käytä > merkkiä.",
        validate: function(output) { return output.includes('Pitkä'); },
        successMsg: "Oikein päätelty! 📏",
        failMsg: "Käytä > 5",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 55: Lempiväri 🎨    // ─────────────────────────────────────
    {
    id: 125,

        section: "funktiot_easy",
        title: "Lempiväri 🎨",
        slug: "funktiot_easy-lempivari",
        icon: "🎨",
        description: "Testataan onko merkkijono tietty.",
        theory: `<h4>📚 Vertailu</h4><p>Yhtäsuuruus tarkistetaan koodilla <code>==</code>.</p>`,
        challenge: "Jos väri on 'sininen', palauta 'Joo!'. Muuten 'Ei'.",
        starterCode: `def on_lempivari(vari):
    if vari == "sininen":
        return "Joo!"
    else:
        return 

print(on_lempivari("punainen"))`,
        hint: "return \"Ei\"",
        validate: function(output) { return output.includes('Ei'); },
        successMsg: "Loistavaa! 🎨",
        failMsg: "Palauta 'Ei'.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 56: Lista parametrina 📋    // ─────────────────────────────────────
    {
    id: 126,

        section: "funktiot_easy",
        title: "Lista parametrina 📋",
        slug: "funktiot_easy-lista-parametrina",
        icon: "📋",
        description: "Funktiolle voi antaa myös listan parametrina.",
        theory: `<h4>📚 Listat</h4><p>Listan eka alkio saadaan <code>lista[0]</code>.</p>`,
        challenge: "Tee funktio, joka palauttaa listan ensimmäisen alkion.",
        starterCode: `def eka_alkio(lista):
    return 

print(eka_alkio(["omena", "banaani", "kiivi"]))`,
        hint: "return lista[0]",
        validate: function(output) { return output.includes('omena'); },
        successMsg: "Kyllä vain! 📋",
        failMsg: "Palauta lista[0]",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 57: Listan pituus 📏    // ─────────────────────────────────────
    {
    id: 127,

        section: "funktiot_easy",
        title: "Listan pituus 📏",
        slug: "funktiot_easy-listan-pituus",
        icon: "📏",
        description: "Kuinka monta alkiota listassa on?",
        theory: `<h4>📚 len</h4><p>Kuten sanoille, myös listalle toimii <code>len(lista)</code>.</p>`,
        challenge: "Palauta listan pituus.",
        starterCode: `def listan_koko(lista):
    return 

print(listan_koko([1, 2, 3, 4, 5]))`,
        hint: "return len(lista)",
        validate: function(output) { return output.includes('5'); },
        successMsg: "Upeaa! 📏",
        failMsg: "Käytä len() funktiota.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 58: Monta returnia 🚪    // ─────────────────────────────────────
    {
    id: 128,

        section: "funktiot_easy",
        title: "Monta returnia 🚪",
        slug: "funktiot_easy-monta-returnia",
        icon: "🚪",
        description: "Funktiossa voi olla monta return-kohtaa, mutta vain yksi suoritetaan.",
        theory: `<h4>📚 Ulospääsy</h4><p>Kun Python näkee sanan <code>return</code>, se hyppää ulos funktiosta. Mitään sen jälkeistä ei suoriteta.</p>`,
        challenge: "Kokeile ohjelmaa ja yritä ymmärtää miksi se tulostaa niin kuin tulostaa.",
        starterCode: `def tarkista(a):
    if a == 0:
        return "Nolla"
    return "Jotain muuta"

print(tarkista(0))
print(tarkista(5))`,
        hint: "Paina vain Suorita!",
        validate: function(output) { return output.includes('Nolla') && output.includes('Jotain muuta'); },
        successMsg: "Ymmärretty! 🚪 Return keskeyttää koodin.",
        failMsg: "Suorita koodi.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 59: Omat muuttujat sisällä 📦    // ─────────────────────────────────────
    {
    id: 129,

        section: "funktiot_easy",
        title: "Omat muuttujat sisällä 📦",
        slug: "funktiot_easy-omat-muuttujat-sisalla",
        icon: "📦",
        description: "Voit luoda funktiossa uusia muuttujia.",
        theory: `<h4>📚 Lähialue</h4><p>Funktion sisällä tehdyt muuttujat ovat olemassa vain siellä.</p>`,
        challenge: "Luo muuttuja 'vastaus' funktion sisällä, laske a+b siihen, ja palauta se.",
        starterCode: `def summaa_hienosti(a, b):
    vastaus = a + b
    return 

print(summaa_hienosti(3, 4))`,
        hint: "return vastaus",
        validate: function(output) { return output.includes('7'); },
        successMsg: "Hyvä! 📦",
        failMsg: "Palauta vastaus.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 60: Mestariteos 🏆    // ─────────────────────────────────────
    {
    id: 130,

        section: "funktiot_easy",
        title: "Mestariteos 🏆",
        slug: "funktiot_easy-mestariteos",
        icon: "🏆",
        description: "Yhdistetään kaikki oppimasi asiat yhteen funktioon!",
        theory: `<h4>📚 Yhteenveto</h4><p>Sinä osaat nyt luoda funktion, käyttää parametreja, ehtolauseita ja palauttaa tuloksia!</p>`,
        challenge: "Täydennä <code>yhdistelma</code> funktio palauttamaan 'Iso [nimi]' jos luku on yli 10, muuten 'Pieni [nimi]'.",
        starterCode: `def yhdistelma(nimi, luku):
    if luku > 10:
        return "Iso " + nimi
    else:
        return 

print(yhdistelma("Masa", 15))
print(yhdistelma("Liisa", 5))`,
        hint: "return \"Pieni \" + nimi",
        validate: function(output) { return output.includes('Iso Masa') && output.includes('Pieni Liisa'); },
        successMsg: "MESTARI! 🏆 Olet valmis siirtymään seuraavalle tasolle!",
        failMsg: "Else-lohkossa palauta \"Pieni \" + nimi.",
        maxStars: 3
    },

    
    // ═══════════════════════════════════════
    //  FUNKTIOT EASY 2 - Lisää Toistoa (20 tehtävää)
    // ═══════════════════════════════════════

    // ─────────────────────────────────────
    // TEHTÄVÄ 61: Paluu funktioihin 🔙    // ─────────────────────────────────────
    {
    id: 131,
        section: "funktiot_easy2",
        title: "Paluu funktioihin 🔙",
        slug: "funktiot_easy2-paluu-funktioihin",
        icon: "🔙",
        description: "Kerrataan funktion perusteet.",
        theory: `<h4>📚 Kertaus</h4><p>Funktio luodaan <code>def</code>-sanalla. Koodilohko sisennetään.</p>`,
        challenge: "Luo funktio <code>sano_hei</code>, joka tulostaa 'Hei!'.",
        starterCode: `___ sano_hei():
    print("Hei!")`,
        hint: "Käytä sanaa def.",
        validate: function(output) { return true; },
        successMsg: "Hienoa! Kertaus on opintojen äiti. 🔙",
        failMsg: "Käytä def-sanaa.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 62: Huuda isosti! 📢    // ─────────────────────────────────────
    {
    id: 132,
        section: "funktiot_easy2",
        title: "Huuda isosti! 📢",
        slug: "funktiot_easy2-huuda-isosti",
        icon: "📢",
        description: "Funktio, joka muuttaa tekstin isoiksi kirjaimiksi.",
        theory: `<h4>📚 upper()</h4><p><code>teksti.upper()</code> muuttaa kaikki kirjaimet isoiksi.</p>`,
        challenge: "Palauta sana isoilla kirjaimilla.",
        starterCode: `def huuda(sana):
    return sana.___

print(huuda("apua"))`,
        hint: "Käytä .upper()",
        validate: function(output) { return output.includes('APUA'); },
        successMsg: "HIENOA! 📢",
        failMsg: "Käytä sana.upper()",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 63: Kuiskaa pienesti 🤫    // ─────────────────────────────────────
    {
    id: 133,
        section: "funktiot_easy2",
        title: "Kuiskaa pienesti 🤫",
        slug: "funktiot_easy2-kuiskaa-pienesti",
        icon: "🤫",
        description: "Funktio, joka muuttaa tekstin pieniksi kirjaimiksi.",
        theory: `<h4>📚 lower()</h4><p><code>teksti.lower()</code> muuttaa kaikki kirjaimet pieniksi.</p>`,
        challenge: "Palauta sana pienillä kirjaimilla.",
        starterCode: `def kuiskaa(sana):
    return 

print(kuiskaa("KOIRA"))`,
        hint: "Käytä sana.lower()",
        validate: function(output) { return output.includes('koira'); },
        successMsg: "shh, oikein meni. 🤫",
        failMsg: "Käytä sana.lower()",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 64: Koko nimi 🤝    // ─────────────────────────────────────
    {
    id: 134,
        section: "funktiot_easy2",
        title: "Koko nimi 🤝",
        slug: "funktiot_easy2-koko-nimi",
        icon: "🤝",
        description: "Yhdistetään etunimi ja sukunimi.",
        theory: `<h4>📚 Plus-merkki</h4><p>Voit yhdistää tekstejä <code>+</code> merkillä. Muista lisätä välilyönti <code>" "</code> väliin!</p>`,
        challenge: "Yhdistä etunimi ja sukunimi välilyönnillä.",
        starterCode: `def koko_nimi(etu, suku):
    return etu + " " + 

print(koko_nimi("Matti", "Meikäläinen"))`,
        hint: "Lisää loppuun suku.",
        validate: function(output) { return output.includes('Matti Meikäläinen'); },
        successMsg: "Kyllä! 🤝 Nimet yhdistetty.",
        failMsg: "Palauta etu + \" \" + suku",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 65: Toista sana 🔁    // ─────────────────────────────────────
    {
    id: 135,
        section: "funktiot_easy2",
        title: "Toista sana 🔁",
        slug: "funktiot_easy2-toista-sana",
        icon: "🔁",
        description: "Kerrotaan tekstiä numerolla.",
        theory: `<h4>📚 Kertomerkki</h4><p>Tekstiä voi kertoa numerolla: <code>"Moi" * 3</code> on <code>"MoiMoiMoi"</code>.</p>`,
        challenge: "Palauta sana kerrottuna kolmella.",
        starterCode: `def toista_kolmesti(sana):
    return 

print(toista_kolmesti("Joo"))`,
        hint: "return sana * 3",
        validate: function(output) { return output.includes('JooJooJoo'); },
        successMsg: "JooJooJoo! 🔁 Oikein!",
        failMsg: "Käytä sana * 3",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 66: Sanan pituus 📏    // ─────────────────────────────────────
    {
    id: 136,
        section: "funktiot_easy2",
        title: "Sanan pituus 📏",
        slug: "funktiot_easy2-sanan-pituus",
        icon: "📏",
        description: "Lasketaan sanan kirjaimet funktiossa.",
        theory: `<h4>📚 len()</h4><p><code>len()</code>-funktio antaa tekstin pituuden.</p>`,
        challenge: "Palauta parametrina annetun sanan pituus.",
        starterCode: `def kirjaimia(sana):
    return 

print(kirjaimia("krokotiili"))`,
        hint: "return len(sana)",
        validate: function(output) { return output.includes('10'); },
        successMsg: "Aivan oikein! 📏",
        failMsg: "Käytä len(sana)",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 67: Ensimmäinen kirjain 🅰️    // ─────────────────────────────────────
    {
    id: 137,
        section: "funktiot_easy2",
        title: "Ensimmäinen kirjain 🅰️",
        slug: "funktiot_easy2-ensimmainen-kirjain",
        icon: "🅰️",
        description: "Haetaan sanan alku.",
        theory: `<h4>📚 Indeksit</h4><p>Ensimmäinen kirjain on kohdassa nolla: <code>sana[0]</code>.</p>`,
        challenge: "Palauta sanan ensimmäinen kirjain.",
        starterCode: `def eka_kirjain(sana):
    return 

print(eka_kirjain("Python"))`,
        hint: "return sana[0]",
        validate: function(output) { return output.includes('P'); },
        successMsg: "Kyllä! 🅰️",
        failMsg: "Käytä sana[0]",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 68: Onko pitkä? 🦒    // ─────────────────────────────────────
    {
    id: 138,
        section: "funktiot_easy2",
        title: "Onko pitkä? 🦒",
        slug: "funktiot_easy2-onko-pitka",
        icon: "🦒",
        description: "Suora vertailun palauttaminen.",
        theory: `<h4>📚 Boolean-palautus</h4><p>Voit palauttaa vertailun tuloksen suoraan: <code>return a > 5</code>. Se palauttaa True tai False.</p>`,
        challenge: "Palauta True jos sanan pituus on yli 5, muuten False.",
        starterCode: `def on_pitka(sana):
    return len(sana) > 

print(on_pitka("koira")) # False
print(on_pitka("krokotiili")) # True`,
        hint: "Laita ehto muotoon len(sana) > 5",
        validate: function(output) { return output.includes('False') && output.includes('True'); },
        successMsg: "Hienoa! 🦒",
        failMsg: "Laita numeroksi 5.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 69: Pelipisteet 🎮    // ─────────────────────────────────────
    {
    id: 139,
        section: "funktiot_easy2",
        title: "Pelipisteet 🎮",
        slug: "funktiot_easy2-pelipisteet",
        icon: "🎮",
        description: "Lasketaan voittopisteet.",
        theory: `<h4>📚 Kertolasku</h4><p>Jokaisesta voitosta saa 3 pistettä.</p>`,
        challenge: "Palauta voittojen määrä kerrottuna kolmella.",
        starterCode: `def laske_pisteet(voitot):
    return 

print(laske_pisteet(4)) # Pitäisi olla 12`,
        hint: "return voitot * 3",
        validate: function(output) { return output.includes('12'); },
        successMsg: "Voitto! 🎮",
        failMsg: "Käytä voitot * 3",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 70: Kympin kerho 🔟    // ─────────────────────────────────────
    {
    id: 140,
        section: "funktiot_easy2",
        title: "Kympin kerho 🔟",
        slug: "funktiot_easy2-kympin-kerho",
        icon: "🔟",
        description: "Onko luku tasan 10?",
        theory: ``,
        challenge: "Palauta True jos luku on 10, muuten False.",
        starterCode: `def on_kymppi(luku):
    return luku == 

print(on_kymppi(10))
print(on_kymppi(8))`,
        hint: "Käytä numeroa 10.",
        validate: function(output) { return output.includes('True') && output.includes('False'); },
        successMsg: "Kymppi! 🔟",
        failMsg: "Vertaa luku == 10.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 71: Kolme kaverusta 👨‍👨‍👦    // ─────────────────────────────────────
    {
    id: 141,
        section: "funktiot_easy2",
        title: "Kolme kaverusta 👨‍👨‍👦",
        slug: "funktiot_easy2-kolme-kaverusta",
        icon: "👨‍👨‍👦",
        description: "Lasketaan kolme lukua yhteen.",
        theory: ``,
        challenge: "Täydennä funktio palauttamaan kaikkien kolmen luvun summa.",
        starterCode: `def summaa_kolme(a, b, c):
    return a + b + 

print(summaa_kolme(1, 2, 3))`,
        hint: "Lisää c.",
        validate: function(output) { return output.includes('6'); },
        successMsg: "Oikein! 👨‍👨‍👦",
        failMsg: "Palauta a + b + c",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 72: Verolaskuri 🧾    // ─────────────────────────────────────
    {
    id: 142,
        section: "funktiot_easy2",
        title: "Verolaskuri 🧾",
        slug: "funktiot_easy2-verolaskuri",
        icon: "🧾",
        description: "Lisätään hintaan 24% ALV.",
        theory: `<h4>📚 Desimaaliluvut</h4><p>Pythonissa desimaaliluvut kirjoitetaan pisteellä: <code>1.24</code>.</p>`,
        challenge: "Kerro hinta 1.24:llä.",
        starterCode: `def lisaa_vero(hinta):
    return 

print(lisaa_vero(100)) # Pitäisi olla 124.0`,
        hint: "return hinta * 1.24",
        validate: function(output) { return output.includes('124.0'); },
        successMsg: "Tilit kunnossa! 🧾",
        failMsg: "Käytä hinta * 1.24",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 73: Numero tekstiksi 📝    // ─────────────────────────────────────
    {
    id: 143,
        section: "funktiot_easy2",
        title: "Numero tekstiksi 📝",
        slug: "funktiot_easy2-numero-tekstiksi",
        icon: "📝",
        description: "Yhdistetään numero tekstiin.",
        theory: `<h4>📚 str()</h4><p>Jotta voit yhdistää numeron tekstiin `+` merkillä, numero pitää ensin muuttaa tekstiksi: <code>str(numero)</code>.</p>`,
        challenge: "Palauta teksti 'Ikäsi on ' + ika (muutettuna tekstiksi).",
        starterCode: `def ika_viesti(ika):
    return "Ikäsi on " + 

print(ika_viesti(12))`,
        hint: "Käytä str(ika)",
        validate: function(output) { return output.includes('Ikäsi on 12'); },
        successMsg: "Hyvin yhdistetty! 📝",
        failMsg: "Käytä str(ika)",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 74: Aikuinen vai ei? 🔞    // ─────────────────────────────────────
    {
    id: 144,
        section: "funktiot_easy2",
        title: "Aikuinen vai ei? 🔞",
        slug: "funktiot_easy2-aikuinen-vai-ei",
        icon: "🔞",
        description: "If-else lause funktiossa.",
        theory: ``,
        challenge: "Palauta True jos ikä on 18 tai enemmän, muuten False.",
        starterCode: `def onko_aikuinen(ika):
    if ika >= 18:
        return 
    else:
        return 

print(onko_aikuinen(20))
print(onko_aikuinen(15))`,
        hint: "Palauta True jos yli 18, muuten False.",
        validate: function(output) { return output.includes('True') && output.includes('False'); },
        successMsg: "Selvä juttu! 🔞",
        failMsg: "Palauta True tai False.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 75: Neliön pinta-ala ⬛    // ─────────────────────────────────────
    {
    id: 145,
        section: "funktiot_easy2",
        title: "Neliön pinta-ala ⬛",
        slug: "funktiot_easy2-nelion-pinta-ala",
        icon: "🔲",
        description: "Laske neliön pinta-ala.",
        theory: ``,
        challenge: "Neliön pinta-ala on sivu * sivu.",
        starterCode: `def nelion_ala(sivu):
    return 

print(nelion_ala(5))`,
        hint: "return sivu * sivu",
        validate: function(output) { return output.includes('25'); },
        successMsg: "Geometria on hallussa! ⬛",
        failMsg: "Palauta sivu * sivu",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 76: Suorakulmion piiri 📏    // ─────────────────────────────────────
    {
    id: 146,
        section: "funktiot_easy2",
        title: "Suorakulmion piiri 📏",
        slug: "funktiot_easy2-suorakulmion-piiri",
        icon: "📏",
        description: "Lasketaan reunojen pituus.",
        theory: ``,
        challenge: "Palauta (leveys + korkeus) * 2.",
        starterCode: `def piiri(leveys, korkeus):
    return 

print(piiri(5, 10)) # Pitäisi olla 30`,
        hint: "return (leveys + korkeus) * 2",
        validate: function(output) { return output.includes('30'); },
        successMsg: "Täydellistä! 📏",
        failMsg: "Käytä (leveys + korkeus) * 2",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 77: Kuuluuko joukkoon? 🔍    // ─────────────────────────────────────
    {
    id: 147,
        section: "funktiot_easy2",
        title: "Kuuluuko joukkoon? 🔍",
        slug: "funktiot_easy2-kuuluuko-joukkoon",
        icon: "🔍",
        description: "Onko arvo listassa?",
        theory: `<h4>📚 in</h4><p>Voit tarkistaa onko arvo listassa: <code>arvo in lista</code>.</p>`,
        challenge: "Palauta True jos luku on listassa [1, 2, 3].",
        starterCode: `def onko_yks_kaks_kolme(luku):
    return luku in [1, 2, ]

print(onko_yks_kaks_kolme(2))
print(onko_yks_kaks_kolme(5))`,
        hint: "Lisää 3 listaan.",
        validate: function(output) { return output.includes('True') && output.includes('False'); },
        successMsg: "Oikein! 🔍",
        failMsg: "Listan pitää olla [1, 2, 3]",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 78: Onko tyhjä? 🕳️    // ─────────────────────────────────────
    {
    id: 148,
        section: "funktiot_easy2",
        title: "Onko tyhjä? 🕳️",
        slug: "funktiot_easy2-onko-tyhja",
        icon: "🕳️",
        description: "Onko sana tyhjä merkkijono?",
        theory: ``,
        challenge: "Palauta True jos sanan pituus on 0.",
        starterCode: `def on_tyhja(sana):
    return len(sana) == 

print(on_tyhja(""))
print(on_tyhja("hei"))`,
        hint: "Käytä numeroa 0.",
        validate: function(output) { return output.includes('True') && output.includes('False'); },
        successMsg: "Hienoa! 🕳️",
        failMsg: "Vertaa pituutta nollaan.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 79: Tervehdys iän mukaan 🤝    // ─────────────────────────────────────
    {
    id: 149,
        section: "funktiot_easy2",
        title: "Tervehdys iän mukaan 🤝",
        slug: "funktiot_easy2-tervehdys-ian-mukaan",
        icon: "🤝",
        description: "Eri viesti eri ikäisille.",
        theory: ``,
        challenge: "Jos alle 18, palauta 'Moi', muuten 'Päivää'.",
        starterCode: `def tervehdi_ika(ika):
    if ika < 18:
        return "Moi"
    else:
        return 

print(tervehdi_ika(10))
print(tervehdi_ika(40))`,
        hint: "Palauta \"Päivää\" else-lohkossa.",
        validate: function(output) { return output.includes('Moi') && output.includes('Päivää'); },
        successMsg: "Hyvät käytöstavat! 🤝",
        failMsg: "Laita lainausmerkit \"Päivää\"",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 80: Iso huuto yhdessä 📢    // ─────────────────────────────────────
    {
    id: 150,
        section: "funktiot_easy2",
        title: "Iso huuto yhdessä 📢",
        slug: "funktiot_easy2-iso-huuto-yhdessa",
        icon: "📢",
        description: "Yhdistetään upper() ja nimien yhdistäminen.",
        theory: ``,
        challenge: "Palauta etunimi ja sukunimi välilyönnillä, KAIKKI ISOLLA.",
        starterCode: `def iso_nimi(etu, suku):
    kokonimi = etu + " " + suku
    return kokonimi.___

print(iso_nimi("Matti", "Meikäläinen"))`,
        hint: "Käytä .upper()",
        validate: function(output) { return output.includes('MATTI MEIKÄLÄINEN'); },
        successMsg: "Upeaa! Olet suorittanut Funktiot Easy 2! 🏆",
        failMsg: "Käytä .upper()",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 81: Sanakirjamestari    // ─────────────────────────────────────
    {
    id: 151,


        legacyId: 106,
        section: "sanakirjat",
        title: "Sanakirjamestari 🏆",
        slug: "sanakirjat-sanakirjamestari",
        icon: "🏆",
        description: "Viimeinen haaste — käytä kaikkia oppimiasi sanakirjataitoja!",
        theory: `
            <h4>📚 Kertaus — sanakirjat!</h4>
            <table style="width:100%; border-collapse: collapse; font-size: 0.95em;">
            <tr style="background: var(--accent-blue); color: white;"><th style="padding:6px;">Syntaksi</th><th style="padding:6px;">Toiminto</th><th style="padding:6px;">Esimerkki</th></tr>
            <tr><td style="padding:4px 6px;"><code>d[avain]</code></td><td>Hae arvo</td><td>d["nimi"] → "Masa"</td></tr>
            <tr><td style="padding:4px 6px;"><code>d[avain] = arvo</code></td><td>Lisää/muokkaa</td><td>d["ikä"] = 11</td></tr>
            <tr><td style="padding:4px 6px;"><code>del d[avain]</code></td><td>Poista</td><td>del d["ikä"]</td></tr>
            <tr><td style="padding:4px 6px;"><code>avain in d</code></td><td>Tarkista</td><td>"nimi" in d → True</td></tr>
            <tr><td style="padding:4px 6px;"><code>len(d)</code></td><td>Avainten määrä</td><td>len(d) → 3</td></tr>
            <tr><td style="padding:4px 6px;"><code>.keys()</code></td><td>Kaikki avaimet</td><td>list(d.keys())</td></tr>
            <tr><td style="padding:4px 6px;"><code>.values()</code></td><td>Kaikki arvot</td><td>list(d.values())</td></tr>
            <tr><td style="padding:4px 6px;"><code>.items()</code></td><td>Avain-arvo-parit</td><td>for k,v in d.items()</td></tr>
            <tr><td style="padding:4px 6px;"><code>.get(k, oletus)</code></td><td>Turvallinen haku</td><td>d.get("x", 0)</td></tr>
            <tr><td style="padding:4px 6px;"><code>.update(d2)</code></td><td>Yhdistä</td><td>d.update({"z": 3})</td></tr>
            </table>
        `,
        challenge: "Korvaa KAIKKI <code>___</code> niin, että ohjelma tulostaa neljä kertaa <code>True</code>!",
        starterCode: `varasto = {"omena": 5, "banaani": 3, "kiivi": 8}

# 1. Avainten määrä
print(___(varasto) == 3)

# 2. Turvallinen haku — "mango" ei ole varastossa
print(varasto.___("mango", 0) == 0)

# 3. Arvojen summa
print(sum(varasto.___()) == 16)

# 4. Tarkista jäsenyys
print("kiivi" ___ varasto)`,
        hint: "1: len(). 2: .get(). 3: .values(). 4: in.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 4 &&
                   lines[0].trim() === "True" &&
                   lines[1].trim() === "True" &&
                   lines[2].trim() === "True" &&
                   lines[3].trim() === "True";
        },
        successMsg: "MESTARI! 🏆 Osaat sanakirjat! Neljä True-vastausta — olet sanakirjamestari!",
        failMsg: "Kaikkien neljän rivin pitäisi tulostaa True. Lue vihje ja yritä uudelleen!",
        detailedHelp: `
            <h4>Askel askeleelta — Sanakirjamestari</h4>
            <p>Koodissa on neljä <code>___</code> kohtaa — jokaisessa tarvitaan eri taito!</p>
            <ol>
                <li><strong>Rivi 1:</strong> <code>___(varasto) == 3</code> — kuinka monta avainta varastossa on? Mikä funktio laskee?
                    <div class="step-line">len</div>
                    <code>len(varasto)</code> = 3 ✓
                </li>
                <li><strong>Rivi 2:</strong> <code>varasto.___(\"mango\", 0) == 0</code> — "mango" ei ole varastossa. Mikä metodi hakee turvallisesti?
                    <div class="step-line">get</div>
                    <code>.get("mango", 0)</code> = 0 (koska "mango" ei ole) ✓
                </li>
                <li><strong>Rivi 3:</strong> <code>sum(varasto.___()) == 16</code> — arvojen summa (5+3+8=16). Mikä metodi antaa arvot?
                    <div class="step-line">values</div>
                    <code>sum(.values())</code> = 5+3+8 = 16 ✓
                </li>
                <li><strong>Rivi 4:</strong> <code>"kiivi" ___ varasto</code> — onko kiivi varastossa? Mikä sana tarkistaa?
                    <div class="step-line">in</div>
                    <code>"kiivi" in varasto</code> = True ✓
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // =============================================
    //  FUNKTIOT (IDs 107–126)
    //  20 tehtävää: Pythonin funktiot
    // =============================================

    // ─────────────────────────────────────
    // TEHTÄVÄ 82: Ensimmäinen funktio    // ─────────────────────────────────────
    {
    id: 152,


        legacyId: 107,
        section: "funktiot",
        title: "Ensimmäinen funktio 🔧",
        slug: "funktiot-ensimmainen-funktio",
        icon: "🔧",
        description: "Opi luomaan oma funktio def-sanalla!",
        theory: `
            <h4>📚 def — luo oma funktio</h4>
            <p>Funktio on nimetty koodilohko, jonka voit kutsua uudelleen:</p>
            <pre><code>def tervehdi():
    print("Moi kaikki!")

# Kutsu funktiota:
tervehdi()    # Moi kaikki!</code></pre>
            <p><code>def</code> luo funktion, <code>():</code> aloittaa sen ja sisennys kertoo mitä funktio tekee.</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio tulostaa <code>Tervetuloa Koodikouluun!</code>",
        starterCode: `___ tervetuloa():\n    print("Tervetuloa Koodikouluun!")\n\ntervetuloa()`,
        hint: "Mikä Python-sana aloittaa funktion? Kolme kirjainta, tarkoittaa 'määrittele'.",
        validate: function(output) {
            return output.trim() === "Tervetuloa Koodikouluun!";
        },
        successMsg: "Hienoa! Loit ensimmäisen funktiosi def-sanalla! 🔧",
        failMsg: "Funktion pitäisi tulostaa 'Tervetuloa Koodikouluun!'. Mikä sana aloittaa funktion?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 1:</strong> <code>___ tervetuloa():</code> — mikä Python-sana luo funktion?
                    <div class="step-line">def</div>
                    <code>def tervetuloa():</code> luo funktion nimeltä "tervetuloa"
                </li>
                <li><strong>Rivi 4:</strong> <code>tervetuloa()</code> kutsuu funktiota — silloin rivi 2 suoritetaan!</li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 83: Parametri    // ─────────────────────────────────────
    {
    id: 153,


        legacyId: 108,
        section: "funktiot",
        title: "Parametri — anna tietoa 📨",
        slug: "funktiot-parametri-anna-tietoa",
        icon: "📨",
        description: "Funktio voi ottaa vastaan tietoa parametrin kautta!",
        theory: `
            <h4>📚 Parametri — funktion syöte</h4>
            <p>Parametri on muuttuja sulkujen sisällä. Se saa arvon kun funktiota kutsutaan:</p>
            <pre><code>def tervehdi(nimi):
    print(f"Hei {nimi}!")

tervehdi("Masa")    # Hei Masa!
tervehdi("Liisa")   # Hei Liisa!</code></pre>
            <p>Parametri <code>nimi</code> saa eri arvon joka kutsulla!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio tulostaa <code>Moi Koodikoulu!</code> ja <code>Moi Python!</code>",
        starterCode: `def moi(___):\n    print(f"Moi {sana}!")\n\nmoi("Koodikoulu")\nmoi("Python")`,
        hint: "Mikä muuttuja on f-stringin sisällä? Sama nimi pitää olla sulkujen sisällä.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].trim() === "Moi Koodikoulu!" && lines[1].trim() === "Moi Python!";
        },
        successMsg: "Oikein! Parametri 'sana' saa eri arvon joka kutsulla! 📨",
        failMsg: "Tuloksen pitäisi olla 'Moi Koodikoulu!' ja 'Moi Python!'. Mikä parametrin nimi on?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 1:</strong> <code>def moi(___):</code> — f-stringissä käytetään <code>{sana}</code>, joten parametrin nimi on:
                    <div class="step-line">sana</div>
                    <code>def moi(sana):</code> — nyt "Koodikoulu" menee muuttujaan <code>sana</code>
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 84: return — palauta arvo    // ─────────────────────────────────────
    {
    id: 154,


        legacyId: 109,
        section: "funktiot",
        title: "return — palauta arvo 🎁",
        slug: "funktiot-return-palauta-arvo",
        icon: "🎁",
        description: "Funktio voi palauttaa arvon takaisin — return on avain!",
        theory: `
            <h4>📚 return — anna vastaus takaisin</h4>
            <p><code>return</code> palauttaa arvon funktion kutsujalle:</p>
            <pre><code>def tuplaa(luku):
    return luku * 2

tulos = tuplaa(5)
print(tulos)    # 10</code></pre>
            <p>Ilman returnia funktio palauttaa <code>None</code> (ei mitään).</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio palauttaa luvun kolminkertaisena.",
        starterCode: `def kolminkertaista(luku):\n    ___ luku * 3\n\ntulos = kolminkertaista(7)\nprint(tulos)`,
        hint: "Mikä sana palauttaa arvon funktiosta? Englanniksi 'palata'.",
        validate: function(output) {
            return output.trim() === "21";
        },
        successMsg: "Oikein! return palauttaa arvon — 7 × 3 = 21! 🎁",
        failMsg: "Tuloksen pitäisi olla 21. Mikä sana palauttaa arvon funktiosta?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 2:</strong> <code>___ luku * 3</code> — mikä sana lähettää arvon takaisin?
                    <div class="step-line">return</div>
                    <code>return luku * 3</code> — kun luku=7: return 21
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 85: Kaksi parametria    // ─────────────────────────────────────
    {
    id: 155,


        legacyId: 110,
        section: "funktiot",
        title: "Kaksi parametria ✌️",
        slug: "funktiot-kaksi-parametria",
        icon: "✌️",
        description: "Funktio voi ottaa monta parametria — pilkku erottaa ne!",
        theory: `
            <h4>📚 Monta parametria</h4>
            <p>Parametrit erotetaan pilkuilla:</p>
            <pre><code>def laske_yhteen(a, b):
    return a + b

print(laske_yhteen(3, 4))    # 7
print(laske_yhteen(10, 20))  # 30</code></pre>
            <p>Voit käyttää niin monta parametria kuin tarvitset!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio laskee kahden luvun erotuksen.",
        starterCode: `def erotus(a, ___):\n    return a - b\n\nprint(erotus(10, 3))\nprint(erotus(50, 25))`,
        hint: "Funktiossa käytetään a ja b. Mikä toinen parametri puuttuu?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 && lines[0].trim() === "7" && lines[1].trim() === "25";
        },
        successMsg: "Oikein! Kaksi parametria a ja b — erotus toimii! ✌️",
        failMsg: "Tuloksen pitäisi olla 7 ja 25. Mikä toinen parametri puuttuu?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 1:</strong> <code>def erotus(a, ___):</code> — rivillä 2 käytetään <code>a - b</code>, joten toinen parametri on:
                    <div class="step-line">b</div>
                    <code>def erotus(a, b):</code> — nyt erotus(10, 3) → a=10, b=3 → 7
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 86: Oletusarvo    // ─────────────────────────────────────
    {
    id: 156,


        legacyId: 111,
        section: "funktiot",
        title: "Oletusarvo 🏠",
        slug: "funktiot-oletusarvo",
        icon: "🏠",
        description: "Parametrille voi antaa oletusarvon — se toimii jos mitään ei anneta!",
        theory: `
            <h4>📚 Oletusarvo — default value</h4>
            <p>Anna parametrille oletusarvo <code>=</code>-merkillä:</p>
            <pre><code>def tervehdi(nimi="maailma"):
    print(f"Hei {nimi}!")

tervehdi()         # Hei maailma!
tervehdi("Masa")   # Hei Masa!</code></pre>
            <p>Jos arvoa ei anneta, käytetään oletusta!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että oletuskieli on <code>Python</code>.",
        starterCode: `def koodi(kieli=___):\n    print(f"Kirjoitan koodia kielellä {kieli}!")\n\nkoodi()\nkoodi("JavaScript")`,
        hint: "Oletusarvon pitäisi olla merkkijono \"Python\" — lainausmerkeissä!",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 &&
                   lines[0].trim() === "Kirjoitan koodia kielellä Python!" &&
                   lines[1].trim() === "Kirjoitan koodia kielellä JavaScript!";
        },
        successMsg: "Oikein! Oletusarvo 'Python' toimii kun kutsut koodi()! 🏠",
        failMsg: "Ensimmäisen rivin pitäisi sanoa 'Python' ja toisen 'JavaScript'.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 1:</strong> <code>def koodi(kieli=___):</code> — oletuskieli on Python, merkkijonona:
                    <div class="step-line">"Python"</div>
                    <code>def koodi(kieli="Python"):</code> — koodi() käyttää oletusta "Python"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 87: Funktion kutsuminen    // ─────────────────────────────────────
    {
    id: 157,


        legacyId: 112,
        section: "funktiot",
        title: "Kutsu oikein! 📞",
        slug: "funktiot-kutsu-oikein",
        icon: "📞",
        description: "Harjoittele funktion kutsumista oikeilla argumenteilla!",
        theory: `
            <h4>📚 Argumentti vs parametri</h4>
            <p><strong>Parametri</strong> = muuttuja funktion määrittelyssä. <strong>Argumentti</strong> = arvo, jonka annat kutsuessa:</p>
            <pre><code>def kerro(viesti, kertaa):    # parametrit
    for i in range(kertaa):
        print(viesti)

kerro("Hei!", 3)   # argumentit: viesti="Hei!", kertaa=3</code></pre>
        `,
        challenge: "Korvaa <code>___</code> oikeilla argumenteilla: nimi <code>Koodari</code> ja ikä <code>11</code>.",
        starterCode: `def esittele(nimi, ika):\n    print(f"{nimi} on {ika}-vuotias koodari!")\n\nesittele(___, ___)`,
        hint: "Ensimmäinen argumentti on nimi merkkijonona, toinen on ikä numerona.",
        validate: function(output) {
            return output.trim() === "Koodari on 11-vuotias koodari!";
        },
        successMsg: "Oikein! Annoit funktiolle oikeat argumentit! 📞",
        failMsg: "Tuloksen pitäisi olla 'Koodari on 11-vuotias koodari!'. Tarkista argumentit.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 4:</strong> <code>esittele(___, ___)</code> — nimi on "Koodari" ja ikä on 11:
                    <div class="step-line">"Koodari", 11</div>
                    <code>esittele("Koodari", 11)</code> — nimi="Koodari", ika=11
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 88: return vs print    // ─────────────────────────────────────
    {
    id: 158,


        legacyId: 113,
        section: "funktiot",
        title: "return vs print 🤔",
        slug: "funktiot-return-vs-print",
        icon: "🤔",
        description: "Tärkeä ero: return palauttaa arvon, print vain näyttää sen!",
        theory: `
            <h4>📚 return ≠ print</h4>
            <p>Tämä on yleinen virhe aloittelijoilla:</p>
            <pre><code># OIKEIN — return palauttaa arvon:
def laske(a, b):
    return a + b

tulos = laske(3, 4)   # tulos = 7
print(tulos * 2)      # 14

# VÄÄRIN — print ei palauta mitään:
def laske2(a, b):
    print(a + b)

tulos2 = laske2(3, 4)  # tulostaa 7, mutta...
print(tulos2)           # None!</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio <strong>palauttaa</strong> neliön (luku kertaa itsensä) ja tulos tulostetaan.",
        starterCode: `def nelio(luku):\n    ___ luku * luku\n\ntulos = nelio(8)\nprint(tulos)`,
        hint: "Haluamme palauttaa arvon, ei tulostaa sitä funktion sisällä. Mikä sana palauttaa?",
        validate: function(output) {
            return output.trim() === "64";
        },
        successMsg: "Oikein! return palauttaa 64 ja print tulostaa sen! 🤔",
        failMsg: "Tuloksen pitäisi olla 64 (8×8). Käytä return, älä print!",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 2:</strong> <code>___ luku * luku</code> — haluamme palauttaa, ei tulostaa:
                    <div class="step-line">return</div>
                    <code>return luku * luku</code> — nelio(8) palauttaa 64
                </li>
                <li>Jos kirjoitat <code>print</code>, se tulostaa 64 mutta palauttaa None — ja rivi 5 tulostaisi "None"!</li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 89: Monta return-arvoa    // ─────────────────────────────────────
    {
    id: 159,


        legacyId: 114,
        section: "funktiot",
        title: "Monta palautusarvoa 🎲",
        slug: "funktiot-monta-palautusarvoa",
        icon: "🎲",
        description: "Funktio voi palauttaa monta arvoa kerralla!",
        theory: `
            <h4>📚 Monta return-arvoa</h4>
            <p>Python voi palauttaa monta arvoa pilkuilla:</p>
            <pre><code>def minimi_ja_maksimi(lista):
    return min(lista), max(lista)

pienin, suurin = minimi_ja_maksimi([3, 7, 1, 9])
print(pienin)   # 1
print(suurin)   # 9</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio palauttaa sekä summan että keskiarvon.",
        starterCode: `def tilastot(luvut):\n    summa = sum(luvut)\n    ka = summa / len(luvut)\n    return ___, ___\n\ns, k = tilastot([10, 20, 30])\nprint(f"Summa: {s}")\nprint(f"Keskiarvo: {k}")`,
        hint: "Funktiossa lasketaan summa ja ka. Palauta molemmat pilkulla erotettuna.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 &&
                   lines[0].trim() === "Summa: 60" &&
                   lines[1].trim() === "Keskiarvo: 20.0";
        },
        successMsg: "Oikein! Palautit summan 60 ja keskiarvon 20.0 yhdellä returnilla! 🎲",
        failMsg: "Tuloksen pitäisi olla 'Summa: 60' ja 'Keskiarvo: 20.0'.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 4:</strong> <code>return ___, ___</code> — palauta muuttujat summa ja ka:
                    <div class="step-line">summa, ka</div>
                    <code>return summa, ka</code> — s saa summan (60), k saa keskiarvon (20.0)
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 90: Muuttujan näkyvyysalue (scope)    // ─────────────────────────────────────
    {
    id: 160,


        legacyId: 115,
        section: "funktiot",
        title: "Näkyvyysalue 🔭",
        slug: "funktiot-nakyvyysalue",
        icon: "🔭",
        description: "Funktion sisällä luotu muuttuja ei näy ulkopuolella!",
        theory: `
            <h4>📚 Scope — muuttujan näkyvyys</h4>
            <p>Funktion sisäiset muuttujat ovat <strong>paikallisia</strong> (local):</p>
            <pre><code>def laske():
    x = 10       # paikallinen muuttuja
    return x

# print(x)  ← VIRHE! x ei näy täällä
tulos = laske()
print(tulos)     # 10 — tämä toimii!</code></pre>
            <p>Käytä <code>return</code> saadaksesi arvon ulos funktiosta!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktion tulos tallennetaan muuttujaan ja tulostetaan.",
        starterCode: `def salainen_luku():\n    luku = 42\n    return luku\n\nvastaus = ___()\nprint(f"Salainen luku on {vastaus}")`,
        hint: "Mikä funktio palauttaa salaisen luvun? Kutsu sitä!",
        validate: function(output) {
            return output.trim() === "Salainen luku on 42";
        },
        successMsg: "Oikein! Kutsuit funktion ja talletit return-arvon! 🔭",
        failMsg: "Tuloksen pitäisi olla 'Salainen luku on 42'. Kutsu oikeaa funktiota!",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 5:</strong> <code>vastaus = ___()</code> — mikä funktio on määritelty yllä?
                    <div class="step-line">salainen_luku</div>
                    <code>vastaus = salainen_luku()</code> — vastaus saa arvon 42
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 91: Funktio ja lista    // ─────────────────────────────────────
    {
    id: 161,


        legacyId: 116,
        section: "funktiot",
        title: "Funktio + lista 📋",
        slug: "funktiot-funktio-lista",
        icon: "📋",
        description: "Funktiot ja listat ovat tehokas yhdistelmä!",
        theory: `
            <h4>📚 Lista parametrina</h4>
            <p>Funktio voi ottaa listan ja käsitellä sen:</p>
            <pre><code>def suurin(lista):
    return max(lista)

numerot = [4, 9, 2, 7]
print(suurin(numerot))   # 9</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio palauttaa listan pienimmän arvon.",
        starterCode: `def pienin_arvo(lista):\n    return ___(lista)\n\nlampotilat = [3, -2, 7, 0, -5, 4]\nprint(f"Kylmin: {pienin_arvo(lampotilat)} astetta")`,
        hint: "Mikä Python-funktio etsii listan pienimmän arvon? Kolme kirjainta!",
        validate: function(output) {
            return output.trim() === "Kylmin: -5 astetta";
        },
        successMsg: "Oikein! min() löysi kylmimmän lämpötilan -5! 📋",
        failMsg: "Tuloksen pitäisi olla 'Kylmin: -5 astetta'. Mikä funktio etsii pienimmän?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 2:</strong> <code>return ___(lista)</code> — mikä funktio löytää pienimmän?
                    <div class="step-line">min</div>
                    <code>return min(lista)</code> — min([-2, 7, 0, -5, 4]) = -5
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 92: Funktio ja sanakirja    // ─────────────────────────────────────
    {
    id: 162,


        legacyId: 117,
        section: "funktiot",
        title: "Funktio + sanakirja 📖",
        slug: "funktiot-funktio-sanakirja",
        icon: "📖",
        description: "Funktio voi käsitellä sanakirjoja — tehokas yhdistelmä!",
        theory: `
            <h4>📚 Sanakirja parametrina</h4>
            <p>Funktio voi lukea ja muokata sanakirjaa:</p>
            <pre><code>def tulosta_henkilo(henkilo):
    nimi = henkilo["nimi"]
    ika = henkilo["ika"]
    print(f"{nimi} on {ika}v")

masa = {"nimi": "Masa", "ika": 11}
tulosta_henkilo(masa)   # Masa on 11v</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio palauttaa oppilaan nimen sanakirjasta.",
        starterCode: `def hae_nimi(oppilas):\n    return oppilas[___]\n\ndata = {"nimi": "Liisa", "luokka": "5A", "ika": 11}\nprint(hae_nimi(data))`,
        hint: "Mikä avain sisältää nimen? Muista lainausmerkit!",
        validate: function(output) {
            return output.trim() === "Liisa";
        },
        successMsg: "Oikein! Funktio haki nimen sanakirjasta avaimella 'nimi'! 📖",
        failMsg: "Tuloksen pitäisi olla 'Liisa'. Mikä avain sisältää nimen?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 2:</strong> <code>return oppilas[___]</code> — sanakirjassa on avain "nimi":
                    <div class="step-line">"nimi"</div>
                    <code>return oppilas["nimi"]</code> — palauttaa "Liisa"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 93: Funktio ja merkkijonot    // ─────────────────────────────────────
    {
    id: 163,


        legacyId: 118,
        section: "funktiot",
        title: "Funktio + merkkijono 🔤",
        slug: "funktiot-funktio-merkkijono",
        icon: "🔤",
        description: "Rakenna funktio joka muokkaa merkkijonoja!",
        theory: `
            <h4>📚 Merkkijono parametrina</h4>
            <p>Funktiot ovat hyviä tekstin käsittelyyn:</p>
            <pre><code>def huuda(teksti):
    return teksti.upper()

print(huuda("hei"))      # HEI
print(huuda("python"))   # PYTHON</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio palauttaa nimen isoilla alkukirjaimilla.",
        starterCode: `def siisti_nimi(nimi):\n    return nimi.___()\n\nprint(siisti_nimi("masa virtanen"))\nprint(siisti_nimi("liisa korhonen"))`,
        hint: "Mikä merkkijonometodi tekee jokaisesta sanasta isolla alkukirjaimella? .title()",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 &&
                   lines[0].trim() === "Masa Virtanen" &&
                   lines[1].trim() === "Liisa Korhonen";
        },
        successMsg: "Oikein! .title() tekee jokaisesta sanasta isolla alkukirjaimella! 🔤",
        failMsg: "Tuloksen pitäisi olla 'Masa Virtanen' ja 'Liisa Korhonen'.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 2:</strong> <code>return nimi.___()</code> — mikä metodi tekee "masa virtanen" → "Masa Virtanen"?
                    <div class="step-line">title</div>
                    <code>.title()</code> tekee jokaisesta sanan alkukirjaimesta ison
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 94: While-silmukka funktiossa    // ─────────────────────────────────────
    {
    id: 164,


        legacyId: 119,
        section: "funktiot",
        title: "While funktiossa 🔄",
        slug: "funktiot-while-funktiossa",
        icon: "🔄",
        description: "Yhdistä while-silmukka ja funktio — tehokas yhdistelmä!",
        theory: `
            <h4>📚 while-silmukka funktiossa</h4>
            <p>Funktio voi sisältää silmukoita:</p>
            <pre><code>def laske_alas(n):
    while n > 0:
        print(n)
        n = n - 1
    print("Laukaus! 🚀")

laske_alas(3)   # 3, 2, 1, Laukaus! 🚀</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio laskee luvut n:stä 1:een ja tulostaa 'Valmis!'.",
        starterCode: `def laske_alas(n):\n    while n ___ 0:\n        print(n)\n        n = n - 1\n    print("Valmis!")\n\nlaske_alas(5)`,
        hint: "Silmukan pitäisi jatkua niin kauan kuin n on suurempi kuin 0.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 6 &&
                   lines[0].trim() === "5" &&
                   lines[4].trim() === "1" &&
                   lines[5].trim() === "Valmis!";
        },
        successMsg: "Oikein! while-silmukka laski 5:stä 1:een! 🔄",
        failMsg: "Tuloksen pitäisi olla 5, 4, 3, 2, 1, Valmis! Mikä vertailuoperaattori?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 2:</strong> <code>while n ___ 0:</code> — silmukka jatkuu kun n on suurempi kuin 0:
                    <div class="step-line">></div>
                    <code>while n > 0:</code> — jatkaa kunnes n on 0
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 95: For-silmukka funktiossa    // ─────────────────────────────────────
    {
    id: 165,


        legacyId: 120,
        section: "funktiot",
        title: "For funktiossa 🔁",
        slug: "funktiot-for-funktiossa",
        icon: "🔁",
        description: "For-silmukka funktion sisällä — käy lista läpi ja laske!",
        theory: `
            <h4>📚 for-silmukka + return</h4>
            <p>Funktio voi käydä listan läpi ja palauttaa tuloksen:</p>
            <pre><code>def laske_summa(lista):
    tulos = 0
    for luku in lista:
        tulos = tulos + luku
    return tulos

print(laske_summa([1, 2, 3]))   # 6</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio laskee montako positiivista lukua listassa on.",
        starterCode: `def positiiviset(luvut):\n    maara = 0\n    for luku in luvut:\n        if luku ___ 0:\n            maara = maara + 1\n    return maara\n\nprint(positiiviset([3, -1, 7, 0, -5, 2]))`,
        hint: "Positiivinen luku on suurempi kuin nolla. Mikä vertailuoperaattori?",
        validate: function(output) {
            return output.trim() === "3";
        },
        successMsg: "Oikein! 3 positiivista lukua: 3, 7 ja 2! 🔁",
        failMsg: "Tuloksen pitäisi olla 3. Positiivinen = suurempi kuin 0.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 4:</strong> <code>if luku ___ 0:</code> — positiivinen luku on suurempi kuin nolla:
                    <div class="step-line">></div>
                    <code>if luku > 0:</code> — 3>0 ✓, -1>0 ✗, 7>0 ✓, 0>0 ✗, -5>0 ✗, 2>0 ✓ → 3 kpl
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 96: Ehtolause funktiossa    // ─────────────────────────────────────
    {
    id: 166,


        legacyId: 121,
        section: "funktiot",
        title: "If/elif funktiossa 🚦",
        slug: "funktiot-ifelif-funktiossa",
        icon: "🚦",
        description: "Funktio voi tehdä päätöksiä if/elif/else-rakenteella!",
        theory: `
            <h4>📚 Ehtolauseet funktiossa</h4>
            <p>Funktio voi palauttaa eri arvoja ehdon perusteella:</p>
            <pre><code>def arvosana(pisteet):
    if pisteet >= 9:
        return "Erinomainen"
    elif pisteet >= 7:
        return "Hyvä"
    elif pisteet >= 5:
        return "Tyydyttävä"
    else:
        return "Hylätty"

print(arvosana(10))   # Erinomainen
print(arvosana(6))    # Tyydyttävä</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio kertoo onko lämpötila kuuma, lämmin vai kylmä.",
        starterCode: `def lampotila_teksti(asteet):\n    if asteet >= 25:\n        return "Kuuma! ☀️"\n    ___ asteet >= 15:\n        return "Lämmin 🌤️"\n    else:\n        return "Kylmä 🥶"\n\nprint(lampotila_teksti(30))\nprint(lampotila_teksti(18))\nprint(lampotila_teksti(5))`,
        hint: "Tarvitaan 'muuten jos' — mikä Python-sana yhdistää else ja if?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 &&
                   lines[0].includes("Kuuma") &&
                   lines[1].includes("mmin") &&
                   lines[2].includes("Kylm");
        },
        successMsg: "Oikein! elif tarkistaa lisäehtoja — 30°=kuuma, 18°=lämmin, 5°=kylmä! 🚦",
        failMsg: "Tarkista elif-sana. Se on 'else if' lyhyesti.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 4:</strong> <code>___ asteet >= 15:</code> — tarvitaan "muuten jos" eli:
                    <div class="step-line">elif</div>
                    <code>elif asteet >= 15:</code> — tarkistaa jos ei ole ≥25 mutta on ≥15
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 97: Apufunktio    // ─────────────────────────────────────
    {
    id: 167,


        legacyId: 122,
        section: "funktiot",
        title: "Apufunktio 🧩",
        slug: "funktiot-apufunktio",
        icon: "🧩",
        description: "Iso ongelma pienenee kun jaat sen apufunktioihin!",
        theory: `
            <h4>📚 Apufunktiot — jaa ja hallitse</h4>
            <p>Hyvä ohjelmoija pilkkoo ongelman pieniin palasiin:</p>
            <pre><code>def tuplaa(n):
    return n * 2

def tuplaa_kaikki(lista):
    tulos = []
    for luku in lista:
        tulos.append(tuplaa(luku))
    return tulos

print(tuplaa_kaikki([1, 2, 3]))   # [2, 4, 6]</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että <code>onko_parillinen</code>-apufunktiota käytetään oikein.",
        starterCode: `def onko_parillinen(luku):\n    return luku % 2 == 0\n\ndef laske_parilliset(lista):\n    maara = 0\n    for luku in lista:\n        if ___(luku):\n            maara = maara + 1\n    return maara\n\nprint(laske_parilliset([1, 2, 3, 4, 5, 6]))`,
        hint: "Rivillä 7 tarvitaan funktion nimi joka tarkistaa parillisuuden. Se on jo määritelty yllä!",
        validate: function(output) {
            return output.trim() === "3";
        },
        successMsg: "Oikein! Apufunktio onko_parillinen auttoi — 2, 4 ja 6 ovat parillisia! 🧩",
        failMsg: "Tuloksen pitäisi olla 3 (parilliset: 2, 4, 6). Käytä apufunktiota!",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 7:</strong> <code>if ___(luku):</code> — mikä funktio tarkistaa parillisuuden?
                    <div class="step-line">onko_parillinen</div>
                    <code>if onko_parillinen(luku):</code> — kutsuu rivin 1 funktiota
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 98: Funktio kutsuu funktiota    // ─────────────────────────────────────
    {
    id: 168,


        legacyId: 123,
        section: "funktiot",
        title: "Funktioketju 🔗",
        slug: "funktiot-funktioketju",
        icon: "🔗",
        description: "Funktio voi kutsua toista funktiota — näin rakennetaan oikeita ohjelmia!",
        theory: `
            <h4>📚 Funktiot kutsuvat toisiaan</h4>
            <p>Funktiot voivat käyttää muiden funktioiden tuloksia:</p>
            <pre><code>def laske_vero(hinta):
    return hinta * 0.24

def kokonaishinta(hinta):
    vero = laske_vero(hinta)
    return hinta + vero

print(kokonaishinta(100))   # 124.0</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että <code>tervehdys</code> käyttää <code>iso_alkukirjain</code>-funktiota.",
        starterCode: `def iso_alkukirjain(teksti):\n    return teksti.capitalize()\n\ndef tervehdys(nimi):\n    siisti = ___(nimi)\n    return f"Hei {siisti}!"\n\nprint(tervehdys("masa"))\nprint(tervehdys("liisa"))`,
        hint: "Rivillä 5 pitää kutsua funktiota joka tekee isot alkukirjaimet. Se on jo ylempänä!",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 &&
                   lines[0].trim() === "Hei Masa!" &&
                   lines[1].trim() === "Hei Liisa!";
        },
        successMsg: "Oikein! tervehdys kutsui iso_alkukirjain-funktiota — funktioketju toimii! 🔗",
        failMsg: "Tuloksen pitäisi olla 'Hei Masa!' ja 'Hei Liisa!'.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 5:</strong> <code>siisti = ___(nimi)</code> — mikä funktio tekee ison alkukirjaimen?
                    <div class="step-line">iso_alkukirjain</div>
                    <code>siisti = iso_alkukirjain(nimi)</code> — "masa" → "Masa"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 99: Uudelleenkäytettävä koodi    // ─────────────────────────────────────
    {
    id: 169,


        legacyId: 124,
        section: "funktiot",
        title: "DRY — älä toista itseäsi 🧹",
        slug: "funktiot-dry-ala-toista-itseasi",
        icon: "🧹",
        description: "Funktiot poistavat toiston — kirjoita kerran, käytä monta kertaa!",
        theory: `
            <h4>📚 DRY = Don't Repeat Yourself</h4>
            <p>Huono koodi toistaa samaa. Hyvä koodi käyttää funktioita:</p>
            <pre><code># HUONO — paljon toistoa:
print("=" * 30)
print("Raportti 1")
print("=" * 30)

# HYVÄ — funktio hoitaa:
def otsikko(teksti):
    print("=" * 30)
    print(teksti)
    print("=" * 30)

otsikko("Raportti 1")
otsikko("Raportti 2")</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että reunus-funktiota käytetään kahden otsikon tulostamiseen.",
        starterCode: `def reunus(teksti):\n    print("*" * 20)\n    print(teksti)\n    print("*" * 20)\n\n___("Osa 1: Perusteet")\nprint()\n___("Osa 2: Funktiot")`,
        hint: "Kutsu reunus-funktiota kahdesti eri argumenteilla!",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length >= 7 &&
                   lines[0].includes("****") &&
                   lines[1].includes("Osa 1") &&
                   output.includes("Osa 2");
        },
        successMsg: "Oikein! Yksi funktio, monta käyttökertaa — DRY! 🧹",
        failMsg: "Kutsu reunus-funktiota kahdesti: reunus(\"Osa 1...\") ja reunus(\"Osa 2...\").",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 6:</strong> <code>___(\"Osa 1: Perusteet\")</code> — mikä funktio tekee reunuksen?
                    <div class="step-line">reunus</div>
                    <code>reunus("Osa 1: Perusteet")</code> ja <code>reunus("Osa 2: Funktiot")</code>
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 100: Arvosanalaskuri    // ─────────────────────────────────────
    {
    id: 170,


        legacyId: 125,
        section: "funktiot",
        title: "Arvosanalaskuri 📊",
        slug: "funktiot-arvosanalaskuri",
        icon: "📊",
        description: "Yhdistä funktiot, listat ja ehdot — rakenna arvosanalaskuri!",
        theory: `
            <h4>📚 Kaikki yhteen!</h4>
            <p>Todellinen ohjelma yhdistää monia taitoja:</p>
            <pre><code>def luokittele(piste):
    if piste >= 9:
        return "Kiitettävä"
    elif piste >= 7:
        return "Hyvä"
    else:
        return "Tyydyttävä"

def raportoi(pisteet):
    for p in pisteet:
        print(f"{p}/10 = {luokittele(p)}")

raportoi([10, 7, 5])</code></pre>
        `,
        challenge: "Korvaa KAIKKI <code>___</code> niin, että ohjelma tulostaa arvosanat ja yhteenvedon.",
        starterCode: `def arvosana(pisteet):\n    if pisteet >= 9:\n        return "Erinomainen ⭐"\n    elif pisteet >= 7:\n        return "Hyvä 👍"\n    elif pisteet >= 5:\n        return "OK 👌"\n    ___:\n        return "Harjoittele lisää 💪"\n\ndef keskiarvo(lista):\n    return ___(lista) / len(lista)\n\ntulokset = [10, 6, 8, 4, 9]\n\nfor tulos in tulokset:\n    print(f"  {tulos}/10 = {arvosana(tulos)}")\n\nka = keskiarvo(tulokset)\nprint(f"Keskiarvo: {ka}")`,
        hint: "1: Mikä sana tarkoittaa 'muuten'? 2: Mikä funktio laskee listan summan?",
        validate: function(output) {
            return output.includes("Erinomainen") &&
                   output.includes("Harjoittele") &&
                   output.includes("Keskiarvo: 7.4");
        },
        successMsg: "Huippua! Rakensit arvosanalaskurin yhdistämällä funktiot, listat ja ehdot! 📊",
        failMsg: "Tarkista: 1) else muiden ehtojen jälkeen, 2) sum() laskee summan.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 8:</strong> <code>___:</code> — viimeinen vaihtoehto kun mikään ehto ei täyty:
                    <div class="step-line">else</div>
                    <code>else:</code> — kun pisteet < 5
                </li>
                <li><strong>Rivi 12:</strong> <code>return ___(lista) / len(lista)</code> — keskiarvo = summa / määrä:
                    <div class="step-line">sum</div>
                    <code>return sum(lista) / len(lista)</code> — (10+6+8+4+9)/5 = 7.4
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 101: Funktiomestari    // ─────────────────────────────────────
    {
    id: 171,


        legacyId: 126,
        section: "funktiot",
        title: "Funktiomestari 🏆",
        slug: "funktiot-funktiomestari",
        icon: "🏆",
        description: "Viimeinen haaste — käytä kaikkia oppimiasi funktiotaitoja!",
        theory: `
            <h4>📚 Kertaus — funktiot!</h4>
            <table style="width:100%; border-collapse: collapse; font-size: 0.95em;">
            <tr style="background: var(--accent-blue); color: white;"><th style="padding:6px;">Syntaksi</th><th style="padding:6px;">Toiminto</th><th style="padding:6px;">Esimerkki</th></tr>
            <tr><td style="padding:4px 6px;"><code>def nimi():</code></td><td>Luo funktio</td><td>def tervehdi():</td></tr>
            <tr><td style="padding:4px 6px;"><code>def nimi(param):</code></td><td>Parametri</td><td>def tervehdi(nimi):</td></tr>
            <tr><td style="padding:4px 6px;"><code>return arvo</code></td><td>Palauta arvo</td><td>return x * 2</td></tr>
            <tr><td style="padding:4px 6px;"><code>param=oletus</code></td><td>Oletusarvo</td><td>def f(x=0):</td></tr>
            <tr><td style="padding:4px 6px;"><code>return a, b</code></td><td>Monta arvoa</td><td>return min, max</td></tr>
            <tr><td style="padding:4px 6px;"><code>funktio(args)</code></td><td>Kutsu</td><td>tulos = laske(5)</td></tr>
            </table>
        `,
        challenge: "Korvaa KAIKKI <code>___</code> niin, että sanakirjuri-ohjelma toimii ja tulostaa neljä kertaa <code>True</code>!",
        starterCode: `# 1. Luo funktio joka palauttaa luvun neliön
___ nelio(luku):
    return luku * luku

# 2. Funktio joka laskee listan keskiarvon
def keskiarvo(lista):
    return sum(lista) / ___(lista)

# 3. Funktio joka tarkistaa onko sana pitkä (yli 5 merkkiä)
def onko_pitka(sana):
    return len(sana) ___ 5

# 4. Käytä apufunktiota
def nelio_summa(a, b):
    return ___(a) + nelio(b)

# Testaa — kaikkien pitäisi tulostaa True!
print(nelio(4) == 16)
print(keskiarvo([10, 20, 30]) == 20.0)
print(onko_pitka("Python") == True)
print(nelio_summa(3, 4) == 25)`,
        hint: "1: def. 2: len. 3: > (suurempi kuin). 4: nelio (kutsu apufunktiota).",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 4 &&
                   lines[0].trim() === "True" &&
                   lines[1].trim() === "True" &&
                   lines[2].trim() === "True" &&
                   lines[3].trim() === "True";
        },
        successMsg: "MESTARI! 🏆 Osaat funktiot! Neljä True-vastausta — olet funktiomestari!",
        failMsg: "Kaikkien neljän rivin pitäisi tulostaa True. Lue vihje ja yritä uudelleen!",
        detailedHelp: `
            <h4>Askel askeleelta — Funktiomestari</h4>
            <p>Koodissa on neljä <code>___</code> kohtaa — jokaisessa tarvitaan eri taito!</p>
            <ol>
                <li><strong>Rivi 2:</strong> <code>___ nelio(luku):</code> — mikä sana luo funktion?
                    <div class="step-line">def</div>
                    <code>def nelio(luku):</code> — nelio(4) = 16 ✓
                </li>
                <li><strong>Rivi 7:</strong> <code>sum(lista) / ___(lista)</code> — keskiarvo = summa / listan pituus. Mikä funktio laskee pituuden?
                    <div class="step-line">len</div>
                    <code>sum(lista) / len(lista)</code> = (10+20+30)/3 = 20.0 ✓
                </li>
                <li><strong>Rivi 11:</strong> <code>len(sana) ___ 5</code> — "pitkä" = yli 5 merkkiä. Mikä vertailu?
                    <div class="step-line">></div>
                    <code>len("Python") > 5</code> — 6 > 5 = True ✓
                </li>
                <li><strong>Rivi 15:</strong> <code>return ___(a) + nelio(b)</code> — kutsutaan nelio-funktiota a:lle:
                    <div class="step-line">nelio</div>
                    <code>nelio(3) + nelio(4)</code> = 9 + 16 = 25 ✓
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // =============================================
    //  EHTOLAUSEET (IDs 127–146)
    //  20 tehtävää: if, elif, else ja loogiset operaattorit
    // =============================================

    // ─────────────────────────────────────
    // TEHTÄVÄ 102: Ensimmäinen ehto    // ─────────────────────────────────────
    {
    id: 172,


        legacyId: 127,
        section: "ehtolauseet",
        title: "Ensimmäinen ehto 🚦",
        slug: "ehtolauseet-ensimmainen-ehto",
        icon: "🚦",
        description: "Opi tekemään päätöksiä if-sanalla!",
        theory: `
            <h4>📚 if — tee päätös</h4>
            <p>Ohjelma voi tehdä päätöksiä <code>if</code>-sanalla:</p>
            <pre><code>ika = 12
if ika >= 10:
    print("Pääset koodikouluun!")</code></pre>
            <p>Jos ehto on <strong>totta</strong>, sisennetty koodi suoritetaan. Muuten se ohitetaan.</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa 'Lämpimää!' kun asteet on yli 20.",
        starterCode: `asteet = 25\n\n___ asteet > 20:\n    print("Lämpimää!")`,
        hint: "Mikä sana aloittaa ehdon Pythonissa? Kaksi kirjainta!",
        validate: function(output) {
            return output.trim() === "Lämpimää!";
        },
        successMsg: "Hienoa! Ensimmäinen ehtolauseesi toimii — if tarkistaa ehdon! 🚦",
        failMsg: "Tuloksen pitäisi olla 'Lämpimää!'. Mikä sana aloittaa ehdon?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>___ asteet > 20:</code> — mikä Python-sana aloittaa ehdon?
                    <div class="step-line">if</div>
                    <code>if asteet > 20:</code> — 25 > 20 on totta → tulostetaan!
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 103: if + else    // ─────────────────────────────────────
    {
    id: 173,


        legacyId: 128,
        section: "ehtolauseet",
        title: "Kaksi polkua 🔀",
        slug: "ehtolauseet-kaksi-polkua",
        icon: "🔀",
        description: "else antaa vaihtoehdon kun ehto ei ole totta!",
        theory: `
            <h4>📚 else — toinen vaihtoehto</h4>
            <p><code>else</code> suoritetaan kun <code>if</code>-ehto ei ole totta:</p>
            <pre><code>ika = 8
if ika >= 10:
    print("Tervetuloa!")
else:
    print("Olet liian nuori")</code></pre>
            <p>Aina toinen polku valitaan — ei koskaan molemmat!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa 'Pääsy kielletty' kun pisteet on alle 50.",
        starterCode: `pisteet = 35\n\nif pisteet >= 50:\n    print("Pääsit läpi!")\n___:\n    print("Pääsy kielletty")`,
        hint: "Mikä sana tarkoittaa 'muuten' — suoritetaan kun if-ehto ei ole totta?",
        validate: function(output) {
            return output.trim() === "Pääsy kielletty";
        },
        successMsg: "Oikein! else suoritetaan kun ehto ei ole totta! 🔀",
        failMsg: "Tuloksen pitäisi olla 'Pääsy kielletty'. Mikä sana tarkoittaa 'muuten'?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 5:</strong> <code>___:</code> — kun if-ehto ei täyty, tarvitaan:
                    <div class="step-line">else</div>
                    <code>else:</code> — pisteet=35, 35 >= 50 on epätotta → else suoritetaan
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 104: Vertailuoperaattorit    // ─────────────────────────────────────
    {
    id: 174,


        legacyId: 129,
        section: "ehtolauseet",
        title: "Vertaa lukuja ⚖️",
        slug: "ehtolauseet-vertaa-lukuja",
        icon: "⚖️",
        description: "Vertailuoperaattorit kertovat onko ehto totta vai ei!",
        theory: `
            <h4>📚 Vertailuoperaattorit</h4>
            <table style="width:100%; border-collapse: collapse; font-size: 0.95em;">
            <tr style="background: var(--accent-blue); color: white;"><th style="padding:6px;">Operaattori</th><th style="padding:6px;">Merkitys</th><th style="padding:6px;">Esimerkki</th></tr>
            <tr><td style="padding:4px 6px;"><code>==</code></td><td>Yhtä suuri</td><td>5 == 5 → True</td></tr>
            <tr><td style="padding:4px 6px;"><code>!=</code></td><td>Eri suuri</td><td>5 != 3 → True</td></tr>
            <tr><td style="padding:4px 6px;"><code>&gt;</code></td><td>Suurempi</td><td>7 > 3 → True</td></tr>
            <tr><td style="padding:4px 6px;"><code>&lt;</code></td><td>Pienempi</td><td>2 < 8 → True</td></tr>
            <tr><td style="padding:4px 6px;"><code>&gt;=</code></td><td>Suurempi tai yhtä suuri</td><td>5 >= 5 → True</td></tr>
            <tr><td style="padding:4px 6px;"><code>&lt;=</code></td><td>Pienempi tai yhtä suuri</td><td>3 <= 4 → True</td></tr>
            </table>
        `,
        challenge: "Korvaa <code>___</code> oikealla vertailuoperaattorilla: tarkista onko luku täsmälleen 100.",
        starterCode: `luku = 100\n\nif luku ___ 100:\n    print("Täysosuma!")\nelse:\n    print("Ohi meni")`,
        hint: "Yhtäsuuruutta tarkistetaan kahdella yhtäsuuruusmerkillä: ==",
        validate: function(output) {
            return output.trim() === "Täysosuma!";
        },
        successMsg: "Oikein! == tarkistaa yhtäsuuruuden — 100 == 100 on True! ⚖️",
        failMsg: "Tuloksen pitäisi olla 'Täysosuma!'. Yhtäsuuruus on == (kaksi merkkiä).",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>if luku ___ 100:</code> — tarkistetaan onko luku täsmälleen 100:
                    <div class="step-line">==</div>
                    <code>if luku == 100:</code> — 100 == 100 on True → "Täysosuma!"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 105: elif — monta vaihtoehtoa    // ─────────────────────────────────────
    {
    id: 175,


        legacyId: 130,
        section: "ehtolauseet",
        title: "Monta vaihtoehtoa 🎯",
        slug: "ehtolauseet-monta-vaihtoehtoa",
        icon: "🎯",
        description: "elif tarkistaa lisäehtoja — valitse monesta vaihtoehdosta!",
        theory: `
            <h4>📚 elif — muuten jos</h4>
            <p>Kun vaihtoehtoja on enemmän kuin kaksi, käytä <code>elif</code>:</p>
            <pre><code>pisteet = 85
if pisteet >= 90:
    print("Erinomainen")
elif pisteet >= 70:
    print("Hyvä")
elif pisteet >= 50:
    print("OK")
else:
    print("Hylätty")</code></pre>
            <p>Python tarkistaa ehdot ylhäältä alas ja valitsee ensimmäisen toden!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma kertoo vuodenajan kuukauden perusteella.",
        starterCode: `kuukausi = 7\n\nif kuukausi <= 2:\n    print("Talvi ❄️")\n___ kuukausi <= 5:\n    print("Kevät 🌱")\nelif kuukausi <= 8:\n    print("Kesä ☀️")\nelse:\n    print("Syksy 🍂")`,
        hint: "Tarvitaan 'muuten jos' — yhdistelmä sanasta else ja if. Mikä se on?",
        validate: function(output) {
            return output.trim() === "Kesä ☀️";
        },
        successMsg: "Oikein! elif tarkisti lisäehdon — kuukausi 7 on kesä! 🎯",
        failMsg: "Tuloksen pitäisi olla 'Kesä ☀️'. Mikä sana yhdistää else ja if?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 5:</strong> <code>___ kuukausi <= 5:</code> — 'muuten jos' on:
                    <div class="step-line">elif</div>
                    <code>elif kuukausi <= 5:</code> — kuukausi=7, ei ≤2, ei ≤5, mutta ≤8 → "Kesä ☀️"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 106: Sisäkkäiset ehdot    // ─────────────────────────────────────
    {
    id: 176,


        legacyId: 131,
        section: "ehtolauseet",
        title: "Ehto ehdon sisällä 🪆",
        slug: "ehtolauseet-ehto-ehdon-sisalla",
        icon: "🪆",
        description: "Voit laittaa if-lauseen toisen if-lauseen sisään!",
        theory: `
            <h4>📚 Sisäkkäiset ehdot</h4>
            <p>If-lause voi olla toisen sisällä — sisennys kertoo tason:</p>
            <pre><code>ika = 15
lippu = True

if ika >= 12:
    if lippu:
        print("Tervetuloa elokuvaan!")
    else:
        print("Osta lippu ensin!")
else:
    print("Ikäraja 12v")</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodari pääsee sisään jos ikä riittää JA salasana on oikein.",
        starterCode: `ika = 12\nsalasana = "python"\n\nif ika >= 10:\n    ___ salasana == "python":\n        print("Tervetuloa koodari!")\n    else:\n        print("Väärä salasana!")\nelse:\n    print("Liian nuori")`,
        hint: "Sisemmän ehdon aloittaa sama sana kuin ulommankin — if!",
        validate: function(output) {
            return output.trim() === "Tervetuloa koodari!";
        },
        successMsg: "Oikein! Sisäkkäinen if tarkisti molemmat ehdot! 🪆",
        failMsg: "Tuloksen pitäisi olla 'Tervetuloa koodari!'. Mikä sana aloittaa sisemmän ehdon?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 5:</strong> <code>    ___ salasana == "python":</code> — sisempi ehto alkaa samalla sanalla:
                    <div class="step-line">if</div>
                    <code>if salasana == "python":</code> — molemmat ehdot totta → "Tervetuloa koodari!"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 107: and — molemmat totta    // ─────────────────────────────────────
    {
    id: 177,


        legacyId: 132,
        section: "ehtolauseet",
        title: "and — molemmat! 🤝",
        slug: "ehtolauseet-and-molemmat",
        icon: "🤝",
        description: "and vaatii että MOLEMMAT ehdot ovat totta!",
        theory: `
            <h4>📚 and — looginen JA</h4>
            <p><code>and</code> yhdistää kaksi ehtoa — molemmat pitää olla totta:</p>
            <pre><code>ika = 12
lippu = True

if ika >= 10 and lippu:
    print("Pääset sisään!")
# Molemmat totta → True!</code></pre>
            <p>Jos yksikin on epätotta → koko ehto on epätotta.</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että viesti tulostuu vain jos MOLEMMAT ehdot ovat totta.",
        starterCode: `lampotila = 25\naurinko = True\n\nif lampotila > 20 ___ aurinko:\n    print("Täydellinen uimapäivä! 🏊")\nelse:\n    print("Jää kotiin")`,
        hint: "Mikä englanninkielinen sana tarkoittaa 'ja'? Molemmat ehdot pitää olla totta.",
        validate: function(output) {
            return output.trim() === "Täydellinen uimapäivä! 🏊";
        },
        successMsg: "Oikein! and vaatii molemmat totta — lämmin JA aurinkoista! 🤝",
        failMsg: "Tuloksen pitäisi olla 'Täydellinen uimapäivä! 🏊'. Mikä sana tarkoittaa 'ja'?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 4:</strong> <code>if lampotila > 20 ___ aurinko:</code> — molemmat pitää olla totta:
                    <div class="step-line">and</div>
                    <code>if lampotila > 20 and aurinko:</code> — 25>20 ✓ ja True ✓ → tulostetaan!
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 108: or — jompikumpi riittää    // ─────────────────────────────────────
    {
    id: 178,


        legacyId: 133,
        section: "ehtolauseet",
        title: "or — jompikumpi! 🔀",
        slug: "ehtolauseet-or-jompikumpi",
        icon: "🔀",
        description: "or riittää kun yksikin ehto on totta!",
        theory: `
            <h4>📚 or — looginen TAI</h4>
            <p><code>or</code> on totta kun <strong>edes toinen</strong> ehto on totta:</p>
            <pre><code>viikonpaiva = "lauantai"

if viikonpaiva == "lauantai" or viikonpaiva == "sunnuntai":
    print("Viikonloppu!")
else:
    print("Arkipäivä")</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että alennus annetaan jos ikä on alle 12 TAI yli 65.",
        starterCode: `ika = 8\n\nif ika < 12 ___ ika > 65:\n    print("Saat alennuksen! 🎟️")\nelse:\n    print("Normaali hinta")`,
        hint: "Mikä englanninkielinen sana tarkoittaa 'tai'? Riittää että yksi ehto on totta.",
        validate: function(output) {
            return output.trim() === "Saat alennuksen! 🎟️";
        },
        successMsg: "Oikein! or — lapset TAI eläkeläiset saavat alennuksen! 🎟️",
        failMsg: "Tuloksen pitäisi olla 'Saat alennuksen! 🎟️'. Mikä sana tarkoittaa 'tai'?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>if ika < 12 ___ ika > 65:</code> — riittää kun toinen on totta:
                    <div class="step-line">or</div>
                    <code>if ika < 12 or ika > 65:</code> — ika=8, 8<12 on True → alennus!
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 109: not — käänteinen ehto    // ─────────────────────────────────────
    {
    id: 179,


        legacyId: 134,
        section: "ehtolauseet",
        title: "not — ei! 🚫",
        slug: "ehtolauseet-not-ei",
        icon: "🚫",
        description: "not kääntää ehdon — True muuttuu False ja toisinpäin!",
        theory: `
            <h4>📚 not — looginen EI</h4>
            <p><code>not</code> kääntää totuusarvon:</p>
            <pre><code>sataa = False

if not sataa:
    print("Ulos leikkimään!")
# not False = True → tulostetaan!</code></pre>
            <p>not True = False, not False = True</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että viesti tulostuu kun EI ole viikonloppu.",
        starterCode: `viikonloppu = False\n\nif ___ viikonloppu:\n    print("Kouluun! 📚")\nelse:\n    print("Vapaapäivä!")`,
        hint: "Mikä sana kääntää ehdon — tekee False:sta True:n?",
        validate: function(output) {
            return output.trim() === "Kouluun! 📚";
        },
        successMsg: "Oikein! not kääntää False → True — ei viikonloppu = kouluun! 🚫",
        failMsg: "Tuloksen pitäisi olla 'Kouluun! 📚'. Mikä sana kääntää totuusarvon?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>if ___ viikonloppu:</code> — käännetään False todeksi:
                    <div class="step-line">not</div>
                    <code>if not viikonloppu:</code> — not False = True → "Kouluun! 📚"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 110: Ehto + lista (in)    // ─────────────────────────────────────
    {
    id: 180,


        legacyId: 135,
        section: "ehtolauseet",
        title: "Onko listassa? 🔍",
        slug: "ehtolauseet-onko-listassa",
        icon: "🔍",
        description: "in-sana tarkistaa löytyykö arvo listasta!",
        theory: `
            <h4>📚 in — onko listassa?</h4>
            <p><code>in</code> tarkistaa kuuluuko arvo listaan:</p>
            <pre><code>hedelmat = ["omena", "banaani", "kiivi"]

if "omena" in hedelmat:
    print("Löytyi!")

if "mango" not in hedelmat:
    print("Ei löydy!")</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma kertoo löytyykö väri listasta.",
        starterCode: `varit = ["punainen", "sininen", "vihreä"]\nhaku = "sininen"\n\nif haku ___ varit:\n    print(f"{haku} löytyi! ✅")\nelse:\n    print(f"{haku} ei löytynyt ❌")`,
        hint: "Mikä sana tarkistaa kuuluuko arvo listaan? Kaksi kirjainta!",
        validate: function(output) {
            return output.trim() === "sininen löytyi! ✅";
        },
        successMsg: "Oikein! in tarkistaa onko arvo listassa! 🔍",
        failMsg: "Tuloksen pitäisi olla 'sininen löytyi! ✅'. Mikä sana tarkistaa jäsenyyden?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 4:</strong> <code>if haku ___ varit:</code> — tarkistetaan löytyykö listasta:
                    <div class="step-line">in</div>
                    <code>if haku in varit:</code> — "sininen" löytyy listasta → "löytyi! ✅"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 111: Ehto + merkkijono    // ─────────────────────────────────────
    {
    id: 181,


        legacyId: 136,
        section: "ehtolauseet",
        title: "Merkkijonoehto 📝",
        slug: "ehtolauseet-merkkijonoehto",
        icon: "📝",
        description: "Tarkista merkkijonon alku tai loppu ehdolla!",
        theory: `
            <h4>📚 Merkkijonon tarkistus</h4>
            <p>Merkkijonoilla on käteviä tarkistusmetodeja:</p>
            <pre><code>nimi = "koodikoulu.py"

if nimi.endswith(".py"):
    print("Python-tiedosto!")

if nimi.startswith("koodi"):
    print("Alkaa sanalla koodi!")</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tarkistaa onko tiedosto Python-tiedosto.",
        starterCode: `tiedosto = "peli.py"\n\nif tiedosto.___(".py"):\n    print("Python-tiedosto! 🐍")\nelse:\n    print("Ei Python-tiedosto")`,
        hint: "Mikä metodi tarkistaa millä merkkijono päättyy? ends + with",
        validate: function(output) {
            return output.trim() === "Python-tiedosto! 🐍";
        },
        successMsg: "Oikein! .endswith() tarkistaa merkkijonon lopun! 📝",
        failMsg: "Tuloksen pitäisi olla 'Python-tiedosto! 🐍'. Mikä metodi tarkistaa päätteen?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>tiedosto.___(".py")</code> — mikä metodi tarkistaa loppuosan?
                    <div class="step-line">endswith</div>
                    <code>tiedosto.endswith(".py")</code> — "peli.py" päättyy ".py" → True!
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 112: Ehto + sanakirja    // ─────────────────────────────────────
    {
    id: 182,


        legacyId: 137,
        section: "ehtolauseet",
        title: "Onko avain? 🔑",
        slug: "ehtolauseet-onko-avain",
        icon: "🔑",
        description: "Tarkista löytyykö avain sanakirjasta ennen käyttöä!",
        theory: `
            <h4>📚 Avain sanakirjassa?</h4>
            <p>Tarkista avaimen olemassaolo <code>in</code>-sanalla:</p>
            <pre><code>oppilas = {"nimi": "Masa", "luokka": "5A"}

if "nimi" in oppilas:
    print(oppilas["nimi"])   # Masa

if "numero" not in oppilas:
    print("Numeroa ei löydy!")</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tarkistaa löytyykö avain sanakirjasta.",
        starterCode: `peli = {"nimi": "Minecraft", "vuosi": 2011}\n\nif "vuosi" ___ peli:\n    print(f"Julkaistu: {peli['vuosi']}")\nelse:\n    print("Vuotta ei tiedetä")`,
        hint: "Sama sana kuin listoilla — tarkistaa löytyykö avain sanakirjasta!",
        validate: function(output) {
            return output.trim() === "Julkaistu: 2011";
        },
        successMsg: "Oikein! in toimii myös sanakirjan avainten tarkistamiseen! 🔑",
        failMsg: "Tuloksen pitäisi olla 'Julkaistu: 2011'. Mikä sana tarkistaa avaimen?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>if "vuosi" ___ peli:</code> — löytyykö avain sanakirjasta?
                    <div class="step-line">in</div>
                    <code>if "vuosi" in peli:</code> — avain "vuosi" löytyy → tulostetaan 2011
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 113: Vertailuketju    // ─────────────────────────────────────
    {
    id: 183,


        legacyId: 138,
        section: "ehtolauseet",
        title: "Arvoalue 📏",
        slug: "ehtolauseet-arvoalue",
        icon: "📏",
        description: "Python osaa tarkistaa onko luku kahden arvon välissä!",
        theory: `
            <h4>📚 Vertailuketju</h4>
            <p>Pythonissa voit ketjuttaa vertailuja:</p>
            <pre><code>ika = 15

if 13 <= ika <= 19:
    print("Olet teini!")

# Sama kuin: if ika >= 13 and ika <= 19:</code></pre>
            <p>Tämä on siistiä — ei tarvita <code>and</code>-sanaa!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tarkistaa onko lämpötila mukavan välillä (18-25).",
        starterCode: `lampotila = 22\n\nif 18 ___ lampotila <= 25:\n    print("Mukava lämpötila! 😊")\nelse:\n    print("Ei kovin mukava")`,
        hint: "Vertailuketjussa tarvitaan <= (pienempi tai yhtä suuri) 18:n jälkeen.",
        validate: function(output) {
            return output.trim() === "Mukava lämpötila! 😊";
        },
        successMsg: "Oikein! 18 <= 22 <= 25 — vertailuketju toimii! 📏",
        failMsg: "Tuloksen pitäisi olla 'Mukava lämpötila! 😊'. Tarkista vertailuoperaattori.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>if 18 ___ lampotila <= 25:</code> — 18 pitää olla ≤ lampotila:
                    <div class="step-line"><=</div>
                    <code>if 18 <= lampotila <= 25:</code> — 18 ≤ 22 ≤ 25 → True!
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 114: Truthy ja Falsy    // ─────────────────────────────────────
    {
    id: 184,


        legacyId: 139,
        section: "ehtolauseet",
        title: "Truthy & Falsy 🎭",
        slug: "ehtolauseet-truthy-falsy",
        icon: "🎭",
        description: "Pythonissa monet arvot ovat 'tosia' tai 'epätosia' — ei vain True ja False!",
        theory: `
            <h4>📚 Truthy & Falsy</h4>
            <p>Nämä ovat <strong>falsy</strong> (epätosia): <code>False</code>, <code>0</code>, <code>""</code>, <code>[]</code>, <code>None</code></p>
            <p>Kaikki muu on <strong>truthy</strong> (tosia)!</p>
            <pre><code>lista = [1, 2, 3]
if lista:
    print("Listassa on jotain!")

tyhja = []
if not tyhja:
    print("Lista on tyhjä!")</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tarkistaa onko nimi tyhjä vai ei.",
        starterCode: `nimi = "Koodari"\n\nif ___:\n    print(f"Hei {nimi}!")\nelse:\n    print("Nimi puuttuu!")`,
        hint: "Merkkijono on truthy kun se ei ole tyhjä. Laita muuttujan nimi ehtoon!",
        validate: function(output) {
            return output.trim() === "Hei Koodari!";
        },
        successMsg: "Oikein! 'Koodari' on truthy — ei-tyhjä merkkijono on aina True! 🎭",
        failMsg: "Tuloksen pitäisi olla 'Hei Koodari!'. Laita muuttujan nimi ehtoon.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>if ___:</code> — mikä muuttuja tarkistetaan?
                    <div class="step-line">nimi</div>
                    <code>if nimi:</code> — "Koodari" on truthy → tulostetaan tervehdys!
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 115: Ternary — ehto yhdellä rivillä    // ─────────────────────────────────────
    {
    id: 185,


        legacyId: 140,
        section: "ehtolauseet",
        title: "Pikaehto ⚡",
        slug: "ehtolauseet-pikaehto",
        icon: "⚡",
        description: "Ternary-ehto tekee if/else-valinnan yhdellä rivillä!",
        theory: `
            <h4>📚 Ternary — lyhyt ehto</h4>
            <p>Jos valitset vain kahden arvon välillä, voit kirjoittaa lyhyesti:</p>
            <pre><code># Pitkä tapa:
if ika >= 18:
    status = "aikuinen"
else:
    status = "lapsi"

# Lyhyt tapa (ternary):
status = "aikuinen" if ika >= 18 else "lapsi"</code></pre>
            <p>Muoto: <code>arvo_jos_totta if ehto else arvo_jos_epätotta</code></p>
        `,
        challenge: "Korvaa <code>___</code> niin, että ternary-ehto valitsee oikean viestin.",
        starterCode: `pisteet = 80\n\ntulos = "Läpi! ✅" if pisteet >= 50 ___ "Hylätty ❌"\nprint(tulos)`,
        hint: "Ternary-ehdon toinen osa alkaa sanalla joka tarkoittaa 'muuten'.",
        validate: function(output) {
            return output.trim() === "Läpi! ✅";
        },
        successMsg: "Oikein! Ternary-ehto valitsi 'Läpi!' koska 80 >= 50! ⚡",
        failMsg: "Tuloksen pitäisi olla 'Läpi! ✅'. Mikä sana tulee ehdon jälkeen?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>... if pisteet >= 50 ___ "Hylätty ❌"</code> — vaihtoehto kun ehto ei ole totta:
                    <div class="step-line">else</div>
                    <code>"Läpi! ✅" if pisteet >= 50 else "Hylätty ❌"</code> — 80 >= 50 → "Läpi! ✅"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 116: Ehto silmukassa    // ─────────────────────────────────────
    {
    id: 186,


        legacyId: 141,
        section: "ehtolauseet",
        title: "Ehto + silmukka 🔄",
        slug: "ehtolauseet-ehto-silmukka",
        icon: "🔄",
        description: "Yhdistä for-silmukka ja if — suodata arvoja!",
        theory: `
            <h4>📚 if silmukan sisällä</h4>
            <p>Silmukka + ehto on tehokas suodatin:</p>
            <pre><code>luvut = [5, -3, 8, -1, 0, 12]

for luku in luvut:
    if luku > 0:
        print(luku)
# Tulostaa: 5, 8, 12</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että ohjelma tulostaa vain parilliset luvut.",
        starterCode: `luvut = [1, 2, 3, 4, 5, 6, 7, 8]\n\nfor luku in luvut:\n    if luku % 2 ___ 0:\n        print(luku)`,
        hint: "Parillinen luku jakautuu tasan kahdella — jakojäännös on 0. Mikä vertailuoperaattori?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 4 &&
                   lines[0].trim() === "2" &&
                   lines[1].trim() === "4" &&
                   lines[2].trim() === "6" &&
                   lines[3].trim() === "8";
        },
        successMsg: "Oikein! if suodatti parilliset — jakojäännös 0 tarkoittaa parillista! 🔄",
        failMsg: "Tuloksen pitäisi olla 2, 4, 6, 8. Parillisen jakojäännös on == 0.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 4:</strong> <code>if luku % 2 ___ 0:</code> — jakojäännös on 0 kun luku on parillinen:
                    <div class="step-line">==</div>
                    <code>if luku % 2 == 0:</code> — 2%2=0 ✓, 3%2=1 ✗, 4%2=0 ✓ ...
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 117: Ehto funktiossa    // ─────────────────────────────────────
    {
    id: 187,


        legacyId: 142,
        section: "ehtolauseet",
        title: "Funktio + ehto 🧠",
        slug: "ehtolauseet-funktio-ehto",
        icon: "🧠",
        description: "Funktio joka tekee päätöksen ja palauttaa arvon!",
        theory: `
            <h4>📚 return + if</h4>
            <p>Funktio voi palauttaa eri arvoja ehdon perusteella:</p>
            <pre><code>def onko_tayta_ikaa(ika):
    if ika >= 18:
        return True
    else:
        return False

print(onko_tayta_ikaa(20))   # True
print(onko_tayta_ikaa(15))   # False</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että funktio palauttaa 'positiivinen', 'negatiivinen' tai 'nolla'.",
        starterCode: `def luokittele(luku):\n    if luku > 0:\n        return "positiivinen"\n    elif luku ___ 0:\n        return "negatiivinen"\n    else:\n        return "nolla"\n\nprint(luokittele(5))\nprint(luokittele(-3))\nprint(luokittele(0))`,
        hint: "Negatiivinen luku on pienempi kuin nolla. Mikä vertailuoperaattori?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 &&
                   lines[0].trim() === "positiivinen" &&
                   lines[1].trim() === "negatiivinen" &&
                   lines[2].trim() === "nolla";
        },
        successMsg: "Oikein! Funktio luokittelee luvun — if/elif/else + return! 🧠",
        failMsg: "Tuloksen pitäisi olla 'positiivinen', 'negatiivinen', 'nolla'. Negatiivinen < 0.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 4:</strong> <code>elif luku ___ 0:</code> — negatiivinen = pienempi kuin nolla:
                    <div class="step-line"><</div>
                    <code>elif luku < 0:</code> — -3 < 0 → "negatiivinen"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 118: Monta ehtoa yhdessä    // ─────────────────────────────────────
    {
    id: 188,


        legacyId: 143,
        section: "ehtolauseet",
        title: "Ehtoyhdistelmä 🧩",
        slug: "ehtolauseet-ehtoyhdistelma",
        icon: "🧩",
        description: "Yhdistä and, or ja not — rakenna monimutkaisia ehtoja!",
        theory: `
            <h4>📚 Ehtojen yhdistäminen</h4>
            <p>Voit yhdistellä and, or ja not:</p>
            <pre><code>ika = 15
lippu = True
vip = False

if (ika >= 12 and lippu) or vip:
    print("Pääset sisään!")

# Sulut auttavat — ensin tarkistetaan sulkujen sisältö!</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että oppilas pääsee kilpailuun jos hän on 10-15v JA saanut yli 70 pistettä.",
        starterCode: `ika = 12\npisteet = 85\n\nif ika >= 10 ___ ika <= 15 and pisteet > 70:\n    print("Pääset kilpailuun! 🏆")\nelse:\n    print("Et täytä ehtoja")`,
        hint: "Molemmat ikäehdot pitää olla totta — mikä sana tarkoittaa 'ja'?",
        validate: function(output) {
            return output.trim() === "Pääset kilpailuun! 🏆";
        },
        successMsg: "Oikein! and yhdisti kaikki ehdot — ikä ja pisteet riittävät! 🧩",
        failMsg: "Tuloksen pitäisi olla 'Pääset kilpailuun! 🏆'. Tarvitaan and ikäehtojen väliin.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 4:</strong> <code>if ika >= 10 ___ ika <= 15 and pisteet > 70:</code> — kaikki pitää olla totta:
                    <div class="step-line">and</div>
                    <code>if ika >= 10 and ika <= 15 and pisteet > 70:</code> — 12≥10 ✓ ja 12≤15 ✓ ja 85>70 ✓
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 119: Pelimekaniikka    // ─────────────────────────────────────
    {
    id: 189,


        legacyId: 144,
        section: "ehtolauseet",
        title: "Pelihahmon tila 🎮",
        slug: "ehtolauseet-pelihahmon-tila",
        icon: "🎮",
        description: "Rakenna pelimekaniikka if-lauseilla — HP, hyökkäys, puolustus!",
        theory: `
            <h4>📚 Ehdot pelissä</h4>
            <p>Pelit ovat täynnä ehtoja:</p>
            <pre><code>hp = 30
max_hp = 100

if hp <= 0:
    print("Game Over! 💀")
elif hp < 25:
    print("Varoitus: HP alhainen! ⚠️")
else:
    print(f"HP: {hp}/{max_hp}")</code></pre>
        `,
        challenge: "Korvaa KAIKKI <code>___</code> niin, että peli kertoo hahmon tilan HP:n perusteella.",
        starterCode: `hp = 15\n\nif hp ___ 0:\n    print("Game Over! 💀")\nelif hp < 25:\n    print("Kriittinen tila! ⚠️")\n___ hp < 50:\n    print("Vahingoittunut 🩹")\nelse:\n    print("Kunnossa! 💚")`,
        hint: "1: Kuollut kun HP on 0 tai alle (<=). 2: Kolmas vaihtoehto tarvitsee elif-sanan.",
        validate: function(output) {
            return output.trim() === "Kriittinen tila! ⚠️";
        },
        successMsg: "Oikein! HP 15 on kriittisellä tasolla — pelimekaniikka toimii! 🎮",
        failMsg: "Tuloksen pitäisi olla 'Kriittinen tila! ⚠️'. 1: <= nollalle, 2: elif.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>if hp ___ 0:</code> — kuollut kun HP on nolla tai alle:
                    <div class="step-line"><=</div>
                    <code>if hp <= 0:</code> — hp=15, 15 ≤ 0 on False → seuraava ehto
                </li>
                <li><strong>Rivi 7:</strong> <code>___ hp < 50:</code> — kolmas vaihtoehto:
                    <div class="step-line">elif</div>
                    <code>elif hp < 50:</code> — mutta 15 < 25 on True → "Kriittinen tila! ⚠️"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 120: Arvosana-automaatti    // ─────────────────────────────────────
    {
    id: 190,


        legacyId: 145,
        section: "ehtolauseet",
        title: "Arvosana-automaatti 📊",
        slug: "ehtolauseet-arvosana-automaatti",
        icon: "📊",
        description: "Yhdistä kaikki — rakenna täydellinen arvosanalasku!",
        theory: `
            <h4>📚 Kaikki yhteen!</h4>
            <p>Todellisessa ohjelmassa yhdistät monia ehtotaitoja:</p>
            <pre><code>def tarkista(arvo, minimi, maksimi):
    if arvo < minimi or arvo > maksimi:
        return "Virhe: arvo ei kelpaa!"
    elif arvo >= maksimi * 0.9:
        return "Erinomainen"
    elif arvo >= maksimi * 0.5:
        return "Hyvä"
    else:
        return "Harjoittele"</code></pre>
        `,
        challenge: "Korvaa KAIKKI <code>___</code> niin, että ohjelma antaa oikeat arvosanat ja tulostaa yhteenvedon.",
        starterCode: `tulokset = [95, 42, 78, 60, 88]\nhyvat = 0\n\nfor piste in tulokset:\n    if piste >= 90:\n        print(f"{piste}: Erinomainen ⭐")\n        hyvat = hyvat + 1\n    ___ piste >= 70:\n        print(f"{piste}: Hyvä 👍")\n        hyvat = hyvat + 1\n    elif piste >= 50:\n        print(f"{piste}: OK 👌")\n    ___:\n        print(f"{piste}: Hylätty ❌")\n\nprint(f"Hyviä tuloksia: {hyvat}/{len(tulokset)}")`,
        hint: "1: 'muuten jos' = elif. 2: 'muuten' = else (viimeinen vaihtoehto).",
        validate: function(output) {
            return output.includes("95: Erinomainen") &&
                   output.includes("42: Hylätty") &&
                   output.includes("78: Hyvä") &&
                   output.includes("60: OK") &&
                   output.includes("88: Hyvä") &&
                   output.includes("Hyviä tuloksia: 3/5");
        },
        successMsg: "Huippua! Arvosana-automaatti toimii — 3 hyvää tulosta 5:stä! 📊",
        failMsg: "Tarkista: 1) elif toisen ehdon eteen, 2) else viimeiseksi.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 8:</strong> <code>___ piste >= 70:</code> — toinen vaihtoehto:
                    <div class="step-line">elif</div>
                    <code>elif piste >= 70:</code> — 78 ja 88 ovat "Hyvä 👍"
                </li>
                <li><strong>Rivi 12:</strong> <code>___:</code> — viimeinen vaihtoehto kun mikään ehto ei täyty:
                    <div class="step-line">else</div>
                    <code>else:</code> — 42 < 50 → "Hylätty ❌"
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 121: Ehtomestari    // ─────────────────────────────────────
    {
    id: 191,


        legacyId: 146,
        section: "ehtolauseet",
        title: "Ehtomestari 🏆",
        slug: "ehtolauseet-ehtomestari",
        icon: "🏆",
        description: "Viimeinen haaste — käytä kaikkia ehtolausetaitojasi!",
        theory: `
            <h4>📚 Kertaus — ehtolauseet!</h4>
            <table style="width:100%; border-collapse: collapse; font-size: 0.95em;">
            <tr style="background: var(--accent-blue); color: white;"><th style="padding:6px;">Syntaksi</th><th style="padding:6px;">Toiminto</th><th style="padding:6px;">Esimerkki</th></tr>
            <tr><td style="padding:4px 6px;"><code>if ehto:</code></td><td>Tarkista ehto</td><td>if x > 0:</td></tr>
            <tr><td style="padding:4px 6px;"><code>elif ehto:</code></td><td>Lisäehto</td><td>elif x == 0:</td></tr>
            <tr><td style="padding:4px 6px;"><code>else:</code></td><td>Muuten</td><td>else:</td></tr>
            <tr><td style="padding:4px 6px;"><code>and</code></td><td>Molemmat totta</td><td>if a > 0 and b > 0:</td></tr>
            <tr><td style="padding:4px 6px;"><code>or</code></td><td>Jompikumpi totta</td><td>if a or b:</td></tr>
            <tr><td style="padding:4px 6px;"><code>not</code></td><td>Käänteinen</td><td>if not valmis:</td></tr>
            <tr><td style="padding:4px 6px;"><code>in</code></td><td>Jäsenyys</td><td>if x in lista:</td></tr>
            </table>
        `,
        challenge: "Korvaa KAIKKI <code>___</code> niin, että lippuautomaatti toimii oikein ja kaikki testit tulostavat True!",
        starterCode: `def lipun_hinta(ika, opiskelija):\n    # Lapsi (alle 7): ilmainen\n    ___ ika < 7:\n        return 0\n    # Opiskelija TAI eläkeläinen (65+): alennus\n    elif opiskelija ___ ika >= 65:\n        return 5\n    # Normaali aikuinen\n    ___:\n        return 10\n\ndef onko_ilmainen(ika):\n    hinta = lipun_hinta(ika, False)\n    return hinta ___ 0\n\n# Testit — kaikkien pitäisi tulostaa True!\nprint(lipun_hinta(5, False) == 0)\nprint(lipun_hinta(20, True) == 5)\nprint(lipun_hinta(70, False) == 5)\nprint(lipun_hinta(30, False) == 10)\nprint(onko_ilmainen(3) == True)`,
        hint: "1: if. 2: or (jompikumpi riittää). 3: else (viimeinen vaihtoehto). 4: == (yhtäsuuruus).",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 5 &&
                   lines[0].trim() === "True" &&
                   lines[1].trim() === "True" &&
                   lines[2].trim() === "True" &&
                   lines[3].trim() === "True" &&
                   lines[4].trim() === "True";
        },
        successMsg: "MESTARI! 🏆 Viisi True — osaat ehtolauseet! if, elif, else, and, or, not, in — kaikki hallussa!",
        failMsg: "Kaikkien viiden rivin pitäisi tulostaa True. Lue vihje uudelleen!",
        detailedHelp: `
            <h4>Askel askeleelta — Ehtomestari</h4>
            <p>Neljä <code>___</code> kohtaa — jokaisessa eri ehtotaito!</p>
            <ol>
                <li><strong>Rivi 3:</strong> <code>___ ika < 7:</code> — ensimmäinen ehto alkaa:
                    <div class="step-line">if</div>
                    <code>if ika < 7:</code> — alle 7v = ilmainen (0€)
                </li>
                <li><strong>Rivi 6:</strong> <code>elif opiskelija ___ ika >= 65:</code> — riittää kun jompikumpi:
                    <div class="step-line">or</div>
                    <code>elif opiskelija or ika >= 65:</code> — opiskelija TAI eläkeläinen = 5€
                </li>
                <li><strong>Rivi 8:</strong> <code>___:</code> — viimeinen vaihtoehto:
                    <div class="step-line">else</div>
                    <code>else:</code> — normaali aikuinen = 10€
                </li>
                <li><strong>Rivi 12:</strong> <code>return hinta ___ 0</code> — tarkista onko hinta nolla:
                    <div class="step-line">==</div>
                    <code>return hinta == 0</code> — palauttaa True/False
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ═════════════════════════════════════════════
    //  SILMUKAT (20 tehtävää: #147-166)
    // ═════════════════════════════════════════════

    // ─────────────────────────────────────
    // TEHTÄVÄ 122: for-silmukka perusmuoto    // ─────────────────────────────────────
    {
    id: 192,


        legacyId: 147,
        section: "silmukat",
        title: "Ensimmäinen for-silmukka 🔄",
        slug: "silmukat-ensimmainen-for-silmukka",
        icon: "🔄",
        description: "Opi for-silmukan perusmuoto — käy lista läpi alkio kerrallaan!",
        theory: `
            <h4>📚 for-silmukka</h4>
            <p><strong>for</strong> käy läpi listan tai muun kokoelman alkio kerrallaan:</p>
            <pre><code>hedelmät = ["omena", "banaani", "kirsikka"]

for hedelmä in hedelmät:
    print(hedelmä)

# Tulostaa:
# omena
# banaani
# kirsikka</code></pre>
            <p><code>hedelmä</code> on muuttuja, joka saa vuorollaan jokaisen arvon listasta.</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi tulostaa jokaisen eläimen nimen.",
        starterCode: `eläimet = ["koira", "kissa", "kani"]\n\n___ eläin in eläimet:\n    print(eläin)`,
        hint: "Mikä sana aloittaa silmukan? Se on kolmikirjaiminen sana.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 &&
                   lines[0].trim() === "koira" &&
                   lines[1].trim() === "kissa" &&
                   lines[2].trim() === "kani";
        },
        successMsg: "Hienoa! for käy listan läpi — jokainen eläin tulostui! 🔄",
        failMsg: "Tuloksen pitäisi olla kolme riviä: koira, kissa, kani. Mikä sana aloittaa silmukan?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>___ eläin in eläimet:</code> — silmukka aloitetaan:
                    <div class="step-line">for</div>
                    <code>for eläin in eläimet:</code> — käy läpi jokaisen eläimen
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 123: range() perusteet    // ─────────────────────────────────────
    {
    id: 193,


        legacyId: 148,
        section: "silmukat",
        title: "range() — numerot 🔢",
        slug: "silmukat-range-numerot",
        icon: "🔢",
        description: "Opi range()-funktio — luo numerosarja for-silmukkaan!",
        theory: `
            <h4>📚 range()</h4>
            <p><code>range(n)</code> luo numerot 0:sta n-1:een:</p>
            <pre><code>for i in range(5):
    print(i)

# Tulostaa: 0, 1, 2, 3, 4
# (ei tulosta 5:ttä!)</code></pre>
            <p><code>range(5)</code> = numerot 0, 1, 2, 3, 4 — yhteensä 5 lukua.</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi tulostaa numerot 0, 1, 2.",
        starterCode: `for i in range(___):\n    print(i)`,
        hint: "Montako lukua haluat? 0, 1, 2 — se on kolme lukua.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 &&
                   lines[0].trim() === "0" &&
                   lines[1].trim() === "1" &&
                   lines[2].trim() === "2";
        },
        successMsg: "Oikein! range(3) antaa numerot 0, 1, 2 — kolme lukua! 🔢",
        failMsg: "Tuloksen pitäisi olla 0, 1, 2 (kolme riviä). Mikä luku laitetaan range():n sisään?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 1:</strong> <code>for i in range(___):</code> — montako lukua:
                    <div class="step-line">3</div>
                    <code>for i in range(3):</code> — tulostaa 0, 1, 2
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 124: range() alku ja loppu    // ─────────────────────────────────────
    {
    id: 194,


        legacyId: 149,
        section: "silmukat",
        title: "range(alku, loppu) 📏",
        slug: "silmukat-rangealku-loppu",
        icon: "📏",
        description: "Anna range():lle aloituskohta — numerot eivät aina ala nollasta!",
        theory: `
            <h4>📚 range(alku, loppu)</h4>
            <p>Voit antaa kaksi arvoa — aloituksen ja lopetuksen:</p>
            <pre><code>for i in range(2, 6):
    print(i)

# Tulostaa: 2, 3, 4, 5
# Alkaa 2:sta, loppuu ENNEN 6:ta</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi tulostaa numerot 1, 2, 3, 4, 5.",
        starterCode: `for i in range(___, ___):\n    print(i)`,
        hint: "Aloita 1:stä ja lopeta ennen 6:ta. range(alku, loppu) ei sisällä loppua!",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 5 &&
                   lines[0].trim() === "1" &&
                   lines[1].trim() === "2" &&
                   lines[2].trim() === "3" &&
                   lines[3].trim() === "4" &&
                   lines[4].trim() === "5";
        },
        successMsg: "Oikein! range(1, 6) antaa 1-5 — loppu ei ole mukana! 📏",
        failMsg: "Tuloksen pitäisi olla 1, 2, 3, 4, 5. Muista: range(alku, loppu) loppuu ennen loppu-arvoa.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 1:</strong> <code>for i in range(___, ___):</code> — alku ja loppu:
                    <div class="step-line">1, 6</div>
                    <code>for i in range(1, 6):</code> — aloittaa 1:stä, loppuu ennen 6:ta
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 125: for + merkkijono    // ─────────────────────────────────────
    {
    id: 195,


        legacyId: 150,
        section: "silmukat",
        title: "Merkkijonon kirjaimet 🔡",
        slug: "silmukat-merkkijonon-kirjaimet",
        icon: "🔡",
        description: "for-silmukka toimii myös merkkijonoilla — käy kirjain kerrallaan!",
        theory: `
            <h4>📚 for + merkkijono</h4>
            <p>for käy merkkijonon läpi kirjain kerrallaan:</p>
            <pre><code>for kirjain in "Moi":
    print(kirjain)

# Tulostaa:
# M
# o
# i</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi tulostaa sanan 'Koo' kirjain kerrallaan.",
        starterCode: `sana = "Koo"\n\nfor kirjain ___ sana:\n    print(kirjain)`,
        hint: "Mikä sana yhdistää muuttujan ja kokoelman for-silmukassa?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 &&
                   lines[0].trim() === "K" &&
                   lines[1].trim() === "o" &&
                   lines[2].trim() === "o";
        },
        successMsg: "Hienoa! in yhdistää — for käy merkkijonon läpi kirjain kerrallaan! 🔡",
        failMsg: "Tuloksen pitäisi olla K, o, o (kolme riviä). Mikä sana puuttuu for ja sana väliltä?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>for kirjain ___ sana:</code> — yhdistyssana:
                    <div class="step-line">in</div>
                    <code>for kirjain in sana:</code> — käy jokaisen kirjaimen läpi
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 126: for + summa (akkumulaattori)    // ─────────────────────────────────────
    {
    id: 196,


        legacyId: 151,
        section: "silmukat",
        title: "Lukujen summa ➕",
        slug: "silmukat-lukujen-summa",
        icon: "➕",
        description: "Laske yhteen listan luvut for-silmukalla — akkumulaattori-malli!",
        theory: `
            <h4>📚 Akkumulaattori</h4>
            <p>Yleinen malli: aloita nollasta ja lisää joka kierroksella:</p>
            <pre><code>luvut = [10, 20, 30]
summa = 0

for luku in luvut:
    summa = summa + luku

print(summa)  # 60</code></pre>
            <p><code>summa</code> kasvaa joka kierroksella — se on <strong>akkumulaattori</strong>.</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi laskee hintojen summan.",
        starterCode: `hinnat = [5, 15, 25]\nsumma = 0\n\nfor hinta in hinnat:\n    summa = summa ___ hinta\n\nprint(summa)`,
        hint: "Summa kasvaa joka kierroksella — mikä operaattori lisää?",
        validate: function(output) {
            return output.trim() === "45";
        },
        successMsg: "Oikein! + lisää joka kierroksella: 0+5=5, 5+15=20, 20+25=45! ➕",
        failMsg: "Tuloksen pitäisi olla 45. Mikä operaattori lisää hinnan summaan?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 5:</strong> <code>summa = summa ___ hinta</code> — lisää hinta summaan:
                    <div class="step-line">+</div>
                    <code>summa = summa + hinta</code> — joka kierros lisää yhden hinnan
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 127: while-silmukka perusmuoto    // ─────────────────────────────────────
    {
    id: 197,


        legacyId: 152,
        section: "silmukat",
        title: "Ensimmäinen while-silmukka 🔁",
        slug: "silmukat-ensimmainen-while-silmukka",
        icon: "🔁",
        description: "while toistaa niin kauan kuin ehto on totta — opi perusmuoto!",
        theory: `
            <h4>📚 while-silmukka</h4>
            <p><strong>while</strong> toistaa koodia niin kauan kuin ehto pätee:</p>
            <pre><code>laskuri = 1

while laskuri <= 3:
    print(laskuri)
    laskuri = laskuri + 1

# Tulostaa: 1, 2, 3</code></pre>
            <p>⚠️ Muista kasvattaa laskuria — muuten silmukka pyörii ikuisesti!</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi tulostaa numerot 1, 2, 3, 4, 5.",
        starterCode: `laskuri = 1\n\nwhile laskuri ___ 5:\n    print(laskuri)\n    laskuri = laskuri + 1`,
        hint: "Silmukka pyörii niin kauan kun laskuri on 5 tai vähemmän. Mikä vertailuoperaattori?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 5 &&
                   lines[0].trim() === "1" &&
                   lines[1].trim() === "2" &&
                   lines[2].trim() === "3" &&
                   lines[3].trim() === "4" &&
                   lines[4].trim() === "5";
        },
        successMsg: "Oikein! <= pitää silmukan pyörimässä kunnes laskuri ohittaa 5:n! 🔁",
        failMsg: "Tuloksen pitäisi olla 1, 2, 3, 4, 5. Mikä vertailu sallii myös 5:n?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>while laskuri ___ 5:</code> — vertailuoperaattori:
                    <div class="step-line"><=</div>
                    <code>while laskuri <= 5:</code> — pyörii kun laskuri on 1, 2, 3, 4 tai 5
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 128: while + käyttäjäsyöte -simulaatio    // ─────────────────────────────────────
    {
    id: 198,


        legacyId: 153,
        section: "silmukat",
        title: "Lähtölaskenta ⏳",
        slug: "silmukat-lahtolaskenta",
        icon: "⏳",
        description: "Rakenna lähtölaskenta while-silmukalla — laskuri pienenee!",
        theory: `
            <h4>📚 Laskuri alaspäin</h4>
            <p>while voi laskea myös alaspäin:</p>
            <pre><code>sekunti = 3

while sekunti > 0:
    print(sekunti)
    sekunti = sekunti - 1

print("Mene! 🚀")

# Tulostaa: 3, 2, 1, Mene! 🚀</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi laskee 5:stä 1:een ja sanoo 'Laukaus!'.",
        starterCode: `laskuri = 5\n\nwhile laskuri ___ 0:\n    print(laskuri)\n    laskuri = laskuri - 1\n\nprint("Laukaus! 🚀")`,
        hint: "Silmukka pyörii niin kauan kun laskuri on SUUREMPI kuin nolla.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 6 &&
                   lines[0].trim() === "5" &&
                   lines[1].trim() === "4" &&
                   lines[2].trim() === "3" &&
                   lines[3].trim() === "2" &&
                   lines[4].trim() === "1" &&
                   lines[5].trim() === "Laukaus! 🚀";
        },
        successMsg: "Oikein! > pitää silmukan käynnissä niin kauan kun laskuri ei ole 0! ⏳",
        failMsg: "Tuloksen pitäisi olla 5, 4, 3, 2, 1, Laukaus! 🚀. Mikä vertailu = suurempi kuin?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>while laskuri ___ 0:</code> — vertailu:
                    <div class="step-line">></div>
                    <code>while laskuri > 0:</code> — pyörii kun laskuri on 5, 4, 3, 2, 1
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 129: for + if yhdistelmä    // ─────────────────────────────────────
    {
    id: 199,


        legacyId: 154,
        section: "silmukat",
        title: "Suodata silmukassa 🔍",
        slug: "silmukat-suodata-silmukassa",
        icon: "🔍",
        description: "Yhdistä for ja if — tulosta vain tietyt alkiot!",
        theory: `
            <h4>📚 for + if</h4>
            <p>Silmukan sisällä voi olla ehtolause:</p>
            <pre><code>luvut = [3, 7, 2, 9, 1, 8]

for luku in luvut:
    if luku > 5:
        print(luku)

# Tulostaa: 7, 9, 8 (vain isot luvut)</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi tulostaa vain parilliset luvut.",
        starterCode: `luvut = [1, 2, 3, 4, 5, 6]\n\nfor luku in luvut:\n    if luku % 2 ___ 0:\n        print(luku)`,
        hint: "Parillinen luku jakautuu 2:lla tasan — jakojäännös on nolla. Mikä vertailu?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 &&
                   lines[0].trim() === "2" &&
                   lines[1].trim() === "4" &&
                   lines[2].trim() === "6";
        },
        successMsg: "Oikein! == tarkistaa jakojäännöksen — parilliset löytyvät % 2 == 0! 🔍",
        failMsg: "Tuloksen pitäisi olla 2, 4, 6. Parillisella luvulla luku % 2 on yhtä kuin nolla.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 4:</strong> <code>if luku % 2 ___ 0:</code> — vertaa jakojäännöstä:
                    <div class="step-line">==</div>
                    <code>if luku % 2 == 0:</code> — parillisella luvulla jakojäännös on 0
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 130: for + laskuri    // ─────────────────────────────────────
    {
    id: 200,


        legacyId: 155,
        section: "silmukat",
        title: "Laske alkiot 🧮",
        slug: "silmukat-laske-alkiot",
        icon: "🧮",
        description: "Laske montako alkiota täyttää ehdon — laskuri-malli!",
        theory: `
            <h4>📚 Laskuri-malli</h4>
            <p>Samankaltainen kuin akkumulaattori, mutta laskee <strong>kappalemäärän</strong>:</p>
            <pre><code>sanat = ["kissa", "koira", "kani", "lehmä"]
k_sanat = 0

for sana in sanat:
    if sana[0] == "k":
        k_sanat = k_sanat + 1

print(k_sanat)  # 3 (kissa, koira, kani)</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi laskee montako arvosanaa on yli 7.",
        starterCode: `arvosanat = [8, 5, 9, 6, 10, 7]\nhyvät = 0\n\nfor arvosana in arvosanat:\n    if arvosana > 7:\n        hyvät = hyvät + ___\n\nprint(hyvät)`,
        hint: "Jokainen hyvä arvosana lisää laskuriin yhden. Mikä luku?",
        validate: function(output) {
            return output.trim() === "3";
        },
        successMsg: "Oikein! Jokainen hyvä arvosana kasvattaa laskuria yhdellä — 8, 9, 10 = 3! 🧮",
        failMsg: "Tuloksen pitäisi olla 3. Laskuriin lisätään yksi joka kerta kun ehto on totta.",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 6:</strong> <code>hyvät = hyvät + ___</code> — lisää yksi:
                    <div class="step-line">1</div>
                    <code>hyvät = hyvät + 1</code> — joka hyvä arvosana kasvattaa laskuria
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 131: range() askelväli    // ─────────────────────────────────────
    {
    id: 201,


        legacyId: 156,
        section: "silmukat",
        title: "range() askelväli 🦶",
        slug: "silmukat-range-askelvali",
        icon: "🦶",
        description: "range() voi hyppiä — opi kolmas parametri eli askelväli!",
        theory: `
            <h4>📚 range(alku, loppu, askel)</h4>
            <p>Kolmas parametri määrää hyppyvälin:</p>
            <pre><code>for i in range(0, 10, 2):
    print(i)

# Tulostaa: 0, 2, 4, 6, 8
# Hyppii kakkosella!</code></pre>
            <p>Voit myös mennä taaksepäin: <code>range(10, 0, -1)</code> → 10, 9, 8, ... 1</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi tulostaa parilliset luvut 2, 4, 6, 8, 10.",
        starterCode: `for i in range(2, 11, ___):\n    print(i)`,
        hint: "Parillisista toiseen on aina kaksi askelta: 2→4→6→8→10.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 5 &&
                   lines[0].trim() === "2" &&
                   lines[1].trim() === "4" &&
                   lines[2].trim() === "6" &&
                   lines[3].trim() === "8" &&
                   lines[4].trim() === "10";
        },
        successMsg: "Oikein! Askelväli 2 hyppii parillisesta toiseen! 🦶",
        failMsg: "Tuloksen pitäisi olla 2, 4, 6, 8, 10. Mikä askelväli hyppii parillisten välillä?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 1:</strong> <code>for i in range(2, 11, ___):</code> — askelväli:
                    <div class="step-line">2</div>
                    <code>for i in range(2, 11, 2):</code> — aloittaa 2:sta, hyppii 2:lla
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 132: break — pysäytä silmukka    // ─────────────────────────────────────
    {
    id: 202,


        legacyId: 157,
        section: "silmukat",
        title: "break — pysäytä! ⛔",
        slug: "silmukat-break-pysayta",
        icon: "⛔",
        description: "break pysäyttää silmukan heti — opi poistumaan kesken kaiken!",
        theory: `
            <h4>📚 break</h4>
            <p><strong>break</strong> lopettaa silmukan välittömästi:</p>
            <pre><code>for luku in [1, 2, 3, 4, 5]:
    if luku == 3:
        break
    print(luku)

# Tulostaa: 1, 2
# (3:ssa pysähtyy, ei tulosta 3:a)</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että silmukka pysähtyy kun löytyy 'banaani'.",
        starterCode: `hedelmät = ["omena", "päärynä", "banaani", "kirsikka"]\n\nfor hedelmä in hedelmät:\n    if hedelmä == "banaani":\n        ___\n    print(hedelmä)`,
        hint: "Mikä komento lopettaa silmukan kesken kaiken?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 2 &&
                   lines[0].trim() === "omena" &&
                   lines[1].trim() === "päärynä";
        },
        successMsg: "Oikein! break pysäyttää silmukan — banaani ja kirsikka eivät tulostuneet! ⛔",
        failMsg: "Tuloksen pitäisi olla vain: omena, päärynä. Mikä komento pysäyttää silmukan?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 5:</strong> <code>___</code> — pysäytä silmukka:
                    <div class="step-line">break</div>
                    <code>break</code> — lopettaa for-silmukan heti
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 133: continue — hyppää yli    // ─────────────────────────────────────
    {
    id: 203,


        legacyId: 158,
        section: "silmukat",
        title: "continue — hyppää yli ⏭️",
        slug: "silmukat-continue-hyppaa-yli",
        icon: "⏭️",
        description: "continue hyppää yhden kierroksen yli — muut jatkuvat normaalisti!",
        theory: `
            <h4>📚 continue</h4>
            <p><strong>continue</strong> hyppää seuraavaan kierrokseen:</p>
            <pre><code>for i in range(1, 6):
    if i == 3:
        continue
    print(i)

# Tulostaa: 1, 2, 4, 5
# (3 hypättiin yli)</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi hyppää negatiivisten lukujen yli.",
        starterCode: `luvut = [3, -1, 5, -2, 8]\n\nfor luku in luvut:\n    if luku < 0:\n        ___\n    print(luku)`,
        hint: "Mikä komento hyppää seuraavaan kierrokseen ilman lopettamista?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 &&
                   lines[0].trim() === "3" &&
                   lines[1].trim() === "5" &&
                   lines[2].trim() === "8";
        },
        successMsg: "Oikein! continue hyppäsi negatiivisten yli — vain positiiviset tulostui! ⏭️",
        failMsg: "Tuloksen pitäisi olla 3, 5, 8. Mikä komento hyppää yhden kierroksen yli?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 5:</strong> <code>___</code> — hyppää yli:
                    <div class="step-line">continue</div>
                    <code>continue</code> — siirtyy seuraavaan kierrokseen, ei tulosta
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 134: enumerate()    // ─────────────────────────────────────
    {
    id: 204,


        legacyId: 159,
        section: "silmukat",
        title: "enumerate() — indeksi mukaan 📋",
        slug: "silmukat-enumerate-indeksi-mukaan",
        icon: "📋",
        description: "enumerate() antaa sekä indeksin että arvon — opi numeroidut listat!",
        theory: `
            <h4>📚 enumerate()</h4>
            <p><code>enumerate()</code> antaa joka kierroksella järjestysnumeron:</p>
            <pre><code>nimet = ["Anna", "Ben", "Cecilia"]

for i, nimi in enumerate(nimet):
    print(f"{i}: {nimi}")

# 0: Anna
# 1: Ben
# 2: Cecilia</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi tulostaa numeroidun listan.",
        starterCode: `värit = ["punainen", "vihreä", "sininen"]\n\nfor i, väri in ___(värit):\n    print(f"{i + 1}. {väri}")`,
        hint: "Mikä funktio antaa indeksin ja arvon samaan aikaan?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 &&
                   lines[0].trim() === "1. punainen" &&
                   lines[1].trim() === "2. vihreä" &&
                   lines[2].trim() === "3. sininen";
        },
        successMsg: "Oikein! enumerate() antaa indeksin — i+1 tekee numerot 1, 2, 3! 📋",
        failMsg: "Tuloksen pitäisi olla: 1. punainen, 2. vihreä, 3. sininen. Mikä funktio antaa indeksin?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>for i, väri in ___(värit):</code> — indeksi+arvo:
                    <div class="step-line">enumerate</div>
                    <code>for i, väri in enumerate(värit):</code> — i=0,1,2 ja väri=arvo
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 135: for + sanakirja    // ─────────────────────────────────────
    {
    id: 205,


        legacyId: 160,
        section: "silmukat",
        title: "Sanakirja silmukassa 📖",
        slug: "silmukat-sanakirja-silmukassa",
        icon: "📖",
        description: "Käy sanakirja läpi .items()-metodilla — saat avaimen ja arvon!",
        theory: `
            <h4>📚 for + sanakirja</h4>
            <p><code>.items()</code> antaa avain-arvo-parit:</p>
            <pre><code>pisteet = {"Anna": 85, "Ben": 92}

for nimi, piste in pisteet.items():
    print(f"{nimi}: {piste}")

# Anna: 85
# Ben: 92</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi tulostaa jokaisen hedelmän ja sen hinnan.",
        starterCode: `hinnat = {"omena": 2, "banaani": 1, "kirsikka": 5}\n\nfor hedelmä, hinta in hinnat.___():\n    print(f"{hedelmä} maksaa {hinta}€")`,
        hint: "Mikä sanakirjan metodi antaa sekä avaimen että arvon?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 &&
                   lines[0].includes("omena") && lines[0].includes("2€") &&
                   lines[1].includes("banaani") && lines[1].includes("1€") &&
                   lines[2].includes("kirsikka") && lines[2].includes("5€");
        },
        successMsg: "Oikein! .items() antaa avain-arvo-parit — hedelmät ja hinnat! 📖",
        failMsg: "Tuloksen pitäisi näyttää hedelmät ja hinnat. Mikä metodi antaa parit?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>hinnat.___()</code> — parit:
                    <div class="step-line">items</div>
                    <code>hinnat.items()</code> — palauttaa (avain, arvo) -parit
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 136: Uuden listan rakentaminen    // ─────────────────────────────────────
    {
    id: 206,


        legacyId: 161,
        section: "silmukat",
        title: "Rakenna uusi lista 🏗️",
        slug: "silmukat-rakenna-uusi-lista",
        icon: "🏗️",
        description: "Luo uusi lista for-silmukalla — append() lisää alkion!",
        theory: `
            <h4>📚 Lista + for + append()</h4>
            <p>Uusi lista rakennetaan lisäämällä alkioita silmukassa:</p>
            <pre><code>luvut = [1, 2, 3, 4, 5]
tuplat = []

for luku in luvut:
    tuplat.append(luku * 2)

print(tuplat)  # [2, 4, 6, 8, 10]</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi kerää nimet isoilla kirjaimilla uuteen listaan.",
        starterCode: `nimet = ["anna", "ben", "cecilia"]\nisot = []\n\nfor nimi in nimet:\n    isot.___(nimi.upper())\n\nprint(isot)`,
        hint: "Mikä listan metodi lisää yhden alkion listan loppuun?",
        validate: function(output) {
            return output.trim() === "['ANNA', 'BEN', 'CECILIA']";
        },
        successMsg: "Oikein! append() lisää alkion — uusi lista syntyi silmukassa! 🏗️",
        failMsg: "Tuloksen pitäisi olla ['ANNA', 'BEN', 'CECILIA']. Mikä metodi lisää listaan?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 5:</strong> <code>isot.___(nimi.upper())</code> — lisää listaan:
                    <div class="step-line">append</div>
                    <code>isot.append(nimi.upper())</code> — lisää ison version listaan
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 137: Sisäkkäiset silmukat    // ─────────────────────────────────────
    {
    id: 207,


        legacyId: 162,
        section: "silmukat",
        title: "Sisäkkäiset silmukat 🔄🔄",
        slug: "silmukat-sisakkaiset-silmukat",
        icon: "🔄🔄",
        description: "Silmukka silmukan sisällä — opi kertotaulu-malli!",
        theory: `
            <h4>📚 Sisäkkäiset for-silmukat</h4>
            <p>Silmukan sisällä voi olla toinen silmukka:</p>
            <pre><code>for rivi in range(1, 3):
    for sarake in range(1, 3):
        print(f"{rivi}x{sarake}={rivi*sarake}")

# 1x1=1
# 1x2=2
# 2x1=2
# 2x2=4</code></pre>
            <p>Ulompi pyörii kerran, sisempi pyörii monta kertaa per ulomman kierros.</p>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi tulostaa 3:n kertotaulun (3x1=3, 3x2=6, 3x3=9).",
        starterCode: `luku = 3\n\nfor i in range(1, ___):\n    print(f"{luku}x{i}={luku*i}")`,
        hint: "Haluat tulostaa i = 1, 2, 3. Mihin range() loppuu (muista: loppu ei ole mukana)?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 &&
                   lines[0].trim() === "3x1=3" &&
                   lines[1].trim() === "3x2=6" &&
                   lines[2].trim() === "3x3=9";
        },
        successMsg: "Oikein! range(1, 4) antaa 1, 2, 3 — kertotaulu valmis! 🔄🔄",
        failMsg: "Tuloksen pitäisi olla 3x1=3, 3x2=6, 3x3=9. range(1, ?) — muista loppu ei ole mukana!",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>for i in range(1, ___):</code> — loppu:
                    <div class="step-line">4</div>
                    <code>for i in range(1, 4):</code> — antaa 1, 2, 3 (4 ei mukana)
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 138: List comprehension    // ─────────────────────────────────────
    {
    id: 208,


        legacyId: 163,
        section: "silmukat",
        title: "List comprehension 🧬",
        slug: "silmukat-list-comprehension",
        icon: "🧬",
        description: "Pythonin tehokkain silmukkatemppu — lista yhdellä rivillä!",
        theory: `
            <h4>📚 List comprehension</h4>
            <p>Python voi luoda listan yhdellä rivillä:</p>
            <pre><code># Perinteinen tapa:
neliöt = []
for x in range(5):
    neliöt.append(x ** 2)

# List comprehension:
neliöt = [x ** 2 for x in range(5)]

print(neliöt)  # [0, 1, 4, 9, 16]</code></pre>
            <p>Kaava: <code>[lauseke for muuttuja in kokoelma]</code></p>
        `,
        challenge: "Korvaa <code>___</code> niin, että list comprehension luo listan kuutioista [1, 8, 27, 64].",
        starterCode: `kuutiot = [x ___ 3 for x in range(1, 5)]\n\nprint(kuutiot)`,
        hint: "Kuutio = luku potenssiin 3. Mikä operaattori on potenssi Pythonissa?",
        validate: function(output) {
            return output.trim() === "[1, 8, 27, 64]";
        },
        successMsg: "Oikein! ** on potenssi — x**3 tekee kuutiot yhdellä rivillä! 🧬",
        failMsg: "Tuloksen pitäisi olla [1, 8, 27, 64]. Mikä operaattori nostaa potenssiin?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 1:</strong> <code>x ___ 3</code> — potenssi:
                    <div class="step-line">**</div>
                    <code>x ** 3</code> — 1³=1, 2³=8, 3³=27, 4³=64
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 139: List comprehension + ehto    // ─────────────────────────────────────
    {
    id: 209,


        legacyId: 164,
        section: "silmukat",
        title: "Comprehension + if 🧬🔍",
        slug: "silmukat-comprehension-if",
        icon: "🧬🔍",
        description: "List comprehension voi suodattaa — lisää if loppuun!",
        theory: `
            <h4>📚 Comprehension + ehto</h4>
            <p>Lisää <code>if</code> suodattamaan:</p>
            <pre><code>luvut = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

parilliset = [x for x in luvut if x % 2 == 0]

print(parilliset)  # [2, 4, 6, 8, 10]</code></pre>
            <p>Kaava: <code>[lauseke for muuttuja in kokoelma if ehto]</code></p>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi kerää vain pitkät nimet (yli 4 kirjainta).",
        starterCode: `nimet = ["Anna", "Bo", "Cecilia", "Dan", "Eemeli"]\n\npitkät = [nimi for nimi in nimet if ___(nimi) > 4]\n\nprint(pitkät)`,
        hint: "Mikä funktio kertoo merkkijonon pituuden?",
        validate: function(output) {
            return output.trim() === "['Cecilia', 'Eemeli']";
        },
        successMsg: "Oikein! len() mittaa pituuden — vain Cecilia ja Eemeli ovat yli 4 kirjainta! 🧬🔍",
        failMsg: "Tuloksen pitäisi olla ['Cecilia', 'Eemeli']. Mikä funktio kertoo pituuden?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 3:</strong> <code>if ___(nimi) > 4</code> — pituusfunktio:
                    <div class="step-line">len</div>
                    <code>if len(nimi) > 4</code> — Cecilia(7) ja Eemeli(6) ovat yli 4
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 140: zip() — yhdistä listat    // ─────────────────────────────────────
    {
    id: 210,


        legacyId: 165,
        section: "silmukat",
        title: "zip() — yhdistä listat 🤐",
        slug: "silmukat-zip-yhdista-listat",
        icon: "🤐",
        description: "zip() yhdistää kaksi listaa pareiksi — opi rinnakkain käyminen!",
        theory: `
            <h4>📚 zip()</h4>
            <p><code>zip()</code> yhdistää kaksi listaa alkio kerrallaan:</p>
            <pre><code>nimet = ["Anna", "Ben"]
iät = [25, 30]

for nimi, ikä in zip(nimet, iät):
    print(f"{nimi} on {ikä}v")

# Anna on 25v
# Ben on 30v</code></pre>
        `,
        challenge: "Korvaa <code>___</code> niin, että koodi yhdistää tuotteet ja hinnat.",
        starterCode: `tuotteet = ["kahvi", "tee", "mehu"]\nhinnat = [3, 2, 4]\n\nfor tuote, hinta in ___(tuotteet, hinnat):\n    print(f"{tuote}: {hinta}€")`,
        hint: "Mikä funktio yhdistää kaksi listaa pareiksi?",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 3 &&
                   lines[0].trim() === "kahvi: 3€" &&
                   lines[1].trim() === "tee: 2€" &&
                   lines[2].trim() === "mehu: 4€";
        },
        successMsg: "Oikein! zip() yhdistää listat — tuote ja hinta kulkevat käsi kädessä! 🤐",
        failMsg: "Tuloksen pitäisi olla kahvi: 3€, tee: 2€, mehu: 4€. Mikä funktio yhdistää?",
        detailedHelp: `
            <h4>Askel askeleelta</h4>
            <ol>
                <li><strong>Rivi 4:</strong> <code>___(tuotteet, hinnat)</code> — yhdistäjä:
                    <div class="step-line">zip</div>
                    <code>zip(tuotteet, hinnat)</code> — (kahvi,3), (tee,2), (mehu,4)
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 141: Silmukkamestari 🏆    // ─────────────────────────────────────
    {
    id: 211,


        legacyId: 166,
        section: "silmukat",
        title: "Silmukkamestari 🏆",
        slug: "silmukat-silmukkamestari",
        icon: "🏆",
        description: "Viimeinen haaste — yhdistä kaikki silmukkataidot yhteen tehtävään!",
        theory: `
            <h4>📚 Kaikki silmukkataidot</h4>
            <p>Olet oppinut for, while, range, break, continue, enumerate, zip, ja list comprehension!</p>
            <pre><code># Esimerkki: analysoi data silmukalla
data = [85, 92, 67, 45, 91, 78]

hyväksytyt = [p for p in data if p >= 60]
hylätyt = len(data) - len(hyväksytyt)

for i, piste in enumerate(hyväksytyt):
    print(f"{i+1}. {piste} ✓")

print(f"Hylättyjä: {hylätyt}")
</code></pre>
        `,
        challenge: "Korvaa neljä <code>___</code>-kohtaa ja rakenna tulos: laske keskiarvo, suodata hyvät, ja tulosta yhteenveto.",
        starterCode: `pisteet = [95, 42, 78, 88, 55, 91]\n\nsumma = 0\nfor piste in pisteet:\n    summa = summa + piste\nkeskiarvo = summa / ___(pisteet)\n\nhyvät = [p ___ p in pisteet if p >= 70]\n\nprint(f"Keskiarvo: {keskiarvo}")\nprint(f"Hyviä: {___(hyvät)}")\n\nfor i, piste in ___(hyvät):\n    print(f"  {i+1}. {piste}")`,
        hint: "1) len() laskee listan pituuden, 2) for ... in = list comprehension, 3) len() uudestaan, 4) enumerate() antaa indeksin.",
        validate: function(output) {
            const lines = output.trim().split('\n');
            return lines.length === 6 &&
                   lines[0].includes("Keskiarvo:") && lines[0].includes("74") &&
                   lines[1].trim() === "Hyviä: 4" &&
                   lines[2].includes("1.") && lines[2].includes("95") &&
                   lines[3].includes("2.") && lines[3].includes("78") &&
                   lines[4].includes("3.") && lines[4].includes("88") &&
                   lines[5].includes("4.") && lines[5].includes("91");
        },
        successMsg: "MESTARI! 🏆 Neljä osumaa — for, list comprehension, len, enumerate — kaikki hallussa!",
        failMsg: "Tarvitaan 6 riviä: keskiarvo, hyvien määrä ja 4 hyvää pistemäärää. Lue vihje!",
        detailedHelp: `
            <h4>Askel askeleelta — Silmukkamestari</h4>
            <p>Neljä <code>___</code>-kohtaa — jokaisessa eri silmukkataito!</p>
            <ol>
                <li><strong>Rivi 6:</strong> <code>summa / ___(pisteet)</code> — listan pituus:
                    <div class="step-line">len</div>
                    <code>summa / len(pisteet)</code> — 449 / 6 ≈ 74.83
                </li>
                <li><strong>Rivi 8:</strong> <code>[p ___ p in pisteet if p >= 70]</code> — comprehension:
                    <div class="step-line">for</div>
                    <code>[p for p in pisteet if p >= 70]</code> — suodattaa hyvät
                </li>
                <li><strong>Rivi 11:</strong> <code>___(hyvät)</code> — montako:
                    <div class="step-line">len</div>
                    <code>len(hyvät)</code> — 4 hyvää pistemäärää
                </li>
                <li><strong>Rivi 13:</strong> <code>for i, piste in ___(hyvät):</code> — indeksi mukaan:
                    <div class="step-line">enumerate</div>
                    <code>for i, piste in enumerate(hyvät):</code> — numeroi tulokset
                </li>
            </ol>
        `,
        maxStars: 3
    },

    // ═══════════════════════════════════════
    //  FUNKTIOT 2 - Syventävä (20 tehtävää)
    // ═══════════════════════════════════════

    // ─────────────────────────────────────
    // TEHTÄVÄ 142: Funktiot 2 Intro: Neliö 🔲    // ─────────────────────────────────────
    {
    id: 212,

        section: "funktiot2",
        title: "Funktiot 2 Intro: Neliö 🔲",
        slug: "funktiot2-funktiot-2-intro-nelio",
        icon: "🔲",
        description: "Lasketaan luvun neliö (luku kertaa itsensä).",
        theory: `<h4>📚 Funktiot kertauksena</h4><p>Funktio ottaa parametrin, tekee sille jotain ja palauttaa tuloksen <code>return</code>-komennolla.</p>`,
        challenge: "Tee funktio <code>nelio(x)</code>, joka palauttaa x:n neliön (x * x).",
        starterCode: `def nelio(x):
    # Palauta x kertaa x
    

print(nelio(4))  # Pitäisi tulostaa 16
print(nelio(5))  # Pitäisi tulostaa 25`,
        hint: "Käytä return-komentoa ja kerro x itsellään.",
        validate: function(output) { return output.includes('16') && output.includes('25'); },
        successMsg: "Hienoa! 🔲 Neliön laskeminen onnistui.",
        failMsg: "Varmista että käytät return-komentoa.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 143: Onko parillinen? ⚖️    // ─────────────────────────────────────
    {
    id: 213,

        section: "funktiot2",
        title: "Onko parillinen? ⚖️",
        slug: "funktiot2-onko-parillinen",
        icon: "⚖️",
        description: "Tarkistetaan, onko luku parillinen.",
        theory: `<h4>📚 Boolean-palautus</h4><p>Funktio voi palauttaa <code>True</code> tai <code>False</code>. Parillisuuden voi tarkistaa jakojäännöksellä: <code>x % 2 == 0</code>.</p>`,
        challenge: "Täydennä <code>on_parillinen(luku)</code> palauttamaan True, jos luku on parillinen, muuten False.",
        starterCode: `def on_parillinen(luku):
    # Täydennä ehto
    if luku % 2 == 0:
        return 
    else:
        return 

print(on_parillinen(4))
print(on_parillinen(7))`,
        hint: "Palauta True jos luku on parillinen, muuten False.",
        validate: function(output) { return output.includes('True') && output.includes('False'); },
        successMsg: "Aivan oikein! ⚖️",
        failMsg: "Pitäisi tulostua True ja False.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 144: Lämpömittari 🌡️    // ─────────────────────────────────────
    {
    id: 214,

        section: "funktiot2",
        title: "Lämpömittari 🌡️",
        slug: "funktiot2-lampomittari",
        icon: "🌡️",
        description: "Muutetaan Celsius-asteet Fahrenheit-asteiksi.",
        theory: `<h4>📚 Muunnosfunktio</h4><p>Kaava on: <code>(C * 9/5) + 32</code>.</p>`,
        challenge: "Tee funktio <code>celsius_fahreiksi(c)</code>, joka muuttaa lämpötilan ja palauttaa sen.",
        starterCode: `def celsius_fahreiksi(c):
    # Laske fahrenheit ja palauta se
    

print(celsius_fahreiksi(10))  # Pitäisi olla 50.0
print(celsius_fahreiksi(0))   # Pitäisi olla 32.0`,
        hint: "return (c * 9/5) + 32",
        validate: function(output) { return output.includes('50.0') && output.includes('32.0'); },
        successMsg: "Loistavaa! 🌡️ Lämpötila muuttui onnistuneesti.",
        failMsg: "Käytä kaavaa (c * 9/5) + 32.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 145: Suurin kolmesta 🥇    // ─────────────────────────────────────
    {
    id: 215,

        section: "funktiot2",
        title: "Suurin kolmesta 🥇",
        slug: "funktiot2-suurin-kolmesta",
        icon: "🥇",
        description: "Funktio voi ottaa monta parametria. Etsitään suurin kolmesta luvusta.",
        theory: `<h4>📚 Monta parametria</h4><p>Parametreja erotetaan pilkulla. Pythonissa on valmis <code>max()</code> funktio, mutta tehdään se nyt itse <code>if</code>/<code>elif</code>-lauseilla!</p>`,
        challenge: "Kirjoita funktio <code>suurin(a, b, c)</code>, joka palauttaa suurimman arvon.",
        starterCode: `def suurin(a, b, c):
    if a >= b and a >= c:
        return a
    elif :
        return 
    else:
        return 

print(suurin(3, 8, 5)) # Pitäisi olla 8`,
        hint: "Toinen ehto on elif b >= a and b >= c: return b. Muuten palauta c.",
        validate: function(output) { return output.includes('8'); },
        successMsg: "Hienosti päätelty! 🥇",
        failMsg: "Tarkista elif-ehto ja return-arvot.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 146: Listan kertoma ✖️    // ─────────────────────────────────────
    {
    id: 216,

        section: "funktiot2",
        title: "Listan kertoma ✖️",
        slug: "funktiot2-listan-kertoma",
        icon: "✖️",
        description: "Funktio, joka ottaa listan parametrina ja kertoo sen alkiot keskenään.",
        theory: `<h4>📚 Lista parametrina</h4><p>Voit antaa funktiolle listan ja käydä sen läpi <code>for</code>-silmukalla.</p>`,
        challenge: "Laske funktion sisällä listan kaikkien lukujen tulo.",
        starterCode: `def laske_tulo(lista):
    tulo = 1
    # Kirjoita for-silmukka tähän
    
    return tulo

print(laske_tulo([2, 3, 4])) # 2*3*4 = 24`,
        hint: "for luku in lista: tulo = tulo * luku",
        validate: function(output) { return output.includes('24'); },
        successMsg: "Oikein! ✖️ Listan läpikäynti funktiossa toimii.",
        failMsg: "Muista palauttaa tulo loopin jälkeen.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 147: Pisin sana 📏    // ─────────────────────────────────────
    {
    id: 217,

        section: "funktiot2",
        title: "Pisin sana 📏",
        slug: "funktiot2-pisin-sana",
        icon: "📏",
        description: "Etsi ja palauta listan pisin sana.",
        theory: `<h4>📚 Sanojen pituudet</h4><p>Voit käyttää <code>len(sana)</code> vertaillaksesi pituuksia.</p>`,
        challenge: "Tee funktio, joka palauttaa pisimmän sanan.",
        starterCode: `def pisin_sana(sanat):
    pisin = ""
    for sana in sanat:
        if len(sana) > len(pisin):
            pisin = sana
    return 

print(pisin_sana(["kissa", "krokotiili", "koira"]))`,
        hint: "Palauta pisin-muuttuja loopin jälkeen.",
        validate: function(output) { return output.includes('krokotiili'); },
        successMsg: "Hienoa! 📏 Löysit pisimmän sanan.",
        failMsg: "Varmista että palautat 'pisin' -muuttujan arvon.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 148: Laske vokaalit 🗣️    // ─────────────────────────────────────
    {
    id: 218,

        section: "funktiot2",
        title: "Laske vokaalit 🗣️",
        slug: "funktiot2-laske-vokaalit",
        icon: "🗣️",
        description: "Funktio, joka laskee kuinka monta vokaalia sanassa on.",
        theory: `<h4>📚 Kirjainten tarkistus</h4><p>Voit tarkistaa onko kirjain vokaali esim: <code>if kirjain in 'aeiouyäö':</code></p>`,
        challenge: "Laske ja palauta vokaalien määrä annetusta tekstistä.",
        starterCode: `def laske_vokaalit(teksti):
    maara = 0
    for kirjain in teksti:
        if kirjain in 'aeiouyäöAEIOUYÄÖ':
            maara = maara + 1
    # Palauta maara
    

print(laske_vokaalit("koodikoulu")) # 6 vokaalia`,
        hint: "return maara",
        validate: function(output) { return output.includes('6'); },
        successMsg: "Oikein! 🗣️ Vokaalien laskeminen onnistui.",
        failMsg: "Lisää return maara funktioon.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 149: Palindromi 🔄    // ─────────────────────────────────────
    {
    id: 219,

        section: "funktiot2",
        title: "Palindromi 🔄",
        slug: "funktiot2-palindromi",
        icon: "🔄",
        description: "Tarkista onko sana sama etu- ja takaperin.",
        theory: `<h4>📚 Merkkijonon kääntäminen</h4><p>Sanan saa väärinpäin koodilla <code>sana[::-1]</code>.</p>`,
        challenge: "Palauta True jos sana on palindromi, muuten False.",
        starterCode: `def on_palindromi(sana):
    # Käännä sana väärinpäin
    kaannetty = sana[::-1]
    if sana == kaannetty:
        return 
    else:
        return 

print(on_palindromi("saippuakauppias"))
print(on_palindromi("kissa"))`,
        hint: "Palauta True jos ne ovat samat, muuten False.",
        validate: function(output) { return output.includes('True') && output.includes('False'); },
        successMsg: "Mahtavaa! 🔄 Palindromi havaittu.",
        failMsg: "Pitäisi tulostua True ja False.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 150: Sensurointi 🤫    // ─────────────────────────────────────
    {
    id: 220,

        section: "funktiot2",
        title: "Sensurointi 🤫",
        slug: "funktiot2-sensurointi",
        icon: "🤫",
        description: "Funktio joka korvaa kielletyn sanan tähtimerkeillä.",
        theory: `<h4>📚 Tekstin korvaaminen</h4><p>Voit käyttää tekstille <code>.replace('paha', '***')</code> funktiota.</p>`,
        challenge: "Tee funktio, joka palauttaa sensuroidun tekstin.",
        starterCode: `def sensuroi(teksti, kielletty):
    # Käytä teksti.replace(kielletty, "***")
    siistitty = 
    return siistitty

print(sensuroi("Tämä on ruma sana!", "ruma"))`,
        hint: "siistitty = teksti.replace(kielletty, \"***\")",
        validate: function(output) { return output.includes('***'); },
        successMsg: "Siistiä kieltä! 🤫 Sensurointi toimii.",
        failMsg: "Käytä replace-metodia ja palauta uusi teksti.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 151: Laske keskiarvo 📊    // ─────────────────────────────────────
    {
    id: 221,

        section: "funktiot2",
        title: "Laske keskiarvo 📊",
        slug: "funktiot2-laske-keskiarvo",
        icon: "📊",
        description: "Lasketaan lukulistan keskiarvo turvallisesti.",
        theory: `<h4>📚 Keskiarvo</h4><p>Keskiarvo on <code>sum(lista) / len(lista)</code>. Entä jos lista on tyhjä?</p>`,
        challenge: "Jos lista on tyhjä, palauta 0. Muuten palauta keskiarvo.",
        starterCode: `def keskiarvo(luvut):
    if len(luvut) == 0:
        return 0
    return sum(luvut) / 

print(keskiarvo([4, 8, 6]))
print(keskiarvo([]))`,
        hint: "Jaa sum(luvut) listan pituudella eli len(luvut).",
        validate: function(output) { return output.includes('6.0') && output.includes('0'); },
        successMsg: "Loistavaa! 📊 Nollajako vältetty.",
        failMsg: "Jaa len(luvut)-arvolla.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 152: Palkanlaskenta 💰    // ─────────────────────────────────────
    {
    id: 222,

        section: "funktiot2",
        title: "Palkanlaskenta 💰",
        slug: "funktiot2-palkanlaskenta",
        icon: "💰",
        description: "Laske palkka: yli 8 tunnin osalta maksetaan 50% korotettu tuntipalkka.",
        theory: `<h4>📚 Matematiikkaa ja ehtoja</h4><p>Voit erotella normaalit tunnit ja ylityötuntien määrän laskukaavoilla.</p>`,
        challenge: "Täydennä ylityöpalkan laskenta.",
        starterCode: `def laske_palkka(tunnit, tuntipalkka):
    if tunnit <= 8:
        return tunnit * tuntipalkka
    else:
        normaali_palkka = 8 * tuntipalkka
        ylityotunnit = tunnit - 8
        # ylityö on 1.5 * tuntipalkka
        ylityopalkka = ylityotunnit * (tuntipalkka * 1.5)
        return normaali_palkka + 

print(laske_palkka(10, 10)) # Pitäisi olla 80 + 30 = 110.0`,
        hint: "Palauta normaali_palkka + ylityopalkka",
        validate: function(output) { return output.includes('110'); },
        successMsg: "Raha-asiat kunnossa! 💰",
        failMsg: "Varmista että summaat normaalin ja ylityöpalkan.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 153: Etsi listasta 🕵️    // ─────────────────────────────────────
    {
    id: 223,

        section: "funktiot2",
        title: "Etsi listasta 🕵️",
        slug: "funktiot2-etsi-listasta",
        icon: "🕵️",
        description: "Tee oma etsintäfunktio, joka kertoo monennessako kohdassa sana on.",
        theory: `<h4>📚 Indeksit</h4><p>Käytä <code>range(len(lista))</code> käydäksesi numerot läpi.</p>`,
        challenge: "Palauta indeksinumero missä sana on. Jos sanaa ei löydy, palauta -1.",
        starterCode: `def etsi_sana(sana, lista):
    for i in range(len(lista)):
        if lista[i] == sana:
            return 
    return -1

lista = ["kissa", "koira", "hiiri"]
print(etsi_sana("koira", lista)) # 1
print(etsi_sana("apina", lista)) # -1`,
        hint: "Palauta 'i', eli kohtanumero kun sana täsmää.",
        validate: function(output) { return output.includes('1') && output.includes('-1'); },
        successMsg: "Hyvin etsitty! 🕵️",
        failMsg: "Return i palauttaa indeksin.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 154: Poista tuplat 👯    // ─────────────────────────────────────
    {
    id: 224,

        section: "funktiot2",
        title: "Poista tuplat 👯",
        slug: "funktiot2-poista-tuplat",
        icon: "👯",
        description: "Tee funktio, joka poistaa listasta toistuvat elementit.",
        theory: `<h4>📚 Tyhjä lista avuksi</h4><p>Voit luoda uuden tyhjän listan ja lisätä siihen alkioita vain jos niitä ei vielä ole siellä: <code>if alkio not in uusi_lista:</code></p>`,
        challenge: "Täydennä funktio poistamaan tuplakappaleet.",
        starterCode: `def uniikit(lista):
    uusi = []
    for alkio in lista:
        if alkio not in uusi:
            # Lisää alkio uusi-listaan
            
    return uusi

print(uniikit([1, 2, 2, 3, 1]))`,
        hint: "Käytä uusi.append(alkio)",
        validate: function(output) { return output.includes('[1, 2, 3]'); },
        successMsg: "Mahtavaa! 👯 Nyt lista on puhdas duplikaateista.",
        failMsg: "Käytä append()-metodia listaan lisäämiseen.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 155: Sanakirja-haku 📖    // ─────────────────────────────────────
    {
    id: 225,

        section: "funktiot2",
        title: "Sanakirja-haku 📖",
        slug: "funktiot2-sanakirja-haku",
        icon: "📖",
        description: "Haetaan sanakirjasta turvallisesti tietoa.",
        theory: `<h4>📚 get() -metodi</h4><p>Jos avainta ei löydy sanakirjasta, <code>sanakirja.get(avain, 'Oletusarvo')</code> pelastaa kaatumiselta!</p>`,
        challenge: "Tee funktio joka palauttaa salasanan tai 'Ei löydy', jos käyttäjää ei ole.",
        starterCode: `def hae_salasana(kayttaja, sanakirja):
    # Käytä .get()
    return sanakirja.get(kayttaja, )

tunnukset = {"heikki": "salis123", "eliel": "koodi456"}
print(hae_salasana("eliel", tunnukset))
print(hae_salasana("pekka", tunnukset))`,
        hint: "Anna toiseksi parametriksi 'Ei löydy'",
        validate: function(output) { return output.includes('koodi456') && output.includes('Ei löydy'); },
        successMsg: "Tietoturvallista hakemista! 📖",
        failMsg: "Oletusarvoksi tulee asettaa 'Ei löydy'.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 156: Kirjainlaskuri 🔠    // ─────────────────────────────────────
    {
    id: 226,

        section: "funktiot2",
        title: "Kirjainlaskuri 🔠",
        slug: "funktiot2-kirjainlaskuri",
        icon: "🔠",
        description: "Laske kuinka monta mitäkin kirjainta sanassa on.",
        theory: `<h4>📚 Sanakirjan kasvattaminen</h4><p>Käydään kirjaimet läpi: jos kirjain on jo sanakirjassa, lisätään 1. Muuten asetetaan sen arvoksi 1.</p>`,
        challenge: "Rakenna sanakirja kirjainten määristä.",
        starterCode: `def kirjain_maarat(sana):
    maarat = {}
    for k in sana:
        if k in maarat:
            maarat[k] = maarat[k] + 1
        else:
            # Aseta ensimmäinen osuma
            maarat[k] = 
    return maarat

print(kirjain_maarat("kissa"))`,
        hint: "Aseta arvo 1 kun kirjain nähdään ensimmäisen kerran.",
        validate: function(output) { return output.includes("'k': 1") && output.includes("'s': 2"); },
        successMsg: "Upeaa tilastotiedettä! 🔠",
        failMsg: "Aseta maarat[k] = 1 else-lohkossa.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 157: Anagrammi 🔄    // ─────────────────────────────────────
    {
    id: 227,

        section: "funktiot2",
        title: "Anagrammi 🔄",
        slug: "funktiot2-anagrammi",
        icon: "🔄",
        description: "Ovatko kaksi sanaa anagrammeja (sisältävät täsmälleen samat kirjaimet)?",
        theory: `<h4>📚 Järjestäminen</h4><p>Pythonissa <code>sorted(sana)</code> palauttaa sanan kirjaimet aakkosjärjestyksessä listana.</p>`,
        challenge: "Tarkista onko sorted(sana1) sama kuin sorted(sana2).",
        starterCode: `def onko_anagrammi(sana1, sana2):
    # Järjestä molemmat sanan kirjaimet
    if sorted(sana1) == sorted(sana2):
        return True
    else:
        return 

print(onko_anagrammi("kissa", "saski"))
print(onko_anagrammi("koira", "kissa"))`,
        hint: "Palauta False, jos ne eivät täsmää.",
        validate: function(output) { return output.includes('True') && output.includes('False'); },
        successMsg: "Koodaus on hauskaa! Anagrammitesti toimii. 🔄",
        failMsg: "Palauta False else-lohkossa.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 158: Salasanan tarkistus 🔐    // ─────────────────────────────────────
    {
    id: 228,

        section: "funktiot2",
        title: "Salasanan tarkistus 🔐",
        slug: "funktiot2-salasanan-tarkistus",
        icon: "🔐",
        description: "Tarkista, onko salasana tarpeeksi pitkä (8) ja sisältääkö se numeron.",
        theory: `<h4>📚 Useita ehtoja</h4><p>Sanan pituuden voi tarkistaa <code>len()</code>-funktiolla. Numeron löytämiseen voi käyttää luuppia.</p>`,
        challenge: "Viimeistele salasanan tarkistaja.",
        starterCode: `def vahva_salasana(salis):
    if len(salis) < 8:
        return False
        
    # Etsi löytyykö numeroa
    löytyy_numero = False
    for merkki in salis:
        if merkki in '0123456789':
            löytyy_numero = True
            
    return löytyy_numero

print(vahva_salasana("heikkikoodaa")) # Liian heikko (ei numeroa)
print(vahva_salasana("koodari123")) # Vahva`,
        hint: "Koodi on itse asiassa jo melkein valmis! Suorita ja tarkista miten se toimii.",
        validate: function(output) { return output.includes('False') && output.includes('True'); },
        successMsg: "Salasanat on nyt turvattu! 🔐",
        failMsg: "Koodi toimii sellaisenaan. Paina vain Suorita!",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 159: Apufunktio 🤝    // ─────────────────────────────────────
    {
    id: 229,

        section: "funktiot2",
        title: "Apufunktio 🤝",
        slug: "funktiot2-apufunktio",
        icon: "🤝",
        description: "Käytä toista funktiota pääfunktion sisällä.",
        theory: `<h4>📚 Funktion kutsuminen funktiosta</h4><p>Voit jakaa ison ongelman pienempiin funktioihin!</p>`,
        challenge: "Käytä <code>on_parillinen</code> -funktiota laskeaksesi kuinka moni listan luvuista on parillinen.",
        starterCode: `def on_parillinen(x):
    return x % 2 == 0

def laske_parilliset(luvut):
    maara = 0
    for luku in luvut:
        if on_parillinen(luku):
            maara += 1
    return 

print(laske_parilliset([1, 2, 3, 4, 5, 6])) # 3`,
        hint: "Muista palauttaa maara loopin jälkeen.",
        validate: function(output) { return output.includes('3'); },
        successMsg: "Upeaa tiimityötä funktioilta! 🤝",
        failMsg: "Palauta maara.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 160: Alennuslaskuri 🛍️    // ─────────────────────────────────────
    {
    id: 230,

        section: "funktiot2",
        title: "Alennuslaskuri 🛍️",
        slug: "funktiot2-alennuslaskuri",
        icon: "🛍️",
        description: "Laske alennettu hinta prosenttialennuksen avulla.",
        theory: `<h4>📚 Prosenttilaskut</h4><p>Ale on esim. <code>hinta * (alennus_prosentti / 100)</code>. Uusi hinta on <code>hinta - ale</code>.</p>`,
        challenge: "Kirjoita funktio, joka palauttaa lopullisen hinnan.",
        starterCode: `def uusi_hinta(hinta, alennus_prosentti):
    # Laske paljonko lähtee pois
    ale = hinta * (alennus_prosentti / 100)
    return hinta - 

print(uusi_hinta(100, 25)) # 75.0
print(uusi_hinta(50, 10))  # 45.0`,
        hint: "Vähennä ale alkuperäisestä hinnasta.",
        validate: function(output) { return output.includes('75.0') && output.includes('45.0'); },
        successMsg: "Hyvät kaupat! 🛍️",
        failMsg: "Palauta hinta - ale.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 161: Funktiomestari: Taistelu ⚔️    // ─────────────────────────────────────
    {
    id: 231,

        section: "funktiot2",
        title: "Funktiomestari: Taistelu ⚔️",
        slug: "funktiot2-funktiomestari-taistelu",
        icon: "⚔️",
        description: "Tehdään pieni peli-simulaatio funktioilla!",
        theory: `<h4>📚 Ohjelman rakenne</h4><p>Peleissä tapahtumat kuten "hyökkää" on usein jaettu omiin funktioihinsa.</p>`,
        challenge: "Täydennä sankarin hyökkäys. Jos nopan heitto on yli 3, osuma tapahtuu!",
        starterCode: `import random

def hyokkaa(nimi, vahinko):
    noppa = random.randint(1, 6)
    if noppa > 3:
        print(f"{nimi} osuit! Vahinkoa {vahinko}!")
        return vahinko
    else:
        print(f"{nimi} hutkit ohi!")
        return 0

hp = 10
print("Hirviöllä on 10 HP.")
osuma = hyokkaa("Sankari", 5)
hp = hp - 
print(f"Hirviön HP nyt: {hp}")`,
        hint: "hp = hp - osuma",
        validate: function(output) { return output.includes('Hirviön HP'); },
        successMsg: "Mestarillista koodausta! ⚔️ Olet suorittanut kaikki Funktiot 2 -tehtävät!",
        failMsg: "Käytä osuma-muuttujaa hp:n vähentämiseen.",
        maxStars: 3
    },

    // ═══════════════════════════════════════
    //  PROMPTIKOODAUS — AI:n koodin debuggausta (10 tehtävää)
    // ═══════════════════════════════════════

    // ─────────────────────────────────────
    // TEHTÄVÄ 162: AI:n koodi: Arvauspeli (bugi) 🐛    // ─────────────────────────────────────
    {
    id: 232,
        section: "promptikoodaus",
        title: "AI:n koodi: Arvauspeli (bugi) 🐛",
        slug: "promptikoodaus-ain-koodi-arvauspeli-bugi",
        icon: "🐛",
        description: "AI kirjoitti arvauspelin, mutta se ei toimi. Löydätkö virheen?",
        theory: `<h4>📚 AI-debuggaus</h4><p>Kun promptaat tekoälyä, se tekee joskus virheitä. Tärkeä taito on <strong>lukea koodia</strong> ja löytää bugeja. Pythonissa yhtäsuuruuden vertailu on <code>==</code> (kaksi merkkiä), ei <code>=</code> (yksi merkki).</p>`,
        challenge: "AI kirjoitti tämän arvauspelin. Rivillä on virhe — korjaa <code>=</code> → <code>==</code> niin saat sen toimimaan!",
        starterCode: `# AI:n generoima koodi:
luku = 7
arvaus = 5

# Korjaa bugi tästä rivistä:
if arvaus = luku:
    print("Oikein!")
else:
    print("Väärin! Luku oli", luku)`,
        hint: "if-lauseessa vertailu vaatii KAKSI yhtäsuuruusmerkkiä: ==",
        validate: function(output) { return output.includes('Oikein!') || output.includes('Väärin'); },
        successMsg: "Löysit bugin! Tätä taitoa tarvitaan AI:n koodia debugatessa. 🐛",
        failMsg: "Korjaa = merkki kahdeksi == merkiksi if-rivillä.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 163: AI:n koodi: Kertotaulu (bugi) 🔢    // ─────────────────────────────────────
    {
    id: 233,
        section: "promptikoodaus",
        title: "AI:n koodi: Kertotaulu (bugi) 🔢",
        slug: "promptikoodaus-ain-koodi-kertotaulu-bugi",
        icon: "🔢",
        description: "AI teki kertotaulun, mutta laskut ovat pielessä. Etsi virhe!",
        theory: `<h4>📚 Silmukan debuggaaminen</h4><p>AI:n laskukaava voi olla väärin. Esim. 5 x 2 pitäisi olla 10, ei 15. Vertaa tuloksia ja mieti mikä meni pieleen.</p>`,
        challenge: "AI generoi kertotaulun printtauksen, mutta tulos on väärin. Korjaa virhe niin että saat oikean 5:n kertotaulun!",
        starterCode: `# AI:n generoima koodi:
for i in range(1, 11):
    print(f"5 x {i} = {5 * i}")
    
# Tuloksen pitäisi olla:
# 5 x 1 = 5
# 5 x 2 = 10
# ...`,
        hint: "Paina Suorita ja katso tuloksia. Onko 5x3 = 15? Toimiiko koodi oikeasti?",
        validate: function(output) { return output.includes('5 x 1 = 5') && output.includes('5 x 10 = 50'); },
        successMsg: "Tämä koodi olikin oikein! Joskus AI kirjoittaa ihan toimivaa koodia. 🔢",
        failMsg: "Koodi on valmiiksi oikein. Kokeile painaa Suorita!",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 164: AI:n koodi: Puuttuva printti 📢    // ─────────────────────────────────────
    {
    id: 234,
        section: "promptikoodaus",
        title: "AI:n koodi: Puuttuva printti 📢",
        slug: "promptikoodaus-ain-koodi-puuttuva-printti",
        icon: "📢",
        description: "AI:ta promptattiin tekemään tervehdys — se unohti tulostaa viimeisen osan.",
        theory: `<h4>📚 Täydennä AI:n tuotosta</h4><p>AI saattaa jättää koodista puuttumaan osia. Sinun pitää osata <strong>lisätä</strong> puuttuva rivi.</p>`,
        challenge: "AI teki tervehdyksen mutta unohti tulostuksen. Lisää puuttuva <code>print()</code>-rivi!",
        starterCode: `# AI:n generoima koodi:
nimi = "Koodari"
ika = 12

# Puuttuva rivi — tulosta nimi ja ikä:


print("Tervetuloa!")`,
        hint: "Lisää print(f\"Olen {nimi} ja {ika} vuotta\") ennen Tervetuloa-riviä.",
        validate: function(output) { return output.includes('Koodari') && output.includes('12') && output.includes('Tervetuloa'); },
        successMsg: "Hienoa! Täydensit AI:n koodin. 📢",
        failMsg: "Lisää print() joka tulostaa nimen ja iän.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 165: Kumpi AI on parempi? 🤔    // ─────────────────────────────────────
    {
    id: 235,
        section: "promptikoodaus",
        title: "Kumpi AI on parempi? 🤔",
        slug: "promptikoodaus-kumpi-ai-on-parempi",
        icon: "🤔",
        description: "Kaksi AI-agenttia antoi eri ratkaisun. Kumpi on parempi ja miksi?",
        theory: `<h4>📚 Koodin arviointi</h4><p>Hyvä koodi on <strong>selkeää</strong>, <strong>lyhyttä</strong> ja <strong>toimivaa</strong>. Aina pienin koodi ei ole paras.</p>`,
        challenge: "Suorita koodi. Kumpi AI ratkaisi tehtävän paremmin? Vastaa tekemällä pieni muutos: lisää kommentti <code># AI 1 parempi</code> tai <code># AI 2 parempi</code> koodin perään ja Suorita.",
        starterCode: `# Tehtävä: Palauta lista numerot 1-5

# AI 1 ratkaisu:
def lista_ai1():
    return [1, 2, 3, 4, 5]

# AI 2 ratkaisu:
def lista_ai2():
    tulos = []
    for i in range(1, 6):
        tulos.append(i)
    return tulos

print("AI 1:", lista_ai1())
print("AI 2:", lista_ai2())

# Kirjoita kommentti:
`,
        hint: "Molemmat toimivat! Mutta kumpi on selkeämpi ja lyhyempi?",
        validate: function(output) { return output.includes('AI 1:') && output.includes('AI 2:'); },
        successMsg: "Hyvää analyysiä! Kaikkea mitä AI tekee ei kannata hyväksyä sellaisenaan. 🤔",
        failMsg: "Suorita koodi sellaisenaan ja mieti kumpi ratkaisu on parempi.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 166: Laajenna AI:n koodia ⛏️    // ─────────────────────────────────────
    {
    id: 236,
        section: "promptikoodaus",
        title: "Laajenna AI:n koodia ⛏️",
        slug: "promptikoodaus-laajenna-ain-koodia",
        icon: "⛏️",
        description: "AI teki laskimen. Lisää siihen jakolasku!",
        theory: `<h4>📚 Koodin laajentaminen</h4><p>AI tekee hyviä pohjia, mutta sinun pitää osata lisätä siihen ominaisuuksia.</p>`,
        challenge: "AI teki laskimen jossa on yhteen-, vähennys- ja kertolasku. Lisää jakolasku <code>jakolasku(x, y)</code>!",
        starterCode: `# AI:n generoima laskin:
def summa(a, b):
    return a + b

def erotus(a, b):
    return a - b

def tulo(a, b):
    return a * b

# Lisää jakolasku-funktio tähän:


print("Summa:", summa(10, 5))
print("Erotus:", erotus(10, 5))
print("Tulo:", tulo(10, 5))
print("Osamäärä:", jakolasku(10, 5))`,
        hint: "def jakolasku(a, b): return a / b",
        validate: function(output) { return output.includes('Osamäärä: 2.0'); },
        successMsg: "Mahtavaa! Laajensit AI:n koodia omalla funktiolla! ⛏️",
        failMsg: "Lisää funktio jakolasku(a, b) joka palauttaa a / b.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 167: AI:n koodi: NameError 🔍    // ─────────────────────────────────────
    {
    id: 237,
        section: "promptikoodaus",
        title: "AI:n koodi: NameError 🔍",
        slug: "promptikoodaus-ain-koodi-nameerror",
        icon: "🔍",
        description: "AI generoi koodin jossa on typo. Löydä ja korjaa!",
        theory: `<h4>📚 Muuttujien kirjoitusvirheet</h4><p>Python heittää <code>NameError</code>-virheen kun yrität käyttää muuttujaa jota ei ole määritelty.</p>`,
        challenge: "AI kirjoitti tämän tervehdyksen, mutta siinä on kirjoitusvirhe muuttujassa. Korjaa se!",
        starterCode: `# AI:n generoima koodi:
nimi = "Python"
print(f"Tervetuloa, {nimmi}!")`,
        hint: "Tulostuksessa on 'nimmi' mutta muuttuja on 'nimi'. Korjaa jompikumpi.",
        validate: function(output) { return output.includes('Tervetuloa, Python!'); },
        successMsg: "Löysit typo-bugin! Yleisin virhe AI:n koodissa. 🔍",
        failMsg: "Korjaa 'nimmi' muotoon 'nimi' (tai päinvastoin).",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 168: AI:n koodi: IndentError ↔️    // ─────────────────────────────────────
    {
    id: 238,
        section: "promptikoodaus",
        title: "AI:n koodi: IndentError ↔️",
        slug: "promptikoodaus-ain-koodi-indenterror",
        icon: "↔️",
        description: "AI unohti sisennyksen. Korjaa se!",
        theory: `<h4>📚 Sisennykset</h4><p>Pythonissa if- ja for-lauseiden sisältö pitää sisentää (4 välilyöntiä). Tämä on Pythonin tapa tietää mikä kuuluu mihinkin.</p>`,
        challenge: "AI kirjoitti if-lauseen, mutta print on väärässä kohdassa. Korjaa sisennys!",
        starterCode: `# AI:n generoima koodi:
ika = 12
if ika > 10:
print("Olet yli 10-vuotias!")`,
        hint: "print-rivi pitää sisentää (lisää 4 välilyöntiä ennen printtiä).",
        validate: function(output) { return output.includes('Olet yli 10-vuotias!'); },
        successMsg: "Sisennys korjattu! Tärkeä taito Pythonissa. ↔️",
        failMsg: "Lisää 4 välilyöntiä print-rivin eteen.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 169: Promptaa ja kokeile ✍️    // ─────────────────────────────────────
    {
    id: 239,
        section: "promptikoodaus",
        title: "Promptaa ja kokeile ✍️",
        slug: "promptikoodaus-promptaa-ja-kokeile",
        icon: "✍️",
        description: "Promptaa AI:ta tekemään funktio, kopioi se tähän ja testaa!",
        theory: `<h4>📚 Promptaus</h4><p>Promptauksen salaisuus on selkeä ohje. Esim: <em>"Kirjoita Python-funktio, joka ottaa kaksi lukua ja palauttaa niiden keskiarvon."</em></p>`,
        challenge: "Avaa OpenCode ja promptaa Deepseekiä: \\\"Kirjoita Python-funktio nimeltä tervehdi_ryhmaa, joka ottaa listan nimiä ja tulostaa 'Hei [nimi]!' jokaiselle listan nimelle.\\\" Kopioi AI:n koodi tähän ja Suorita!",
        starterCode: `# Kopioi AI:n generoima koodi tähän:




# Testaa:
tervehdi_ryhmaa(["Masa", "Liisa", "Kalle"])`,
        hint: "AI:n pitäisi generoida funktio jossa on for-silmukka ja print(). Kokeile!",
        validate: function(output) { return output.includes('Hei') && output.includes('Masa'); },
        successMsg: "Promptasit AI:ta ja sain sen toimimaan! Tämä on modernia koodausta! ✍️",
        failMsg: "Promptaa OpenCodessa ja kopioi koodi tähän editoriin.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 170: AI:n koodi: Fiksaaminen 💡    // ─────────────────────────────────────
    {
    id: 240,
        section: "promptikoodaus",
        title: "AI:n koodi: Fiksaaminen 💡",
        slug: "promptikoodaus-ain-koodi-fiksaaminen",
        icon: "💡",
        description: "AI kirjoitti toimivan, mutta huonon ratkaisun. Tee siitä parempi!",
        theory: `<h4>📚 Paranna AI:n koodia</h4><p>AI:n ratkaisu toimii, mutta se ei aina ole tyylikäs. Voit aina parantaa koodia.</p>`,
        challenge: "AI teki listan kääntäjän for-silmukalla. Pythonissa on kuitenkin siistimpi tapa: <code>lista[::-1]</code>. Kokeile!",
        starterCode: `# AI:n ratkaisu (toimii, mutta pitkä):
def kaanna_for(lista):
    uusi = []
    for i in range(len(lista)-1, -1, -1):
        uusi.append(lista[i])
    return uusi

# Tee parempi versio yhdellä rivillä:
def kaanna(lista):
    return 

# Testaa molemmat:
print(kaanna_for([1, 2, 3]))
print(kaanna([1, 2, 3]))`,
        hint: "return lista[::-1]",
        validate: function(output) { return output.includes('[3, 2, 1]'); },
        successMsg: "Upeaa! Teit AI:n koodista paremman yhdellä rivillä! 💡",
        failMsg: "Käytä lista[::-1] — tämä kääntää minkä tahansa listan.",
        maxStars: 3
    },
    // ─────────────────────────────────────
    // TEHTÄVÄ 171: Promptaa ja analysoi 🧠    // ─────────────────────────────────────
    {
    id: 241,
        section: "promptikoodaus",
        title: "Promptaa ja analysoi 🧠",
        slug: "promptikoodaus-promptaa-ja-analysoi",
        icon: "🧠",
        description: "Pyydä AI:ta selittämään koodirivi. Tämä on supervoima!",
        theory: `<h4>📚 AI opettajana</h4><p>Jos et ymmärrä jotain koodia, voit promptata: <em>"Selitä tämä Python-koodi 10-vuotiaalle: for i in range(10): print(i)"</em></p>`,
        challenge: "Tässä on AI:n generoima koodi. Avaa OpenCode ja promptaa AI:ta selittämään MITEN tämä koodi toimii. Kirjoita kommentteihin mitä opit!",
        starterCode: `# AI:n generoima koodi. Promptaa AI:ta selittämään se:

def on_alkuluku(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print(on_alkuluku(7))
print(on_alkuluku(10))`,
        hint: "Promptaa Deepseekiä: 'Selitä tämä Python-funktio yhdellä lauseella.'",
        validate: function(output) { return output.includes('True') && output.includes('False'); },
        successMsg: "Olet nyt Promptikoodaus-mestari! 🧠 Osaat käyttää AI:ta työkaluna.",
        failMsg: "Suorita koodi ja mieti mitä alkuluku tarkoittaa.",
        maxStars: 3
    },

    // ═══════════════════════════════════════
    //  TURTLE-VISUAALI-OSIO (Tehtävät 242-249)
    //  Piirrä kuvio -tehtävät kohdekuvalla ja avaruudellisella validoinnilla
    // ═══════════════════════════════════════

    // ─────────────────────────────────────
    // TEHTÄVÄ 242: Aurinko ☀️
    // ─────────────────────────────────────
    {
        id: 242,
        section: "turtle",
        title: "Piirrä aurinko ☀️",
        slug: "turtle-aurinko",
        icon: "☀️",
        description: "Piirrä aurinko: ympyrä keskellä ja säteet ympärillä.",
        theory: `<h4>📚 Aurinko</h4><p>Aurinko koostuu kahdesta osasta:</p>
<ul><li>Keskellä <strong>ympyrä</strong> (circle)</li><li>Ympärillä <strong>säteet</strong> (viivoja eri suuntiin)</li></ul>
<p>Vinkki: piirrä ensin ympyrä, sitten käännä turtlea pieni kulma kerrallaan ja piirrä säde toistaen.</p>
<pre><code># Esimerkki:
circle(30)
for i in range(8):
    forward(40)
    backward(40)
    left(45)</code></pre>`,
        challenge: "Piirtä <strong>aurinko</strong>: ympyrä keskellä ja vähintään 8 sädetä ympärillä!",
        starterCode: `# Piirrä aurinko:\n`,
        hint: "Käytä circle(30) aurinkoon, sitten for-silmukassa forward(50), backward(50) ja left(45). Toista 8 kertaa.",
        targetSvg: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="70" r="22" fill="none" stroke="#e2b714" stroke-width="3"/><g stroke="#e2b714" stroke-width="2.5" stroke-linecap="round"><line x1="100" y1="35" x2="100" y2="15"/><line x1="124" y1="46" x2="139" y2="31"/><line x1="135" y1="70" x2="158" y2="70"/><line x1="124" y1="94" x2="139" y2="109"/><line x1="100" y1="105" x2="100" y2="125"/><line x1="76" y1="94" x2="61" y2="109"/><line x1="65" y1="70" x2="42" y2="70"/><line x1="76" y1="46" x2="61" y2="31"/></g></svg>`,
        validate: function(output) {
            const log = getTurtleLog();
            return spatialValidate([
                { check:'minCircles', val:1, msg:'Aurinko tarvitsee ympyrän keskelle! Käytä circle(r).' },
                { check:'minLines', val:8, msg:'Aurinkoon tarvitaan vähintään 8 säettä! Käytä silmukkaa.' },
                { check:'minStrokes', val:9, msg:'Piirrä sekä ympyrä että säteet!' }
            ], log);
        },
        successMsg: "Loistavaa! ☀️ Aurinko paistaa!",
        failMsg: "",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 243: Talo 🏠
    // ─────────────────────────────────────
    {
        id: 243,
        section: "turtle",
        title: "Piirrä talo 🏠",
        slug: "turtle-talo",
        icon: "🏠",
        description: "Piirrä talo: neliöseinä ja kolmiokatto.",
        theory: `<h4>📚 Talo</h4><p>Talo on helppo rakentaa kahdella osalla:</p>
<ul><li><strong>Seinä</strong> = neliö (forward + left 90° × 4)</li><li><strong>Katto</strong> = kolmio seinän päällä (forward + left 120° × 3)</li></ul>
<p>Vinkki: piirrä seinä ensin, siirry ylöspäin penup()/goto() ja piirrä katto!</p>`,
        challenge: "Piirrä <strong>talo</strong>: neliö alhaalla (seinä) ja kolmio sen päällä (katto)!",
        starterCode: `# Piirrä talo:\n`,
        hint: "Ensin neliö: for i in range(4): forward(80); left(90). Sitten goto tai penup+goto ylöspäin, ja kolmio: for i in range(3): forward(80); left(120).",
        targetSvg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="80" width="90" height="70" fill="none" stroke="#4fc3f7" stroke-width="3"/><polygon points="100,25 155,80 45,80" fill="none" stroke="#e2b714" stroke-width="3"/></svg>`,
        validate: function(output) {
            const log = getTurtleLog();
            return spatialValidate([
                { check:'minLines', val:6, msg:'Talossa pitää olla vähintään 6 viivaa (4 seinää + 3 kattorajaa)!' },
                { check:'circlesAboveLines', msg:'Katon (kolmio) täytyy olla seinien (neliön) yläpuolella!' }
            ], log);
        },
        successMsg: "Hieno talo! 🏠 Arkkitehtuuria!",
        failMsg: "",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 244: Puu 🌲
    // ─────────────────────────────────────
    {
        id: 244,
        section: "turtle",
        title: "Piirrä puu 🌲",
        slug: "turtle-puu",
        icon: "🌲",
        description: "Piirrä puu: suorakaiderunko ja lehdet yllapäin.",
        theory: `<h4>📚 Puu</h4><p>Puu koostuu kahdesta osasta:</p>
<ul><li><strong>Runko</strong> = pystysuora suorakulma</li><li><strong>Lehdet</strong> = viivat tai ympyrät rungon yläpäässä</li></ul>
<p>Vinkki: käytä <code>penup()</code> + <code>goto(x,y)</code> liikkuaksesi ilman piirtämistä!</p>`,
        challenge: "Piirrä <strong>puu</strong>: runko alhaalla ja vähintään 3 lehteä/ympyrää yläosassa!",
        starterCode: `# Piirrä puu:\n`,
        hint: "Runko: forward(80) alas, left(90), forward(15), left(90), forward(80). Sitten goto ylös ja piirrä 3 ympyrää tai viivaa lehtiiksi.",
        targetSvg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg"><rect x="92" y="95" width="16" height="55" fill="none" stroke="#8B5A2B" stroke-width="3"/><circle cx="100" cy="75" r="28" fill="none" stroke="#00d26a" stroke-width="2.5"/><circle cx="78" cy="85" r="18" fill="none" stroke="#00d26a" stroke-width="2.5"/><circle cx="122" cy="85" r="18" fill="none" stroke="#00d26a" stroke-width="2.5"/></svg>`,
        validate: function(output) {
            const log = getTurtleLog();
            return spatialValidate([
                { check:'minLines', val:3, msg:'Puu tarvitsee vähintään 3 viivaa rungon ja lehtien muodostamiseen!' },
                { check:'linesInLower', val:1, msg:'Rungon pitää olla alaosassa (käytä forward alas)!' },
                { check:'linesInUpper', val:2, msg:'Lehtien pitää olla yläosassa! Siirry ylöspäin goto():lla.' }
            ], log);
        },
        successMsg: "Kaunis puu! 🌲 Luontoa koodilla!",
        failMsg: "",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 245: Auto 🚗
    // ─────────────────────────────────────
    {
        id: 245,
        section: "turtle",
        title: "Piirrä auto 🚗",
        slug: "turtle-auto",
        icon: "🚗",
        description: "Piirrä auto: runko ja kaksi pyörää.",
        theory: `<h4>📚 Auto</h4><p>Auto koostuu:</p>
<ul><li><strong>Runko</strong> = vaaka suorakaide</li><li><strong>Pyörät</strong> = 2 ympyrää rungon alapuolella</li></ul>
<p>Vinkki: piirrä ensin runko (suorakaide), sitten goto pyörien paikoille ja circle() molempiin!</p>`,
        challenge: "Piirrä <strong>auto</strong>: runko ja 2 ympyrää (pyörät) rungon alapuolella!",
        starterCode: `# Piirrä auto:\n`,
        hint: "Runko: piirrä suorakaide (esim. forward(120), left(90)...×2). Sitten goto etupyörälle circle(12), goto takapyörälle circle(12).",
        targetSvg: `<svg viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="40" width="140" height="40" rx="5" fill="none" stroke="#4fc3f7" stroke-width="3"/><circle cx="60" cy="82" r="13" fill="none" stroke="#e2b714" stroke-width="2.5"/><circle cx="140" cy="82" r="13" fill="none" stroke="#e2b714" stroke-width="2.5"/></svg>`,
        validate: function(output) {
            const log = getTurtleLog();
            return spatialValidate([
                { check:'minLines', val:3, msg:'Auto tarvitsee rungon! Piirrä vähintään 3 viivaa.' },
                { check:'minCircles', val:2, msg:'Auto tarvitsee 2 pyörää! Käytä circle() kahteen kertaan.' },
                { check:'circlesBelowLines', msg:'Pyörien (ympyröiden) täytyy olla rungon alapuolella!' }
            ], log);
        },
        successMsg: "Vroom vroom! 🚗 Auto valmis!",
        failMsg: "",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 246: Tikku-ukko 🧒
    // ─────────────────────────────────────
    {
        id: 246,
        section: "turtle",
        title: "Piirrä tikku-ukko 🧒",
        slug: "turtle-tikku-ukko",
        icon: "🧒",
        description: "Piirrä tikku-ukko: pää (ympyrä) ja ruumis (viivat).",
        theory: `<h4>📚 Tikku-ukko</h4><p>Tikku-ukko on klassinen harjoitus:</p>
<ul><li><strong>Pää</strong> = ympyrä ylhäällä</li><li><strong>Ruumis</strong> = pystysuora viiva</li><li><li><strong>Käsivarret & jalat</strong> = viivat sivuille ja alas</li></ul></ul>
<p>Aloita päältä! Käännä turtlea oikeaan suuntaan ennen jokaista viivaa.</p>`,
        challenge: "Piirrä <strong>tikku-ukko</strong>: pää (ympyrä) ylhäällä, ruumis, kädet ja jalat!",
        starterCode: `# Piirrä tikku-ukko:\n`,
        hint: "Aloita päästä: circle(20). Sitten penup(), goto(ala), pendown(). Ruumis: forward(60). Sitten kädet (left+forward+right+backward×2) ja jalat (vastaavasti alas).",
        targetSvg: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="32" r="20" fill="none" stroke="#4fc3f7" stroke-width="3"/><line x1="100" y1="52" x2="100" y2="115" stroke="#4fc3f7" stroke-width="3" stroke-linecap="round"/><line x1="100" y1="65" x2="62" y2="88" stroke="#4fc3f7" stroke-width="2.5" stroke-linecap="round"/><line x1="100" y1="65" x2="138" y2="88" stroke="#4fc3f7" stroke-width="2.5" stroke-linecap="round"/><line x1="100" y1="115" x2="72" y2="155" stroke="#4fc3f7" stroke-width="2.5" stroke-linecap="round"/><line x1="100" y1="115" x2="128" y2="155" stroke="#4fc3f7" stroke-width="2.5" stroke-linecap="round"/></svg>`,
        validate: function(output) {
            const log = getTurtleLog();
            return spatialValidate([
                { check:'minCircles', val:1, msg:'Ukko tarvitsee pään! Käytä circle().' },
                { check:'minLines', val:5, msg:'Ukko tarvitsee vähintään 5 viivaa (ruumis + 2 kättä + 2 jalkaa)!' },
                { check:'circlesAboveLines', msg:'Pään (ympyrän) täytyy olla ruumiin yläpuolella!' }
            ], log);
        },
        successMsg: "Huikea ukko! 🧒 Tikku-ihminen herää eloon!",
        failMsg: "",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 247: Kukka 🌸
    // ─────────────────────────────────────
    {
        id: 247,
        section: "turtle",
        title: "Piirrä kukka 🌸",
        slug: "turtle-kukka",
        icon: "🌸",
        description: "Piirrä kukka: keskuskukka ja terälehdet ympärillä.",
        theory: `<h4>📚 Kukka</h4><p>Kukka on hieno tehtävä silmukalle:</p>
<ul><li><strong>Keskus</strong> = ympyrä</li><li><strong>Terälehdet</strong> = ympyrät tai viivat ympärillä</li></ul>
<p>Tekniikka: käännä turtlea (esim. 72° = 360/5), piirrä terälehti, toista 5 kertaa!</p>
<pre><code>for i in range(5):
    # ...piirrä terälehti...
    left(72)</code></pre>`,
        challenge: "Piirrä <strong>kukka</strong>: keskus ja vähintään 5 terälehteä ympärille!",
        starterCode: `# Piirrä kukka:\n`,
        hint: "Keskus: circle(15). Sitten silmukka 5 kertaa: forward(30), circle(10), backward(30), left(72). Tai piirrä ympyröitä terälehdiksi!",
        targetSvg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="80" r="14" fill="none" stroke="#ff6b6b" stroke-width="2.5"/><ellipse cx="100" cy="48" rx="14" ry="22" fill="none" stroke="#b388ff" stroke-width="2"/><ellipse cx="132" cy="64" rx="22" ry="14" fill="none" stroke="#b388ff" stroke-width="2" transform="rotate(36 132 64)"/><ellipse cx="124" cy="106" rx="22" ry="14" fill="none" stroke="#b388ff" stroke-width="2" transform="rotate(72 124 106)"/><ellipse cx="76" cy="106" rx="22" ry="14" fill="none" stroke="#b388ff" stroke-width="2" transform="rotate(-72 76 106)"/><ellipse cx="68" cy="64" rx="22" ry="14" fill="none" stroke="#b388ff" stroke-width="2" transform="rotate(-36 68 64)"/></svg>`,
        validate: function(output) {
            const log = getTurtleLog();
            return spatialValidate([
                { check:'minCircles', val:2, msg:'Kukkaan tarvitaan vähintään 2 ympyrää (keskus + terälehtiä)!' },
                { check:'minStrokes', val:8, msg:'Piirrä enemmän elementtejä! Keskus + 5 terälehteä.' },
                { check:'minLines', val:4, msg:'Lisää viivoja terälehdiksi tai varjostukseksi!' }
            ], log);
        },
        successMsg: "Kaunis kukka! 🌸 Kevättä koodissa!",
        failMsg: "",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 248: Tähti ⭐
    // ─────────────────────────────────────
    {
        id: 248,
        section: "turtle",
        title: "Piirrä tähti ⭐",
        slug: "turtle-tahti",
        icon: "⭐",
        description: "Piirrä 5-sakarainen tähti.",
        theory: `<h4>📚 Tähti</h4><p>Tähti on klassinen turtle-tehtävä:</p>
<p>5-sakarainen tähti tehdään näin:</p>
<ul><li>Käännä 144° (180 - 36) — se luo terävän kärjen</li><li>Toista 5 kertaa</li></ul>
<pre><code>for i in range(5):
    forward(80)
    right(144)</code></pre>
<p>Miksi 144°? Koska tähti tekee "hyppelyn" jokaisella käännöksellä!</p>`,
        challenge: "Piirrä <strong>5-sakarainen tähti</strong>! Käytä silmukkaa ja right(144) tai left(144).",
        starterCode: `# Piirrä tähti:\n`,
        hint: "for i in range(5): forward(80); right(144). Toista 5 kertaa!",
        targetSvg: `<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg"><polygon points="100,10 122,72 188,78 141,121 153,186 100,157 47,186 59,121 12,78 78,72" fill="none" stroke="#e2b714" stroke-width="3" stroke-linejoin="round"/></svg>`,
        validate: function(output) {
            const log = getTurtleLog();
            const s = replayLogToCoords(log);
            const lines = s.filter(x=>x.type==='line');
            if (lines.length < 5) return 'Tähti tarvitsee 5 sakaraa! Tarvitaan vähintään 5 viivaa.';
            const angles = lines.map(l => Math.atan2(l.y1-l.y2, l.x2-l.x1)*180/Math.PI);
            const sharp = angles.filter(a => Math.abs((Math.abs(a)%180)-36)<25 || Math.abs((Math.abs(a)%180)-144)<25).length;
            if (sharp < 3) return 'Tähti ei näytä tähtimäiseltä. Kokeile right(144)!';
            const sym = symmetryScore(s);
            if (sym < 0.35) return 'Tähti ei ole tarpeeksi symmetrinen. Kokeile sama forward()-pituus jokaisella sakaralla!';
            return true;
        },
        successMsg: "Sähkövä tähti! ⭐ Loistat!",
        failMsg: "",
        maxStars: 3
    },

    // ─────────────────────────────────────
    // TEHTÄVÄ 249: Lumihiutale ❄️
    // ─────────────────────────────────────
    {
        id: 249,
        section: "turtle",
        title: "Piirrä lumihiutale ❄️",
        slug: "turtle-lumihiutale",
        icon: "❄️",
        description: "Piirrä 6-sakarainen symmetrinen lumihiutale.",
        theory: `<h4>📚 Lumihiutale</h4><p>Lumihiutale on taidokas versio tädestä:</p>
<ul><li><strong>6 sakaraa</strong> (360/6 = 60° per sakara)</li><li>Joka sakarassa <strong>haarautuminen</strong> (pieni haara sivulle)</li></ul>
<p>Ideeena: ulompi silmukka (6 kertaa) → sisempi (piirrä sakara + haara) → käännä 60°</p>`,
        challenge: "Piirrä <strong>lumihiutale</strong>: 6 sakaraa, symmetrisesti jakautuneina!",
        starterCode: `# Piirrä lumihiutale:\n`,
        hint: "Ulompi: for i in range(6): ...sisä...; left(60). Jokainen sakara: forward(60), left(45), forward(20), backward(20), right(45), backward(60).",
        targetSvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g stroke="#4fc3f7" stroke-width="2" stroke-linecap="round"><line x1="100" y1="100" x2="100" y2="18"/><line x1="100" y1="52" x2="74" y2="34"/><line x1="100" y1="52" x2="126" y2="34"/><line x1="100" y1="100" x2="165" y2="137"/><line x1="139" y1="118" x2="156" y2="96"/><line x1="139" y1="118" x2="162" y2="128"/><line x1="100" y1="100" x2="165" y2="63"/><line x1="139" y1="82" x2="156" y2="104"/><line x1="139" y1="82" x2="162" y2="72"/><line x1="100" y1="100" x2="100" y2="182"/><line x1="100" y1="148" x2="74" y2="166"/><line x1="100" y1="148" x2="126" y2="166"/><line x1="100" y1="100" x2="35" y2="63"/><line x1="61" y1="82" x2="44" y2="104"/><line x1="61" y1="82" x2="38" y2="72"/><line x1="100" y1="100" x2="35" y2="137"/><line x1="61" y1="118" x2="44" y2="96"/><line x1="61" y1="118" x2="38" y2="128"/></g></svg>`,
        validate: function(output) {
            const log = getTurtleLog();
            const s = replayLogToCoords(log);
            const lines = s.filter(x=>x.type==='line');
            if (lines.length < 9) return 'Lumihiutale tarvitsee vähintään 9 viivaa (6 sakaraa + haarat)! Sinulla: '+lines.length;
            const sym = symmetryScore(s);
            if (sym < 0.28) return 'Lumihiutale ei ole tarpeeksi symmetrinen. Varmista että kaikki sakarat ovat samanpituisia!';
            return true;
        },
        successMsg: "Taikaista lumihiutale! ❄️ Talven taikuutta!",
        failMsg: "",
        maxStars: 3
    },
];
