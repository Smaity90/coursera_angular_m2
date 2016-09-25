(function () {
  'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    CounterController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.lunchMenu='';
        $scope.message='';
        $scope.fontColor='';
        $scope.checkLunch=function(){
            var lunchMenu=$scope.lunchMenu;
            if(lunchMenu!=""){
              var arrayOfStrings = $scope.lunchMenu.split(',');
              var noOfItems=arrayOfStrings.length; // does not consider empty item
              if(noOfItems>3){
                $scope.message='Too much!';
              }else{
                  $scope.message='Enjoy!';
              }
              $scope.fontColor='green';
            }else{
              $scope.fontColor='red';
              $scope.message='Please enter data first';
            }
        };
}
})();
