// import { Component } from '@angular/core';


const find = {
    templateUrl: 'find.html',
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {
        };
    }

};

angular.module('RowdyMermaid-site.find')
    .component('find', find);

find.$inject = [];
