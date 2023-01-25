import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Desolo() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('desolo')}
                icon='desolo'
                nugget='nuggetDesolo'
                link='Desolo'
            />
            <ScrollView style={layoutStyle.resourceContent} contentContainerStyle={{ alignItems: 'center' }} >
                <ContentTitle title={translate('naturalResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetWolframite'
                    icon='wolframite'
                    name={translate('wolframite')}
                    link='Wolframite'
                />
                <PlanetResource
                    nugget='nuggetSphalerite'
                    icon='sphalerite'
                    name={translate('sphalerite')}
                    link='Sphalerite'
                />
            </ScrollView>
        </SafeAreaView>
    )
}