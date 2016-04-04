describe('simple-table tests', function() {
    it('test1 simple-table', function() {
        browser.get('/');
        element(by.css('.auto-input input')).sendKeys('idea');
        element(by.css('.auto-item-2')).click();
        var list = element.all(by.css('.simple-table .item-text'));
        expect(list.count()).toBe(1);
    });
    it('test2 simple-table', function() {
        browser.get('/');
        element(by.css('.auto-input input')).sendKeys('idea');
        element(by.css('.auto-item-2')).click();
        element(by.css('.auto-input input')).sendKeys('idea');
        element(by.css('.auto-item-1')).click();
        var list = element.all(by.css('.simple-table .item-text'));
        expect(list.count()).toBe(2);
    });
    it('test remove simple-table', function() {
        browser.get('/');
        element(by.css('.auto-input input')).sendKeys('idea');
        element(by.css('.auto-item-2')).click();
        element(by.css('.auto-input input')).sendKeys('idea');
        element(by.css('.auto-item-1')).click();
        element(by.css('.delete-but-1')).click();
        var list = element.all(by.css('.simple-table .item-text'));
        expect(list.count()).toBe(1);
    });
    it('test remove2 simple-table', function() {
        browser.get('/');
        element(by.css('.auto-input input')).sendKeys('idea');
        element(by.css('.auto-item-2')).click();
        element(by.css('.auto-input input')).sendKeys('idea');
        element(by.css('.auto-item-1')).click();
        element(by.css('.auto-input input')).sendKeys('idea');
        element(by.css('.auto-item-1')).click();
        element(by.css('.auto-input input')).sendKeys('idea');
        element(by.css('.auto-item-1')).click();
        element(by.css('.delete-but-1')).click();
        var list = element.all(by.css('.simple-table .item-text'));
        expect(list.count()).toBe(3);
    });
});
