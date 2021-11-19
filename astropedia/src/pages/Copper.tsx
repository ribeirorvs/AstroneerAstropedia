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

export function Copper() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='copper'
                image='nuggetCopper'
                link='Copper'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='malachite' icon='malachite' link='Malachite' />
                <ResourceSubItem1 name='sylva' icon='sylva' link='Sylva' />
                <ResourceSubItem1 name='calidor' icon='calidor' link='Calidor' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='worklight' icon='worklight' />
                <ResourceSubItem1 name='small solar panel' icon='solar' />
                <ResourceSubItem1 name='extenders' icon='extenders' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='medium solar panel' icon='solar' />
                <ResourceSubItem1 name='splitter' icon='splitter' />
                <ResourceSubItem1 name='power sensor' icon='sensor' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='solar array' icon='solar' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='aluminum alloy' icon='aluminumAlloy' link='AluminumAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}