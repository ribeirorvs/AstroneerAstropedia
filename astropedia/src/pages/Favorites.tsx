import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ComponentButton } from '../components/component';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { loadFavorites, pageDetails } from '../libs/storage';
import { layoutStyle } from '../styles/layoutStyles';

export function Favorites() {
    const [favorites, setFavorites] = useState<pageDetails[]>([]);
    useEffect(() => {
        async function loadStoredFavorites() {
            setFavorites(await loadFavorites());
        }
        loadStoredFavorites();
    }, [])
    return (
        <SafeAreaView style={layoutStyle.container}>
            <Header />
            <View style={layoutStyle.content} >
                <Title title='favorites' />
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