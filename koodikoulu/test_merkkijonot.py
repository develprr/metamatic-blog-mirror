"""
Playwright test: Testaa kaikki 20 merkkijonotehtävää (IDs 47-66) tuotannossa.
Avaa Koodikoulu, odottaa Pyodide-latauksen, navigoi jokaiseen tehtävään,
syöttää oikean koodin ja tarkistaa onnistumisen.
"""
import asyncio
from playwright.async_api import async_playwright

PROD_URL = "https://www.metamatic.net/heikin-koodikoulu/"

# Tehtävä ID -> oikea koodi (korvaa starterCode kokonaan)
SOLUTIONS = {
    47: 'sana = "Koodikoulu"\npituus = len(sana)\nprint(pituus)',
    48: 'teksti = "tervetuloa"\niso = teksti.upper()\nprint(iso)',
    49: 'teksti = "HEI MAAILMA"\npieni = teksti.lower()\nprint(pieni)',
    50: 'sana = "Koodi"\nkirjain = sana[0]\nprint(kirjain)',
    51: 'lause = "Hei kaikki!"\nviimeinen = lause[-1]\nprint(viimeinen)',
    52: 'teksti = "Koodikoulu"\nalku = teksti[0:5]\nprint(alku)',
    53: 'lause = "Rakastan Javaa"\nuusi = lause.replace("Javaa", "Pythonia")\nprint(uusi)',
    54: 'teksti = "Heikin koulu"\nsijainti = teksti.find("koulu")\nprint(sijainti)',
    55: 'lause = "Python on kivaa"\nsanat = lause.split()\nprint(len(sanat))',
    56: 'sanat = ["Python", "on", "paras"]\ntulos = "-".join(sanat)\nprint(tulos)',
    57: 'syote = "   Tervetuloa   "\nsiisti = syote.strip()\nprint(siisti)',
    58: 'teksti = "hei kaikki yhdessä"\ntulos = teksti.title()\nprint(tulos)',
    59: 'sana = "Koodikoulu"\nmaara = sana.count("o")\nprint(maara)',
    60: 'tiedosto = "kuva.png"\nprint(tiedosto.endswith(".png"))\nprint(tiedosto.startswith("kuva"))',
    61: 'nimi = "Ada"\nviesti = f"Moi, nimeni on {nimi}!"\nprint(viesti)',
    62: 'numero = "2026"\nprint(numero.isdigit())\n\nkirjaimet = "Python"\nprint(kirjaimet.isalpha())',
    63: 'sana = "moi"\nkaannetty = sana[::-1]\nprint(kaannetty)',
    64: 'teksti = """Rivi 1\nRivi 2"""\nprint(teksti)',
    65: 'agentti = "7"\nkoodi = agentti.zfill(3)\nprint(koodi)',
    66: '# 1. Pituus\nsana = "Koodikoulu"\nprint(len(sana) == 10)\n\n# 2. Isot kirjaimet\nprint("python".upper() == "PYTHON")\n\n# 3. Viimeinen merkki\nprint("ohjelmointi"[-1] == "i")\n\n# 4. Korvaa ja tarkista\nlause = "Java on kiva"\nprint(lause.replace("Java", "Python") == "Python on kiva")',
}


async def run_tests():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()

        print(f"Opening {PROD_URL} ...")
        await page.goto(PROD_URL, wait_until="networkidle", timeout=60000)

        # Wait for Pyodide to load (loading screen disappears, app becomes visible)
        print("Waiting for Pyodide to load...")
        await page.wait_for_selector("#app:not(.hidden)", timeout=120000)
        print("Pyodide loaded!\n")

        # We need to find the LESSONS array index for each exercise ID
        # The sidebar has items with id="lesson-item-{id}"
        # Clicking them calls goToLesson(index)

        passed = 0
        failed = 0
        errors = []

        for exercise_id in range(47, 67):
            solution = SOLUTIONS[exercise_id]

            # Click the sidebar item for this exercise
            sidebar_item = page.locator(f"#lesson-item-{exercise_id}")
            try:
                await sidebar_item.scroll_into_view_if_needed(timeout=5000)
                await sidebar_item.click(timeout=5000)
            except Exception as e:
                msg = f"  FAIL #{exercise_id}: Could not find/click sidebar item: {e}"
                print(msg)
                errors.append(msg)
                failed += 1
                continue

            # Wait for lesson view to be visible
            await page.wait_for_selector("#lesson-view:not(.hidden)", timeout=5000)

            # Clear editor and type solution
            editor = page.locator("#code-editor")
            await editor.fill("")
            await editor.fill(solution)

            # Click "Suorita" button
            run_btn = page.locator("button.btn-run")
            await run_btn.click()

            # Wait for result box to appear (success or fail)
            try:
                await page.wait_for_selector("#result-box:not(.hidden)", timeout=30000)
            except Exception as e:
                msg = f"  FAIL #{exercise_id}: Result box did not appear (timeout): {e}"
                print(msg)
                errors.append(msg)
                failed += 1
                continue

            # Check if success or fail
            result_box = page.locator("#result-box")
            classes = await result_box.get_attribute("class") or ""

            if "success" in classes:
                # Also check output for sanity
                output = await page.locator("#output-area").text_content()
                print(f"  PASS #{exercise_id}: Output={output.strip()!r}")
                passed += 1
            else:
                output = await page.locator("#output-area").text_content()
                msg = f"  FAIL #{exercise_id}: Output={output.strip()!r}, result_box classes={classes}"
                print(msg)
                errors.append(msg)
                failed += 1

        print(f"\n{'='*50}")
        print(f"RESULTS: {passed} passed, {failed} failed out of 20")
        print(f"{'='*50}")

        if errors:
            print("\nFailed exercises:")
            for e in errors:
                print(e)

        await browser.close()
        return failed == 0


if __name__ == "__main__":
    success = asyncio.run(run_tests())
    exit(0 if success else 1)
