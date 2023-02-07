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
import { backpackList } from '../assets/backpackList';

export function Backpack() {
    const source = {
        craftAt: '-',
        recipte: '-',
        unlockCost: '-',
        powerConsumption: '3 U/s'
    }
    
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('backpackPrinter')}
                favTitle={translate('backpackPrinter')}
                icon='backpackPrinter'
                nugget='backpack'
                link='Backpack'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={source}
                />
                <ContentTitle title={translate('printTitle')} />
                <PrintableOutput
                    table={backpackList}
                />
            </ScrollView>
        </SafeAreaView>
    )
}