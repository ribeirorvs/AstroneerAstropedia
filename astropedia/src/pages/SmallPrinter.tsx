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
import { SmallPrinterList } from '../assets/smallPrinterList';

export function SmallPrinter() {
    const source = {
        craftAt: translate('backpackPrinter'),
        recipte: translate('compound'),
        unlockCost: translate('unlocked'),
        powerConsumption: '1 U/s'
    }
    
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('smallPrinter')}
                favTitle={translate('smallPrinter')}
                icon='smallPrinter'
                nugget='iconSmallPrint'
                link='SmallPrinter'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={source}
                />
                <ContentTitle title={translate('printTitle')} />
                <PrintableOutput
                    table={SmallPrinterList}
                />
            </ScrollView>
        </SafeAreaView>
    )
}