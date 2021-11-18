import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Hydrazine() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='hydrazine'
                image='nuggetHydrazine'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='ammonium' icon='ammonium' link='Ammonium' />
                <ResourceSubItem2 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem2 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem2 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='hydrogen' icon='hydrogen' link='Hydrogen' />
                <ResourceSubItem2 name='sylva' icon='sylva' link='Sylva' />
                <ResourceSubItem2 name='calidor' icon='calidor' link='Calidor' />
                <ResourceSubItem2 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem2 name='novus' icon='novus' link='Novus' />
                <ContentTitle title='uses' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='graphene' icon='graphene' link='Graphene' />
            </ScrollView>
        </SafeAreaView>
    )
}