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
        link: '/printer/2',
        nugget: 'iconSmallPrint',
        source: [
            {
                id: 1,
                craftAt: "backpackPrinter",
                recipte: "compound",
                unlockCost: "unlocked",
                powerConsumption: "1 U/s"
            }
        ]
    },
    {
        id: 3,
        title: 'mediumPrinter',
        icon: 'mediumPrinter',
        link: '/printer/3',
        nugget: 'iconMediumPrint',
        source: [
            {
                id: 1,
                craftAt: "smallPrinter",
                recipte: '2x ' + 'compound',
                unlockCost: "unlocked",
                powerConsumption: "Unknow"
            }
        ]
    },
    {
        id: 4,
        title: 'largePrinter',
        icon: 'largePrinter',
        link: '/printer/4',
        nugget: 'iconLargePrint',
        source: [
            {
                id: 1,
                craftAt: "mediumPrinter",
                recipte: '3x ' + 'compound',
                unlockCost: "unlocked",
                powerConsumption: "5 U/s"
            }
        ]        
    },
    {
        id: 5,
        title: 'smeltingFurnace',
        icon: 'smeltingFurnace',
        link: '/printer/5',
        nugget: 'iconSmeltingFurnace',
        source: [
            {
                id: 1,
                craftAt: "mediumPrinter",
                recipte: '2x ' + 'resin' + '\n' + 'compound',
                unlockCost: "250 Bytes",
                powerConsumption: "5 U/s"
            }
        ] 
    },
    {
        id: 6,
        title: 'soilCentrifuge',
        icon: 'soilCentrifuge',
        link: '/printer/6',
        nugget: 'iconSoilCentrifuge',
        source: [
            {
                id: 1,
                craftAt: "mediumPrinter",
                recipte: '2x ' + 'compound' + '\n' + 'aluminum',
                unlockCost: "750 Bytes",
                powerConsumption: "6 U/s"
            }
        ] 
    },
    {
        id: 7,
        title: 'chemistryLab',
        icon: 'chemistryLab',
        link: '/printer/7',
        nugget: 'iconChemistryLab',
        source: [
            {
                id: 1,
                craftAt: "mediumPrinter",
                recipte: 'tungsten' + '\n' + 'glass' + '\n' + 'ceramic',
                unlockCost: "1600 Bytes",
                powerConsumption: "10 U/s"
            }
        ] 
    },
    {
        id: 8,
        title: 'atmosphericCondenser',
        icon: 'atmosphericCondenser',
        link: '/printer/8',
        nugget: 'iconAthmospheticCondenserLab',
        source: [
            {
                id: 1,
                craftAt: "mediumPrinter",
                recipte: 'plastic' + '\n' + 'glass' + '\n' + 'iron',
                unlockCost: "2200 Bytes",
                powerConsumption: "10~40 U/s"
            }
        ] 
    },
    {
        id: 9,
        title: 'tradePlatform',
        icon: 'tradePlatform',
        link: '/printer/9',
        nugget: 'iconTradePlatform',
        source: [
            {
                id: 2,
                craftAt: "mediumPrinter",
                recipte: 'exoChip' + '\n' + 'tungsten' + '\n' + 'iron',
                unlockCost: "2500 Bytes",
                powerConsumption: "Unknow"
            }
        ]
    },
]