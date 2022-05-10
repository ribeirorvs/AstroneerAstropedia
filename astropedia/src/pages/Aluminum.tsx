import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Aluminum() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('aluminum')}
                icon='aluminum'
                nugget='nuggetAluminum'
                link='Aluminum'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('laterite')} icon='laterite' link='Laterite' />
                <ResourceSubItem1 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem1 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('oxygenator')} icon='oxygenator' />
                <ResourceSubItem1 name={translate('mediumGenerator')} icon='generator' />
                <ResourceSubItem1 name={translate('mediumWindTurbine')} icon='windTurbine' />
                <ResourceSubItem1 name={translate('tractor')} icon='trailer' />
                <ResourceSubItem1 name={translate('trailer')} icon='trailer' />
                <ResourceSubItem1 name={translate('solidFuelThruster')} icon='thruster' />
                <ResourceSubItem1 name={translate('autoArm')} icon='crane' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem1 name={translate('buggy')} icon='trailer' />
                <ResourceSubItem1 name={translate('largeTPlatform')} icon='platform' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('smallShuttle')} icon='shuttle' />
                <ResourceSubItem1 name={translate('landingPad')} icon='landingPad' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('sourceAluminumAlloy')} icon='aluminumAlloy' link='AluminumAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}