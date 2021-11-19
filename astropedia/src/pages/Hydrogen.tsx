import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Hydrogen() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='hydrogen'
                image='nuggetHydrogen'
                link='Hydrogen'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='atmospheric condenser' icon='atmosphericCondenser' />
                <ResourceSubItem1 name='sylva' icon='sylva' link='Sylva' />
                <ResourceSubItem1 name='calidor' icon='calidor' link='Calidor' />
                <ResourceSubItem1 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem1 name='novus' icon='novus' link='Novus' />
                <ContentTitle title='uses' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='hydrazine' icon='hydrazine' link='Hydrazine' />
            </View>
        </SafeAreaView>
    )
}