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

export function Malachite() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('malachite')}
                icon='malachite'
                nugget='nuggetMalachite'
                link='Malachite'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceItem name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smeltingFurnace')} icon='smeltingFurnace' />
                <ResourceSubItem1 name={translate('copper')} icon='copper' link='Copper' />
            </ScrollView>
        </SafeAreaView>
    )
}