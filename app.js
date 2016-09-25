(function () {
  'use strict';

   angular.module('ShoppingListCheckOffApp', [])
  .controller('ToBuyShoppingCtrl', ToBuyShoppingCtrl)
  .controller('AlreadyBoughtShoppingCtrl', AlreadyBoughtShoppingCtrl)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    // ToBuy Shopping Controller #############  Controller 1 ############
    ToBuyShoppingCtrl.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingCtrl(ShoppingListCheckOffService){
       var ToBuyCtrl=this;
       ToBuyCtrl.toBuyList=ShoppingListCheckOffService.getToBuyList();
       ToBuyCtrl.moveToAlreadyBoughtList=function(index){
         ShoppingListCheckOffService.moveToAlreadyBoughtList(index);
       };
    }


    //Already Bought Shopping Controller #############  Controller 2 ############
    AlreadyBoughtShoppingCtrl.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingCtrl(ShoppingListCheckOffService){
       var AlreadyBoughtCtrl=this;
       AlreadyBoughtCtrl.alreadyBoughtList=ShoppingListCheckOffService.getAlreadyBoughtList();
    }

    //ShoppingListCheckOff Service #############  Service ############
    function ShoppingListCheckOffService(){
        var service=this;

        //Initialize Shopping list
        var toBuyList=[
                  {name:'Apple',quantity:'2kg'},
                  {name:'Banana',quantity:'1kg'},
                  {name:'Orange',quantity:'3kg'},
                  {name:'Mosambi',quantity:'5kg'},
                  {name:'Papaya',quantity:'1kg'}
                ];
        var alreadyBoughtList=[];

        // Add to ToBuy List
        service.moveToAlreadyBoughtList=function(index){
          alreadyBoughtList.push(toBuyList[index]);
          toBuyList.splice(index,1);
        }; 

        // Get ToBuy List
        service.getToBuyList=function(){
          return toBuyList;
        };

        // Get Already Bought List
        service.getAlreadyBoughtList=function(){
          return alreadyBoughtList;
        };

    }

})();
