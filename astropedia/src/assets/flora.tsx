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
    }
]