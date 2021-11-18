import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Argon() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='argon'
                image='nuggetArgon'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='atmospheric condenser' icon='atmosphericCondenser' />
                <ResourceSubItem1 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem1 name='glacio' icon='glacio' link='Glacio' />
                <ContentTitle title='uses' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='steel' icon='steel' link='Steel' />
            </View>
        </SafeAreaView>
    )
}