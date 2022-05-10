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

export function Sphalerite() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('sphalerite')}
                icon='sphalerite'
                nugget='nuggetSphalerite'
                link='Sphalerite'
            />
            <View>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceItem name={translate('desolo')} icon='desolo' link='Desolo' />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smeltingFurnace')} icon='smeltingFurnace' />
                <ResourceSubItem1 name={translate('zinc')} icon='zinc' link='Zinc' />
            </View>
        </SafeAreaView>
    )
}