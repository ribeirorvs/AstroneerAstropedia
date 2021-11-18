import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceSubItem3 } from '../components/resourceSubItem3';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function AluminumAlloy() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='aluminum alloy'
                image='nuggetAluminumAlloy'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='aluminum' icon='aluminum' link='Aluminum' />
                <ResourceSubItem2 name='laterite' icon='laterite' link='Laterite' />
                <ResourceSubItem3 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem3 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='copper' icon='copper' link='Copper' />
                <ResourceSubItem2 name='malachite' icon='malachite' link='Malachite' />
                <ResourceSubItem3 name='sylva' icon='sylva' link='Sylva' />
                <ResourceSubItem3 name='calidor' icon='calidor' link='Calidor' />
                <ResourceSubItem3 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='solid-fuel jump jet' icon='thruster' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='paver' icon='paver' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='large wind turbine' icon='windTurbine' />
                <ResourceSubItem1 name='large solar panel' icon='solar' />
                <ResourceSubItem1 name='recreational sphere' icon='recreationalSphere' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='medium shuttle' icon='shuttle' />
                <ResourceSubItem1 name='large rover' icon='trailer' />
                <ResourceSubItem1 name='xl wind turbine' icon='windTurbine' />
                <ResourceSubItem1 name='solar array' icon='solar' />
            </ScrollView>
        </SafeAreaView>
    )
}