//e2e/jest-puppeteer.config.js

module.exports = {
    launch: {
        headless: false,
        args: ["--window-size=1366,768"]
    },
    browser: 'chromium'
};
