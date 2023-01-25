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

export function Lithium() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('lithium')}
                icon='lithium'
                nugget='nuggetLithium'
                link='Lithium'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceItem name={translate('novus')} icon='novus' link='Novus' />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('mediumBattery')} icon='battery' />
                <ResourceSubItem1 name={translate('rtg')} icon='generator' />
            </ScrollView>
        </SafeAreaView>
    )
}