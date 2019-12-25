
let homepage=require('../pages/homepage');
describe('multiple scenarios',function(){
   
    beforeEach(function(){
       homepage.get('http://juliemr.github.io/protractor-demo/');
      
    });
    
      it('get tiltle',function(){
          homepage.getTitle('Super Calculator');
      });
      it('add 1+2',function(){
          homepage.enterFirstNumber('1');
        homepage.enterSecondNumber('2');
        homepage.clickGo();
        homepage.verify('3');
       
       
    });
    it('add 6+4',function(){
        homepage.enterFirstNumber('6');
        homepage.enterSecondNumber('4');
        homepage.clickGo();
        homepage.verify('10');
       
       
    });
    it('add 6+4 read input',function(){
        homepage.enterFirstNumber('6');
        homepage.enterSecondNumber('4');
        homepage.clickGo();
        homepage.verify('10');
    });
});