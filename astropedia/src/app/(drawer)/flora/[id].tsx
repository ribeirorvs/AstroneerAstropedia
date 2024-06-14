import { FavoriteType } from "@/assets/enums";
import { ContentTitle } from "@/components/contentTitle";
import { ResourceTitle } from "@/components/resourceTitle";
import { translate } from "@/libs/localization";
import { layoutStyle } from "@/styles/layoutStyles";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { FloraList } from "@/assets/flora";
import { ResourceItem } from "@/components/resourceItem";
import { ItemsUse } from "@/components/itemsUse";

export default function FloraDetails() {
    const { id } = useLocalSearchParams();
    const flora = FloraList.find(flora => flora.id === Number(id));

    return (
        <SafeAreaView style={layoutStyle.container} >
            <ScrollView>
                <ResourceTitle
                    id={flora?.id || 1}
                    type={FavoriteType.Flora}
                />
                <ContentTitle title={translate('sourceTitle')} />
                {
                    flora?.source.map((item, index) => (
                        <ResourceItem 
                            key={index}
                            name={translate(item.name)}
                            icon={item.icon}
                            link={item.link}
                        />
                    ))
                }
                <ContentTitle title={translate('sourceTitle')} />
                <ItemsUse
                    id= {flora?.id || 1}
                    type={FavoriteType.Flora}
                    source="useLines"
                />
            </ScrollView>
        </SafeAreaView>
    );
}