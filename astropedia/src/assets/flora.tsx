import { translate } from "@/libs/localization";

export type FloraDataProps = (typeof FloraList)[0];

export const FloraList = [
    {
        id: 1,
        title: 'bouncevine',
        link: 'flora/1',
        icon: 'flora',
        nugget: 'bouncevine',
        source: [
            {
                id: 1,
                name: 'sylva',
                icon: 'sylva',
                link: 'planet/1'
            },
        ],
        useLines: [
            {
                id: 1,
                text: translate('bouncevineDescription')
            }
        ]
    },
    {
        id: 2,
        title: 'popcoral',
        link: 'flora/2',
        icon: 'flora',
        nugget: 'popcoral',
        source: [
            {
                id: 1,
                name: 'sourceAllPlanets',
                icon: 'sylva',
                link: 'planets'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('popcoralDescription')
            }
        ]
    },
    {
        id: 3,
        title: 'daggeroot',
        link: 'flora/3',
        icon: 'flora',
        nugget: 'daggeroot',
        source: [
            {
                id: 1,
                name: 'sourceAllPlanets',
                icon: 'sylva',
                link: 'planets'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('daggerootDescription')
            }
        ]
    },
    {
        id: 4,
        title: 'hissbine',
        link: 'flora/4',
        icon: 'flora',
        nugget: 'hissbine',
        source: [
            {
                id: 1,
                name: 'sourceAllPlanets',
                icon: 'sylva',
                link: 'planets'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('hissbineDescription')
            }
        ]
    },
    {
        id: 5,
        title: 'lashleaf',
        link: 'flora/5',
        icon: 'flora',
        nugget: 'lashleaf',
        source: [
            {
                id: 1,
                name: 'vesania',
                icon: 'vesania',
                link: 'planet/4'
            },
            {
                id: 2,
                name: 'novus',
                icon: 'novus',
                link: 'planet/5'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('leashleafDescription')
            }
        ]
    },
    {
        id: 6,
        title: 'volatileCataplant',
        link: 'flora/6',
        icon: 'flora',
        nugget: 'volatileCataplant',
        source: [
            {
                id: 1,
                name: 'glacio',
                icon: 'glacio',
                link: 'planet/6'
            },
            {
                id: 2,
                name: 'atrox',
                icon: 'atrox',
                link: 'planet/7'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('volatileCataplantDescription1')
            },
            {
                id: 2,
                text: translate('volatileCataplantDescription2')
            },
            {
                id: 3,
                text: translate('volatileCataplantDescription3')
            },
            {
                id: 4,
                text: translate('volatileCataplantDescription4')
            }
        ]
    },
    {
        id: 7,
        title: 'thistlewhip',
        link: 'flora/7',
        icon: 'flora',
        nugget: 'thistlewhip',
        source: [
            {
                id: 1,
                name: 'vesania',
                icon: 'vesania',
                link: 'planet/4'
            },
            {
                id: 2,
                name: 'novus',
                icon: 'novus',
                link: 'planet/5'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('thistlewhipDescription')
            }
        ]
    },
    {
        id: 8,
        title: 'volatileAttactus',
        link: 'flora/8',
        icon: 'flora',
        nugget: 'volatileAttactus',
        source: [
            {
                id: 1,
                name: 'atrox',
                icon: 'atrox',
                link: 'planet/7'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('volatileAttactusDescription1')
            },
            {
                id: 2,
                text: translate('volatileAttactusDescription2')
            },
            {
                id: 3,
                text: translate('volatileAttactusDescription3')
            }
        ]
    },
    {
        id: 9,
        title: 'elegantSpewflower',
        link: 'flora/9',
        icon: 'flora',
        nugget: 'elegantSpewflower',
        source: [
            {
                id: 1,
                name: 'atrox',
                icon: 'atrox',
                link: 'planet/7'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('elegantSpewflowerDescription1')
            },
            {
                id: 2,
                text: translate('elegantSpewflowerDescription2')
            }
        ]
    },
    {
        id: 10,
        title: 'wheezeweeds',
        link: 'flora/10',
        icon: 'flora',
        nugget: 'wheezeweeds',
        source: [
            {
                id: 1,
                name: 'calidor',
                icon: 'calidor',
                link: 'planet/3'
            },
            {
                id: 2,
                name: 'atrox',
                icon: 'atrox',
                link: 'planet/7'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('wheezeweedsDescription1')
            },
            {
                id: 2,
                text: translate('wheezeweedDescription2')
            }
        ]
    },
    {
        id: 11,
        title: 'noxiousCataplant',
        link: 'flora/11',
        icon: 'flora',
        nugget: 'noxiousCataplant',
        source: [
            {
                id: 1,
                name: 'vesania',
                icon: 'vesania',
                link: 'planet/4'
            },
            {
                id: 2,
                name: 'novus',
                icon: 'novus',
                link: 'planet/5'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('noxiousCataplantDescription1')
            },
            {
                id: 2,
                text: translate('noxiousCataplantDescription1')
            },
            {
                id: 3,
                text: translate('noxiousCataplantDescription3')
            }
        ]
    },
    {
        id: 12,
        title: 'spinyAttactus',
        link: 'flora/12',
        icon: 'flora',
        nugget: 'spinyAttactus',
        source: [
            {
                id: 1,
                name: 'calidor',
                icon: 'calidor',
                link: 'planet/3'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('spinyAttactusDescription1')
            },
            {
                id: 2,
                text: translate('spinyAttactusDescription2')
            }
        ]
    },
    {
        id: 13,
        title: 'spinelily',
        link: 'flora/13',
        icon: 'flora',
        nugget: 'spinelily',
        source: [
            {
                id: 1,
                name: 'calidor',
                icon: 'calidor',
                link: 'planet/3'
            },
            {
                id: 2,
                name: 'atrox',
                icon: 'atrox',
                link: 'planet/7'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('spinelilyDescription1')
            },
            {
                id: 2,
                text: translate('spinelilyDescription2')
            }
        ]
    },
    {
        id: 14,
        title: 'noxiousSpewflower',
        link: 'flora/14',
        icon: 'flora',
        nugget: 'noxiousSpewflower',
        source: [
            {
                id: 1,
                name: 'atrox',
                icon: 'atrox',
                link: 'planet/7'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('noxiousSpewflowerDescription1')
            },
            {
                id: 2,
                text: translate('noxiousSpewflowerDescription2')
            }
        ]
    },
    {
        id: 15,
        title: 'boomalloon',
        link: 'flora/15',
        icon: 'flora',
        nugget: 'boomalloon',
        source: [
            {
                id: 1,
                name: 'glacio',
                icon: 'glacio',
                link: 'planet/6'
            }
        ],
        useLines: [
            {
                id: 1,
                text: translate('boomalloonDescription1')
            },
            {
                id: 2,
                text: translate('boomalloonDescription2')
            },
            {
                id: 3,
                text: translate('boomalloonDescription3')
            },
            {
                id: 4,
                text: translate('boomalloonDescription4')
            },
            {
                id: 5,
                text: translate('boomalloonDescription5')
            }
        ]
    }
    
]