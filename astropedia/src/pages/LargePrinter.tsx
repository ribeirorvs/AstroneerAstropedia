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
import { largePrintList } from '../assets/largePrintList';

export function LargePrint() {
    const source = {
        craftAt: translate('mediumPrinter'),
        recipte: '3x ' + translate('compound'),
        unlockCost: translate('unlocked'),
        powerConsumption: '5 U/s'
    }
    
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('largePrinter')}
                favTitle={translate('largePrinter')}
                icon='largePrint'
                nugget='iconLargePrint'
                link='LargePrinter'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={source}
                />
                <ContentTitle title={translate('printTitle')} />
                <PrintableOutput
                    table={largePrintList}
                />
            </ScrollView>
        </SafeAreaView>
    )
}