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

export function Rubber() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('rubber')}
                icon='rubber'
                nugget='nuggetRubber'
                link='Rubber'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('organic')} icon='organic' link='Organic' />
                <ResourceSubItem2 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem2 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem2 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('resin')} icon='resin' link='Resin' />
                <ResourceSubItem2 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem2 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem2 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('winch')} icon='winch' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('mediumRover')} icon='trailer' />
                <ResourceSubItem1 name={translate('recreationalSphere')} icon='recreationalSphere' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('largeRover')} icon='trailer' />
                <ResourceSubItem1 name={translate('autoExtractor')} icon='autoExtractor' />
            </ScrollView>
        </SafeAreaView>
    )
}