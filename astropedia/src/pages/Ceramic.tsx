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

export function Ceramic() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('ceramic')}
                icon='ceramic'
                nugget='nuggetCeramic'
                link='Ceramic'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('clay')} icon='clay' link='Clay' />
                <ResourceSubItem1 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem1 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem1 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('drillMod1')} icon='augment' />
                <ResourceSubItem1 name={translate('smallWindTurbine')} icon='windTurbine' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('oxygenator')} icon='oxygenator' />
                <ResourceSubItem1 name={translate('mediumWindTurbine')} icon='windTurbine' />
                <ResourceSubItem1 name={translate('tallPlatform')} icon='platform' />
                <ResourceSubItem1 name={translate('tallStorage')} icon='storage' />
                <ResourceSubItem1 name={translate('drillStrength1')} icon='drill' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('exoRequestPlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('largeWindTurbine')} icon='windTurbine' />
                <ResourceSubItem1 name={translate('largePlatformC')} icon='platform' />
                <ResourceSubItem1 name={translate('largeCurvedPlatform')} icon='platform' />
                <ResourceSubItem1 name={translate('largeStorage')} icon='storage' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('xlWindTurbine')} icon='windTurbine' />
                <ResourceSubItem1 name={translate('extraLargePlatformA')} icon='platform' />
                <ResourceSubItem1 name={translate('extraLargeCurvedPlatform')} icon='platform' />
                <ResourceSubItem1 name={translate('extraLargeStorage')} icon='storage' />
                <ResourceSubItem1 name={translate('landingPad')} icon='landingPad' />
                <ResourceSubItem1 name={translate('mediumShuttle')} icon='shuttle' />
                <ResourceSubItem1 name={translate('largeShuttle')} icon='shuttle' />
            </ScrollView>
        </SafeAreaView>
    )
}