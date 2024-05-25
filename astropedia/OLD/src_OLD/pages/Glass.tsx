import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Glass() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('glass')}
                icon='glass'
                nugget='nuggetGlass'
                link='Glass'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('quartz')} icon='quartz' link='Quartz' />
                <ResourceSubItem1 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem1 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem1 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('oxygenTank')} icon='oxygenTank' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('mediumSolarPanel')} icon='solar' />
                <ResourceSubItem1 name={translate('mediumResourceCanister')} icon='canister' />
                <ResourceSubItem1 name={translate('mediumFluidSoilCanister')} icon='canister' />
                <ResourceSubItem1 name={translate('mediumGasCanister')} icon='canister' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('atmosphericCondenser')} icon='atmosphericCondenser' />
                <ResourceSubItem1 name={translate('largeResourceCaniester')} icon='canister' />
                <ResourceSubItem1 name={translate('largeSolarPanel')} icon='solar' />
                <ResourceSubItem1 name={translate('largeWindTurbine')} icon='windTurbine' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('solarArray')} icon='solar' />
            </ScrollView>
        </SafeAreaView>
    )
}