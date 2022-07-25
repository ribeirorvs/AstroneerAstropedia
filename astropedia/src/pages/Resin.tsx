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

export function Resin() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('resin')}
                icon='resin'
                nugget='nuggetResin'
                link='Resin'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceItem name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('canister')} icon='canister' />
                <ResourceSubItem1 name={translate('oxygenFilter')} icon='oxygenTank' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('mediumStorage')} icon='storage' />
                <ResourceSubItem1 name={translate('mediumPlatformA')} icon='platform' />
                <ResourceSubItem1 name={translate('mediumPlatformB')} icon='platform' />
                <ResourceSubItem1 name={translate('mediumPlatformC')} icon='platform' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('largePlatformA')} icon='platform' />
                <ResourceSubItem1 name={translate('largePlatformB')} icon='platform' />
                <ResourceSubItem1 name={translate('smeltingFurnace')} icon='smeltingFurnace' />
                <ResourceSubItem1 name={translate('researchChamber')} icon='research' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('silicone')} icon='silicone' link='Silicone' />
                <ResourceSubItem1 name={translate('rubber')} icon='rubber' link='Rubber' />
            </ScrollView>
        </SafeAreaView>
    )
}