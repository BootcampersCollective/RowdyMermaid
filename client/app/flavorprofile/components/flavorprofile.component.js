const flavorprofile = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.flavors = flavors;

        ctrl.$onInit = function () {
        };
    },
    template: `
      <div class='flavorContainer'>
          <div>
              <img src='images/summerberry.jpg'></img>
          </div>
          <div>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices arcu ut neque commodo, quis blandit diam posuere. In pharetra, augue vitae faucibus sodales, erat neque tempor dui, in scelerisque ipsum justo feugiat nisi. Quisque sit amet erat consequat, convallis lacus eu, porttitor orci. Fusce feugiat nibh ac luctus commodo. Ut at vulputate magna. Maecenas tincidunt, nulla at congue consectetur, sem elit dapibus ante, quis dictum dui sapien at tortor. Aenean eu mattis erat. Nam varius nunc odio, tempus lobortis leo efficitur vitae. Duis nisi mi, maximus et ante in, eleifend pulvinar felis. Curabitur faucibus justo nec tincidunt ultrices. Maecenas molestie tempor urna posuere tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas eros enim, porttitor quis leo nec, feugiat hendrerit magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus volutpat accumsan lorem id commodo. Morbi nec blandit augue.
              </p>
          </div>
      </div>
    `
};

angular.module('RowdyMermaid-site.flavorprofile')
    .component('flavorprofile', flavorprofile);

flavorprofile.$inject = [];
