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

export function Ceramic() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='ceramic'
                icon='ceramic'
                nugget='nuggetCeramic'
                link='Ceramic'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='clay' icon='clay' link='Clay' />
                <ResourceSubItem1 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem1 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='drill mod 1' icon='augment' />
                <ResourceSubItem1 name='small wind turbine' icon='windTurbine' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='oxygenator' icon='oxygenator' />
                <ResourceSubItem1 name='medium wind turbine' icon='windTurbine' />
                <ResourceSubItem1 name='tall platform' icon='platform' />
                <ResourceSubItem1 name='tall storage' icon='storage' />
                <ResourceSubItem1 name='drill strength 1' icon='drill' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='exo request platform' icon='tradePlatform' />
                <ResourceSubItem1 name='large wind turbine' icon='windTurbine' />
                <ResourceSubItem1 name='large platform c' icon='platform' />
                <ResourceSubItem1 name='large curved platform' icon='platform' />
                <ResourceSubItem1 name='large storage' icon='storage' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='xl wind turbine' icon='windTurbine' />
                <ResourceSubItem1 name='extra large platform a' icon='platform' />
                <ResourceSubItem1 name='extra large curved platform' icon='platform' />
                <ResourceSubItem1 name='extra large storage' icon='storage' />
                <ResourceSubItem1 name='landing pad' icon='landingPad' />
                <ResourceSubItem1 name='medium shuttle' icon='shuttle' />
                <ResourceSubItem1 name='large shuttle' icon='shuttle' />
            </ScrollView>
        </SafeAreaView>
    )
}