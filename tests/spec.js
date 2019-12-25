


describe('enter name',function(){
it('name should be enter',function(){
    browser.get('https://angularjs.org/');
element(by.model('yourName')).sendKeys('sandeep');
var text=element(by.xpath("//h1[@class='ng-binding']"));
expect(text.getText()).toEqual('Hello sandeep!');


});

});
describe('free crm title test',function(){
    it('get titel',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
     expect(browser.getTitle()).toEqual('Super Calculator');
     browser.driver.sleep(3000);
     element(by.model('first')).sendKeys('sandeep');
     
    });
});
describe('multiple elements',function(){
    it('add 1+2',function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id('gobutton')).click();
        expect(element(by.className('ng-binding')).getText()).toEqual('3');


    });
});