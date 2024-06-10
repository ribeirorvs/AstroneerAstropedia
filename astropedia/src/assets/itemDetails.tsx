import { translate } from "@/libs/localization"

export type ItemDetailsListDataProps  = (typeof ItemDetailsList)[0]


export const ItemDetailsList = [
    {
        id: 1,
        descriptionLines: [
            
        ],
        useLines: [
            {
                id: 1,
                text: translate('railEngineDescriptionLine1')
            },
            {
                id: 2,
                text: translate('railEngineDescriptionLine2')
            },
            {
                id: 3,
                text: translate('railEngineDescriptionLine3')
            }
        ]
    }
]