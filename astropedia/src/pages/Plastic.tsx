import React from 'react';
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

export function Plastic() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='plastic'
                image='nuggetPlastic'
                link='Plastic'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='compound' icon='compound' link='Compound' />
                <ResourceSubItem2 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem2 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem2 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='carbon' icon='carbon' link='Carbon' />
                <ResourceSubItem2 name='organic' icon='organic' link='Organic' />
                <ResourceSubItem3 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem3 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem3 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='holographic figurine' icon='figurine' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='medium fluid & soil canister' icon='canister' />
                <ResourceSubItem1 name='medium resource canister' icon='canister' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='large rover seat' icon='roverSeat' />
                <ResourceSubItem1 name='atmospheric condenser' icon='atmosphericCondenser' />
                <ResourceSubItem1 name='medium rover' icon='trailer' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='shelter' icon='shelter' />
            </ScrollView>
        </SafeAreaView>
    )
}