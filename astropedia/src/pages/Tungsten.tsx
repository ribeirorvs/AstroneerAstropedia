import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Tungsten() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='tungsten'
                icon='tungsten'
                nugget='nuggetTungsten'
                link='Tungsten'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='wolframite' icon='wolframite' link='Wolframite' />
                <ResourceSubItem1 name='desolo' icon='desolo' link='Desolo' />
                <ResourceSubItem1 name='calidor' icon='calidor' link='Calidor' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='floodlight' icon='worklight' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='medium generator' icon='generator' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='tungsten carbide' icon='tungstenCarbide' link='TungstenCarbide' />
            </ScrollView>
        </SafeAreaView>
    )
}