import React from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PrintableSource } from '../components/printableSource';
import { PrintableOutput } from '../components/printableOutput';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';
import { tradePlatformList } from '../assets/tradePlatformList';

export function TradePlatform() {
    const source = {
        craftAt: translate('mediumPrinter'),
        recipte: 
            translate('exoChip') + 
            '\n' + 
            translate('tungsten') + 
            '\n' +
            translate('iron'),
        unlockCost: '2.500 Bytes',
        powerConsumption: 'Unknow'
    }
    
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('tradePlatform')}
                favTitle={translate('tradePlatform')}
                icon='tradePlatform'
                nugget='iconTradePlatform'
                link='TradePlatform'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={source}
                />
                <ContentTitle title={translate('printTitle')} />
                <PrintableOutput
                    table={tradePlatformList}
                />
            </ScrollView>
        </SafeAreaView>
    )
}