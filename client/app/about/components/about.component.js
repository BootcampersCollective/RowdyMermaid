const about = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.copyService = [
            {
                subhead: "Rowdy Mermaid Kombucha is a craft brewery located in Boulder, Colorado, at the foot of the Rocky Mountains",
                copyBody: [
                    "Inspired by the pristine, wild landscape, we handcraft our living kombucha beverage from organic tea, Colorado snowmelt, wildcrafted organic herbs, and fresh fruit. At Rowdy Mermaid, we use organic cold-pressed fruit juice and ayurveda-inspired herbs to produce an authentic, living kombucha that is low in sugar and bursting with flavor.",
                    "KEY INGREDIENTS"
                ],
                bullets: [
                    "Farm-direct organic tea",
                    "Filtered Colorado snowmelt",
                    "Wildcrafted organic herbs",
                    "Locally-sourced, cold-pressed fruit*",
                    "Handcrafted by individual brew masters",
                    "Tested daily for safety and perfection",
                    "Intentional recipes",
                    "Non-GMO"
                ]
            },
            {
                blockTitle: "Our Story",
                copyBody: [
                    "In spring of 2013, I lost my office job in a corporate downsizing that turned out to be one of the most fortunate events of my life. I had been brewing kombucha in my garage for over two years, and secretly dreaming about an exit strategy from corporate culture. This seemed to be the universe kicking me squarely in the pants towards that door.",
                    "We were living in Boulder, the healthiest city in the country, but both my wife and I had been so busy with work that the things that make us most happy—gardening, hiking, experimenting with new recipes, tastes and experiences—were increasingly falling to the wayside. With the cautious blessing of my wife, I made a leap of faith into the unknown and decided to start a kombucha company. I was armed with curiosity, a love of research, a discerning palate, a deep desire to live a healthier life, and an obsessive compulsive’s attention to detail.",
                    "This last trait would come in handy as I set out to become as knowledgeable about the intricacies of the chemistry of kombucha brewing as possible, while simultaneously teaching myself to navigate the daunting maze of city codes and ordinances required to renovate an empty warehouse into a fermentation taproom. My goal was not to manufacture a product for mass consumption; I wanted a venue where I could experiment with the freshest wildcrafted ingredients and seasonal flavors.",
                    "In Colorado, we are surrounded by wilderness, from snowcapped peaks of the Rocky Mountains to the cool streams bisecting our town, but we are surrounded as well by an unseen wilderness of microbial biodiversity. The pursuit of craft kombucha is also the pursuit of diversity and place. I started Rowdy Mermaid to create a venue where we could explore that diversity daily.",
                    "I am often asked where the name Rowdy Mermaid comes from. My daughter has been my most enthusiastic taste-tester since I started brewing back in 2011. She had a great palate even at the tender age of 3, and I quickly learned to trust her instincts. Because my recipes were toddler safe (caffeine, alcohol and sugar free), I taught myself techniques for making them aggressively flavorful. One day, we were up in the mountains at a nearby hot springs and she was cavorting merrily in the warm pool, pretending to be a mermaid. I had been dreaming about launching the business and was figuring out how to broach the idea to my wife. As my eyes fell on my daughter, the name Rowdy Mermaid floated into my mind, and it all seemed to fall into place at that moment. The name stuck.",
                ]
            }
        ];

        ctrl.$onInit = function () {
        };
    },
    template:   `
      <image-plate plate="'images/royalArch.png'" headline="'Our DNA'"></image-plate>
      <copy-block copy="$ctrl.copyService"></copy-block>  
    `
};

angular.module('RowdyMermaid-site.about')
    .component('about', about);

about.$inject = [];
