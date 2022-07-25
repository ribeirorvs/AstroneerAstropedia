import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';
import { translate } from '../libs/localization';

export function Sylva() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('sylva')}
                icon='sylva'
                nugget='nuggetSylva'
                link='Sylva'
            />
            <View style={layoutStyle.content} >
                <ContentTitle title={translate('naturalResourcesTitle')} />
                <PlanetResource
                    nugget='nuggetSphalerite'
                    icon='sphalerite'
                    name={translate('sphalerite')}
                    link='Sphalerite'
                />
                <PlanetResource
                    nugget='nuggetMalachite'
                    icon='malachite'
                    name={translate('malachite')}
                    link='Malachite'
                />
                <ContentTitle title={translate('atmosphericResourcesTitle')} />
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
            </View>
        </SafeAreaView>
    )
}