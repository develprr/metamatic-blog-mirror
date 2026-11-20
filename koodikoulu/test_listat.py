"""
Playwright test: Testaa kaikki 20 listatehtävää (IDs 67-86) tuotannossa.
"""
import asyncio
from playwright.async_api import async_playwright

PROD_URL = "https://www.metamatic.net/heikin-koodikoulu/"

SOLUTIONS = {
    67: 'elaimet = ["koira", "kissa", "kani"]\nprint(elaimet)',
    68: 'kaupat = ["Prisma", "K-market", "Lidl", "S-market", "Alepa"]\nprint(len(kaupat))',
    69: 'hedelmät = ["omena", "banaani", "kiivi"]\nprint(hedelmät[1])',
    70: 'hedelmät = ["omena", "banaani", "kiivi"]\nhedelmät.append("mansikka")\nprint(hedelmät)\nprint(len(hedelmät))',
    71: 'kirjaimet = ["A", "C", "D"]\nkirjaimet.insert(1, "B")\nprint(kirjaimet)',
    72: 'ostoslista = ["leipä", "maito", "juusto", "voi"]\nostoslista.remove("maito")\nprint(ostoslista)',
    73: 'pisteet = [85, 92, 78, 95]\nparas = pisteet.pop()\nprint(f"Paras: {paras}")\nprint(f"Loput: {pisteet}")',
    74: 'numerot = [42, 7, 99, 13, 25]\nnumerot.sort()\nprint(numerot)',
    75: 'luvut = [1, 2, 3, 4, 5]\nluvut.reverse()\nprint(luvut)',
    76: 'kielet = ["Python", "Java", "JavaScript", "C++"]\nprint("Python" in kielet)',
    77: 'arvosanat = ["A", "B", "C", "D", "E"]\nsijainti = arvosanat.index("C")\nprint(sijainti)',
    78: 'eläimet = ["koira", "kissa", "kani", "kissa", "kissa"]\nmontako = eläimet.count("kissa")\nprint(montako)',
    79: 'luvut = [10, 20, 30, 40, 50]\nkeskellä = luvut[1:4]\nprint(keskellä)',
    80: 'arvot = [12, 45, 7, 23, 38]\nprint(min(arvot))\nprint(max(arvot))\nprint(sum(arvot))',
    81: 'hedelmät = ["omena", "banaani", "kiivi"]\nfor hedelmä in hedelmät:\n    print(hedelmä)',
    82: 'alku = [1, 2, 3]\nloppu = [4, 5, 6]\nkaikki = alku + loppu\nprint(kaikki)',
    83: 'tavarat = ["hyvä", "vanha", "kiva"]\ntavarat[1] = "uusi"\nprint(tavarat)',
    84: 'numerot = list(range(1, 6))\nprint(numerot)',
    85: 'taulukko = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\nprint(taulukko[1][1])',
    86: '# 1. Pituus\npisteet = [85, 92, 78, 95, 88]\nprint(len(pisteet) == 5)\n\n# 2. Suurin arvo\nprint(max(pisteet) == 95)\n\n# 3. Jäsenyys\nprint(92 in pisteet)\n\n# 4. Järjestä ja tarkista ensimmäinen\npisteet.sort()\nprint(pisteet[0] == 78)',
}


async def run_tests():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()

        print(f"Opening {PROD_URL} ...")
        await page.goto(PROD_URL, wait_until="networkidle", timeout=60000)

        print("Waiting for Pyodide to load...")
        await page.wait_for_selector("#app:not(.hidden)", timeout=120000)
        print("Pyodide loaded!\n")

        passed = 0
        failed = 0
        errors = []

        for exercise_id in range(67, 87):
            solution = SOLUTIONS[exercise_id]

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

            await page.wait_for_selector("#lesson-view:not(.hidden)", timeout=5000)

            editor = page.locator("#code-editor")
            await editor.fill("")
            await editor.fill(solution)

            run_btn = page.locator("button.btn-run")
            await run_btn.click()

            try:
                await page.wait_for_selector("#result-box:not(.hidden)", timeout=30000)
            except Exception as e:
                msg = f"  FAIL #{exercise_id}: Result box did not appear (timeout): {e}"
                print(msg)
                errors.append(msg)
                failed += 1
                continue

            result_box = page.locator("#result-box")
            classes = await result_box.get_attribute("class") or ""

            if "success" in classes:
                output = await page.locator("#output-area").text_content()
                print(f"  PASS #{exercise_id}: Output={output.strip()!r}")
                passed += 1
            else:
                output = await page.locator("#output-area").text_content()
                msg = f"  FAIL #{exercise_id}: Output={output.strip()!r}, classes={classes}"
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
