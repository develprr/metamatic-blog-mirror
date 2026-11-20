import re
import json

tasks = [
    {
        "section": "funktiot_easy2",
        "title": "Paluu funktioihin 🔙",
        "icon": "🔙",
        "description": "Kerrataan funktion perusteet.",
        "theory": "<h4>📚 Kertaus</h4><p>Funktio luodaan <code>def</code>-sanalla. Koodilohko sisennetään.</p>",
        "challenge": "Luo funktio <code>sano_hei</code>, joka tulostaa 'Hei!'.",
        "starterCode": "___ sano_hei():\n    print(\"Hei!\")",
        "hint": "Käytä sanaa def.",
        "validate": "function(output) { return true; }",
        "successMsg": "Hienoa! Kertaus on opintojen äiti. 🔙",
        "failMsg": "Käytä def-sanaa.",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Huuda isosti! 📢",
        "icon": "📢",
        "description": "Funktio, joka muuttaa tekstin isoiksi kirjaimiksi.",
        "theory": "<h4>📚 upper()</h4><p><code>teksti.upper()</code> muuttaa kaikki kirjaimet isoiksi.</p>",
        "challenge": "Palauta sana isoilla kirjaimilla.",
        "starterCode": "def huuda(sana):\n    return sana.___\n\nprint(huuda(\"apua\"))",
        "hint": "Käytä .upper()",
        "validate": "function(output) { return output.includes('APUA'); }",
        "successMsg": "HIENOA! 📢",
        "failMsg": "Käytä sana.upper()",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Kuiskaa pienesti 🤫",
        "icon": "🤫",
        "description": "Funktio, joka muuttaa tekstin pieniksi kirjaimiksi.",
        "theory": "<h4>📚 lower()</h4><p><code>teksti.lower()</code> muuttaa kaikki kirjaimet pieniksi.</p>",
        "challenge": "Palauta sana pienillä kirjaimilla.",
        "starterCode": "def kuiskaa(sana):\n    return \n\nprint(kuiskaa(\"KOIRA\"))",
        "hint": "Käytä sana.lower()",
        "validate": "function(output) { return output.includes('koira'); }",
        "successMsg": "shh, oikein meni. 🤫",
        "failMsg": "Käytä sana.lower()",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Koko nimi 🤝",
        "icon": "🤝",
        "description": "Yhdistetään etunimi ja sukunimi.",
        "theory": "<h4>📚 Plus-merkki</h4><p>Voit yhdistää tekstejä <code>+</code> merkillä. Muista lisätä välilyönti <code>\" \"</code> väliin!</p>",
        "challenge": "Yhdistä etunimi ja sukunimi välilyönnillä.",
        "starterCode": "def koko_nimi(etu, suku):\n    return etu + \" \" + \n\nprint(koko_nimi(\"Matti\", \"Meikäläinen\"))",
        "hint": "Lisää loppuun suku.",
        "validate": "function(output) { return output.includes('Matti Meikäläinen'); }",
        "successMsg": "Kyllä! 🤝 Nimet yhdistetty.",
        "failMsg": "Palauta etu + \" \" + suku",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Toista sana 🔁",
        "icon": "🔁",
        "description": "Kerrotaan tekstiä numerolla.",
        "theory": "<h4>📚 Kertomerkki</h4><p>Tekstiä voi kertoa numerolla: <code>\"Moi\" * 3</code> on <code>\"MoiMoiMoi\"</code>.</p>",
        "challenge": "Palauta sana kerrottuna kolmella.",
        "starterCode": "def toista_kolmesti(sana):\n    return \n\nprint(toista_kolmesti(\"Joo\"))",
        "hint": "return sana * 3",
        "validate": "function(output) { return output.includes('JooJooJoo'); }",
        "successMsg": "JooJooJoo! 🔁 Oikein!",
        "failMsg": "Käytä sana * 3",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Sanan pituus 📏",
        "icon": "📏",
        "description": "Lasketaan sanan kirjaimet funktiossa.",
        "theory": "<h4>📚 len()</h4><p><code>len()</code>-funktio antaa tekstin pituuden.</p>",
        "challenge": "Palauta parametrina annetun sanan pituus.",
        "starterCode": "def kirjaimia(sana):\n    return \n\nprint(kirjaimia(\"krokotiili\"))",
        "hint": "return len(sana)",
        "validate": "function(output) { return output.includes('10'); }",
        "successMsg": "Aivan oikein! 📏",
        "failMsg": "Käytä len(sana)",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Ensimmäinen kirjain 🅰️",
        "icon": "🅰️",
        "description": "Haetaan sanan alku.",
        "theory": "<h4>📚 Indeksit</h4><p>Ensimmäinen kirjain on kohdassa nolla: <code>sana[0]</code>.</p>",
        "challenge": "Palauta sanan ensimmäinen kirjain.",
        "starterCode": "def eka_kirjain(sana):\n    return \n\nprint(eka_kirjain(\"Python\"))",
        "hint": "return sana[0]",
        "validate": "function(output) { return output.includes('P'); }",
        "successMsg": "Kyllä! 🅰️",
        "failMsg": "Käytä sana[0]",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Onko pitkä? 🦒",
        "icon": "🦒",
        "description": "Suora vertailun palauttaminen.",
        "theory": "<h4>📚 Boolean-palautus</h4><p>Voit palauttaa vertailun tuloksen suoraan: <code>return a > 5</code>. Se palauttaa True tai False.</p>",
        "challenge": "Palauta True jos sanan pituus on yli 5, muuten False.",
        "starterCode": "def on_pitka(sana):\n    return len(sana) > \n\nprint(on_pitka(\"koira\")) # False\nprint(on_pitka(\"krokotiili\")) # True",
        "hint": "Laita ehto muotoon len(sana) > 5",
        "validate": "function(output) { return output.includes('False') && output.includes('True'); }",
        "successMsg": "Hienoa! 🦒",
        "failMsg": "Laita numeroksi 5.",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Pelipisteet 🎮",
        "icon": "🎮",
        "description": "Lasketaan voittopisteet.",
        "theory": "<h4>📚 Kertolasku</h4><p>Jokaisesta voitosta saa 3 pistettä.</p>",
        "challenge": "Palauta voittojen määrä kerrottuna kolmella.",
        "starterCode": "def laske_pisteet(voitot):\n    return \n\nprint(laske_pisteet(4)) # Pitäisi olla 12",
        "hint": "return voitot * 3",
        "validate": "function(output) { return output.includes('12'); }",
        "successMsg": "Voitto! 🎮",
        "failMsg": "Käytä voitot * 3",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Kympin kerho 🔟",
        "icon": "🔟",
        "description": "Onko luku tasan 10?",
        "challenge": "Palauta True jos luku on 10, muuten False.",
        "starterCode": "def on_kymppi(luku):\n    return luku == \n\nprint(on_kymppi(10))\nprint(on_kymppi(8))",
        "hint": "Käytä numeroa 10.",
        "validate": "function(output) { return output.includes('True') && output.includes('False'); }",
        "successMsg": "Kymppi! 🔟",
        "failMsg": "Vertaa luku == 10.",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Kolme kaverusta 👨‍👨‍👦",
        "icon": "👨‍👨‍👦",
        "description": "Lasketaan kolme lukua yhteen.",
        "challenge": "Täydennä funktio palauttamaan kaikkien kolmen luvun summa.",
        "starterCode": "def summaa_kolme(a, b, c):\n    return a + b + \n\nprint(summaa_kolme(1, 2, 3))",
        "hint": "Lisää c.",
        "validate": "function(output) { return output.includes('6'); }",
        "successMsg": "Oikein! 👨‍👨‍👦",
        "failMsg": "Palauta a + b + c",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Verolaskuri 🧾",
        "icon": "🧾",
        "description": "Lisätään hintaan 24% ALV.",
        "theory": "<h4>📚 Desimaaliluvut</h4><p>Pythonissa desimaaliluvut kirjoitetaan pisteellä: <code>1.24</code>.</p>",
        "challenge": "Kerro hinta 1.24:llä.",
        "starterCode": "def lisaa_vero(hinta):\n    return \n\nprint(lisaa_vero(100)) # Pitäisi olla 124.0",
        "hint": "return hinta * 1.24",
        "validate": "function(output) { return output.includes('124.0'); }",
        "successMsg": "Tilit kunnossa! 🧾",
        "failMsg": "Käytä hinta * 1.24",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Numero tekstiksi 📝",
        "icon": "📝",
        "description": "Yhdistetään numero tekstiin.",
        "theory": "<h4>📚 str()</h4><p>Jotta voit yhdistää numeron tekstiin `+` merkillä, numero pitää ensin muuttaa tekstiksi: <code>str(numero)</code>.</p>",
        "challenge": "Palauta teksti 'Ikäsi on ' + ika (muutettuna tekstiksi).",
        "starterCode": "def ika_viesti(ika):\n    return \"Ikäsi on \" + \n\nprint(ika_viesti(12))",
        "hint": "Käytä str(ika)",
        "validate": "function(output) { return output.includes('Ikäsi on 12'); }",
        "successMsg": "Hyvin yhdistetty! 📝",
        "failMsg": "Käytä str(ika)",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Aikuinen vai ei? 🔞",
        "icon": "🔞",
        "description": "If-else lause funktiossa.",
        "challenge": "Palauta True jos ikä on 18 tai enemmän, muuten False.",
        "starterCode": "def onko_aikuinen(ika):\n    if ika >= 18:\n        return \n    else:\n        return \n\nprint(onko_aikuinen(20))\nprint(onko_aikuinen(15))",
        "hint": "Palauta True jos yli 18, muuten False.",
        "validate": "function(output) { return output.includes('True') && output.includes('False'); }",
        "successMsg": "Selvä juttu! 🔞",
        "failMsg": "Palauta True tai False.",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Neliön pinta-ala ⬛",
        "icon": "🔲",
        "description": "Laske neliön pinta-ala.",
        "challenge": "Neliön pinta-ala on sivu * sivu.",
        "starterCode": "def nelion_ala(sivu):\n    return \n\nprint(nelion_ala(5))",
        "hint": "return sivu * sivu",
        "validate": "function(output) { return output.includes('25'); }",
        "successMsg": "Geometria on hallussa! ⬛",
        "failMsg": "Palauta sivu * sivu",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Suorakulmion piiri 📏",
        "icon": "📏",
        "description": "Lasketaan reunojen pituus.",
        "challenge": "Palauta (leveys + korkeus) * 2.",
        "starterCode": "def piiri(leveys, korkeus):\n    return \n\nprint(piiri(5, 10)) # Pitäisi olla 30",
        "hint": "return (leveys + korkeus) * 2",
        "validate": "function(output) { return output.includes('30'); }",
        "successMsg": "Täydellistä! 📏",
        "failMsg": "Käytä (leveys + korkeus) * 2",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Kuuluuko joukkoon? 🔍",
        "icon": "🔍",
        "description": "Onko arvo listassa?",
        "theory": "<h4>📚 in</h4><p>Voit tarkistaa onko arvo listassa: <code>arvo in lista</code>.</p>",
        "challenge": "Palauta True jos luku on listassa [1, 2, 3].",
        "starterCode": "def onko_yks_kaks_kolme(luku):\n    return luku in [1, 2, ]\n\nprint(onko_yks_kaks_kolme(2))\nprint(onko_yks_kaks_kolme(5))",
        "hint": "Lisää 3 listaan.",
        "validate": "function(output) { return output.includes('True') && output.includes('False'); }",
        "successMsg": "Oikein! 🔍",
        "failMsg": "Listan pitää olla [1, 2, 3]",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Onko tyhjä? 🕳️",
        "icon": "🕳️",
        "description": "Onko sana tyhjä merkkijono?",
        "challenge": "Palauta True jos sanan pituus on 0.",
        "starterCode": "def on_tyhja(sana):\n    return len(sana) == \n\nprint(on_tyhja(\"\"))\nprint(on_tyhja(\"hei\"))",
        "hint": "Käytä numeroa 0.",
        "validate": "function(output) { return output.includes('True') && output.includes('False'); }",
        "successMsg": "Hienoa! 🕳️",
        "failMsg": "Vertaa pituutta nollaan.",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Tervehdys iän mukaan 🤝",
        "icon": "🤝",
        "description": "Eri viesti eri ikäisille.",
        "challenge": "Jos alle 18, palauta 'Moi', muuten 'Päivää'.",
        "starterCode": "def tervehdi_ika(ika):\n    if ika < 18:\n        return \"Moi\"\n    else:\n        return \n\nprint(tervehdi_ika(10))\nprint(tervehdi_ika(40))",
        "hint": "Palauta \"Päivää\" else-lohkossa.",
        "validate": "function(output) { return output.includes('Moi') && output.includes('Päivää'); }",
        "successMsg": "Hyvät käytöstavat! 🤝",
        "failMsg": "Laita lainausmerkit \"Päivää\"",
        "maxStars": 3
    },
    {
        "section": "funktiot_easy2",
        "title": "Iso huuto yhdessä 📢",
        "icon": "📢",
        "description": "Yhdistetään upper() ja nimien yhdistäminen.",
        "challenge": "Palauta etunimi ja sukunimi välilyönnillä, KAIKKI ISOLLA.",
        "starterCode": "def iso_nimi(etu, suku):\n    kokonimi = etu + \" \" + suku\n    return kokonimi.___\n\nprint(iso_nimi(\"Matti\", \"Meikäläinen\"))",
        "hint": "Käytä .upper()",
        "validate": "function(output) { return output.includes('MATTI MEIKÄLÄINEN'); }",
        "successMsg": "Upeaa! Olet suorittanut Funktiot Easy 2! 🏆",
        "failMsg": "Käytä .upper()",
        "maxStars": 3
    }
]

