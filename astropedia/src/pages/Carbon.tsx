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

export function Carbon() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('carbon')}
                icon='carbon'
                nugget='nuggetCarbon'
                link='Carbon'
            />
            <View>
                <ContentTitle title={translate('source')} />
                <ResourceItem name={translate('organic')} icon='organic' link='Organic' />
                <ResourceSubItem1 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem1 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem1 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={('usesTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('plastic')} icon='plastic' link='Plastic' />
                <ResourceSubItem1 name={translate('sourceTungstenCarbide')} icon='tungstenCarbide' link='TungstenCarbide' />
                <ResourceSubItem1 name={translate('sourceExplosivePowder')} icon='explosivePowder' link='ExplosivePowder' />
                <ResourceSubItem1 name={translate('steel')} icon='steel' link='Steel' />
            </View>
        </SafeAreaView>
    )
}