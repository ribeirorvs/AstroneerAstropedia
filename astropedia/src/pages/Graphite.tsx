import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Graphite() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('graphite')}
                icon='graphite'
                nugget='nuggetGraphite'
                link='Graphite'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceItem name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('packager')} icon='packager' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('splitter')} icon='splitter' />
                <ResourceSubItem1 name={translate('autoArm')} icon='crane' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('graphene')} icon='graphene' link='Graphene' />
            </ScrollView>
        </SafeAreaView>
    )
}