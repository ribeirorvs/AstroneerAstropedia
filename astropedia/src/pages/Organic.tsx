import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Organic() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='Organic'
                image='nuggetOrganic'
                link='Organic'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='all planets' icon='sylva' link='Planets' />
                <ResourceItem name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceItem name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='glowsticks' icon='worklight' />
                <ResourceItem name='smelting furnace' icon='smeltingFurnace' />
                <ResourceSubItem1 name='carbon' icon='carbon' link='Carbon' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='rubber' icon='rubber' link='Rubber' />
            </View>
        </SafeAreaView>
    )
}