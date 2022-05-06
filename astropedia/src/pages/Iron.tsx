import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Iron() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='iron'
                icon='iron'
                nugget='nuggetIron'
                link='Iron'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='hematite' icon='hematite' link='Hematite' />
                <ResourceSubItem1 name='novus' icon='novus' link='Novus' />
                <ResourceSubItem1 name='glacio' icon='glacio' link='Glacio' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='medium shredder' icon='shredder' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='atmospheric condenser' icon='atmosphericCondenser' />
                <ResourceSubItem1 name='large shredder' icon='shredder' />
                <ResourceSubItem1 name='large platform c' icon='platform' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='xl wind turbine' icon='windTurbine' />
                <ResourceSubItem1 name='extra large platform a' icon='platform' />
                <ResourceSubItem1 name='extra large platform b' icon='platform' />
                <ResourceSubItem1 name='extra large platform c' icon='platform' />
                <ResourceSubItem1 name='figurine platform' icon='platform' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='steel' icon='steel' link='Steel' />
            </ScrollView>
        </SafeAreaView>
    )
}