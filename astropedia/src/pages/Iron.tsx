import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Iron() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('iron')}
                icon='iron'
                nugget='nuggetIron'
                link='Iron'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('hematite')} icon='hematite' link='Hematite' />
                <ResourceSubItem1 name={translate('novus')} icon='novus' link='Novus' />
                <ResourceSubItem1 name={translate('glacio')} icon='glacio' link='Glacio' />
                <ResourceSubItem1 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('mediumShredder')} icon='shredder' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('atmosphericCondenser')} icon='atmosphericCondenser' />
                <ResourceSubItem1 name={translate('largeShredder')} icon='shredder' />
                <ResourceSubItem1 name={translate('largePlatformC')} icon='platform' />
                <ResourceSubItem1 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('xlWindTurbine')} icon='windTurbine' />
                <ResourceSubItem1 name={translate('extraLargePlatformA')} icon='platform' />
                <ResourceSubItem1 name={translate('extraLargePlatformB')} icon='platform' />
                <ResourceSubItem1 name={translate('extraLargePlatformC')} icon='platform' />
                <ResourceSubItem1 name={translate('figurinePlatform')} icon='platform' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('steel')} icon='steel' link='Steel' />
            </ScrollView>
        </SafeAreaView>
    )
}