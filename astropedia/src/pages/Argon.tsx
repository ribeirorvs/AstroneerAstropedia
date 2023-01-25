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

export function Argon() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('argon')}
                icon='argon'
                nugget='nuggetArgon'
                link='Argon'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('atmosphericCondenser')} icon='atmosphericCondenser' />
                <ResourceSubItem1 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem1 name={translate('glacio')} icon='glacio' link='Glacio' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('steel')} icon='steel' link='Steel' />
            </ScrollView>
        </SafeAreaView>
    )
}