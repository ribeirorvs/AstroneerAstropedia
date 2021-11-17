import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Carbon() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='carbon'
                image='nuggetCarbon'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='organic' icon='organic' link='Organic' />
                <ResourceSubItem1 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem1 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='plastic' icon='plastic' link='Plastic' />
                <ResourceSubItem1 name='tungsten carbide' icon='tungstenCarbide' link='TungstenCarbide' />
                <ResourceSubItem1 name='explosive powder' icon='explosivePowder' />
                <ResourceSubItem1 name='steel' icon='steel' link='Steel' />
            </View>
        </SafeAreaView>
    )
}