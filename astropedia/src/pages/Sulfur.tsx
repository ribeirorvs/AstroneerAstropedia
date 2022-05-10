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

export function Sulfur() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('sulfur')}
                icon='sulfur'
                nugget='nuggetSulfur'
                link='Sulfur'
            />
            <View>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('atmosphericCondenser')} icon='atmosphericCondenser' />
                <ResourceSubItem1 name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceSubItem1 name={translate('atrox')} icon='atrox' link='Atrox' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('sourceExplosivePowder')} icon='explosivePowder' />
            </View>
        </SafeAreaView>
    )
}