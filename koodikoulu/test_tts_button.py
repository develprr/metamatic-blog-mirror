"""
Playwright test: Verify the TTS listen button on the live Koodikoulu site.
Tests one exercise from each section.
"""
import asyncio
from playwright.async_api import async_playwright

BASE = "https://www.metamatic.net/heikin-koodikoulu/"
# One from each section: Perus, Ekspertti, Syventävä, Operaattorit, Merkkijonot, Listat
SAMPLE_IDS = [1, 5, 10, 11, 16, 17, 26, 27, 46, 47, 66, 67, 86]

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        print("Loading page...")
        await page.goto(BASE, timeout=60000)
        await page.wait_for_timeout(5000)

        passed = 0
        failed = 0

        for lid in SAMPLE_IDS:
            item = await page.query_selector(f"#lesson-item-{lid}")
            if not item:
                print(f"  SKIP ID {lid}: sidebar item not found")
                continue

            await item.click()
            await page.wait_for_timeout(600)

            btn = await page.query_selector("#btn-listen")
            if btn and await btn.is_visible():
                print(f"  PASS ID {lid}: Listen button visible")
                passed += 1
            else:
                print(f"  FAIL ID {lid}: Listen button NOT visible")
                failed += 1

        await browser.close()

        print(f"\nResults: {passed}/{passed+failed} passed")
        if failed == 0:
            print("ALL TESTS PASSED!")
        else:
            print(f"{failed} TESTS FAILED!")

asyncio.run(main())
