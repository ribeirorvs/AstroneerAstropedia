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
import { chemistryLabList } from '../assets/chemistryLabList';

export function ChemistryLab() {
    const source = {
        craftAt: translate('mediumPrinter'),
        recipte: 
            translate('tungsten') + 
            '\n' + 
            translate('glass') + 
            '\n' +
            translate('ceramic'),
        unlockCost: '1.600 Bytes',
        powerConsumption: '10 U/s'
    }
    
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('chemistryLab')}
                favTitle={translate('sourceChemistryLab')}
                icon='chemistryLab'
                nugget='iconChemistryLab'
                link='ChemistryLab'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={source}
                />
                <ContentTitle title={translate('printTitle')} />
                <PrintableOutput
                    table={chemistryLabList}
                />
            </ScrollView>
        </SafeAreaView>
    )
}