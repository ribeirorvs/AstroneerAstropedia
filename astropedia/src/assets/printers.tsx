import { FavoriteType } from "./enums";

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
                recipte: [
                    {
                        id: 1,
                        listId: 0,
                        type: null,
                        title: "-",
                        quantity: 1,
                    }
                ],
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
                recipte: [
                    {
                        id: 1,
                        listId: 4,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }
                ],
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
                recipte: [
                    {
                        id: 1,
                        listId: 4,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 2,
                    }
                ],
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
                recipte: [
                    {
                        id: 1,
                        listId: 4,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 3,
                    }
                ],
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
                recipte: [
                    {
                        id: 1,
                        listId: 12,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 2,
                    },
                    {
                        id: 2,
                        listId: 4,
                        type: FavoriteType.Resource,
                        title: "compound",
                        quantity: 1,
                    }
                ],
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
                recipte: [
                    {
                        id: 1,
                        listId: 4,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 2,
                    },
                    {
                        id: 2,
                        listId: 16,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                ],
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
                recipte: [
                    {
                        id: 1,
                        listId: 23,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 2,
                        listId: 20,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 3,
                        listId: 18,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }

                ],
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
                recipte: [
                    {
                        id: 1,
                        listId: 37,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 2,
                        listId: 20,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 3,
                        listId: 21,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }
                ],
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
                id: 1,
                craftAt: "mediumPrinter",
                recipte: [
                    {
                        id: 1,
                        listId: 2,
                        type: FavoriteType.Item,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 2,
                        listId: 23,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 3,
                        listId: 21,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }
                ],
                unlockCost: "2500 Bytes",
                powerConsumption: "Unknow"
            }
        ]
    },
    {
        id: 10,
        title: 'exoRequestPlatform',
        icon: 'tradePlatform',
        link: '/printer/10',
        nugget: 'nuggetExoRequestPlatform',
        source: [
            {
                id: 1,
                craftAt: "mediumPrinter",
                recipte: [
                    {
                        id: 1,
                        listId: 12,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 2,
                    },
                    {
                        id: 2,
                        listId: 4,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }
                ],
                unlockCost: "2500 Bytes",
                powerConsumption: "Unknow"
            }
        ]
    },
]