import React, { useEffect } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlanetList } from '../assets/planets';
import { ComponentButton } from '../components/component';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { loadFavorites, pageDetails } from '../libs/storage';
import { layoutStyle } from '../styles/layoutStyles';

export function Favorites() {
    useEffect(() => {
        async function loadStoredFavorites() {
            const favoritesStored = await loadFavorites();
            console.log(favoritesStored)
            Alert.alert(JSON.stringify(favoritesStored));
        }
    })
    return (
        <SafeAreaView style={layoutStyle.container}>
            <Header />
            <View style={layoutStyle.content} >
                <Title title='favorites' />

            </View>
        </SafeAreaView>
    )
}