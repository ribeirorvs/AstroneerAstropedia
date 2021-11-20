import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceSubItem3 } from '../components/resourceSubItem3';
import { ResourceSubItem4 } from '../components/resourceSubItem4';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function TitaniumAlloy() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='titanium alloy'
                icon='titaniumAlloy'
                nugget='nuggetTitaniumAlloy'
                link='TitaniumAlloy'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='titanium' icon='titanium' link='Titanium' />
                <ResourceSubItem2 name='titanite' icon='titanite' link='Titanite' />
                <ResourceSubItem3 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem3 name='glacio' icon='glacio' link='Glacio' />
                <ResourceSubItem3 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='nitrogen' icon='nitrogen' link='Nitrogen' />
                <ResourceSubItem2 name='sylva' icon='sylva' link='Sylva' />
                <ResourceSubItem2 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem2 name='atrox' icon='atrox' link='Atrox' />
                <ResourceSubItem1 name='graphene' icon='graphene' link='Graphene' />
                <ResourceSubItem2 name='graphite' icon='graphite' link='Graphite' />
                <ResourceSubItem3 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem3 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem3 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem2 name='hydrazine' icon='hydrazine' link='Hydrazine' />
                <ResourceSubItem3 name='ammonium' icon='ammonium' link='Ammonium' />
                <ResourceSubItem4 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem4 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem4 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem3 name='hydrogen' icon='hydrogen' link='Hydrogen' />
                <ResourceSubItem4 name='sylva' icon='sylva' link='Sylva' />
                <ResourceSubItem4 name='calidor' icon='calidor' link='Calidor' />
                <ResourceSubItem4 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem4 name='novus' icon='novus' link='Novus' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='hydrazine jet pack' icon='thruster' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='drill strength 2' icon='drill' />
                <ResourceSubItem1 name='drill strength 3' icon='drill' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='large shuttle' icon='shuttle' />
                <ResourceSubItem1 name='auto extractor' icon='autoExtractor' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='nanocarbon alloy' icon='nanocarbonAlloy' link='NanocarbonAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}