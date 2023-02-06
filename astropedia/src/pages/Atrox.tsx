import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetDetails } from '../components/planetDetails';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Atrox() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('atrox')}
                icon='atrox'
                nugget='nuggetAtrox'
                link='Atrox'
            />
            <ScrollView style={layoutStyle.resourceContent} contentContainerStyle={{ alignItems: 'center' }} >
                <ContentTitle title={translate('planetDetails')} />
                <PlanetDetails
                    size={translate('medium')}
                    difficulty={translate('veryHard')}
                    cycle='~20'
                    sun={translate('low')}
                    sunValue='50%'
                    wind={translate('veryLow')}
                    windValue='25%'
                />
                <ContentTitle title={translate('atmosphericResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetHelium'
                    icon='helium'
                    name={translate('helium')}
                    link='Helium'
                />
                <PlanetResource
                    nugget='nuggetMethane'
                    icon='methane'
                    name={translate('methane')}
                    link='Methane'
                />
                <PlanetResource
                    nugget='nuggetNitrogen'
                    icon='nitrogen'
                    name={translate('nitrogen')}
                    link='Nitrogen'
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