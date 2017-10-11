const about = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.bullets = [
            "Farm-direct organic tea",
            "Filtered Colorado snowmelt",
            "Wildcrafted organic herbs",
            "Locally-sourced, cold-pressed fruit*",
            "Handcrafted by individual brew masters",
            "Tested daily for safety and perfection",
            "Intentional recipes",
            "Non-GMO"
        ];
        ctrl.copyBody = [
                [
                    "Inspired by the pristine, wild landscape, we handcraft our living kombucha beverage from organic tea, Colorado snowmelt, wildcrafted organic herbs, and fresh fruit. At Rowdy Mermaid, we use organic cold-pressed fruit juice and ayurveda-inspired herbs to produce an authentic, living kombucha that is low in sugar and bursting with flavor.",
                    "KEY INGREDIENTS",
                ],
                [
                    "test Data from another instance of copyBody",
                    "and another!"
                ]
            ];
        ctrl.images = [
          {
            src: 'images/bottlesAllFlavors2.jpg'
          },
          {
            src: 'images/closeUpBottles.jpg'
          },
          {
            src: 'images/truckerHat.jpg'
          },
          {
            src: 'images/hatsCloseUp.jpg'
          },
          {
            src: 'images/closeUpBottles3.jpg'
          },
          {
            src: 'images/bottlesAllFlavors.jpg'
          }
        ];

        ctrl.$onInit = function () {};
    },
    template:   `
      <image-plate plate="'images/royalArch.png'" headline="'Our DNA'"></image-plate>
      <copy-block 
      subhead="'Rowdy Mermaid Kombucha is a craft brewery located in Boulder, Colorado, at the foot of the Rocky Mountains'"
      copy-body="$ctrl.copyBody"
      instance="0"
      bullets="$ctrl.bullets">
        </copy-block>
    `
};

angular.module('RowdyMermaid-site.about')
    .component('about', about);

about.$inject = [];
