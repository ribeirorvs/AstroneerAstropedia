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

export function Graphene() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='graphene'
                image='nuggetGraphene'
                link='Graphene'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='graphite' icon='graphite' link='Graphite' />
                <ResourceSubItem2 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem2 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem2 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='hydrazine' icon='hydrazine' link='Hydrazine' />
                <ResourceSubItem2 name='ammonium' icon='ammonium' link='Ammonium' />
                <ResourceSubItem3 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem3 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem3 name='trade platform' icon='tradePlatform' />
                <ResourceSubItem1 name='hydrogen' icon='hydrogen' link='Hydrogen' />
                <ResourceSubItem2 name='sylva' icon='sylva' link='Sylva' />
                <ResourceSubItem2 name='calidor' icon='calidor' link='Calidor' />
                <ResourceSubItem2 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem2 name='novus' icon='novus' link='Novus' />
                <ContentTitle title='uses' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='field shelter' icon='shelter' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='solar array' icon='solar' />
                <ResourceSubItem1 name='xl wind turbine' icon='windTurbine' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='diamond' icon='diamond' link='Diamond' />
                <ResourceSubItem1 name='titanium alloy' icon='titaniumAlloy' link='TitaniumAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}