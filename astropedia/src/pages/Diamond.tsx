import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceSubItem3 } from '../components/resourceSubItem3';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Diamond() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='diamond'
                image='nuggetDiamond'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='graphene' icon='graphene' link='Graphene' />
                <ResourceSubItem2 name='graphite' icon='graphite' link='Graphite' />
                <ResourceSubItem3 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem3 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem3 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='backpack printer' icon='backpackPrinter' />
                <ResourceSubItem1 name='drill mod 3' icon='augment' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='drill strength 3' icon='drill' />
            </View>
        </SafeAreaView>
    )
}