import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Hydrazine() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('hydrazine')}
                icon='hydrazine'
                nugget='nuggetHydrazine'
                link='Hydrazine'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('ammonium')} icon='ammonium' link='Ammonium' />
                <ResourceSubItem2 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem2 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem2 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('hydrogen')} icon='hydrogen' link='Hydrogen' />
                <ResourceSubItem2 name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceSubItem2 name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceSubItem2 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem2 name={translate('novus')} icon='novus' link='Novus' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('graphene')} icon='graphene' link='Graphene' />
            </ScrollView>
        </SafeAreaView>
    )
}