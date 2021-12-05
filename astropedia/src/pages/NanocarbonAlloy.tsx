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
import { ResourceSubItem5 } from '../components/resourceSubItem5';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function NanocarbonAlloy() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='nanocarbon alloy'
                icon='nanocarbonAlloy'
                nugget='nuggetNanocarbonAlloy'
                link='NanocarbonAlloy'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='steel' icon='steel' link='Steel' />
                <ResourceSubItem2 name='carbon' icon='carbon' link='Carbon' />
                <ResourceSubItem3 name='organic' icon='organic' link='Organic' />
                <ResourceSubItem4 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem4 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem4 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem2 name='argon' icon='argon' link='Argon' />
                <ResourceSubItem3 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem3 name='glacio' icon='glacio' link='Glacio' />
                <ResourceSubItem2 name='iron' icon='iron' link='Iron' />
                <ResourceSubItem3 name='hematite' icon='hematite' link='Hematite' />
                <ResourceSubItem4 name='novus' icon='novus' link='Novus' />
                <ResourceSubItem4 name='glacio' icon='glacio' link='Glacio' />
                <ResourceSubItem4 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='helium' icon='helium' link='Helium' />
                <ResourceSubItem2 name='atrox' icon='atrox' link='Atrox' />
                <ResourceSubItem1 name='titanium alloy' icon='titaniumAlloy' link='TitaniumAlloy' />
                <ResourceSubItem2 name='titanium' icon='titanium' link='Titanium' />
                <ResourceSubItem3 name='titanite' icon='titanite' link='Titanite' />
                <ResourceSubItem4 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem4 name='glacio' icon='glacio' link='Glacio' />
                <ResourceSubItem4 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem2 name='nitrogen' icon='nitrogen' link='Nitrogen' />
                <ResourceSubItem3 name='sylva' icon='sylva' link='Sylva' />
                <ResourceSubItem3 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem3 name='atrox' icon='atrox' link='Atrox' />
                <ResourceSubItem2 name='graphene' icon='graphene' link='Graphene' />
                <ResourceSubItem3 name='graphite' icon='graphite' link='Graphite' />
                <ResourceSubItem4 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem4 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem4 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem3 name='hydrazine' icon='hydrazine' link='Hydrazine' />
                <ResourceSubItem4 name='ammonium' icon='ammonium' link='Ammonium' />
                <ResourceSubItem5 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem5 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem5 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem4 name='hydrogen' icon='hydrogen' link='Hydrogen' />
                <ResourceSubItem5 name='sylva' icon='sylva' link='Sylva' />
                <ResourceSubItem5 name='calidor' icon='calidor' link='Calidor' />
                <ResourceSubItem5 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem5 name='novus' icon='novus' link='Novus' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='portable oxygenator' icon='oxygenator' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='rtg' icon='generator' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='large resource canister' icon='canister' />
            </ScrollView>
        </SafeAreaView>
    )
}