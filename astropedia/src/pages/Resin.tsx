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

export function Resin() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='resin'
                image='nuggetResin'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='all planets' icon='sylva' link='Planets' />
                <ResourceItem name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceItem name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='canister' icon='canister' />
                <ResourceSubItem1 name='oxygen filter' icon='oxygenTank' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='medium storage' icon='storage' />
                <ResourceSubItem1 name='medium platfomr a' icon='platform' />
                <ResourceSubItem1 name='medium platform b' icon='platform' />
                <ResourceSubItem1 name='medium platform c' icon='platform' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='large platform a' icon='platform' />
                <ResourceSubItem1 name='large platform b' icon='platform' />
                <ResourceSubItem1 name='smelting furnace' icon='smeltingFurnace' />
                <ResourceSubItem1 name='research chamber' icon='research' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='silicone' icon='silicone' link='Silicone' />
                <ResourceSubItem1 name='rubber' icon='rubber' link='Rubber' />
            </ScrollView>
        </SafeAreaView>
    )
}