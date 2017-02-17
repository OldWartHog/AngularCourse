(function() {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['myInfo'];
  function MyInfoController(myInfo) {

    var infoCtrl = this;

      infoCtrl.hasData = function() {
          return myInfo.hasOwnProperty("firstname");
      };

      infoCtrl.myInfo = myInfo;
      infoCtrl.apibase = "https://oldwarthog-angular.herokuapp.com";
  }

}());
