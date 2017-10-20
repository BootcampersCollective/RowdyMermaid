// The copyBlock is a component used to display copy to the user.
// The copyBlock has four arguments or attributes: blockTitle, subhead, copyBody, and bullets
// The title will basically be an H1 element styled to be consistent with the sketch or wireframe
// The subhead will be an h2 element
// copyBody will be p elements
// the bullets will be an unordered list
// any of the elements can be left blank if there is no text for the element

const copyBlock = {
    bindings: {
        copy: '<'
    },
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {
            console.log("copyBlock loaded");
        }
    },
    template: `
    <div ng-repeat="copy in $ctrl.copy" class="copyblockContainer">
        <div ng-if="copy.blockTitle" class="blockTitle">
            <h1>{{copy.blockTitle}}</h1>
        </div>
        <div ng-if="copy.subhead">
            <h3 class="subhead">{{copy.subhead}}</h3>
        </div>
        <div ng-if="copy.copyBody" class="copyBody">
            <div ng-repeat="paragraph in copy.copyBody"><p>{{paragraph}}</p>
            </div>
        </div>
        <div ng-if="copy.bullets">
            <ul>
                <li ng-repeat="bullet in copy.bullets">{{bullet}}</li>
            </ul>
        </div>
    </div>
    `
};

angular
    .module('RowdyMermaid-site.widgets')
    .component('copyBlock', copyBlock);