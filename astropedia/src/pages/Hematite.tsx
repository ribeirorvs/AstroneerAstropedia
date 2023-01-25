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

export function Hematite() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('hematite')}
                icon='hematite'
                nugget='nuggetHematite'
                link='Hematite'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('novus')} icon='novus' link='Novus' />
                <ResourceItem name={translate('glacio')} icon='glacio' link='Glacio' />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smeltingFurnace')} icon='smeltingFurnace' />
                <ResourceSubItem1 name={translate('iron')} icon='iron' link='Iron' />
            </ScrollView>
        </SafeAreaView>
    )
}