const Header = {
    bindings: {
        headerImage: '<',
    },
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {

        }
    },
    template: `
    <div class="header-container">
        <div class="header" style="background-image: url{{$ctrl.headerImage}}"></div>
    </div>
    `
};