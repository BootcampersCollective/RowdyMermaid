const about = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.imageUrl = "/images/winterPineTrees.jpg";
        ctrl.title = "ABOUT US";

        ctrl.$onInit = function () {};
    },
    template:   `
        <parallax-jumbotron image-url="$ctrl.imageUrl" title="$ctrl.title"></parallax-jumbotron>
        <div style="background-color: black; height: 50vh; width: 100vw;">
            <h1 style="text-align: center; color: white;">Hi I'm just a test div</h1>
        </div>
    `
};

angular.module('RowdyMermaid-site.about')
    .component('about', about);

about.$inject = [];
