(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

// dummy user service - real version would go to server, and support logon

// UserService.$inject = [];
function UserService() {
  var service = this;

  console.log("Creating User Service");
    service.info = {};
    // {firstname:"MankyOldFart",lastname:"Gittins",email:"me@that.com",phone:"123-123-1234",favorite:"A1"};

  service.getInfo = function () {
    console.log("user service returning info: " + service.info);
    return service.info;
  };


  service.setInfo = function (updatedInfo) {
    console.log("Got info: " + updatedInfo);
    service.info = updatedInfo;
  };

}

})();
