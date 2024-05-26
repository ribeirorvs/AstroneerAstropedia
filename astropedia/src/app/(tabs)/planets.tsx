import { PlanetList } from "@/assets/planets";
import { ComponentButton } from "@/components/componentButton";
import { Title } from "@/components/title";
import { translate } from "@/libs/localization";
import { layoutStyle } from "@/styles/layoutStyles";
import { FlatList, SafeAreaView, Text, View } from "react-native";

export default function Planets(){
    return (
        <SafeAreaView style={layoutStyle.container}>
            <View style={layoutStyle.content} >

                <Title title={translate('planetsTitle')} />
                <FlatList
                    data={PlanetList}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <View>
                        <ComponentButton
                            id={item.id}
                        />
                        <Text>{item.id}</Text>
                        </View>
                    )}
                    style={layoutStyle.flatList}
                />
            </View>
        </SafeAreaView>
    )
}