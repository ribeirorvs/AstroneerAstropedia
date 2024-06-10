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
    }
]