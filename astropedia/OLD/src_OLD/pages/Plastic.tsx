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

export function Plastic() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('plastic')}
                icon='plastic'
                nugget='nuggetPlastic'
                link='Plastic'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('compound')} icon='compound' link='Compound' />
                <ResourceSubItem2 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem2 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem2 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('carbon')} icon='carbon' link='Carbon' />
                <ResourceSubItem2 name={translate('organic')} icon='organic' link='Organic' />
                <ResourceSubItem3 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem3 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem3 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('holographicFigurine')} icon='figurine' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('mediumFluidSoilCanister')} icon='canister' />
                <ResourceSubItem1 name={translate('mediumResourceCanister')} icon='canister' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('largeRoverSeat')} icon='roverSeat' />
                <ResourceSubItem1 name={translate('atmosphericCondenser')} icon='atmosphericCondenser' />
                <ResourceSubItem1 name={translate('mediumRover')} icon='trailer' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('shelter')} icon='shelter' />
            </ScrollView>
        </SafeAreaView>
    )
}