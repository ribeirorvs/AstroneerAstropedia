import { PlanetList } from "@/assets/planets";
import { ComponentButton } from "@/components/componentButton";
import { Title } from "@/components/title";
import { translate } from "@/libs/localization";
import { layoutStyle } from "@/styles/layoutStyles";
import { FlatList, SafeAreaView, View } from "react-native";

export default function Planets(){
    return (
        <SafeAreaView style={layoutStyle.container}>
            <View style={layoutStyle.content} >

                <Title title={translate('planetsTitle')} />
                <FlatList
                    data={PlanetList}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <ComponentButton
                            title={translate(item.title)}
                            icon={item.icon}
                            link={item.link}
                        />
                    )}
                    style={layoutStyle.flatList}
                />
            </View>
        </SafeAreaView>
    )
}