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

export function tungstenCarbide() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='tungsten carbide'
                image='nuggetTungstenCarbide'
                link='TungstenCarbide'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='tungsten' icon='tungsten' link='Tungsten' />
                <ResourceSubItem2 name='wolframite' icon='wolframite' link='Wolframite' />
                <ResourceSubItem3 name='desolo' icon='desolo' link='Desolo' />
                <ResourceSubItem3 name='calidor' icon='calidor' link='Calidor' />
                <ResourceSubItem3 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='carbon' icon='carbon' link='Carbon' />
                <ResourceSubItem2 name='organic' icon='organic' link='Organic' />
                <ResourceSubItem3 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem3 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem3 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='drill mod 2' icon='augment' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='drill strength 1' icon='drill' />
                <ResourceSubItem1 name='drill strength 2' icon='drill' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='large shredder' icon='shredder' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='extra large shredder' icon='shredder' />
                <ResourceSubItem1 name='auto extractor' icon='autoExtractor' />
            </ScrollView>
        </SafeAreaView>
    )
}