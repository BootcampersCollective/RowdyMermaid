const header = {
    bindings: {
        headerImage: '<'
    },
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {
            console.log("Header component loaded");
        }
    },
    template: `
    <div class="header-container">
        <div class="image" style="background-image: url({{$ctrl.headerImage}})"></div>
    </div>
    `
};

angular
    .module('RowdyMermaid-site.widgets')
    .component('header', header);