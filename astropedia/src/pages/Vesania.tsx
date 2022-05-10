import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Vesania() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('vesania')}
                icon='vesania'
                nugget='nuggetVesania'
                link='Vesania'
            />
            <ScrollView style={layoutStyle.resourceContent} contentContainerStyle={{ alignItems: 'center' }} >
                <ContentTitle title='natural resources' />
                <PlanetResource
                    nugget='nuggetLithium'
                    icon='lithium'
                    name={translate('lithium')}
                    link='Lithium'
                />
                <PlanetResource
                    nugget='nuggetTitanite'
                    icon='titanite'
                    name={translate('titanite')}
                    link='Titanite'
                />
                <ContentTitle title='atmospheric resources' />
                <PlanetResource
                    nugget='nuggetHydrogen'
                    icon='hydrogen'
                    name={translate('hydrogen')}
                    link='Hydrogen'
                />
                <PlanetResource
                    nugget='nuggetNitrogen'
                    icon='nitrogen'
                    name={translate('nitrogen')}
                    link='Nitrogen'
                />
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