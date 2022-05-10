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

export function Steel() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('steel')}
                icon='steel'
                nugget='nuggetSteel'
                link='Steel'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('carbon')} icon='carbon' link='Carbon' />
                <ResourceSubItem2 name={translate('organic')} icon='organic' link='Organic' />
                <ResourceSubItem3 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem3 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem3 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('argon')} icon='argon' link='Argon' />
                <ResourceSubItem2 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem2 name={translate('glacio')} icon='glacio' link='Glacio' />
                <ResourceSubItem1 name={translate('iron')} icon='iron' link='Iron' />
                <ResourceSubItem2 name={translate('hematite')} icon='hematite' link='Hematite' />
                <ResourceSubItem3 name={translate('novus')} icon='novus' link='Novus' />
                <ResourceSubItem3 name={translate('glacio')} icon='glacio' link='Glacio' />
                <ResourceSubItem3 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('probeScanner')} icon='probeScanner' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('hydrazineThruster')} icon='thruster' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('crane')} icon='crane' />
                <ResourceSubItem1 name={translate('largeStorageSiloA')} icon='storage' />
                <ResourceSubItem1 name={translate('largeStorageSiloB')} icon='storage' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('extraLargeShredder')} icon='shredder' />
                <ResourceSubItem1 name={translate('autoExtractor')} icon='autoExtractor' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('nanocarbonAlloy')} icon='nanocarbonAlloy' link='NanocarbonAlloy' />
            </ScrollView>
        </SafeAreaView>
    )
}