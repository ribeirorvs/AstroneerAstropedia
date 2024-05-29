export type PrinterDataProps = (typeof PrintersList)[0];

export const PrintersList = [
    {
        id: 1,
        title: 'backpackPrinter',
        icon: 'backpackPrinter',
        link: '/printer/1',
        nugget: "backpack",
        source: [
            {
                id: 1,
                craftAt: "-",
                recipte: "-",
                unlockCost: "-",
                powerConsumption: "3 U/s"
            }
        ]
    },
    {
        id: 2,
        title: 'smallPrinter',
        icon: 'smallPrinter',
        link: '/printer/2'
    },
    {
        id: 3,
        title: 'mediumPrinter',
        icon: 'mediumPrinter',
        link: '/printer/3'
    },
    {
        id: 4,
        title: 'largePrinter',
        icon: 'largePrinter',
        link: '/printer/4'
    },
    {
        id: 5,
        title: 'smeltingFurnace',
        icon: 'smeltingFurnace',
        link: '/printer/5'
    },
    {
        id: 6,
        title: 'soilCentrifuge',
        icon: 'soilCentrifuge',
        link: '/printer/6'
    },
    {
        id: 7,
        title: 'chemistryLab',
        icon: 'chemistryLab',
        link: '/printer/7'
    },
    {
        id: 8,
        title: 'atmosphericCondenser',
        icon: 'atmosphericCondenser',
        link: '/printer/8'
    },
    {
        id: 9,
        title: 'tradePlatform',
        icon: 'tradePlatform',
        link: '/printer/9'
    },
]