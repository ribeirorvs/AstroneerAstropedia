import React from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PrintableSource } from '../components/printableSource';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceSubItem2 } from '../components/resourceSubItem2';
import { ResourceSubItem3 } from '../components/resourceSubItem3';
import { ResourceSubItem4 } from '../components/resourceSubItem4';
import { ResourceSubItem5 } from '../components/resourceSubItem5';
import { ResourceTitle } from '../components/resourceTitle';
import { translate } from '../libs/localization';
import { layoutStyle } from '../styles/layoutStyles';

export function SmallPrinter() {
    const table = {
        craftAt: 'Backpack Printer',
        recipte: '1x Compound',
        unlockCost: 'Unlocked',
        powerConsumption: '1 U/s'
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
            <Text>
                {table.craftAt}
            </Text>
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={table}
                />
                <ContentTitle title='Print the Items' />
            </ScrollView>
        </SafeAreaView>
    )
}