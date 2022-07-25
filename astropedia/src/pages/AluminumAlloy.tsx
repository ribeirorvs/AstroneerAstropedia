import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceSubItem3 } from '../components/resourceSubItem3';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function AluminumAlloy() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('sourceAluminumAlloy')}
                favTitle={translate('aluminumAlloy')}
                icon='aluminumAlloy'
                nugget='nuggetAluminumAlloy'
                link='AluminumAlloy'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('aluminum')} icon='aluminum' link='Aluminum' />
                <ResourceSubItem2 name={translate('laterite')} icon='laterite' link='Laterite' />
                <ResourceSubItem3 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem3 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('copper')} icon='copper' link='Copper' />
                <ResourceSubItem2 name={translate('malachite')} icon='malachite' link='Malachite' />
                <ResourceSubItem3 name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceSubItem3 name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceSubItem3 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('solidFuelJumpJet')} icon='thruster' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('paver')} icon='paver' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('largeWindTurbine')} icon='windTurbine' />
                <ResourceSubItem1 name={translate('largeSolarPanel')} icon='solar' />
                <ResourceSubItem1 name={translate('recreationalSphere')} icon='recreationalSphere' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('mediumShuttle')} icon='shuttle' />
                <ResourceSubItem1 name={translate('largeRover')} icon='trailer' />
                <ResourceSubItem1 name={translate('xlWindTurbine')} icon='windTurbine' />
                <ResourceSubItem1 name={translate('solarArray')} icon='solar' />
            </ScrollView>
        </SafeAreaView>
    )
}