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
                icon='hematite'
                nugget='nuggetHematite'
                link='Hematite'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='novus' icon='novus' link='Novus' />
                <ResourceItem name='glacio' icon='glacio' link='Glacio' />
                <ResourceItem name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='smelting furnace' icon='smeltingFurnace' />
                <ResourceSubItem1 name='iron' icon='iron' link='Iron' />
            </View>
        </SafeAreaView>
    )
}