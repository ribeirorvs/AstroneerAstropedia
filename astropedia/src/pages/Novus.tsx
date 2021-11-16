import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Novus() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='novus'
                image='iconNovus'
            />
            <View style={layoutStyle.content} >
                <ContentTitle title='natural resources' />
                <PlanetResource nugget='nuggetHematite' icon='hematite' name='hematite' />
                <PlanetResource nugget='nuggetLithium' icon='lithium' name='lithium' />
                <ContentTitle title='atmospheric resources' />
                <PlanetResource nugget='nuggetHydrogen' icon='hydrogen' name='hydrogen' />
                <PlanetResource nugget='nuggetMethane' icon='methane' name='methane' />
            </View>
        </SafeAreaView>
    )
}