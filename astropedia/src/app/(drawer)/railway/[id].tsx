import { FavoriteType } from "@/assets/enums";
import { RailwayList } from "@/assets/railways";
import { ContentTitle } from "@/components/contentTitle";
import { PrintableSource } from "@/components/printableSource";
import { ResourceTitle } from "@/components/resourceTitle";
import { translate } from "@/libs/localization";
import { layoutStyle } from "@/styles/layoutStyles";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { ItemsUse } from "@/components/itemsUse";
import { ItemDetailsList } from "@/assets/itemDetails";

export default function RailwayDetails() {
    const { id } = useLocalSearchParams();
    const railway = RailwayList.find(railway => railway.id === Number(id));
    const itemDetails = ItemDetailsList.find(item => item.itemId === railway?.id)

    return (
        <SafeAreaView style={layoutStyle.container} >
            <ScrollView>
                <ResourceTitle
                    id={railway?.id || 1}
                    type={FavoriteType.Railway}
                />
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    id={railway?.id || 1}
                    type={FavoriteType.Railway}
                />
                <ContentTitle title={translate('details')} />
                <ItemsUse
                    id= {itemDetails?.id || 1}
                    type={FavoriteType.ItemDetails}
                    source="descriptionLines"
                />
                <ItemsUse
                    id= {itemDetails?.id || 1}
                    type={FavoriteType.ItemDetails}
                    source="useLines"
                />
            </ScrollView>
        </SafeAreaView>
    );
}