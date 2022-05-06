import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Compound() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='compound'
                icon='compound'
                nugget='nuggetCompound'
                link='Compound'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='all planets' icon='sylva' link='Planets' />
                <ResourceItem name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceItem name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='small generator' icon='generator' />
                <ResourceSubItem1 name='tether' icon='tether' />
                <ResourceSubItem1 name='small printer' icon='smallPrinter' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='rover seat' icon='roverSeat' />
                <ResourceSubItem1 name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='trailer' icon='trailer' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='research chamber' icon='research' />
                <ResourceSubItem1 name='smelting furnace' icon='smeltingFurnace' />
                <ResourceSubItem1 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='large rover seat' icon='roverSeat' />
                <ResourceSubItem1 name='buggy' icon='trailer' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='plastic' icon='plastic' link='Plastic' />
            </ScrollView>
        </SafeAreaView>
    )
}