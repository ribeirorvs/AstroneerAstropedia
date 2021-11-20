import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Atrox() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='atrox'
                icon='atrox'
                nugget='nuggetAtrox'
                link='Atrox'
            />
            <View style={layoutStyle.content} >
                <ContentTitle title='atmospheric resources' />
                <PlanetResource
                    nugget='nuggetHelium'
                    icon='helium'
                    name='helium'
                    link='Helium'
                />
                <PlanetResource
                    nugget='nuggetMethane'
                    icon='methane'
                    name='methane'
                    link='Methane'
                />
                <PlanetResource
                    nugget='nuggetNitrogen'
                    icon='nitrogen'
                    name='nitrogen'
                    link='Nitrogen'
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