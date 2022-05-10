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

export function Quartz() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('quartz')}
                icon='quartz'
                nugget='nuggetQuartz'
                link='Quartz'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('sourceAllPlanets')} icon='sylva' link='Planets' />
                <ResourceItem name={translate('soilCentrifuge')} icon='soilCentrifuge' />
                <ResourceItem name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={translate('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('beacon')} icon='beacon' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('storageSensor')} icon='sensor' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('mediumSensorArch')} icon='sensor' />
                <ResourceSubItem1 name={translate('largeSensorRing')} icon='sensor' />
                <ResourceSubItem1 name={translate('largeSensorHoopA')} icon='sensor' />
                <ResourceSubItem1 name={translate('largeSensorHoopB')} icon='sensor' />
                <ResourceSubItem1 name={translate('xlSensorArch')} icon='sensor' />
                <ResourceSubItem1 name={translate('xlSensorCanopy')} icon='sensor' />
                <ResourceSubItem1 name={translate('xlSensorHoopA')} icon='sensor' />
                <ResourceSubItem1 name={translate('xlSensorHoopB')} icon='sensor' />
                <ResourceItem name={translate('smeltingFurnace')} icon='smeltingFurnace' />
                <ResourceSubItem1 name={translate('glass')} icon='glass' link='Glass' />
                <ResourceItem name={translate('chemistryLab')} icon='chemistryLab' />
                <ResourceSubItem1 name={translate('silicone')} icon='silicone' link='Silicone' />
            </ScrollView>
        </SafeAreaView>
    )
}