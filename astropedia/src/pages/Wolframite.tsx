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

export function Wolframite() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('wolframite')}
                icon='wolframite'
                nugget='nuggetWolframite'
                link='Wolframite'
            />
            <View>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('desolo')} icon='desolo' link='Desolo' />
                <ResourceItem name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smeltingFurnace')} icon='smeltingFurnace' />
                <ResourceSubItem1 name={translate('tungsten')} icon='tungsten' link='Tungsten' />
            </View>
        </SafeAreaView>
    )
}