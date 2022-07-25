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

export function Ammonium() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('ammonium')}
                icon='ammonium'
                nugget='nuggetAmmonium'
                link='Ammonium'
            />
            <View>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceItem name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('solidFuelThruster')} icon='thruster' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('hydrazine')} icon='hydrazine' link='Hydrazine' />
            </View>
        </SafeAreaView>
    )
}