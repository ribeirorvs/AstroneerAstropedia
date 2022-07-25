import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceSubItem3 } from '../components/resourceSubItem3';
import { ResourceSubItem4 } from '../components/resourceSubItem4';
import { ResourceSubItem5 } from '../components/resourceSubItem5';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function NanocarbonAlloy() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('sourceNanocarbonAlloy')}
                favTitle={translate('nanocarbonAlloy')}
                icon='nanocarbonAlloy'
                nugget='nuggetNanocarbonAlloy'
                link='NanocarbonAlloy'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('steel')} icon='steel' link='Steel' />
                <ResourceSubItem2 name={translate('carbon')} icon='carbon' link='Carbon' />
                <ResourceSubItem3 name={translate('organic')} icon='organic' link='Organic' />
                <ResourceSubItem4 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem4 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem4 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem2 name={translate('argon')} icon='argon' link='Argon' />
                <ResourceSubItem3 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem3 name={translate('glacio')} icon='glacio' link='Glacio' />
                <ResourceSubItem2 name={translate('iron')} icon='iron' link='Iron' />
                <ResourceSubItem3 name={translate('hematite')} icon='hematite' link='Hematite' />
                <ResourceSubItem4 name={translate('novus')} icon='novus' link='Novus' />
                <ResourceSubItem4 name={translate('glacio')} icon='glacio' link='Glacio' />
                <ResourceSubItem4 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem1 name={translate('helium')} icon='helium' link='Helium' />
                <ResourceSubItem2 name={translate('atrox')} icon='atrox' link='Atrox' />
                <ResourceSubItem1 name={translate('titaniumAlloy')} icon='titaniumAlloy' link='TitaniumAlloy' />
                <ResourceSubItem2 name={translate('titanium')} icon='titanium' link='Titanium' />
                <ResourceSubItem3 name={translate('titanite')} icon='titanite' link='Titanite' />
                <ResourceSubItem4 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem4 name={translate('glacio')} icon='glacio' link='Glacio' />
                <ResourceSubItem4 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem2 name={translate('nitrogen')} icon='nitrogen' link='Nitrogen' />
                <ResourceSubItem3 name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceSubItem3 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem3 name={translate('atrox')} icon='atrox' link='Atrox' />
                <ResourceSubItem2 name={translate('graphene')} icon='graphene' link='Graphene' />
                <ResourceSubItem3 name={translate('graphite')} icon='graphite' link='Graphite' />
                <ResourceSubItem4 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem4 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem4 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem3 name={translate('hydrazine')} icon='hydrazine' link='Hydrazine' />
                <ResourceSubItem4 name={translate('ammonium')} icon='ammonium' link='Ammonium' />
                <ResourceSubItem5 name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceSubItem5 name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceSubItem5 name={translate('tradePlatform')} icon='tradePlatform' />
                <ResourceSubItem4 name={translate('hydrogen')} icon='hydrogen' link='Hydrogen' />
                <ResourceSubItem5 name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceSubItem5 name={translate('calidor')} icon='calidor' link='Calidor' />
                <ResourceSubItem5 name={translate('vesania')} icon='vesania' link='Vesania' />
                <ResourceSubItem5 name={translate('novus')} icon='novus' link='Novus' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('portableOxygenator')} icon='oxygenator' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('rtg')} icon='generator' />
                <ResourceItem name={translate('mediumPrinter')} icon='mediumPrinter' />
                <ResourceSubItem1 name={translate('largeResourceCanister')} icon='canister' />
            </ScrollView>
        </SafeAreaView>
    )
}