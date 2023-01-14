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
import { soilCentrifugeList } from '../assets/soilCentrifugeList';

export function SoilCentrifuge() {
    const source = {
        craftAt: translate('mediumPrinter'),
        recipte: '2x ' + translate('compound') + '\n' + translate('aluminum'),
        unlockCost: '750 Bytes',
        powerConsumption: '6 U/s'
    }
    
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title={translate('soilCentrifuge')}
                favTitle={translate('soilCentrifuge')}
                icon='soilCentrifuge'
                nugget='iconSoilCentrifuge'
                link='SoilCentrifuge'
            />
            <ScrollView>
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    table={source}
                />
                <ContentTitle title={translate('printTitle')} />
                <PrintableOutput
                    table={soilCentrifugeList}
                />
            </ScrollView>
        </SafeAreaView>
    )
}