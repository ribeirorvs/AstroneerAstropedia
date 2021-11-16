import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Vesania() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='vesania'
                image='iconVesania'
            />
            <ScrollView style={layoutStyle.resourceContent} contentContainerStyle={{ alignItems: 'center' }} >
                <ContentTitle title='natural resources' />
                <PlanetResource nugget='nuggetLithium' icon='lithium' name='lithium' />
                <PlanetResource nugget='nuggetTitanite' icon='titanite' name='titanite' />
                <ContentTitle title='atmospheric resources' />
                <PlanetResource nugget='nuggetHydrogen' icon='hydrogen' name='hydrogen' />
                <PlanetResource nugget='nuggetNitrogen' icon='nitrogen' name='nitrogen' />
                <PlanetResource nugget='nuggetArgon' icon='argon' name='argon' />
            </ScrollView>
        </SafeAreaView>
    )
}