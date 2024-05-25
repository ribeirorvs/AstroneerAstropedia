import { ComponentButton } from '@/components/componentButton';
import { Title } from '@/components/title';
import { translate } from '@/libs/localization';
import { PageDetails, loadFavorites } from '@/libs/storage';
import { layoutStyle } from '@/styles/layoutStyles';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

export default function Favorites() {
    const [favorites, setFavorites] = useState<PageDetails[]>([]);

    //Load the favorites stored
    useEffect(() => {
        async function loadStoredFavorites() {
            setFavorites(await loadFavorites());
        }
        loadStoredFavorites();
    }, [])
    return (
        <SafeAreaView style={layoutStyle.container}>
            <View style={layoutStyle.content} >

                <Title title={translate('favoritesTitle')} />
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => String(item.pageTitle)}
                    renderItem={({ item }) => (

                        <ComponentButton
                            title={item.pageTitle}
                            icon={item.pageIcon}
                            link={item.pageLink}
                        />
                    )}
                    style={layoutStyle.flatList}
                />
            </View>
        </SafeAreaView>
    )
}