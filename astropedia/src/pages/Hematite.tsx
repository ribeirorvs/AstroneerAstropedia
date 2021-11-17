import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Hematite() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='hematite'
                image='nuggetHematite'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='all planets' icon='sylva' link='Planets' />
                <ResourceItem name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceItem name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='smelting furnace' icon='smeltingFurnace' />
                <ResourceSubItem1 name='iron' icon='iron' link='Iron' />
            </View>
        </SafeAreaView>
    )
}