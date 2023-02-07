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
import { smeltingFurnaceList } from '../assets/smeltingFurnaceList';

export function SmeltingFurnace() {
    const source = {
        craftAt: translate('mediumPrinter'),
        recipte: '2x ' + translate('resin') + '\n' + translate('compound'),
        unlockCost: '250 Bytes',
        powerConsumption: '5 U/s'
    }
    
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('smeltingFurnace')}
                favTitle={translate('sourceSmeltingFurnace')}
                icon='smeltingFurnace'
                nugget='iconSmeltingFurnace'
                link='SmeltingFurnace'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={source}
                />
                <ContentTitle title={translate('printTitle')} />
                <PrintableOutput
                    table={smeltingFurnaceList}
                />
            </ScrollView>
        </SafeAreaView>
    )
}