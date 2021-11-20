import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Astronium() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='astronium'
                icon='astronium'
                nugget='nuggetAstronium'
                link='Astronium'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='all planets' icon='sylva' link='Planets' />
                <ContentTitle title='uses' />
                <ResourceItem name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='exo chip' icon='exoChip' />
                <ResourceSubItem1 name='packager' icon='packager' />
                <ResourceSubItem1 name='solid-fuel jump jet' icon='thruster' />
                <ResourceSubItem1 name='dynamite' icon='dynamite' />
                <ResourceSubItem1 name='hydrazine' icon='hydrazine' link='Hydrazine' />
            </View>
        </SafeAreaView>
    )
}