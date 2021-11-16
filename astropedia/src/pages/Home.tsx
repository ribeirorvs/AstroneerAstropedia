import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ComponentButton } from '../components/component';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { layoutStyle } from '../styles/layoutStyles';

export function Home() {
    return (
        <SafeAreaView style={layoutStyle.container}>
            <Header />
            <View style={layoutStyle.content} >
                <Title title='astropedia' />
                <ComponentButton
                    title='planets'
                    icon='sylva'
                    link='Planets'
                />
                <ComponentButton
                    title='resources'
                    icon='compound'
                    link='Resources'
                />
                <ComponentButton
                    title='favorites'
                    icon='favIcon'
                    link='Home'
                />
            </View>
        </SafeAreaView>
    )
}