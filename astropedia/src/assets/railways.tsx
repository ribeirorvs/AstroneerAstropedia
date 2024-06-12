import { FavoriteType } from "./enums";

export type RailwayDataProps = (typeof RailwayList)[0];

export const RailwayList = [
    {
        id: 1,
        title: 'railEngine',
        link: 'railway/1',
        icon: 'railEngine',
        source: [
            {
                id: 1,
                craftAt: "smallPrinter",
                recipte: [
                    {
                        id: 1,
                        listId: 12,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 2,
                        listId: 16,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 3,
                        listId: 19,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }
                ],
                unlockCost: "1000",
                powerConsumption: "3 U/s"
            }
        ]
    },
    {
        id: 2,
        title: 'railCar',
        link: 'railway/2',
        icon: 'railEngine',
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
                        listId: 16,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }
                ],
                unlockCost: "unknow",
                powerConsumption: "1 U/s"
            }
        ]
    },
    {
        id: 3,
        title: 'railStation',
        link: 'railway/3',
        icon: 'railStation',
        source: [
            {
                id: 1,
                craftAt: "largePrinter",
                recipte: [
                    {
                        id: 1,
                        listId: 22,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 2,
                    },
                    {
                        id: 2,
                        listId: 19,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 3,
                        listId: 11,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }
                ],
                unlockCost: "2500",
                powerConsumption: "-"
            }
        ]
    },
    {
        id: 4,
        title: 'railPost',
        link: 'railway/4',
        icon: 'railPost',
        source: [
            {
                id: 1,
                craftAt: "smallPrinter",
                recipte: [
                    {
                        id: 1,
                        listId: 12,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 2,
                        listId: 16,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }
                ],
                unlockCost: "-",
                powerConsumption: "-"
            }
        ]
    },
    {
        id: 5,
        title: 'railPostBundle',
        link: 'railway/5',
        icon: 'railPost',
        source: [
            {
                id: 1,
                craftAt: "smallPrinter",
                recipte: [
                    {
                        id: 1,
                        listId: 12,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 2,
                        listId: 16,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }
                ],
                unlockCost: "750",
                powerConsumption: "-"
            }
        ]
    },
    {
        id: 6,
        title: 'tallRailPost',
        link: 'railway/6',
        icon: 'railPost',
        source: [
            {
                id: 1,
                craftAt: "smallPrinter",
                recipte: [
                    {
                        id: 1,
                        listId: 12,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 2,
                        listId: 16,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }
                ],
                unlockCost: "-",
                powerConsumption: "-"
            }
        ]
    },
    {
        id: 7,
        title: 'tallRailPostBundle',
        link: 'railway/7',
        icon: 'railPost',
        source: [
            {
                id: 1,
                craftAt: "smallPrinter",
                recipte: [
                    {
                        id: 1,
                        listId: 12,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 2,
                        listId: 16,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 1,
                    }
                ],
                unlockCost: "750",
                powerConsumption: "-"
            }
        ]
    },
    {
        id: 8,
        title: 'railJunctions',
        link: 'railway/8',
        icon: 'railPost',
        source: [
            {
                id: 1,
                craftAt: "smallPrinter",
                recipte: [
                    {
                        id: 1,
                        listId: 16,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 2,
                    }
                ],
                unlockCost: "-",
                powerConsumption: "-"
            }
        ]
    },
    {
        id: 9,
        title: 'railJunctionsBundle',
        link: 'railway/9',
        icon: 'railPost',
        source: [
            {
                id: 1,
                craftAt: "smallPrinter",
                recipte: [
                    {
                        id: 1,
                        listId: 16,
                        type: FavoriteType.Resource,
                        title: "",
                        quantity: 2,
                    }
                ],
                unlockCost: "1000",
                powerConsumption: "-"
            }
        ]
    },
    {
        id: 10,
        title: 'cole',
        link: 'railway/10',
        icon: 'railEngine',
        source: [
            {
                id: 1,
                craftAt: "-",
                recipte: [
                    {
                        id: 1,
                        listId: 1,
                        type: "",
                        title: "missionReward",
                        quantity: 1,
                    }
                ],
                unlockCost: "-",
                powerConsumption: "3"
            }
        ]
    },
    {
        id: 11,
        title: 'sitePylon',
        link: 'railway/11',
        icon: 'railPost',
        source: [
            {
                id: 1,
                craftAt: "smallPrinter",
                recipte: [
                    {
                        id: 1,
                        listId: 6,
                        type: FavoriteType.Planet,
                        title: "",
                        quantity: 1,
                    },
                    {
                        id: 1,
                        listId: 3,
                        type: FavoriteType.Planet,
                        title: "",
                        quantity: 1,
                    }
                ],
                unlockCost: "-",
                powerConsumption: "-"
            }
        ]
    }
]