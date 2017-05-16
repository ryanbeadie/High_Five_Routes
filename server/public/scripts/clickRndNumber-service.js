


myApp.service('ClickRandomNumbers', function($http){

  this.clickRandomNumbers = function(){
    var clickNumber=  Math.floor((Math.random() * 10) + 1);
    return clickNumber;
  }; // end random

});//end ClickRandomNumbers
