import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ComponentButton } from '../components/component';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { layoutStyle } from '../styles/layoutStyles';
import { translate } from '../libs/localization';

export function Home() {
    return (
        <SafeAreaView style={layoutStyle.container}>
            <Header />
            <View style={layoutStyle.content} >
                <Title title={translate('mainTitle')} />
                <ComponentButton
                    title={translate('planetsTitle')}
                    icon='sylva'
                    link='Planets'
                />
                <ComponentButton
                    title={translate('resourcesTitle')}
                    icon='compound'
                    link='Resources'
                />
                <ComponentButton
                    title={translate('printers')}
                    icon='backpackPrinter'
                    link='Printers'
                />
                <ComponentButton
                    title={translate('favoritesTitle')}
                    icon='favIcon'
                    link='Favorites'
                />
            </View>
        </SafeAreaView>
    )
}