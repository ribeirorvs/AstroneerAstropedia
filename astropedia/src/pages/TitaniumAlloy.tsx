import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceSubItem3 } from '../components/resourceSubItem3';
import { ResourceSubItem4 } from '../components/resourceSubItem4';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function TitaniumAlloy() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('titaniumAlloy')}
                icon='titaniumAlloy'
                nugget='nuggetTitaniumAlloy'
                link='TitaniumAlloy'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('titanium')} icon='titanium' link='Titanium' />
                <ResourceSubItem2 name={translate('titanite')} icon='titanite' link='Titanite' />
                <ResourceSubItem3 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem3 name={translate('glacio')} icon='glacio' link='Glacio' />
                <ResourceSubItem3 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('nitrogen')} icon='nitrogen' link='Nitrogen' />
                <ResourceSubItem2 name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceSubItem2 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem2 name={translate('atrox')} icon='atrox' link='Atrox' />
                <ResourceSubItem1 name={translate('graphene')} icon='graphene' link='Graphene' />
                <ResourceSubItem2 name={translate('graphite')} icon='graphite' link='Graphite' />
                <ResourceSubItem3 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem3 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem3 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem2 name={translate('hydrazine')} icon='hydrazine' link='Hydrazine' />
                <ResourceSubItem3 name={translate('ammonium')} icon='ammonium' link='Ammonium' />
                <ResourceSubItem4 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem4 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem4 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem3 name={translate('hydrogen')} icon='hydrogen' link='Hydrogen' />
                <ResourceSubItem4 name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceSubItem4 name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceSubItem4 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem4 name={translate('novus')} icon='novus' link='Novus' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('hydrazineJetPack')} icon='thruster' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('drillStrength2')} icon='drill' />
                <ResourceSubItem1 name={translate('drillStrength3')} icon='drill' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('largeShuttle')} icon='shuttle' />
                <ResourceSubItem1 name={translate('autoExtractor')} icon='autoExtractor' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('sourceNanocarbonAlloy')} icon='nanocarbonAlloy' link='NanocarbonAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}