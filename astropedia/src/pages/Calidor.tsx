import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Calidor() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('calidor')}
                icon='calidor'
                nugget='nuggetCalidor'
                link='Calidor'
            />
            <ScrollView style={layoutStyle.resourceContent} contentContainerStyle={{ alignItems: 'center' }} >
                <ContentTitle title={translate('naturalResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetMalachite'
                    icon='malachite'
                    name={translate('malachite')}
                    link='Malachite'
                />
                <PlanetResource
                    nugget='nuggetWolframite'
                    icon='wolframite'
                    name={translate('wolframite')}
                    link='Wolframite'
                />
                <ContentTitle title={translate('atmosphericResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetHydrogen'
                    icon='hydrogen'
                    name={translate('hydrogen')}
                    link='Hydrogen'
                />
                <PlanetResource
                    nugget='nuggetSulfur'
                    icon='sulfur'
                    name={translate('sulfur')}
                    link='Sulfur'
                />
            </ScrollView>
        </SafeAreaView>
    )
}