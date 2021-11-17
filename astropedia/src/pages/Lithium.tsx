import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Lithium() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='lithium'
                image='nuggetLithium'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='vesania' icon='vesania' link='Vesania' />
                <ResourceItem name='novus' icon='novus' link='Novus' />
                <ResourceItem name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='medium battery' icon='battery' />
                <ResourceSubItem1 name='RTG' icon='generator' />
            </View>
        </SafeAreaView>
    )
}