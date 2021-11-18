import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Calidor() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='calidor'
                image='iconCalidor'
            />
            <View style={layoutStyle.content} >
                <ContentTitle title='natural resources' />
                <PlanetResource
                    nugget='nuggetMalachite'
                    icon='malachite'
                    name='malachite'
                    link='Malachite'
                />
                <PlanetResource
                    nugget='nuggetWolframite'
                    icon='wolframite'
                    name='wolframite'
                    link='Wolframite'
                />
                <ContentTitle title='atmospheric resources' />
                <PlanetResource
                    nugget='nuggetHydrogen'
                    icon='hydrogen'
                    name='hydrogen'
                    link='Hydrogen'
                />
                <PlanetResource
                    nugget='nuggetSulfur'
                    icon='sulfur'
                    name='sulfur'
                    link='Sulfur'
                />
            </View>
        </SafeAreaView>
    )
}