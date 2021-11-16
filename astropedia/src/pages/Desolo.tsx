import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../assets';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Desolo() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='desolo'
                image='iconDesolo'
            />
            <View style={layoutStyle.content} >
                <ContentTitle title='natural resources' />
                <PlanetResource nugget='nuggetWolframite' icon='wolframite' name='wolframite' />
                <PlanetResource nugget='nuggetSphalerite' icon='sphalerite' name='sphalerite' />
            </View>
        </SafeAreaView>
    )
}