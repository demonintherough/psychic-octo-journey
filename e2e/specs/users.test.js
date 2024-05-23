jest.setTimeout(60000)

describe('Basic authentication e2e tests', () => {
    beforeAll( async () => {
        // Set a definite size for the page viewport so view is consistent across browsers
        await page.goto('https://www.google.com');
    } );

    it( 'Should be truthy', async () => {
        expect( true ).toBeTruthy();
        let element = (await page.$('#MV3Tnb'))
        expect(element).toBe('About')
    })
});
