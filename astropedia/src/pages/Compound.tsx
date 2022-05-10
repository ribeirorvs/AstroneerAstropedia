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

export function Compound() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('compound')}
                icon='compound'
                nugget='nuggetCompound'
                link='Compound'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceItem name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('smallGenerator')} icon='generator' />
                <ResourceSubItem1 name={translate('tether')} icon='tether' />
                <ResourceSubItem1 name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('roverSeat')} icon='roverSeat' />
                <ResourceSubItem1 name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('trailer')} icon='trailer' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('researchChamber')} icon='research' />
                <ResourceSubItem1 name={translate('smeltingFurnace')} icon='smeltingFurnace' />
                <ResourceSubItem1 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem1 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('largeRoverSeat')} icon='roverSeat' />
                <ResourceSubItem1 name={translate('buggy')} icon='trailer' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('plastic')} icon='plastic' link='Plastic' />
            </ScrollView>
        </SafeAreaView>
    )
}