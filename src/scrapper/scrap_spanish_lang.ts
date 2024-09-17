'use strict';
import puppeteer from "puppeteer";
import { Envs, getEnv } from "../adapters/config/envs";

export async function scrapSpanishLang() {

    const browser = await puppeteer.launch(/* { executablePath: '/chrome-linux/chrome_sandbox' } */);
    const page = await browser.newPage(
        // {
        // headless: true,
        // args: ['--no-sandbox', '--disable-setuid-sandbox'],
        // }
    );

    page.setUserAgent(getEnv(Envs.USER_AGENT));

    await page.goto(getEnv(Envs.SCRAP_URL), {
        waitUntil: 'networkidle2',
        timeout: 60000
    });

    const languageScrapped = await page.evaluate(function () {

        interface languageScrapped {
            language: string;
            pro: string;
            tutor: string;
        }

        let result: languageScrapped = {
            language: 'empty',
            pro: 'empty',
            tutor: 'empty',
        };

        const raw_rows = document.querySelectorAll('tr');
        const rows = Array.from(raw_rows);

        rows.forEach(function (row) {
            const cell = row.querySelectorAll('td');

            if (cell[0].innerText.trim() === 'Spanish') {
                result = {
                    ...result,
                    language: cell[0].innerText.trim(),
                    pro: cell[1].innerText.trim(),
                    tutor: cell[2].innerText.trim(),
                };
            }
        });

        return result;
    });

    await browser.close();

    return languageScrapped;
};
