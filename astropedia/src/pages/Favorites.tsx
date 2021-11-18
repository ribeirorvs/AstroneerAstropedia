import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlanetList } from '../assets/planets';
import { ComponentButton } from '../components/component';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { layoutStyle } from '../styles/layoutStyles';

export function Favorites() {
    return (
        <SafeAreaView style={layoutStyle.container}>
            <Header />
            <View style={layoutStyle.content} >
                <Title title='favorites' />

            </View>
        </SafeAreaView>
    )
}