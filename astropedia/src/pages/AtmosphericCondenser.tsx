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
import { atmosphericCondenserList } from '../assets/atmosphericCondenserList';

export function AtmosphericCondenser() {
    const source = {
        craftAt: translate('mediumPrinter'),
        recipte: 
            translate('plastic') + 
            '\n' + 
            translate('glass') + 
            '\n' +
            translate('iron'),
        unlockCost: '2.200 Bytes',
        powerConsumption: '10~40 U/s'
    }
    
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('atmosphericCondenser')}
                favTitle={translate('atmosphericCondenser')}
                icon='atmosphericCondenser'
                nugget='iconAthmospheticCondenserLab'
                link='AthmosphericCondenser'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={source}
                />
                <ContentTitle title={translate('printTitle')} />
                <PrintableOutput
                    table={atmosphericCondenserList}
                />
            </ScrollView>
        </SafeAreaView>
    )
}