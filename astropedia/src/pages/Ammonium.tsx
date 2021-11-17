import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Ammonium() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='ammonium'
                image='nuggetAmmonium'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='all planets' icon='sylva' link='Planets' />
                <ResourceItem name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceItem name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='solid-fuel thruster' icon='thruster' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='hydrazine' icon='hydrazine' link='Hydrazine' />
            </View>
        </SafeAreaView>
    )
}