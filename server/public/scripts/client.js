var myApp = angular.module( 'myApp', ['ngRoute'] );

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/secondHighFive', {
    templateUrl: 'views/pages/blue.html',
    controller: 'SecondController as ic'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
  });//end config

// set up a controller
myApp.controller( 'HighFiveController', function( $http, ClickRandomNumbers ){
  console.log( 'NG' );


// variable global to this controller
  var vm = this;

vm.counter= 0;
//get Borats Number
vm.boratRandomNumber = function(){
      vm.picture = "http://4.images.spike.com/images/import/stills/films/resize/istd/2782157.jpg?quality=0.91";
      vm.randomNumber = ClickRandomNumbers.clickRandomNumbers();
      console.log(" borats number= " , vm.randomNumber);
      vm.checkNumbers();
};//end boratRandomNumber


//get user random number
  vm.clickRandomNumber = function(){
    vm.clRndNum = ClickRandomNumbers.clickRandomNumbers();
    console.log("user Number=" , vm.clRndNum);
    vm.checkNumbers();
};//end clickRandomNumber

vm.checkNumbers = function() {
if ( vm.randomNumber === "" ){
    vm.prompt= "Now Get Borat's skill";
    return true;
  }//end if

  if ( vm.clRndNum === "" ){
      vm.prompt= "Now Get Your Skill";
      return true;
    }//end if
if (vm.clRndNum > vm.randomNumber ){
    vm.counter ++;
    vm.result='Varry Nice!';
    vm.picture= "https://i2.wp.com/filmoholicx.files.wordpress.com/2016/08/giphy-21.gif?w=350&h=188&crop&ssl=1";
  }//end if
 else {
    vm.result='Not Too Good';
  }//end if/else
};//end checkNumbers

  vm.refresh = function(){
    console.log('refresh');
    vm.clRndNum = "";
    vm.prompt = "";
    vm.randomNumber = "";
    vm.result = "";
    vm.picture = "http://4.images.spike.com/images/import/stills/films/resize/istd/2782157.jpg?quality=0.91";
  };//end refresh
vm.refresh();

}); //end HighFiveController controller
