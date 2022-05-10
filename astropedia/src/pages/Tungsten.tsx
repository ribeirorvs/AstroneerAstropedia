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

export function Tungsten() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('tungsten')}
                icon='tungsten'
                nugget='nuggetTungsten'
                link='Tungsten'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('wolframite')} icon='wolframite' link='Wolframite' />
                <ResourceSubItem1 name={translate('desolo')} icon='desolo' link='Desolo' />
                <ResourceSubItem1 name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceSubItem1 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('floodlight')} icon='worklight' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('mediumGenerator')} icon='generator' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('sourceTungstenCarbide')} icon='tungstenCarbide' link='TungstenCarbide' />
            </ScrollView>
        </SafeAreaView>
    )
}