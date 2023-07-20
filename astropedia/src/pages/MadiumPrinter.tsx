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
import { mediumPrinterList } from '../assets/mediumPrinterList';

export function MediumPrint() {
    const source = {
        craftAt: translate('smallPrinter'),
        recipte: '2x ' + translate('compound'),
        unlockCost: translate('unlocked'),
        powerConsumption: 'Unknow'
    }
    
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('mediumPrinter')}
                favTitle={translate('sourceMediumPrinter')}
                icon='mediumPrinter'
                nugget='iconMediumPrint'
                link='MediumPrinter'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={source}
                />
                <ContentTitle title={translate('printTitle')} />
                <PrintableOutput
                    table={mediumPrinterList}
                />
            </ScrollView>
        </SafeAreaView>
    )
}