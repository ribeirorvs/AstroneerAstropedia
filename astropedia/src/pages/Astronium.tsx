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

export function Astronium() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('astronium')}
                icon='astronium'
                nugget='nuggetAstronium'
                link='Astronium'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('exoChip')} icon='exoChip' />
                <ResourceSubItem1 name={translate('packager')} icon='packager' />
                <ResourceSubItem1 name={translate('solidFuelJumpJet')} icon='thruster' />
                <ResourceSubItem1 name={translate('dynamite')} icon='dynamite' />
                <ResourceSubItem1 name={translate('hydrazine')} icon='hydrazine' link='Hydrazine' />
            </ScrollView>
        </SafeAreaView>
    )
}