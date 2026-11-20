// Python Pro - Lessons
// 26 lessons across 8 modules: OOP, Modules, Errors, Files, Data Structures, APIs, Advanced OOP, Final Project

const LESSONS = [

    // ===== MODULE 1: Luokat ja Oliot (Lessons 1-4) =====
    {
        id: 1,
        title: "Ensimmäinen luokka",
        icon: "🏗️",
        description: "Opi luomaan oma luokka (class) Pythonissa!",
        theory: `
            <h3>📖 Mikä on luokka?</h3>
            <p>Luokka on kuin <strong>piirustus</strong> tai <strong>resepti</strong> - se kertoo millainen jokin asia on. Olio (object) on se valmis tuote, joka on tehty piirustuksen mukaan.</p>
            <p>Kuvittele: <code>Koira</code>-luokka on piirustus koirasta. Jokainen oikea koira (Rekku, Musti...) on <strong>olio</strong> tuosta luokasta.</p>
            <pre><code>class Koira:
    nimi = "Rekku"
    rotu = "Labradorinnoutaja"

# Luodaan olio (koira)
koira1 = Koira()
print(koira1.nimi)     # Rekku
print(koira1.rotu)     # Labradorinnoutaja</code></pre>
            <p><strong>Huomaa:</strong> Luokan nimi kirjoitetaan <strong>isolla alkukirjaimella</strong> (Koira, Auto, Pelaaja).</p>
        `,
        challenge: `<p>Luo luokka <code>Auto</code> jolla on attribuutit <code>merkki</code> (arvo <code>"Tesla"</code>) ja <code>nopeus</code> (arvo <code>200</code>). Luo olio <code>auto1</code> ja tulosta molemmat attribuutit.</p>
        <p>Tulosteen pitää olla:</p>
        <pre><code>Tesla
200</code></pre>`,
        starterCode: `class Auto:\n    merkki = "Tesla"\n    nopeus = ???\n\nauto1 = Auto()\nprint(auto1.merkki)\nprint(auto1.???)`,
        hint: "Korvaa ??? nopeus-attribuutille arvolla 200 ja toinen ??? sanalla nopeus.",
        validate: (output) => {
            const lines = output.trim().split('\n');
            return lines.length >= 2 && lines[0].trim() === 'Tesla' && lines[1].trim() === '200';
        },
        successMsg: "Hienoa! Loit ensimmäisen luokkasi! 🏗️",
        failMsg: "Tarkista, että tulostat auto1.merkki ja auto1.nopeus.",
        maxStars: 3
    },
    {
        id: 2,
        title: "__init__ ja self",
        icon: "⚡",
        description: "Opi luomaan dynaamisia olioita __init__-metodilla!",
        theory: `
            <h3>📖 __init__ - Olion alustaja</h3>
            <p>Edellisessä tehtävässä kaikki koirat olivat samanlaisia. Mutta oikeassa elämässä jokaisella koiralla on eri nimi!</p>
            <p><code>__init__</code> on erikoismetodi joka suoritetaan <strong>automaattisesti</strong> kun uusi olio luodaan. <code>self</code> viittaa aina kyseiseen olioon.</p>
            <pre><code>class Pelaaja:
    def __init__(self, nimi, taso):
        self.nimi = nimi
        self.taso = taso

p1 = Pelaaja("Warrior", 5)
p2 = Pelaaja("Mage", 3)
print(p1.nimi)   # Warrior
print(p2.taso)   # 3</code></pre>
            <p><code>self.nimi = nimi</code> tallentaa annetun nimen <strong>tähän olioon</strong>. Jokainen olio saa omat arvonsa!</p>
        `,
        challenge: `<p>Luo luokka <code>Hahmo</code> jolla on <code>__init__</code>-metodi. Se ottaa parametrit <code>nimi</code> ja <code>hp</code> (health points). Luo kaksi hahmoa ja tulosta niiden tiedot:</p>
        <pre><code>Warrior: 100 HP
Mage: 80 HP</code></pre>`,
        starterCode: `class Hahmo:\n    def __init__(self, nimi, hp):\n        self.nimi = nimi\n        self.hp = hp\n\nh1 = Hahmo("Warrior", 100)\nh2 = Hahmo("Mage", 80)\nprint(f"{h1.nimi}: {h1.hp} HP")\nprint(f"{???.nimi}: {???.hp} HP")`,
        hint: "Korvaa ??? → h2, koska haluat tulostaa toisen hahmon tiedot.",
        validate: (output) => {
            return output.includes('Warrior: 100 HP') && output.includes('Mage: 80 HP');
        },
        successMsg: "Loistavaa! Nyt osaat luoda yksilöllisiä olioita! ⚡",
        failMsg: "Tarkista, että tulostat molemmat hahmot oikeassa muodossa.",
        maxStars: 3
    },
    {
        id: 3,
        title: "Metodit ja toiminnot",
        icon: "🎮",
        description: "Opeta olioillesi uusia taitoja metodeilla!",
        theory: `
            <h3>📖 Metodit = Olion taidot</h3>
            <p>Metodit ovat funktioita luokan sisällä. Ne tekevät oliosta <strong>interaktiivisen</strong> - olio osaa tehdä asioita!</p>
            <pre><code>class Pokemon:
    def __init__(self, nimi, tyyppi, hp):
        self.nimi = nimi
        self.tyyppi = tyyppi
        self.hp = hp

    def esittele(self):
        print(f"{self.nimi} ({self.tyyppi}) - {self.hp} HP")

    def hyokkaa(self, kohde, vahinko):
        kohde.hp -= vahinko
        print(f"{self.nimi} hyökkää! {kohde.nimi}: {kohde.hp} HP jäljellä")

pikachu = Pokemon("Pikachu", "Sähkö", 100)
pikachu.esittele()  # Pikachu (Sähkö) - 100 HP</code></pre>
            <p>Jokainen metodi saa ensimmäisenä parametrina <code>self</code>. Sitä ei anneta kutsuessa - Python hoitaa sen automaattisesti!</p>
        `,
        challenge: `<p>Luo luokka <code>Soturi</code> jolla on <code>nimi</code>, <code>hp</code> ja metodi <code>taistele(self, vahinko)</code>. Metodi vähentää HP:tä ja tulostaa tilanteen. Tulosta:</p>
        <pre><code>Aragorn: 100 HP
Aragorn saa 30 vahinkoa!
Aragorn: 70 HP</code></pre>`,
        starterCode: `class Soturi:\n    def __init__(self, nimi, hp):\n        self.nimi = nimi\n        self.hp = ???\n\n    def status(self):\n        print(f"{self.nimi}: {self.hp} HP")\n\n    def taistele(self, vahinko):\n        self.??? -= vahinko\n        print(f"{self.nimi} saa {vahinko} vahinkoa!")\n\ns = Soturi("Aragorn", 100)\ns.status()\ns.???(30)\ns.status()`,
        hint: "Korvaa ensimmäinen ??? → hp (tallennetaan parametri). Toinen ??? → hp (vähennetään vahinkoa). Kolmas ??? → taistele (kutsutaan metodia).",
        validate: (output) => {
            return output.includes('Aragorn: 100 HP') &&
                   output.includes('Aragorn saa 30 vahinkoa!') &&
                   output.includes('Aragorn: 70 HP');
        },
        successMsg: "Mahtavaa! Soturisi osaa taistella! 🎮⚔️",
        failMsg: "Tarkista, että tulostat statuksen ennen ja jälkeen taistelun.",
        maxStars: 3
    },
    {
        id: 4,
        title: "Perintä (Inheritance)",
        icon: "🧬",
        description: "Opi luomaan luokkia toisten luokkien pohjalta!",
        theory: `
            <h3>📖 Perintä - Luokka toisesta luokasta</h3>
            <p>Perintä tarkoittaa, että uusi luokka <strong>perii</strong> toisen luokan ominaisuudet. Kuin lapsi perii vanhemmiltaan piirteitä!</p>
            <pre><code>class Elain:
    def __init__(self, nimi, aanieli):
        self.nimi = nimi
        self.aanieli = aanieli

    def aantele(self):
        print(f"{self.nimi}: {self.aanieli}!")

class Koira(Elain):    # Koira perii Elain-luokan
    def hae(self, esine):
        print(f"{self.nimi} hakee: {esine}")

rekku = Koira("Rekku", "Hau hau")
rekku.aantele()   # Perii Elain-luokasta!
rekku.hae("pallo")  # Koiran oma metodi</code></pre>
            <p><code>class Koira(Elain)</code> - Sulkuihin kirjoitetaan <strong>kantaluokka</strong>, josta peritään.</p>
        `,
        challenge: `<p>Luo kantaluokka <code>Ajoneuvo</code> ja aliluokka <code>Sahkoauto</code>. Sähköautolla on myös <code>akku</code>-attribuutti. Tulosta:</p>
        <pre><code>Tesla Model 3 - 200 km/h
Akku: 75 kWh</code></pre>`,
        starterCode: `class Ajoneuvo:\n    def __init__(self, nimi, nopeus):\n        self.nimi = nimi\n        self.nopeus = nopeus\n\n    def esittele(self):\n        print(f"{self.nimi} - {self.nopeus} km/h")\n\nclass Sahkoauto(???):\n    def __init__(self, nimi, nopeus, akku):\n        ???.__init__(nimi, nopeus)\n        self.akku = akku\n\n    def nayta_akku(self):\n        print(f"Akku: {self.???} kWh")\n\nauto = Sahkoauto("Tesla Model 3", 200, 75)\nauto.esittele()\nauto.nayta_akku()`,
        hint: "Korvaa ensimmäinen ??? → Ajoneuvo (kantaluokka). Toinen ??? → super() (kutsuu kantaluokan __init__:iä). Kolmas ??? → akku (attribuutti).",
        validate: (output) => {
            return output.includes('Tesla Model 3 - 200 km/h') && output.includes('Akku: 75 kWh');
        },
        successMsg: "Erinomaista! Osaat perinnän! 🧬 Sähköauto perii Ajoneuvon ominaisuudet!",
        failMsg: "Tarkista, että molemmat rivit tulostuvat oikein.",
        maxStars: 3
    },

    // ===== MODULE 2: Moduulit ja Paketit (Lessons 5-7) =====
    {
        id: 5,
        title: "Omat moduulit",
        icon: "📦",
        section: "moduulit",
        description: "Opi järjestämään koodia moduuleihin!",
        theory: `
            <h3>📖 Moduulit - Koodin järjestäminen</h3>
            <p>Moduuli on yksinkertaisesti <strong>Python-tiedosto</strong> (.py), jonka koodia voi käyttää toisesta tiedostosta.</p>
            <p>Pythonissa on paljon <strong>valmiita moduuleja</strong>:</p>
            <pre><code>import math
print(math.pi)        # 3.14159...
print(math.sqrt(16))  # 4.0

import random
print(random.randint(1, 10))  # Satunnaisluku 1-10

import datetime
print(datetime.date.today())  # Tämän päivän päivämäärä</code></pre>
            <p>Voit myös tuoda vain tiettyjä funktioita:</p>
            <pre><code>from math import pi, sqrt
print(pi)       # 3.14159...
print(sqrt(25)) # 5.0</code></pre>
        `,
        challenge: `<p>Käytä <code>math</code>-moduulia: tulosta piin arvo (2 desimaalin tarkkuudella) ja luvun 144 neliöjuuri. Tulosta:</p>
        <pre><code>Pi: 3.14
Neliöjuuri 144: 12.0</code></pre>`,
        starterCode: `import math\n\npi_arvo = round(math.???, 2)\njuuri = math.sqrt(???)\n\nprint(f"Pi: {pi_arvo}")\nprint(f"Neliöjuuri 144: {juuri}")`,
        hint: "Korvaa ??? luvulla 144, jonka neliöjuuren haluat laskea.",
        validate: (output) => {
            return output.includes('Pi: 3.14') && output.includes('12.0');
        },
        successMsg: "Hienoa! Osaat käyttää moduuleja! 📦",
        failMsg: "Tarkista, että lasket sqrt(144) ja pyöristät pi:n kahteen desimaaliin.",
        maxStars: 3
    },
    {
        id: 6,
        title: "Import-tyylit",
        icon: "📥",
        description: "Opi eri tapoja tuoda moduuleja ja funktioita!",
        theory: `
            <h3>📖 Eri tapoja importata</h3>
            <p>Python tarjoaa useita tapoja tuoda moduuleja:</p>
            <pre><code># Tapa 1: Tuo koko moduuli
import random
print(random.choice(["kivi", "paperi", "sakset"]))

# Tapa 2: Tuo tietty funktio
from random import randint
print(randint(1, 100))

# Tapa 3: Tuo useita funktioita
from random import choice, shuffle

# Tapa 4: Anna alias (lyhenne)
import random as r
print(r.randint(1, 6))</code></pre>
            <p><strong>Vinkki:</strong> <code>from moduuli import *</code> tuo kaiken, mutta sitä ei suositella - on vaikea tietää mistä funktiot tulevat!</p>
        `,
        challenge: `<p>Tuo <code>random</code>-moduulista funktiot <code>randint</code> ja <code>choice</code>. Tulosta satunnaisluku 1-20 ja valitse satunnainen hedelmä listasta. Tulosta:</p>
        <pre><code>Luku: [luku]
Hedelmä: [hedelmä]</code></pre>
        <p>(Arvot vaihtelevat, kunhan molemmat rivit tulostuvat.)</p>`,
        starterCode: `from random import ???, ???\n\nluku = randint(1, 20)\nhedelmät = ["omena", "banaani", "mansikka", "appelsiini"]\nvalinta = choice(hedelmät)\n\nprint(f"Luku: {luku}")\nprint(f"Hedelmä: {valinta}")`,
        hint: "Korvaa ??? → randint ja choice. Ne ovat random-moduulin funktioita jotka tuodaan from-import:lla.",
        validate: (output) => {
            return output.includes('Luku:') && output.includes('Hedelmä:');
        },
        successMsg: "Loistavaa! Osaat tuoda funktioita eri tavoilla! 📥",
        failMsg: "Tarkista, että tulostat sekä 'Luku:' että 'Hedelmä:' rivin.",
        maxStars: 3
    },
    {
        id: 7,
        title: "String-moduuli & Salasanageneraattori",
        icon: "🔐",
        description: "Rakennetaan salasanageneraattori moduulien avulla!",
        theory: `
            <h3>📖 string-moduuli</h3>
            <p><code>string</code>-moduuli sisältää valmiita merkkijonoja:</p>
            <pre><code>import string

print(string.ascii_lowercase)   # abcdefghijklmnopqrstuvwxyz
print(string.ascii_uppercase)   # ABCDEFGHIJKLMNOPQRSTUVWXYZ
print(string.digits)            # 0123456789
print(string.punctuation)       # !"#$%&'()*+...

# Yhdistetään random-moduuliin:
import random
merkit = string.ascii_letters + string.digits
salasana = ""
for i in range(8):
    salasana += random.choice(merkit)
print(salasana)  # esim. "kR4mN8xQ"</code></pre>
        `,
        challenge: `<p>Luo salasanageneraattori, joka generoi 12 merkin salasanan. Salasanan pitää sisältää kirjaimia ja numeroita. Tulosta:</p>
        <pre><code>Salasana: [12 merkkiä]
Pituus: 12</code></pre>`,
        starterCode: `import string\nimport random\n\nmerkit = string.ascii_letters + string.???\nsalasana = ""\n\nfor i in range(???):\n    salasana += random.choice(merkit)\n\nprint(f"Salasana: {salasana}")\nprint(f"Pituus: {len(salasana)}")`,
        hint: "Korvaa ensimmäinen ??? → digits (string.digits sisältää numerot). Toinen ??? → 12 (salasanan pituus).",
        validate: (output) => {
            return output.includes('Salasana:') && output.includes('Pituus: 12');
        },
        successMsg: "Mahtavaa! Rakensit salasanageneraattorin! 🔐",
        failMsg: "Tarkista, että salasana on 12 merkkiä pitkä.",
        maxStars: 3
    },

    // ===== MODULE 3: Virheidenkäsittely (Lessons 8-10) =====
    {
        id: 8,
        title: "Try / Except",
        icon: "🛡️",
        section: "virheet",
        description: "Opi käsittelemään virheitä niin ettei ohjelma kaadu!",
        theory: `
            <h3>📖 Virheenkäsittely</h3>
            <p>Normaalisti virhe <strong>kaataa</strong> ohjelman. Mutta <code>try/except</code> antaa sinun <strong>napata</strong> virheen:</p>
            <pre><code># Ilman virheenkäsittelyä - KAATUU!
# luku = int("abc")  # ValueError!

# Virheenkäsittelyllä:
try:
    luku = int("abc")
    print(f"Luku on {luku}")
except ValueError:
    print("Virhe: ei ole numero!")
# Tulostaa: Virhe: ei ole numero!

# Ohjelma jatkuu normaalisti
print("Ohjelma jatkuu...")</code></pre>
            <p><code>try</code>-lohkossa on koodi joka voi aiheuttaa virheen. <code>except</code>-lohko suoritetaan <strong>vain jos</strong> virhe tapahtuu.</p>
        `,
        challenge: `<p>Kirjoita ohjelma, joka yrittää muuttaa kolme arvoa kokonaisluvuiksi. Käytä try/except jokaiselle. Tulosta:</p>
        <pre><code>42 on numero!
abc ei ole numero!
99 on numero!</code></pre>`,
        starterCode: `arvot = ["42", "abc", "99"]\n\nfor arvo in arvot:\n    ???:\n        luku = int(arvo)\n        print(f"{arvo} on numero!")\n    except ???:\n        print(f"{arvo} ei ole numero!")`,
        hint: "Korvaa ensimmäinen ??? → try (aloittaa virheen käsittelyn). Toinen ??? → ValueError (virhetyyppi joka syntyy kun int() saa ei-numeerisen arvon).",
        validate: (output) => {
            return output.includes('42 on numero!') &&
                   output.includes('abc ei ole numero!') &&
                   output.includes('99 on numero!');
        },
        successMsg: "Erinomaista! Ohjelmasi ei kaatunut virheisiin! 🛡️",
        failMsg: "Tarkista, että käsittelet jokaisen arvon for-silmukassa.",
        maxStars: 3
    },
    {
        id: 9,
        title: "Omat poikkeukset",
        icon: "⚠️",
        description: "Luo omia virheilmoituksia raise-komennolla!",
        theory: `
            <h3>📖 raise - Heitä oma virhe</h3>
            <p>Voit myös <strong>itse</strong> aiheuttaa virheen <code>raise</code>-komennolla:</p>
            <pre><code>def aseta_ika(ika):
    if ika < 0:
        raise ValueError("Ikä ei voi olla negatiivinen!")
    if ika > 150:
        raise ValueError("Ikä on liian suuri!")
    return ika

try:
    ika = aseta_ika(-5)
except ValueError as e:
    print(f"Virhe: {e}")
# Tulostaa: Virhe: Ikä ei voi olla negatiivinen!</code></pre>
            <p><code>as e</code> tallentaa virheviestin muuttujaan <code>e</code>, jonka voit tulostaa.</p>
        `,
        challenge: `<p>Kirjoita funktio <code>tarkista_salasana(salasana)</code> joka heittää <code>ValueError</code>:n jos salasana on alle 8 merkkiä. Testaa kolmella salasanalla:</p>
        <pre><code>OK: salasana123
Virhe: Salasana liian lyhyt! (vähintään 8 merkkiä)
OK: turvallinenSalasana</code></pre>`,
        starterCode: `def tarkista_salasana(salasana):\n    if len(salasana) < ???:\n        raise ???("Salasana liian lyhyt! (vähintään 8 merkkiä)")\n    return salasana\n\nsalasanat = ["salasana123", "lyhyt", "turvallinenSalasana"]\n\nfor s in salasanat:\n    try:\n        tarkista_salasana(s)\n        print(f"OK: {s}")\n    except ValueError as e:\n        print(f"Virhe: {e}")`,
        hint: "Korvaa ensimmäinen ??? → 8 (minimipituus). Toinen ??? → ValueError (virhetyyppi joka heitetään raise:llä).",
        validate: (output) => {
            return output.includes('OK: salasana123') &&
                   output.includes('Virhe: Salasana liian lyhyt!') &&
                   output.includes('OK: turvallinenSalasana');
        },
        successMsg: "Mahtavaa! Osaat luoda ja heittää omia poikkeuksia! ⚠️",
        failMsg: "Tarkista funktio ja try/except-rakenne.",
        maxStars: 3
    },
    {
        id: 10,
        title: "Try/Except/Else/Finally",
        icon: "🔄",
        description: "Opi virheenkäsittelyn kaikki osat!",
        theory: `
            <h3>📖 Täydellinen virheenkäsittely</h3>
            <pre><code>try:
    # Koodi joka voi aiheuttaa virheen
    luku = int("42")
except ValueError:
    # Suoritetaan JOS virhe tapahtuu
    print("Ei numero!")
else:
    # Suoritetaan JOS virhettä EI tapahdu
    print(f"Onnistui: {luku}")
finally:
    # Suoritetaan AINA
    print("Valmis!")</code></pre>
            <ul>
                <li><code>try</code> - Yritä tämä koodi</li>
                <li><code>except</code> - Jos virhe, tee tämä</li>
                <li><code>else</code> - Jos EI virhettä, tee tämä</li>
                <li><code>finally</code> - Tee tämä AINA</li>
            </ul>
        `,
        challenge: `<p>Kirjoita jakolasku-funktio joka käyttää kaikkia neljää osaa. Testaa jakamista 0:lla ja normaalilla luvulla:</p>
        <pre><code>Yritetään: 10 / 2
Tulos: 5.0
Lasku valmis!
---
Yritetään: 10 / 0
Virhe: Nollalla ei voi jakaa!
Lasku valmis!</code></pre>`,
        starterCode: `def jaa(a, b):\n    print(f"Yritetään: {a} / {b}")\n    try:\n        tulos = a / b\n    except ???:\n        print("Virhe: Nollalla ei voi jakaa!")\n    ???:\n        print(f"Tulos: {tulos}")\n    finally:\n        print("Lasku valmis!")\n\njaa(10, 2)\nprint("---")\njaa(10, 0)`,
        hint: "Korvaa ensimmäinen ??? → ZeroDivisionError (virhetyyppi nollalla jakamiselle). Toinen ??? → else (suoritetaan kun virhettä EI tapahdu).",
        validate: (output) => {
            return output.includes('Tulos: 5.0') &&
                   output.includes('Nollalla ei voi jakaa') &&
                   output.split('Lasku valmis!').length >= 3;
        },
        successMsg: "Loistavaa! Hallitset virheenkäsittelyn kaikki osat! 🔄",
        failMsg: "Tarkista, että molemmat jakolaskut tulostavat oikein.",
        maxStars: 3
    },

    // ===== MODULE 4: Tiedostot ja Data (Lessons 11-14) =====
    {
        id: 11,
        title: "Sanakirjat (dict)",
        icon: "📚",
        section: "tiedostot",
        description: "Opi tallentamaan tietoa avain-arvo-pareina!",
        theory: `
            <h3>📖 Sanakirjat (Dictionaries)</h3>
            <p>Sanakirja on kuin oikea sanakirja - jokaisella <strong>avaimella</strong> on <strong>arvo</strong>:</p>
            <pre><code>pelaaja = {
    "nimi": "Hero",
    "taso": 10,
    "hp": 100,
    "kokemus": 2500
}

print(pelaaja["nimi"])    # Hero
print(pelaaja["taso"])    # 10

# Lisää uusi tieto
pelaaja["ase"] = "Miekka"

# Käy läpi kaikki
for avain, arvo in pelaaja.items():
    print(f"{avain}: {arvo}")</code></pre>
        `,
        challenge: `<p>Luo sanakirja <code>kortti</code> jossa on pelikortin tiedot ja tulosta ne:</p>
        <pre><code>Pikachu - Sähkö
HP: 60
Hyökkäys: Thunder Shock
Vahinko: 40</code></pre>`,
        starterCode: `kortti = {\n    "nimi": "Pikachu",\n    "tyyppi": ???,\n    "hp": 60,\n    "hyokkays": "Thunder Shock",\n    "vahinko": ???\n}\n\nprint(f"{kortti['nimi']} - {kortti['tyyppi']}")\nprint(f"HP: {kortti['???']}")\nprint(f"Hyökkäys: {kortti['hyokkays']}")\nprint(f"Vahinko: {kortti['vahinko']}")`,
        hint: "Korvaa ensimmäinen ??? → \"Sähkö\" (merkkijono lainausmerkeissä). Toinen ??? → 40 (numero). Kolmas ??? → hp (sanakirjan avain).",
        validate: (output) => {
            return output.includes('Pikachu - Sähkö') &&
                   output.includes('HP: 60') &&
                   output.includes('Thunder Shock') &&
                   output.includes('Vahinko: 40');
        },
        successMsg: "Hienoa! Osaat käyttää sanakirjoja! 📚",
        failMsg: "Tarkista, että kaikki neljä riviä tulostuvat.",
        maxStars: 3
    },
    {
        id: 12,
        title: "JSON-data",
        icon: "📋",
        description: "Opi käsittelemään JSON-muotoista dataa!",
        theory: `
            <h3>📖 JSON - Datan tallennusmuoto</h3>
            <p>JSON (JavaScript Object Notation) on suosittu tapa tallentaa dataa. Se näyttää melkein samalta kuin Pythonin sanakirja!</p>
            <pre><code>import json

# Python dict → JSON-merkkijono
pelaaja = {"nimi": "Hero", "taso": 5, "hp": 100}
json_teksti = json.dumps(pelaaja, indent=2)
print(json_teksti)

# JSON-merkkijono → Python dict
data = json.loads('{"nimi": "Mage", "taso": 3}')
print(data["nimi"])  # Mage</code></pre>
            <p><code>json.dumps()</code> = dict → teksti. <code>json.loads()</code> = teksti → dict.</p>
        `,
        challenge: `<p>Muuta pelaajatiedot JSON-muotoon ja takaisin. Tulosta:</p>
        <pre><code>JSON:
{
  "nimi": "Dragon",
  "level": 15,
  "hp": 500
}
Takaisin: Dragon, Level 15</code></pre>`,
        starterCode: `import json\n\npeluri = {"nimi": "Dragon", "level": 15, "hp": 500}\n\n# Dict → JSON\njson_teksti = json.???(peluri, indent=2)\nprint("JSON:")\nprint(json_teksti)\n\n# JSON → Dict\ntakaisin = json.???(json_teksti)\nprint(f"Takaisin: {takaisin['nimi']}, Level {takaisin['level']}")`,
        hint: "Korvaa ensimmäinen ??? → dumps (dict → JSON-teksti). Toinen ??? → loads (JSON-teksti → dict).",
        validate: (output) => {
            return output.includes('"nimi": "Dragon"') &&
                   output.includes('Takaisin: Dragon, Level 15');
        },
        successMsg: "Mahtavaa! JSON-data hallussa! 📋",
        failMsg: "Tarkista json.dumps() ja json.loads() kutsut.",
        maxStars: 3
    },
    {
        id: 13,
        title: "Tiedostot muistissa",
        icon: "💾",
        description: "Opi käsittelemään tiedostoja Pythonissa!",
        theory: `
            <h3>📖 Tiedostojen käsittely</h3>
            <p>Pythonissa tiedostoja käsitellään <code>open()</code>-funktiolla. Koska käytämme selainta, simuloimme tiedostoja <code>io.StringIO</code>:lla:</p>
            <pre><code>import io

# Simuloidaan tiedostoa muistissa
tiedosto = io.StringIO()

# Kirjoita tiedostoon
tiedosto.write("Rivi 1\\n")
tiedosto.write("Rivi 2\\n")
tiedosto.write("Rivi 3\\n")

# Lue tiedosto alusta
tiedosto.seek(0)
sisalto = tiedosto.read()
print(sisalto)

# Voit myös lukea rivi kerrallaan
tiedosto.seek(0)
for rivi in tiedosto:
    print(f">> {rivi.strip()}")</code></pre>
            <p>Oikeassa Pythonissa käyttäisit <code>open("tiedosto.txt", "w")</code> kirjoitukseen ja <code>open("tiedosto.txt", "r")</code> lukemiseen.</p>
        `,
        challenge: `<p>Kirjoita muistipäiväkirja, joka tallentaa 3 merkintää ja lukee ne takaisin:</p>
        <pre><code>Päiväkirja tallennettu!
---
Maanantai: Opin Python-luokkia
Tiistai: Rakensin pelin
Keskiviikko: Opin JSON-dataa</code></pre>`,
        starterCode: `import io\n\npaivakirja = io.StringIO()\n\n# Kirjoita merkinnät\nmerkinnät = [\n    "Maanantai: Opin Python-luokkia",\n    "Tiistai: Rakensin pelin",\n    "Keskiviikko: Opin JSON-dataa"\n]\n\nfor m in merkinnät:\n    paivakirja.???(m + "\\n")\n\nprint("Päiväkirja tallennettu!")\nprint("---")\n\n# Lue takaisin\npaivakirja.???(0)\nfor rivi in paivakirja:\n    print(rivi.strip())`,
        hint: "Korvaa ensimmäinen ??? → write (kirjoittaa tiedostoon). Toinen ??? → seek (siirtää lukijan takaisin alkuun).",
        validate: (output) => {
            return output.includes('Päiväkirja tallennettu!') &&
                   output.includes('Maanantai: Opin Python-luokkia') &&
                   output.includes('Keskiviikko: Opin JSON-dataa');
        },
        successMsg: "Hienoa! Osaat käsitellä tiedostoja! 💾",
        failMsg: "Tarkista, että kirjoitat ja luet kaikki merkinnät.",
        maxStars: 3
    },
    {
        id: 14,
        title: "Yhteystietokirja-projekti",
        icon: "📒",
        description: "Rakennetaan yhteystietokirja sanakirjoilla ja JSON:lla!",
        theory: `
            <h3>📖 Projekti: Yhteystietokirja</h3>
            <p>Yhdistetään opitut asiat: sanakirjat, JSON ja "tiedostot":</p>
            <pre><code>import json

yhteystiedot = {}

def lisaa(nimi, puhelin, email):
    yhteystiedot[nimi] = {
        "puhelin": puhelin,
        "email": email
    }

def nayta_kaikki():
    for nimi, tiedot in yhteystiedot.items():
        print(f"{nimi}: {tiedot['puhelin']} | {tiedot['email']}")

def tallenna_json():
    return json.dumps(yhteystiedot, indent=2)</code></pre>
        `,
        challenge: `<p>Täydennä yhteystietokirja. Lisää 3 kontaktia ja tallenna JSON-muotoon:</p>
        <pre><code>Yhteystiedot:
Matti: 040-1234567 | matti@email.fi
Liisa: 050-7654321 | liisa@email.fi
Kalle: 045-9876543 | kalle@email.fi
---
Yhteensä: 3 kontaktia</code></pre>`,
        starterCode: `import json\n\nyhteystiedot = {}\n\ndef lisaa(nimi, puhelin, email):\n    yhteystiedot[nimi] = {"puhelin": puhelin, "email": ???}\n\ndef nayta_kaikki():\n    print("Yhteystiedot:")\n    for nimi, tiedot in yhteystiedot.???():\n        print(f"{nimi}: {tiedot['puhelin']} | {tiedot['email']}")\n\n# Lisää kontaktit\nlisaa("Matti", "040-1234567", "matti@email.fi")\nlisaa("Liisa", "050-7654321", "liisa@email.fi")\nlisaa("Kalle", "045-9876543", "kalle@email.fi")\n\nnayta_kaikki()\nprint("---")\nprint(f"Yhteensä: {???(yhteystiedot)} kontaktia")`,
        hint: "Korvaa ensimmäinen ??? → email (parametri). Toinen ??? → items (käy läpi avain-arvo-parit). Kolmas ??? → len (laskee kontaktien määrän).",
        validate: (output) => {
            return output.includes('Matti: 040-1234567') &&
                   output.includes('Liisa: 050-7654321') &&
                   output.includes('Kalle: 045-9876543') &&
                   output.includes('3 kontaktia');
        },
        successMsg: "Mahtavaa! Yhteystietokirja toimii! 📒 Olet rakentanut kokonaisen sovelluksen!",
        failMsg: "Tarkista, että kaikki kolme kontaktia tulostuvat oikein.",
        maxStars: 3
    },

    // ===== MODULE 5: Edistyneet Tietorakenteet (Lessons 15-17) =====
    {
        id: 15,
        title: "Tuplet ja Setit",
        icon: "🧊",
        section: "tietorakenteet",
        description: "Opi Pythonin muut kokoelmatyypit!",
        theory: `
            <h3>📖 Tuple = Muuttumaton lista</h3>
            <p>Tuple on kuin lista, mutta sitä <strong>ei voi muuttaa</strong> luomisen jälkeen:</p>
            <pre><code># Tuple - pyöreät sulut
koordinaatti = (10, 20)
värit = ("punainen", "sininen", "vihreä")
print(koordinaatti[0])  # 10
print(len(värit))       # 3

# Set - aaltosulut, EI duplikaatteja
numerot = {1, 2, 3, 2, 1}
print(numerot)  # {1, 2, 3} - duplikaatit poistettu!

# Set-operaatiot
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a & b)   # {3, 4} - yhteiset
print(a | b)   # {1, 2, 3, 4, 5, 6} - kaikki</code></pre>
        `,
        challenge: `<p>Käytä settejä poistamaan duplikaatit pelaajalistasta ja etsi kahden joukkueen yhteiset pelaajat:</p>
        <pre><code>Uniikit pelaajat: 4
Yhteiset pelaajat: {'Matti', 'Kalle'}
Kaikki pelaajat: 6</code></pre>
        <p>(Settien järjestys voi vaihdella - se on OK!)</p>`,
        starterCode: `joukkue_a = {"Matti", "Liisa", "Kalle", "Matti"}  # Matti kahdesti\njoukkue_b = {"Kalle", "Ville", "Matti", "Anna"}\n\nprint(f"Uniikit pelaajat: {???(joukkue_a)}")\n\nyhteiset = joukkue_a ??? joukkue_b\nprint(f"Yhteiset pelaajat: {yhteiset}")\n\nkaikki = joukkue_a ??? joukkue_b\nprint(f"Kaikki pelaajat: {len(kaikki)}")`,
        hint: "Korvaa ???: len() antaa pituuden, & antaa yhteiset, | yhdistää kaikki. Set poistaa automaattisesti duplikaatit!",
        validate: (output) => {
            return output.includes('Uniikit pelaajat:') &&
                   output.includes('Yhteiset pelaajat:') &&
                   output.includes('Matti') &&
                   output.includes('Kalle') &&
                   output.includes('Kaikki pelaajat: 6');
        },
        successMsg: "Hienoa! Tuplet ja setit hallussa! 🧊",
        failMsg: "Tarkista set-operaatiot: & ja | -merkit.",
        maxStars: 3
    },
    {
        id: 16,
        title: "List Comprehension",
        icon: "⚡",
        description: "Opi luomaan listoja yhdellä rivillä!",
        theory: `
            <h3>📖 List Comprehension - Tehokas listaluonti</h3>
            <p>Pythonissa voit luoda listoja <strong>yhdellä elegantilla rivillä</strong>:</p>
            <pre><code># Perinteinen tapa:
neliöt = []
for x in range(1, 6):
    neliöt.append(x ** 2)
# [1, 4, 9, 16, 25]

# Comprehension - sama asia yhdellä rivillä!
neliöt = [x ** 2 for x in range(1, 6)]

# Voit myös suodattaa:
parilliset = [x for x in range(1, 11) if x % 2 == 0]
# [2, 4, 6, 8, 10]

# Muunna tietoa:
nimet = ["matti", "liisa", "kalle"]
isot = [nimi.upper() for nimi in nimet]
# ["MATTI", "LIISA", "KALLE"]</code></pre>
        `,
        challenge: `<p>Käytä list comprehensionia luomaan:</p>
        <ol>
            <li>Kuutioluvut 1-5 → [1, 8, 27, 64, 125]</li>
            <li>3:lla jaolliset luvut 1-20</li>
        </ol>
        <pre><code>Kuutiot: [1, 8, 27, 64, 125]
3:lla jaolliset: [3, 6, 9, 12, 15, 18]</code></pre>`,
        starterCode: `# Kuutioluvut\nkuutiot = [x ** ??? for x in range(1, ???)]\nprint(f"Kuutiot: {kuutiot}")\n\n# 3:lla jaolliset\njaolliset = [x for x in range(1, 21) if x % ??? == 0]\nprint(f"3:lla jaolliset: {jaolliset}")`,
        hint: "Korvaa ???: x ** 3 on kuutio, range(1, 6) antaa luvut 1-5. x % 3 == 0 tarkistaa jaollisuuden kolmella.",
        validate: (output) => {
            return output.includes('[1, 8, 27, 64, 125]') &&
                   output.includes('[3, 6, 9, 12, 15, 18]');
        },
        successMsg: "Loistavaa! List comprehension on tehokas työkalu! ⚡",
        failMsg: "Tarkista range-arvot ja suodatusehto.",
        maxStars: 3
    },
    {
        id: 17,
        title: "Dict Comprehension & Data",
        icon: "🗂️",
        description: "Luo sanakirjoja ja käsittele dataa ammattilaistyyliin!",
        theory: `
            <h3>📖 Dict Comprehension</h3>
            <p>Sama idea kuin list comprehension, mutta sanakirjoille:</p>
            <pre><code># Luo neliö-sanakirja
neliöt = {x: x**2 for x in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Muunna lista sanakirjaksi
nimet = ["Matti", "Liisa", "Kalle"]
pituudet = {nimi: len(nimi) for nimi in nimet}
# {"Matti": 5, "Liisa": 5, "Kalle": 5}

# Suodata sanakirja
pisteet = {"Matti": 85, "Liisa": 92, "Kalle": 45, "Ville": 78}
hyväksytyt = {n: p for n, p in pisteet.items() if p >= 50}
# {"Matti": 85, "Liisa": 92, "Ville": 78}</code></pre>
        `,
        challenge: `<p>Pelaajilla on pisteitä. Luo dict comprehensionilla:</p>
        <ol>
            <li>Kaikki pelaajat joilla yli 1000 pistettä</li>
            <li>Pisteet tuplattuna</li>
        </ol>
        <pre><code>Top-pelaajat: {'Warrior': 1500, 'Mage': 1200}
Tuplapisteet: {'Warrior': 3000, 'Archer': 1600, 'Mage': 2400, 'Healer': 1000}</code></pre>`,
        starterCode: `pisteet = {"Warrior": 1500, "Archer": 800, "Mage": 1200, "Healer": 500}\n\n# Yli 1000 pistettä\ntop = {n: p for n, p in pisteet.???() if p > ???}\nprint(f"Top-pelaajat: {top}")\n\n# Tuplapisteet\ntupla = {n: p * ??? for n, p in pisteet.items()}\nprint(f"Tuplapisteet: {tupla}")`,
        hint: "Korvaa ???: pisteet.items() antaa avain-arvo-parit. Suodata if p > 1000. Tuplaa kertomalla p * 2.",
        validate: (output) => {
            return output.includes('Warrior') && output.includes('1500') &&
                   output.includes('Mage') && output.includes('1200') &&
                   output.includes('Tuplapisteet:') && output.includes('3000');
        },
        successMsg: "Mahtavaa! Data-käsittely hallussa! 🗂️",
        failMsg: "Tarkista dict comprehension -syntaksi ja suodatusehto.",
        maxStars: 3
    },

    // ===== MODULE 6: Kirjastot ja APIt (Lessons 18-20) =====
    {
        id: 18,
        title: "datetime-moduuli",
        icon: "📅",
        section: "kirjastot",
        description: "Opi käsittelemään aikaa ja päivämääriä!",
        theory: `
            <h3>📖 datetime - Aika ja päivämäärät</h3>
            <pre><code>from datetime import datetime, timedelta

# Nykyinen aika
nyt = datetime.now()
print(nyt.strftime("%d.%m.%Y %H:%M"))

# Luo oma päivämäärä
joulu = datetime(2026, 12, 24, 18, 0)
print(f"Joulu: {joulu.strftime('%d.%m.%Y')}")

# Laskenta aikojen välillä
ero = joulu - nyt
print(f"Jouluun {ero.days} päivää")

# Lisää aikaa
huomenna = nyt + timedelta(days=1)
viikon_paasta = nyt + timedelta(weeks=1)</code></pre>
        `,
        challenge: `<p>Laske syntymäpäivä-laskuri: kuinka monta päivää seuraavaan syntymäpäivään (oletetaan 15.6.2026)?</p>
        <pre><code>Syntymäpäivä: 15.06.2026
Tänään: [päivämäärä]
Päiviä jäljellä: [luku]</code></pre>`,
        starterCode: `from datetime import ???\n\nsynttarit = datetime(2026, 6, 15)\nnyt = datetime.???()\n\nero = synttarit - nyt\n\nprint(f"Syntymäpäivä: {synttarit.strftime('???')}")\nprint(f"Tänään: {nyt.strftime('%d.%m.%Y')}")\nprint(f"Päiviä jäljellä: {ero.???}")`,
        hint: "Korvaa ???: 'from datetime import datetime', datetime.now() antaa nykyhetken. strftime('%d.%m.%Y') muotoilee päivämäärän. ero.days antaa päivien määrän.",
        validate: (output) => {
            return output.includes('Syntymäpäivä: 15.06.2026') &&
                   output.includes('Tänään:') &&
                   output.includes('Päiviä jäljellä:');
        },
        successMsg: "Hienoa! Osaat käsitellä päivämääriä! 📅",
        failMsg: "Tarkista strftime-muotoilu ja erotuksen laskeminen.",
        maxStars: 3
    },
    {
        id: 19,
        title: "Simuloitu API",
        icon: "🌐",
        description: "Opi miten API:t toimivat simuloidulla datalla!",
        theory: `
            <h3>📖 API:t - Datan hakeminen</h3>
            <p>API (Application Programming Interface) on tapa hakea dataa palvelimilta. Koska selaimessa ei voi suoraan kutsua API:a Pythonilla, simuloimme sitä:</p>
            <pre><code>import json

# Simuloidaan API-vastaus
def hae_saa(kaupunki):
    """Simuloitu sää-API"""
    saaennusteet = {
        "Helsinki": {"lämpötila": 5, "sää": "Pilvinen"},
        "Turku": {"lämpötila": 7, "sää": "Aurinkoinen"},
        "Tampere": {"lämpötila": 3, "sää": "Lumisade"}
    }
    if kaupunki in saaennusteet:
        return {"status": "ok", "data": saaennusteet[kaupunki]}
    return {"status": "error", "message": "Kaupunkia ei löydy"}

vastaus = hae_saa("Helsinki")
print(json.dumps(vastaus, indent=2, ensure_ascii=False))</code></pre>
        `,
        challenge: `<p>Luo simuloitu Pokemon-API ja hae kolmen Pokemonin tiedot:</p>
        <pre><code>Pikachu - Sähkö (HP: 35)
Charizard - Tuli (HP: 78)
Tuntematon Pokemon: Mewtwo</code></pre>`,
        starterCode: `def pokemon_api(nimi):\n    tietokanta = {\n        "Pikachu": {"tyyppi": "Sähkö", "hp": 35},\n        "Charizard": {"tyyppi": "Tuli", "hp": 78},\n        "Bulbasaur": {"tyyppi": "Ruoho", "hp": 45}\n    }\n    if nimi ??? tietokanta:\n        return {"löytyi": True, "data": tietokanta[nimi]}\n    return {"löytyi": ???}\n\n# Hae Pokemoneja\nfor pokemon in ["Pikachu", "Charizard", "Mewtwo"]:\n    vastaus = pokemon_api(pokemon)\n    if vastaus[???]:\n        d = vastaus["data"]\n        print(f"{pokemon} - {d['tyyppi']} (HP: {d['hp']})")\n    else:\n        print(f"Tuntematon Pokemon: {pokemon}")`,
        hint: "Korvaa ???: 'in' tarkistaa onko avain sanakirjassa. Palauta False kun ei löydy. Tarkista vastaus['löytyi'] avaimella.",
        validate: (output) => {
            return output.includes('Pikachu - Sähkö (HP: 35)') &&
                   output.includes('Charizard - Tuli (HP: 78)') &&
                   output.includes('Tuntematon Pokemon: Mewtwo');
        },
        successMsg: "Loistavaa! Ymmärrät miten API:t toimivat! 🌐",
        failMsg: "Tarkista API-funktion kutsu ja vastauksen käsittely.",
        maxStars: 3
    },
    {
        id: 20,
        title: "Data-analyysi-projekti",
        icon: "📊",
        description: "Analysoi pelidataa Pythonilla!",
        theory: `
            <h3>📖 Data-analyysi</h3>
            <p>Yhdistetään kaikki opittu: listat, sanakirjat, comprehensions ja funktiot:</p>
            <pre><code>pelaajat = [
    {"nimi": "A", "pisteet": [10, 20, 30]},
    {"nimi": "B", "pisteet": [5, 15, 25]},
]

# Keskiarvo
for p in pelaajat:
    ka = sum(p["pisteet"]) / len(p["pisteet"])
    print(f"{p['nimi']}: {ka:.1f}")

# Paras pelaaja
paras = max(pelaajat, key=lambda p: sum(p["pisteet"]))
print(f"Paras: {paras['nimi']}")</code></pre>
        `,
        challenge: `<p>Analysoi turnauksen tulokset:</p>
        <pre><code>=== Turnaus-analyysi ===
Warrior: keskiarvo 86.7
Mage: keskiarvo 91.0
Archer: keskiarvo 74.3
---
Paras pelaaja: Mage (91.0)
Huonoin pelaaja: Archer (74.3)</code></pre>`,
        starterCode: `pelaajat = [\n    {"nimi": "Warrior", "pisteet": [85, 90, 85]},\n    {"nimi": "Mage", "pisteet": [95, 88, 90]},\n    {"nimi": "Archer", "pisteet": [70, 80, 73]}\n]\n\nprint("=== Turnaus-analyysi ===")\nfor p in pelaajat:\n    ka = ???(p["pisteet"]) / len(p["pisteet"])\n    print(f"{p['nimi']}: keskiarvo {ka:.1f}")\n\nprint("---")\n\n# Paras ja huonoin\ndef keskiarvo(p):\n    return sum(p["pisteet"]) / ???(p["pisteet"])\n\nparas = ???(pelaajat, key=keskiarvo)\nhuonoin = ???(pelaajat, key=keskiarvo)\nprint(f"Paras pelaaja: {paras['nimi']} ({keskiarvo(paras):.1f})")\nprint(f"Huonoin pelaaja: {huonoin['nimi']} ({keskiarvo(huonoin):.1f})")`,
        hint: "Korvaa ???: sum() laskee listan summan, len() antaa pituuden. max() etsii suurimman, min() pienimmän.",
        validate: (output) => {
            return output.includes('Warrior: keskiarvo 86.7') &&
                   output.includes('Mage: keskiarvo 91.0') &&
                   output.includes('Paras pelaaja: Mage') &&
                   output.includes('Huonoin pelaaja: Archer');
        },
        successMsg: "Mahtavaa! Osaat analysoida dataa kuin ammattilainen! 📊",
        failMsg: "Tarkista keskiarvolaskelmat ja max/min-funktiot.",
        maxStars: 3
    },

    // ===== MODULE 7: Edistynyt OOP (Lessons 21-23) =====
    {
        id: 21,
        title: "Peli-luokat",
        icon: "🎲",
        section: "edistynyt_oop",
        description: "Rakennetaan peliobjekteja luokilla!",
        theory: `
            <h3>📖 Peli-arkkitehtuuri luokilla</h3>
            <p>Oikeat pelit käyttävät luokkia järjestämään koodia:</p>
            <pre><code>class Esine:
    def __init__(self, nimi, tyyppi, arvo):
        self.nimi = nimi
        self.tyyppi = tyyppi
        self.arvo = arvo

    def __str__(self):
        return f"{self.nimi} ({self.tyyppi}): +{self.arvo}"

class Inventaario:
    def __init__(self):
        self.esineet = []

    def lisaa(self, esine):
        self.esineet.append(esine)
        print(f"Lisättiin: {esine}")

    def nayta(self):
        for e in self.esineet:
            print(f"  - {e}")</code></pre>
            <p><code>__str__</code> on erikoismetodi - se määrittää miten olio tulostuu tekstinä!</p>
        `,
        challenge: `<p>Luo inventaariojärjestelmä jolla on esineitä. Tulosta:</p>
        <pre><code>Lisättiin: Miekka (ase): +25
Lisättiin: Kilpi (puolustus): +15
Lisättiin: Juoma (terveys): +50
---
Inventaario:
  - Miekka (ase): +25
  - Kilpi (puolustus): +15
  - Juoma (terveys): +50
Esineitä: 3</code></pre>`,
        starterCode: `class Esine:\n    def __init__(self, nimi, tyyppi, arvo):\n        self.nimi = nimi\n        self.tyyppi = tyyppi\n        self.??? = arvo\n\n    def ???(self):\n        return f"{self.nimi} ({self.tyyppi}): +{self.arvo}"\n\nclass Inventaario:\n    def __init__(self):\n        self.esineet = []\n\n    def lisaa(self, esine):\n        self.esineet.???(esine)\n        print(f"Lisättiin: {esine}")\n\n    def nayta(self):\n        print("Inventaario:")\n        for e in self.esineet:\n            print(f"  - {e}")\n        print(f"Esineitä: {???(self.esineet)}")\n\ninv = Inventaario()\ninv.lisaa(Esine("Miekka", "ase", 25))\ninv.lisaa(Esine("Kilpi", "puolustus", 15))\ninv.lisaa(Esine("Juoma", "terveys", 50))\nprint("---")\ninv.nayta()`,
        hint: "Korvaa ???: self.arvo tallentaa arvon. __str__ on erikoismetodi joka määrittää tulostuksen. append() lisää listaan. len() laskee pituuden.",
        validate: (output) => {
            return output.includes('Lisättiin: Miekka (ase): +25') &&
                   output.includes('Lisättiin: Kilpi (puolustus): +15') &&
                   output.includes('Lisättiin: Juoma (terveys): +50') &&
                   output.includes('Esineitä: 3');
        },
        successMsg: "Loistavaa! Inventaariojärjestelmä toimii! 🎲",
        failMsg: "Tarkista Esine- ja Inventaario-luokat.",
        maxStars: 3
    },
    {
        id: 22,
        title: "Dekoraattorit",
        icon: "🎀",
        description: "Opi dekoraattorit - funktioita funktioille!",
        theory: `
            <h3>📖 Dekoraattorit</h3>
            <p>Dekoraattori on funktio, joka <strong>käärii</strong> toisen funktion ja lisää sille ominaisuuksia:</p>
            <pre><code>def loki(funktio):
    def wrapper(*args, **kwargs):
        print(f"Kutsutaan: {funktio.__name__}")
        tulos = funktio(*args, **kwargs)
        print(f"Tulos: {tulos}")
        return tulos
    return wrapper

@loki
def laske_summa(a, b):
    return a + b

laske_summa(5, 3)
# Kutsutaan: laske_summa
# Tulos: 8</code></pre>
            <p><code>@loki</code> on sama kuin <code>laske_summa = loki(laske_summa)</code>. Se "käärii" funktion!</p>
        `,
        challenge: `<p>Luo <code>@ajastin</code>-dekoraattori, joka mittaa funktion suoritusajan:</p>
        <pre><code>Suoritetaan: laske...
laske valmis! (aika mitattu)
Tulos: 499999500000
---
Suoritetaan: tervehdi...
tervehdi valmis! (aika mitattu)
Hei, maailma!</code></pre>`,
        starterCode: `def ajastin(funktio):\n    def ???(*args, **kwargs):\n        print(f"Suoritetaan: {funktio.???}...")\n        tulos = funktio(*args, **kwargs)\n        print(f"{funktio.__name__} valmis! (aika mitattu)")\n        return tulos\n    return ???\n\n@ajastin\ndef laske():\n    return ???(range(1000000))\n\n@ajastin\ndef tervehdi():\n    print("Hei, maailma!")\n\ntulos = laske()\nprint(f"Tulos: {tulos}")\nprint("---")\ntervehdi()`,
        hint: "Korvaa ???: wrapper on sisäfunktio. funktio.__name__ antaa nimen. return wrapper palauttaa kääreen. sum() laskee summan.",
        validate: (output) => {
            return output.includes('Suoritetaan: laske') &&
                   output.includes('laske valmis!') &&
                   output.includes('499999500000') &&
                   output.includes('Suoritetaan: tervehdi') &&
                   output.includes('Hei, maailma!');
        },
        successMsg: "Mahtavaa! Dekoraattorit hallussa! 🎀",
        failMsg: "Tarkista wrapper-funktion rakenne ja return-lauseet.",
        maxStars: 3
    },
    {
        id: 23,
        title: "Generaattorit & Yield",
        icon: "🔁",
        description: "Opi tehokkaita tapoja tuottaa dataa!",
        theory: `
            <h3>📖 Generaattorit</h3>
            <p>Generaattori on funktio joka <strong>tuottaa</strong> arvoja yksi kerrallaan <code>yield</code>:llä:</p>
            <pre><code>def laske_ylös(max):
    luku = 1
    while luku <= max:
        yield luku
        luku += 1

# Käytä for-silmukassa
for n in laske_ylös(5):
    print(n)  # 1, 2, 3, 4, 5

# Fibonacci-generaattori
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fibonacci(8)))
# [0, 1, 1, 2, 3, 5, 8, 13]</code></pre>
            <p><code>yield</code> "palauttaa" arvon mutta <strong>ei lopeta</strong> funktiota - se jatkaa seuraavalla kutsulla!</p>
        `,
        challenge: `<p>Luo generaattori joka tuottaa parillisia lukuja ja Fibonacci-lukuja:</p>
        <pre><code>Parilliset (10 kpl): [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
Fibonacci (10 kpl): [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</code></pre>`,
        starterCode: `def parilliset(n):\n    luku = 0\n    for _ in range(n):\n        ??? luku\n        luku += ???\n\ndef fibonacci(n):\n    a, b = 0, ???\n    for _ in range(n):\n        yield a\n        a, b = b, a ??? b\n\nprint(f"Parilliset (10 kpl): {list(parilliset(10))}")\nprint(f"Fibonacci (10 kpl): {???(fibonacci(10))}")`,
        hint: "Korvaa ???: yield palauttaa arvon generaattorista. Parilliset kasvavat 2:lla (luku += 2). Fibonacci: b alkaa 1:stä, a + b antaa seuraavan. list() muuttaa generaattorin listaksi.",
        validate: (output) => {
            return output.includes('[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]') &&
                   output.includes('[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]');
        },
        successMsg: "Loistavaa! Generaattorit ovat tehokas työkalu! 🔁",
        failMsg: "Tarkista yield-lauseet ja laskukaavat.",
        maxStars: 3
    },

    // ===== MODULE 8: Lopputyö (Lessons 24-26) =====
    {
        id: 24,
        title: "RPG-peli: Hahmot",
        icon: "⚔️",
        section: "lopputyo",
        description: "Aloitetaan iso lopputyö - RPG-taistelupeli!",
        theory: `
            <h3>📖 Lopputyö: RPG-taistelupeli</h3>
            <p>Nyt yhdistetään <strong>kaikki</strong> mitä olet oppinut! Rakennetaan RPG-taistelupeli kolmessa osassa:</p>
            <ol>
                <li><strong>Osa 1</strong> (tämä tehtävä): Hahmo-luokat ja perintä</li>
                <li><strong>Osa 2</strong>: Taistelu-mekaniikka</li>
                <li><strong>Osa 3</strong>: Täysi peli</li>
            </ol>
            <pre><code>class Hahmo:
    def __init__(self, nimi, hp, voima):
        self.nimi = nimi
        self.hp = hp
        self.max_hp = hp
        self.voima = voima

    def on_elossa(self):
        return self.hp > 0

    def status(self):
        return f"{self.nimi}: {self.hp}/{self.max_hp} HP"</code></pre>
        `,
        challenge: `<p>Luo <code>Hahmo</code>-kantaluokka ja <code>Soturi</code>- sekä <code>Velho</code>-aliluokat. Soturilla on bonusvoima, Velholla mana:</p>
        <pre><code>=== RPG Hahmot ===
Conan (Soturi): 120/120 HP, Voima: 25
Gandalf (Velho): 80/80 HP, Mana: 100
---
Conan on elossa: True
Gandalf on elossa: True</code></pre>`,
        starterCode: `class Hahmo:\n    def __init__(self, nimi, hp, voima):\n        self.nimi = nimi\n        self.hp = hp\n        self.max_hp = hp\n        self.voima = voima\n\n    def on_elossa(self):\n        return self.hp > ???\n\nclass Soturi(???):\n    def __init__(self, nimi, hp, voima):\n        ???.__init__(nimi, hp, voima)\n        self.luokka = "Soturi"\n\n    def status(self):\n        return f"{self.nimi} ({self.luokka}): {self.hp}/{self.max_hp} HP, Voima: {self.voima}"\n\nclass Velho(Hahmo):\n    def __init__(self, nimi, hp, voima, mana):\n        super().__init__(nimi, hp, voima)\n        self.luokka = "Velho"\n        self.??? = mana\n\n    def status(self):\n        return f"{self.nimi} ({self.luokka}): {self.hp}/{self.max_hp} HP, Mana: {self.mana}"\n\nprint("=== RPG Hahmot ===")\nconan = Soturi("Conan", 120, 25)\ngandalf = Velho("Gandalf", 80, 15, 100)\nprint(conan.status())\nprint(gandalf.status())\nprint("---")\nprint(f"Conan on elossa: {conan.???(  )}")\nprint(f"Gandalf on elossa: {gandalf.on_elossa()}")`,
        hint: "Korvaa ???: self.hp > 0 tarkistaa onko elossa. Soturi(Hahmo) perii Hahmo-luokasta. super().__init__() kutsuu kantaluokkaa. self.mana tallentaa manan. on_elossa() kutsuu metodia.",
        validate: (output) => {
            return output.includes('Conan (Soturi): 120/120 HP, Voima: 25') &&
                   output.includes('Gandalf (Velho): 80/80 HP, Mana: 100') &&
                   output.includes('Conan on elossa: True') &&
                   output.includes('Gandalf on elossa: True');
        },
        successMsg: "Hahmot valmiina! Seuraavaksi taistelu! ⚔️",
        failMsg: "Tarkista luokkien perintä ja status-metodit.",
        maxStars: 3
    },
    {
        id: 25,
        title: "RPG-peli: Taistelu",
        icon: "💥",
        description: "Lisätään taistelumekaniikka RPG-peliin!",
        theory: `
            <h3>📖 Taistelumekaniikka</h3>
            <p>Lisätään hahmoille hyökkäys-metodit ja taistelufunktio:</p>
            <pre><code>import random

class Hahmo:
    def hyokkaa(self, kohde):
        vahinko = random.randint(1, self.voima)
        kohde.hp = max(0, kohde.hp - vahinko)
        return vahinko</code></pre>
            <p><code>max(0, hp - vahinko)</code> varmistaa ettei HP mene alle nollan.</p>
        `,
        challenge: `<p>Simuloi taistelu Soturin ja Velhon välillä (käytä random.seed(42) toistettavuuteen):</p>
        <pre><code>=== TAISTELU ===
Conan vs Gandalf
---
[Taistelukierrokset...]
---
Voittaja: [nimi]!</code></pre>`,
        starterCode: `import random\nrandom.seed(42)\n\nclass Hahmo:\n    def __init__(self, nimi, hp, voima, luokka):\n        self.nimi = nimi\n        self.hp = hp\n        self.max_hp = hp\n        self.voima = voima\n        self.luokka = luokka\n\n    def on_elossa(self):\n        return self.hp > 0\n\n    def hyokkaa(self, kohde):\n        vahinko = random.???(1, self.voima)\n        kohde.hp = ???(0, kohde.hp - vahinko)\n        print(f"  {self.nimi} hyökkää → {vahinko} vahinkoa! ({kohde.nimi}: {kohde.hp} HP)")\n\nconan = Hahmo("Conan", 100, 20, "Soturi")\ngandalf = Hahmo("Gandalf", 80, 25, "Velho")\n\nprint("=== TAISTELU ===")\nprint(f"{conan.nimi} vs {gandalf.nimi}")\nprint("---")\n\nkierros = 1\nwhile conan.on_elossa() ??? gandalf.on_elossa():\n    print(f"Kierros {kierros}:")\n    conan.hyokkaa(gandalf)\n    if gandalf.???():\n        gandalf.hyokkaa(conan)\n    kierros += 1\n\nprint("---")\nvoittaja = conan if conan.on_elossa() else gandalf\nprint(f"Voittaja: {voittaja.nimi}!")`,
        hint: "Korvaa ???: random.randint(1, voima) arpoo vahingon. max(0, hp-vahinko) estää negatiiviset HP:t. 'and' tarkistaa molemmat ehdot. on_elossa() tarkistaa HP:n.",
        validate: (output) => {
            return output.includes('=== TAISTELU ===') &&
                   output.includes('Conan vs Gandalf') &&
                   output.includes('Voittaja:') &&
                   output.includes('hyökkää');
        },
        successMsg: "Epäilemätön taistelu! RPG-pelisi toimii! 💥",
        failMsg: "Tarkista while-silmukka ja hyökkäyslogiikka.",
        maxStars: 3
    },
    {
        id: 26,
        title: "RPG-peli: Valmis!",
        icon: "🏆",
        description: "Viimeistele RPG-peli kaikilla ominaisuuksilla!",
        theory: `
            <h3>📖 Valmis RPG-peli!</h3>
            <p>Viimeinen tehtävä yhdistää kaiken: luokat, perintä, metodit, sanakirjat, satunnaisuus, virheenkäsittely ja data-analyysi.</p>
            <p>Tee pelistä sellainen, jossa:</p>
            <ul>
                <li>3 erilaista hahmoa taistelee turnauksessa</li>
                <li>Jokainen taistelu kirjataan historiaan</li>
                <li>Lopussa näytetään tilastot</li>
            </ul>
        `,
        challenge: `<p>Luo kolmen hahmon turnaus ja näytä tilastot:</p>
        <pre><code>=== TURNAUS ===
[3 taistelua]
=== TILASTOT ===
[voitot per hahmo]
Turnauksen voittaja: [nimi]!</code></pre>`,
        starterCode: `import random\nrandom.seed(123)\n\nclass Hahmo:\n    def __init__(self, nimi, hp, voima):\n        self.nimi = nimi\n        self.hp = hp\n        self.max_hp = hp\n        self.voima = voima\n        self.voitot = 0\n\n    def on_elossa(self):\n        return self.hp > ???\n\n    def hyokkaa(self, kohde):\n        vahinko = random.???(1, self.voima)\n        kohde.hp = max(0, kohde.hp - vahinko)\n        return vahinko\n\n    def palauta_hp(self):\n        self.hp = self.???\n\ndef taistelu(h1, h2):\n    h1.palauta_hp()\n    h2.palauta_hp()\n    print(f"\\n⚔️ {h1.nimi} vs {h2.nimi}")\n    while h1.on_elossa() ??? h2.on_elossa():\n        h1.hyokkaa(h2)\n        if h2.on_elossa():\n            h2.hyokkaa(h1)\n    voittaja = h1 if h1.on_elossa() else h2\n    voittaja.voitot += ???\n    print(f"  Voittaja: {voittaja.nimi}!")\n    return voittaja\n\n# Luo hahmot\nhahmot = [\n    Hahmo("Conan", 100, 18),\n    Hahmo("Gandalf", 80, 22),\n    Hahmo("Legolas", 90, 20)\n]\n\nprint("=== TURNAUS ===")\n\n# Jokainen taistelee jokaista vastaan\nfor i in range(len(hahmot)):\n    for j in range(i+1, len(hahmot)):\n        taistelu(hahmot[i], hahmot[j])\n\nprint("\\n=== TILASTOT ===")\nfor h in hahmot:\n    print(f"{h.nimi}: {h.voitot} voittoa")\n\nvoittaja = ???(hahmot, key=lambda h: h.voitot)\nprint(f"\\nTurnauksen voittaja: {voittaja.nimi}! 🏆")`,
        hint: "Korvaa ???: hp > 0 tarkistaa elossa-tilan. randint(1, voima) arpoo vahingon. max_hp palauttaa täydet HP:t. 'and' yhdistää ehdot. voitot += 1 lisää voiton. max() etsii parhaan.",
        validate: (output) => {
            return output.includes('=== TURNAUS ===') &&
                   output.includes('=== TILASTOT ===') &&
                   output.includes('Turnauksen voittaja:') &&
                   output.includes('voittoa');
        },
        successMsg: "🎉🏆 ONNEKSI OLKOON! Olet suorittanut Python Pro -kurssin! Olet nyt oikea Python-ammattilainen! 🏆🎉",
        failMsg: "Tarkista turnauksen rakenne ja tilastojen laskenta.",
        maxStars: 3
    }
];
