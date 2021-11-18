import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Methane() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='methane'
                image='nuggetMethane'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='atmospheric condenser' icon='atmosphericCondenser' />
                <ResourceSubItem1 name='novus' icon='novus' link='Novus' />
                <ResourceSubItem1 name='atrox' icon='atrox' link='Atrox' />
                <ContentTitle title='uses' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='silicone' icon='silicone' link='Silicone' />
            </View>
        </SafeAreaView>
    )
}