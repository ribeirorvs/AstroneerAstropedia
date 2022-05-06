import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Glass() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='glass'
                icon='glass'
                nugget='nuggetGlass'
                link='Glass'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='quartz' icon='quartz' link='Quartz' />
                <ResourceSubItem1 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem1 name='soil centifuge' icon='soilCentrifuge' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='oxygen tank' icon='oxygenTank' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='medium solar panel' icon='solar' />
                <ResourceSubItem1 name='medium resource canister' icon='canister' />
                <ResourceSubItem1 name='medium fluid & soil canister' icon='canister' />
                <ResourceSubItem1 name='medium gas canister' icon='canister' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='atmospheric condenser' icon='atmosphericCondenser' />
                <ResourceSubItem1 name='large resource caniester' icon='canister' />
                <ResourceSubItem1 name='large solar panel' icon='solar' />
                <ResourceSubItem1 name='large wind turbine' icon='windTurbine' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='solar array' icon='solar' />
            </ScrollView>
        </SafeAreaView>
    )
}