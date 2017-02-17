(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'UserService', 'myInfo'];
    function SignUpController(MenuService, UserService, myInfo) {
        var signupCtrl = this;

        signupCtrl.myInfo = myInfo;
        signupCtrl.completed = false
        signupCtrl.badchoice = false

        signupCtrl.signup = function () {
            UserService.setInfo(signupCtrl.myInfo);
            signupCtrl.badchoice = true;
            try {
                MenuService.getMenuItem(signupCtrl.myInfo.favorite).then(function (data) {
                    signupCtrl.badchoice = !data;

                });
            } catch (e) {
                console.log("error getting menu item: " + e);
            }

            signupCtrl.completed = true;
        }

    }

}());
