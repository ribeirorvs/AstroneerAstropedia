import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
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

export function TungstenCarbide() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('sourceTungstenCarbide')}
                favTitle={translate('tungstenCarbide')}
                icon='tungstenCarbide'
                nugget='nuggetTungstenCarbide'
                link='TungstenCarbide'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('tungsten')} icon='tungsten' link='Tungsten' />
                <ResourceSubItem2 name={translate('wolframite')} icon='wolframite' link='Wolframite' />
                <ResourceSubItem3 name={translate('desolo')} icon='desolo' link='Desolo' />
                <ResourceSubItem3 name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceSubItem3 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('carbon')} icon='carbon' link='Carbon' />
                <ResourceSubItem2 name={translate('organic')} icon='organic' link='Organic' />
                <ResourceSubItem3 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem3 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem3 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('drillMod2')} icon='augment' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('drillStrength1')} icon='drill' />
                <ResourceSubItem1 name={translate('drillStrength2')} icon='drill' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('largeShredder')} icon='shredder' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('extraLargeShredder')} icon='shredder' />
                <ResourceSubItem1 name={translate('autoExtractor')} icon='autoExtractor' />
            </ScrollView>
        </SafeAreaView>
    )
}