const about = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {};
    },
    template:   `

    `
};

angular.module('RowdyMermaid-site.about')
    .component('about', about);

about.$inject = [];
