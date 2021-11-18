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

export function Steel() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='steel'
                image='nuggetSteel'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='carbon' icon='carbon' link='Carbon' />
                <ResourceSubItem2 name='organic' icon='organic' link='Organic' />
                <ResourceSubItem3 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem3 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem3 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='argon' icon='argon' link='Argon' />
                <ResourceSubItem2 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem2 name='glacio' icon='glacio' link='Glacio' />
                <ResourceSubItem1 name='iron' icon='iron' link='Iron' />
                <ResourceSubItem2 name='hematite' icon='hematite' link='Hematite' />
                <ResourceSubItem3 name='novus' icon='novus' link='Novus' />
                <ResourceSubItem3 name='glacio' icon='glacio' link='Glacio' />
                <ResourceSubItem3 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='probe scanner' icon='probeScanner' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='hydrazine thruster' icon='thruster' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='crane' icon='crane' />
                <ResourceSubItem1 name='large storage silo a' icon='storage' />
                <ResourceSubItem1 name='large storage silo b' icon='storage' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='extra large shredder' icon='shredder' />
                <ResourceSubItem1 name='auto extractor' icon='autoExtractor' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='nanocarbon alloy' icon='nanocarbonAlloy' link='NanocarbonAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}