const about = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.imageurl = "client/assets/Images/winterPineTrees.jpg";
        ctrl.title = "ABOUT US";

        ctrl.$onInit = function () {};
    },
    template:   `
        <parallax-jumbotron image-url="{{$ctrl.imageurl}}" title={{$ctrl.title}} ></parallax-jumbotron>
    `
};

angular.module('RowdyMermaid-site.about')
    .component('about', about);

about.$inject = [];
