// The copyBlock is a component used to display copy to the user.
// The copyBlock has four arguments or attributes: blockTitle, subhead, copyBody, and bullets
// The title will basically be an H1 element styled to be consistent with the sketch or wireframe
// The subhead will be an h2 element
// copyBody will be p elements
// the bullets will be an unordered list
// any of the elements can be left blank if there is no text for the element

const copyBlock = {
    bindings: {
        blockTitle: '<',
        subhead: '<',
        copyBody: '<',
        bullets: '<',
        instance: '<'
    },
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {
            console.log("copyBlock loaded");
        }
    },
    template: `
    <div class="copyblockContainer">
        <div *ngIf="$ctrl.blockTitle">
            <h1>{{$ctrl.blockTitle}}</h1>
        </div>
        <div *ngIf="$ctrl.subhead">
            <h3 class="subhead">{{$ctrl.subhead}}</h3>
        </div>
        <div>
            <div ng-repeat="copy in $ctrl.copyBody[$ctrl.instance]"><p>{{copy}}</p>
            </div>
        </div>
        <div *ngIf="$ctrl.bullets">
            <ul>
                <li ng-repeat="bullet in $ctrl.bullets">{{bullet}}</li>
            </ul>
        </div>
    </div>
    `
};

angular
    .module('RowdyMermaid-site.widgets')
    .component('copyBlock', copyBlock);