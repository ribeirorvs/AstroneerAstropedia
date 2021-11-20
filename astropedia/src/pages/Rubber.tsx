import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceSubItem3 } from '../components/resourceSubItem3';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Rubber() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='rubber'
                icon='rubber'
                nugget='nuggetRubber'
                link='Rubber'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='organic' icon='organic' link='Organic' />
                <ResourceSubItem2 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem2 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem2 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='resin' icon='resin' link='Resin' />
                <ResourceSubItem2 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem2 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem2 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='winch' icon='winch' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='medium rover' icon='trailer' />
                <ResourceSubItem1 name='recreational sphere' icon='recreationalSphere' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='large rover' icon='trailer' />
                <ResourceSubItem1 name='auto extractor' icon='autoExtractor' />
            </ScrollView>
        </SafeAreaView>
    )
}