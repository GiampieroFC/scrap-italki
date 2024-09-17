FROM alpine

RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    nodejs \
    yarn

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN yarn add puppeteer@13.5.0

RUN addgroup -S pptruser && adduser -S -G pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads /app \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /app

COPY package.json .
COPY src2 .
COPY puppeteer.config.cjs .

RUN yarn
USER pptruser

CMD ["yarn", "pm2", "start", "app.mjs", "--cron", "* */8 * * *", "--no-daemon"]
