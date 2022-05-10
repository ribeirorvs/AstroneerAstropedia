import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceSubItem3 } from '../components/resourceSubItem3';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function ExplosivePowder() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('sourceExplosivePowder')}
                icon='explosivePowder'
                nugget='nuggetExplosivePowder'
                link='ExplosivePowder'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('carbon')} icon='carbon' link='Carbon' />
                <ResourceSubItem2 name={translate('organic')} icon='organic' link='Organic' />
                <ResourceSubItem3 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem3 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem3 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('sulfur')} icon='sulfur' link='Sulfur' />
                <ResourceSubItem2 name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceSubItem2 name={translate('atrox')} icon='atrox' link='Atrox' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('dynamite')} icon='dynamite' />
                <ResourceSubItem1 name={translate('fireworks')} icon='fireworks' />
            </ScrollView>
        </SafeAreaView>
    )
}