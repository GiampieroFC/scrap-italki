import { scrapSpanishLang } from "./scrapper/scrap_spanish_lang.js";
import { email_sender } from "./email_sender/email_sender.js";
import { parse_date } from "./utils/parse_date.js";

async function main() {

    console.log("🕷️ ... Inicia el scrapping ...🕸️");

    try {

        const languageScrapped = await scrapSpanishLang();

        console.log(`${parse_date(new Date())}: `, languageScrapped);

        if (languageScrapped.tutor.trim().toLowerCase() === 'open') {
            console.log(new Date().toISOString(), "💌: se envía mail");
            await email_sender({
                subject: '✅ EMPEZAMOS',
                text: JSON.stringify(languageScrapped, null, 2),
            });
        }
    } catch (error) {

        console.error("❌ =>", error);
    }
}

main();