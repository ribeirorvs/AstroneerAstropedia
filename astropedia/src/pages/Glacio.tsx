import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Glacio() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('glacio')}
                icon='glacio'
                nugget='nuggetGlacio'
                link='Glacio'
            />
            <ScrollView style={layoutStyle.resourceContent} contentContainerStyle={{ alignItems: 'center' }} >
                <ContentTitle title={translate('naturalResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetHematite'
                    icon='hematite'
                    name={translate('hematite')}
                    link='Hematite'
                />
                <PlanetResource
                    nugget='nuggetTitanite'
                    icon='titanite'
                    name={translate('titanite')}
                    link='Titanite'
                />
                <ContentTitle title={translate('atmosphericResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetArgon'
                    icon='argon'
                    name={translate('argon')}
                    link='Argon'
                />
            </ScrollView>
        </SafeAreaView>
    )
}