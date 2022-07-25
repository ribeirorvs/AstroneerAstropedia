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

export function Graphene() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('graphene')}
                icon='graphene'
                nugget='nuggetGraphene'
                link='Graphene'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('graphite')} icon='graphite' link='Graphite' />
                <ResourceSubItem2 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem2 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem2 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('hydrazine')} icon='hydrazine' link='Hydrazine' />
                <ResourceSubItem2 name={translate('ammonium')} icon='ammonium' link='Ammonium' />
                <ResourceSubItem3 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem3 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem3 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('hydrogen')} icon='hydrogen' link='Hydrogen' />
                <ResourceSubItem2 name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceSubItem2 name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceSubItem2 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem2 name={translate('novus')} icon='novus' link='Novus' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('fieldShelter')} icon='shelter' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('solarArray')} icon='solar' />
                <ResourceSubItem1 name={translate('xlWindTurbine')} icon='windTurbine' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('diamond')} icon='diamond' link='Diamond' />
                <ResourceSubItem1 name={translate('titaniumAlloy')} icon='titaniumAlloy' link='TitaniumAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}