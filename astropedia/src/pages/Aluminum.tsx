import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Aluminum() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='aluminum'
                image='nuggetAluminum'
            />
            <ScrollView>
                <ContentTitle title='source' />
                <ResourceItem name='laterite' icon='laterite' link='Laterite' />
                <ResourceSubItem1 name='all planets' icon='sylva' link='Planets' />
                <ResourceSubItem1 name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='small printer' icon='smallPrinter' />
                <ResourceSubItem1 name='oxygenator' icon='oxygenator' />
                <ResourceSubItem1 name='medium generator' icon='generator' />
                <ResourceSubItem1 name='medium wind turbine' icon='windTurbine' />
                <ResourceSubItem1 name='tractor' icon='trailer' />
                <ResourceSubItem1 name='trailer' icon='trailer' />
                <ResourceSubItem1 name='solid-fuel thruster' icon='thruster' />
                <ResourceSubItem1 name='auto arm' icon='crane' />
                <ResourceItem name='medium printer' icon='mediumPrinter' />
                <ResourceSubItem1 name='soil centrifuge' icon='soilCentrifuge' />
                <ResourceSubItem1 name='buggy' icon='trailer' />
                <ResourceSubItem1 name='large t-platform' icon='platform' />
                <ResourceItem name='large printer' icon='largePrinter' />
                <ResourceSubItem1 name='small shuttle' icon='shuttle' />
                <ResourceSubItem1 name='landing pad' icon='landingPad' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='aluminum alloy' icon='aluminumAlloy' link='AluminumAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}