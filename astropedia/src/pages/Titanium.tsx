import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Titanium() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('titanium')}
                icon='titanium'
                nugget='nuggetTitanium'
                link='Titanium'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('titanite')} icon='titanite' link='Titanite' />
                <ResourceSubItem1 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem1 name={translate('glacio')} icon='glacio' link='Glacio' />
                <ResourceSubItem1 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('mediumStorageSilo')} icon='storage' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('crane')} icon='crane' />
                <ResourceSubItem1 name={translate('largeResourceCanister')} icon='canister' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('titaniumAlloy')} icon='titaniumAlloy' link='TitaniumAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}