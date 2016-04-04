describe('autocomplete tests', function() {
    it('test input', function() {
        browser.get('/');
        element(by.css('.auto-input input')).sendKeys('idea');
        element(by.css('.auto-item-2')).click();
        //browser.pause();
        expect(element(by.css('.simple-table .item-text')).getText()).toBe('idea 2');
        // element(by.css('.signin-btn')).click();
        // element(by.model('credentials.email')).sendKeys('anton.eremenko@nrg-soft.com');
        // element(by.model('credentials.password')).sendKeys('lean6245@nrg674');
        // element(by.css('.stateful-btn')).click();
        // browser.waitForAngular();
        // browser.setLocation('/cases/1387/overview');
        // browser.waitForAngular();
        // element(by.css('.grid__cell_expand:first-child')).click();
        // browser.waitForAngular();
        // expect(element(by.css('.forecast-table__body>.forecast-table__tr:first-child>td:nth-child(13)>div')).getInnerHtml()).toBe('3062');
    });
    it('test1 autocomplete', function() {
        element(by.css('.auto-input input')).sendKeys('fo');
        var list = element.all(by.css('.auto-item'));
        expect(list.count()).toBe(2);
    });
    it('test2 autocomplete', function() {
        element(by.css('.auto-input input')).sendKeys('for');
        var list = element.all(by.css('.auto-item'));
        expect(list.count()).toBe(0);
    });
});
