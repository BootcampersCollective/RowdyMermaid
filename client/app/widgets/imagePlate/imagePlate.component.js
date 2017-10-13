// The imagePlate component renders a full width image and a headline
// You can leave the 'headline' attribute blank if there is no headline

const imagePlate = {
    bindings: {
        plate: '<',
        headline: '<'
    },
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {
            console.log("imagePlate loading properly");
        }
    },
    template: `
    <div class="imagePlateContainer">
        <div class="imageplateVisual">
            <img src="{{$ctrl.plate}}" class="imageplateVisual" />
        </div>
        <h1 class="imageplateHeadline bottomRight">{{$ctrl.headline}}</h1>
    </div>
    `
};

angular
    .module('RowdyMermaid-site.widgets')
    .component('imagePlate', imagePlate);