import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Sylva() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='sylva'
                image='iconSylva'
            />
            <View style={layoutStyle.content} >
                <ContentTitle title='natural resources' />
                <PlanetResource nugget='nuggetSphalerite' icon='sphalerite' name='sphalerite' />
                <PlanetResource nugget='nuggetMalachite' icon='malachite' name='malachite' />
                <ContentTitle title='atmospheric resources' />
                <PlanetResource nugget='nuggetHydrogen' icon='hydrogen' name='hydrogen' />
                <PlanetResource nugget='nuggetNitrogen' icon='nitrogen' name='nitrogen' />
            </View>
        </SafeAreaView>
    )
}