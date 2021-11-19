import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Silicone() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='silicone'
                image='nuggetSilicone'
                link='Silicone'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='resin' icon='resin' link='Resin' />
                <ResourceSubItem2 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem2 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem2 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='methane' icon='methane' link='Methane' />
                <ResourceSubItem2 name='novus' icon='novus' link='Novus' />
                <ResourceSubItem2 name='atrox' icon='atrox' link='Atrox' />
                <ResourceSubItem1 name='quartz' icon='quartz' link='Quartz' />
                <ResourceSubItem2 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem2 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem2 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='field shelter' icon='shelter' />
                <ResourceSubItem1 name='paver' icon='paver' />
                <ResourceSubItem1 name='medium gas canister' icon='canister' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='crane' icon='crane' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='shelter' icon='shelter' />
            </ScrollView>
        </SafeAreaView>
    )
}