with open('lessons.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# We insert right AFTER the block of "funktiot_easy" (tasks 107-126 currently)
content = "".join(lines)

# Split at "FUNKTIOT (IDs 127–146)" or similar...
# Let's find the section "//  FUNKTIOT (IDs 128–147)" or whatever it is now.
# Or just search for the start of task 127
parts = re.split(r'(// ─────────────────────────────────────\n\s*// TEHTÄVÄ 127:)', content, maxsplit=1)

new_js = []
new_js.append("\n    // ═══════════════════════════════════════")
new_js.append("    //  FUNKTIOT EASY 2 - Lisää Toistoa (20 tehtävää)")
new_js.append("    // ═══════════════════════════════════════\n")

for i, task in enumerate(tasks):
    # we don't care about the hardcoded IDs in the array generation yet, because we will re-number everything and add slugs
    new_js.append(f"    // ─────────────────────────────────────")
    new_js.append(f"    // TEHTÄVÄ XXX: {task['title']}")
    new_js.append(f"    // ─────────────────────────────────────")
    new_js.append("    {")
    new_js.append(f"        id: 999,")
    new_js.append(f"        section: \"{task['section']}\",")
    new_js.append(f"        title: \"{task['title']}\",")
    new_js.append(f"        icon: \"{task['icon']}\",")
    new_js.append(f"        description: \"{task['description']}\",")
    if 'theory' in task:
        new_js.append(f"        theory: `{task['theory']}`,")
    else:
        new_js.append(f"        theory: ``,")
    new_js.append(f"        challenge: \"{task['challenge']}\",")
    new_js.append(f"        starterCode: `{task['starterCode']}`,")
    new_js.append(f"        hint: \"{task['hint']}\",")
    new_js.append(f"        validate: {task['validate']},")
    new_js.append(f"        successMsg: \"{task['successMsg']}\",")
    new_js.append(f"        failMsg: \"{task['failMsg']}\",")
    new_js.append("        maxStars: 3")
    new_js.append("    },")

if len(parts) == 3:
    final_content = parts[0] + "\n".join(new_js) + "\n\n    " + parts[1] + parts[2]
    with open('lessons.js', 'w', encoding='utf-8') as f:
        f.write(final_content)
    print("Tasks injected successfully.")
else:
    print("Could not find insertion point!")

