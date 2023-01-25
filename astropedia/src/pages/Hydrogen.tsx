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

export function Hydrogen() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('hydrogen')}
                icon='hydrogen'
                nugget='nuggetHydrogen'
                link='Hydrogen'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('atmosphericCondenser')} icon='atmosphericCondenser' />
                <ResourceSubItem1 name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceSubItem1 name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceSubItem1 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem1 name={translate('novus')} icon='novus' link='Novus' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('hydrazine')} icon='hydrazine' link='Hydrazine' />
            </ScrollView>
        </SafeAreaView>
    )
}