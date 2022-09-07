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

export function SmallPrinter() {
    const source = {
        craftAt: 'Backpack Printer',
        recipte: '1x Compound',
        unlockCost: 'Unlocked',
        powerConsumption: '1 U/s'
    }
    const output ={
        input: '2x Compound',
        output: 'Medium Printer'
    }
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='Small Printer'
                favTitle='Small Printer'
                icon='smallPrinter'
                nugget='iconSmallPrint'
                link='SmallPrinter'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={source}
                />
                <ContentTitle title='Print the Items' />
                <PrintableOutput
                    table={output}
                />
            </ScrollView>
        </SafeAreaView>
    )
}