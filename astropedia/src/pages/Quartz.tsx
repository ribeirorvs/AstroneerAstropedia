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

export function Quartz() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='quartz'
                image='nuggetQuartz'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='all planets' icon='sylva' link='Planets' />
                <ResourceItem name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceItem name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='beacon' icon='beacon' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='storage sensor' icon='sensor' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='medium sensor arch' icon='sensor' />
                <ResourceSubItem1 name='large sensor ring' icon='sensor' />
                <ResourceSubItem1 name='large sensor hoop a' icon='sensor' />
                <ResourceSubItem1 name='large sensor hoop b' icon='sensor' />
                <ResourceSubItem1 name='XL sensor arch' icon='sensor' />
                <ResourceSubItem1 name='xl sensor canopy' icon='sensor' />
                <ResourceSubItem1 name='xl sensor hoop a' icon='sensor' />
                <ResourceSubItem1 name='xl sensor hoop b' icon='sensor' />
                <ResourceItem name='smelting furnace' icon='smeltingFurnace' />
                <ResourceSubItem1 name='glass' icon='glass' link='Glass' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='silicone' icon='silicone' link='Silicone' />
            </ScrollView>
        </SafeAreaView>
    )
}