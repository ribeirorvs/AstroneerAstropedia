import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Silicone() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('silicone')}
                icon='silicone'
                nugget='nuggetSilicone'
                link='Silicone'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('resin')} icon='resin' link='Resin' />
                <ResourceSubItem2 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem2 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem2 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('methane')} icon='methane' link='Methane' />
                <ResourceSubItem2 name={translate('novus')} icon='novus' link='Novus' />
                <ResourceSubItem2 name={translate('atrox')} icon='atrox' link='Atrox' />
                <ResourceSubItem1 name={translate('quartz')} icon='quartz' link='Quartz' />
                <ResourceSubItem2 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem2 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem2 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('fieldShelter')} icon='shelter' />
                <ResourceSubItem1 name={translate('paver')} icon='paver' />
                <ResourceSubItem1 name={translate('mediumGasCanister')} icon='canister' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('crane')} icon='crane' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('shelter')} icon='shelter' />
            </ScrollView>
        </SafeAreaView>
    )
}