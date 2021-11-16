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
                image='iconAtrox'
            />
            <View style={layoutStyle.content} >
                <ContentTitle title='atmospheric resources' />
                <PlanetResource nugget='nuggetHelium' icon='helium' name='helium' />
                <PlanetResource nugget='nuggetMethane' icon='methane' name='methane' />
                <PlanetResource nugget='nuggetNitrogen' icon='nitrogen' name='nitrogen' />
                <PlanetResource nugget='nuggetSulfur' icon='sulfur' name='sulfur' />
            </View>
        </SafeAreaView>
    )
}