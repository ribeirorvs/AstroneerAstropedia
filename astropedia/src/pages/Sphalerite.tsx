import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Sphalerite() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='sphalerite'
                image='nuggetSphalerite'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='sylva' icon='sylva' link='Sylva' />
                <ResourceItem name='desolo' icon='desolo' link='Desolo' />
                <ResourceItem name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='smelting furnace' icon='smeltingFurnace' />
                <ResourceSubItem1 name='zinc' icon='zinc' link='Zinc' />
            </View>
        </SafeAreaView>
    )
}