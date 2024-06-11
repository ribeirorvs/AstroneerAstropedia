import { translate } from "@/libs/localization"

export type ItemDetailsListDataProps  = (typeof ItemDetailsList)[0]


export const ItemDetailsList = [
    {
        id: 1,
        itemId: 1,
        descriptionLines: [
            {
                id: 1,
                text: translate('railEngineDescriptionLine1')
            },
        ],
        useLines: [
            {
                id: 1,
                text: translate('railEngineUseLine1')
            },
            {
                id: 2,
                text: translate('railEngineUseLine2')
            },
            {
                id: 3,
                text: translate('railEngineUseLine3')
            }
        ]
    },
    {
        id: 2,
        itemId: 2,
        descriptionLines: [
            {
                id: 1,
                text: translate('railCarDescriptionLine1')
            },
        ],
        useLines: [
            {
                id: 1,
                text: translate('railCarUseLine1')
            }
        ]
    },
    {
        id: 3,
        itemId: 3,
        descriptionLines: [
            {
                id: 1,
                text: translate('railStationDescriptionLine1')
            },
        ],
        useLines: [
            {
                id: 1,
                text: translate('railStationUseLine1')
            },
            {
                id: 2,
                text: translate('railStationUseLine2')
            },
            {
                id: 3,
                text: translate('railStationUseLine3')
            },
            {
                id: 4,
                text: translate('railStationUseLine4')
            },
            {
                id: 5,
                text: translate('railStationUseLine5')
            },
            {
                id: 6,
                text: translate('railStationUseLine6')
            }
        ]
    }
]