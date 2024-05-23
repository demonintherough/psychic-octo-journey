jest.setTimeout(60000)

describe('Basic authentication e2e tests', () => {
    beforeAll( async () => {
        // Set a definite size for the page viewport so view is consistent across browsers
        await page.setViewport( {
            width: 1366,
            height: 768,
            deviceScaleFactor: 1
        } );
        await page.goto('https://www.google.com');
    } );

    it( 'Should be truthy', async () => {
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('google');
    })
});
