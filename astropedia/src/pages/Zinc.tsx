import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function Zinc() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('zinc')}
                icon='zinc'
                nugget='nuggetZinc'
                link='Zinc'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <ResourceItem name={translate('sphalerite')} icon='sphalerite' link='Sphalerite' />
                <ResourceSubItem1 name={translate('sylva')} icon='sylva' link='Sylva' />
                <ResourceSubItem1 name={translate('desolo')} icon='desolo' link='Desolo' />
                <ResourceSubItem1 name={translate('tradePlatform')} icon='tradePlatform' />
                <ContentTitle title={('usesTitle')} />
                <ResourceItem name={translate('backpackPrinter')} icon='backpackPrinter' />
                <ResourceSubItem1 name={translate('powerCells')} icon='powerCells' />
                <ResourceSubItem1 name={translate('wideMod')} icon='augment' />
                <ResourceSubItem1 name={translate('alignmentMod')} icon='augment' />
                <ResourceSubItem1 name={translate('inhibitorMod')} icon='augment' />
                <ResourceSubItem1 name={translate('boostMod')} icon='augment' />
                <ResourceSubItem1 name={translate('narrowMod')} icon='augment' />
                <ResourceSubItem1 name={translate('terrainAnalyzer')} icon='augment' />
                <ResourceSubItem1 name={translate('smallBattery')} icon='battery' />
                <ResourceItem name={translate('smallPrinter')} icon='smallPrinter' />
                <ResourceSubItem1 name={translate('mediumBattery')} icon='battery' />
                <ResourceSubItem1 name={translate('powerSensor')} icon='sensor' />
                <ResourceSubItem1 name={translate('storageSensor')} icon='sensor' />
                <ResourceSubItem1 name={translate('batterySensor')} icon='sensor' />
                <ResourceSubItem1 name={translate('buttonRepeater')} icon='sensor' />
                <ResourceSubItem1 name={translate('proximityRepeater')} icon='sensor' />
                <ResourceSubItem1 name={translate('delayRepeater')} icon='sensor' />
                <ResourceSubItem1 name={translate('countRepeater')} icon='sensor' />
                <ResourceItem name={translate('largePrinter')} icon='largePrinter' />
                <ResourceSubItem1 name={translate('mediumSensorArch')} icon='sensor' />
                <ResourceSubItem1 name={translate('largeSensorRing')} icon='sensor' />
                <ResourceSubItem1 name={translate('largeSensorHoopA')} icon='sensor' />
                <ResourceSubItem1 name={translate('largeSensorHoopB')} icon='sensor' />
                <ResourceSubItem1 name={translate('xlSensorArch')} icon='sensor' />
                <ResourceSubItem1 name={translate('xlSensorCanopy')} icon='sensor' />
                <ResourceSubItem1 name={translate('xlSensorHoopA')} icon='sensor' />
                <ResourceSubItem1 name={translate('xlSensorHoopB')} icon='sensor' />
            </ScrollView>
        </SafeAreaView>
    )
}