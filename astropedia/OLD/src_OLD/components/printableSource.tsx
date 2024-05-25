import React from 'react';
import { View } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';
import colors from '../styles/colors';


interface printableSourceProps {
    table?: printableTableSource;
}

interface printableTableSource {
    craftAt: string;
    recipte: string;
    unlockCost: string;
    powerConsumption: string;
}

export function PrintableSource({
    table
}: printableSourceProps) {
    const tableHead = ['Crafted at', 'Recipe', 'Unlock Cost', 'Power Consumption']
    const tableContent = [table?.craftAt, table?.recipte, table?.unlockCost, table?.powerConsumption]
    return (
        <View style={layoutStyle.sourceTableContainer}>
            <Table 
                style={layoutStyle.sourceTable}
                borderStyle={{
                    borderWidth: 1,
                    borderColor: colors.white
                }}
            >
                <Row data={tableHead} style={layoutStyle.sourceTableHeader} textStyle={textStyle.sourceTableHeader}/>
                <Row data={tableContent} style={{backgroundColor: colors.background}} textStyle={textStyle.sourceTableContent1} />
            </Table>
        </View>
    )
}