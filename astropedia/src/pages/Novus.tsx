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

export function Novus() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('novus')}
                icon='novus'
                nugget='nuggetNovus'
                link='Novus'
            />
            <ScrollView style={layoutStyle.resourceContent} contentContainerStyle={{ alignItems: 'center' }} >
                <ContentTitle title={translate('planetDetails')} />
                <PlanetDetails
                    size={translate('small')}
                    difficulty={translate('medium')}
                    cycle='3.5'
                    sun={translate('high')}
                    sunValue='150%'
                    wind={translate('high')}
                    windValue='58%'
                />
                <ContentTitle title={translate('naturalResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetHematite'
                    icon='hematite'
                    name={translate('hematite')}
                    link='Hematite'
                    location={translate('caveLayer')}
                />
                <PlanetResource
                    nugget='nuggetLithium'
                    icon='lithium'
                    name={translate('lithium')}
                    link='Lithium'
                    location={translate('mountains') + ', ' + translate('mantleLayer')}
                />
                <ContentTitle title={translate('atmosphericResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetHydrogen'
                    icon='hydrogen'
                    name={translate('hydrogen')}
                    link='Hydrogen'
                />
                <PlanetResource
                    nugget='nuggetMethane'
                    icon='methane'
                    name={translate('methane')}
                    link='Methane'
                />
            </ScrollView>
        </SafeAreaView>
    )
}