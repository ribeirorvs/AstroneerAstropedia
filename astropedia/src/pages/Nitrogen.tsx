import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Nitrogen() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('nitrogen')}
                icon='nitrogen'
                nugget='nuggetNitrogen'
                link='Nitrogen'
            />
            <View>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('atmosphericCondenser')} icon='atmosphericCondenser' />
                <ResourceSubItem1 name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceSubItem1 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem1 name={translate('atrox')} icon='atrox' link='Atrox' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('titaniumAlloy')} icon='titaniumAlloy' link='TitaniumAlloy' />
            </View>
        </SafeAreaView>
    )
}