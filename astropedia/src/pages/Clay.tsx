import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Clay() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('clay')}
                icon='clay'
                nugget='nuggetClay'
                link='Clay'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceItem name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smeltingFurnace')} icon='smeltingFurnace' />
                <ResourceSubItem1 name={translate('ceramic')} icon='ceramic' link='Ceramic' />
            </ScrollView>
        </SafeAreaView>
    )
}