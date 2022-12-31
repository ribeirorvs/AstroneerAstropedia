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
        craftAt: 'Small Printer',
        recipte: '2x Compound',
        unlockCost: 'Unlocked',
        powerConsumption: 'Unknow'
    }
    
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='Medium Printer'
                favTitle='Medium Printer'
                icon='mediumPrint'
                nugget='iconMediumPrint'
                link='MediumPrint'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={source}
                />
                <ContentTitle title='Print the Items' />
                <PrintableOutput
                    table={mediumPrinterList}
                />
            </ScrollView>
        </SafeAreaView>
    )
}