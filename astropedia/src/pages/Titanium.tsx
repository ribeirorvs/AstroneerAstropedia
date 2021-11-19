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

export function Titanium() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='titanium'
                image='nuggetTitanium'
                link='Titanium'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='titanite' icon='titanite' link='Titanite' />
                <ResourceSubItem1 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem1 name='glacio' icon='glacio' link='Glacio' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='medium storage silo' icon='storage' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='crane' icon='crane' />
                <ResourceSubItem1 name='large resource canister' icon='canister' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='titanium alloy' icon='titaniumAlloy' link='TitaniumAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}