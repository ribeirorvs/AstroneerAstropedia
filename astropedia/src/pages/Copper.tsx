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

export function Copper() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('copper')}
                icon='copper'
                nugget='nuggetCopper'
                link='Copper'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('malachite')} icon='malachite' link='Malachite' />
                <ResourceSubItem1 name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceSubItem1 name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceSubItem1 name={translate('trade platform')} icon='tradePlatform' />
                <ContentTitle title={('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('worklight')} icon='worklight' />
                <ResourceSubItem1 name={translate('smallSolarPanel')} icon='solar' />
                <ResourceSubItem1 name={translate('extenders')} icon='extenders' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('mediumSolarPanel')} icon='solar' />
                <ResourceSubItem1 name={translate('splitter')} icon='splitter' />
                <ResourceSubItem1 name={translate('powerSensor')} icon='sensor' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('solarArray')} icon='solar' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('sourceAluminumAlloy')} icon='aluminumAlloy' link='AluminumAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}