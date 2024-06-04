import { ComponentButton } from "@/components/componentButton";
import { Title } from "@/components/title";
import { translate } from "@/libs/localization";
import { FavoriteDetails, loadAllFavorites } from "@/libs/storage";
import { layoutStyle } from "@/styles/layoutStyles";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";

export default function Favorites() {
    const [favorites, setFavorites] = useState<FavoriteDetails[]>([]);
    
    //Load the favorites stored
    useEffect(() => {
        async function loadStoredFavorites() {
            setFavorites(await loadAllFavorites());
        }
        loadStoredFavorites();
    })
    return (
        <SafeAreaView style={layoutStyle.container}>
            <View style={layoutStyle.content} >

                <Title title={translate('favoritesTitle')} />
                <FlatList
                    data={favorites}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({ item, index }) => (

                        <ComponentButton
                            key={index}
                            id = {item.id}
                            type ={item.type}
                        />
                    )}
                    style={layoutStyle.flatList}
                />
            </View>
        </SafeAreaView>
    )
}