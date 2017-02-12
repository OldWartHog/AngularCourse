(function() {
  'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/menuapp/templates/categoryList.template.html',
  bindings: {
    items: '<'
  }
});

}());
