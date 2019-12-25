

let homepage = function () {

    var firstnumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var gobutton = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));

    this.get=function(url){
        browser.get(url);
    };
    this.getTitle=function(title){
        expect(browser.getTitle()).toEqual(title);
    }
    this.enterFirstNumber = function (firstNo) {
        firstnumber.sendKeys(firstNo);
        expect(firstnumber.getAttribute('value')).toEqual(firstNo);
       
    };

    this.enterSecondNumber=function (secondNo) {
        secondNumber.sendKeys(secondNo);
        expect(secondNumber.getAttribute('value')).toEqual(secondNo);
    };
    this.clickGo=function(){
        gobutton.click();
    };
    this.verify=function(output){
      expect(result.getText()).toEqual(output);
    };

};
module.exports=new homepage();