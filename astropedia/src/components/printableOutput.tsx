import React from 'react';
import { View } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';
import colors from '../styles/colors';


interface printableOutputProps {
    table?: printableTableOutput;
}

interface printableTableOutput {
    input: string;
    output: string;
}

export function PrintableOutput({
    table
}: printableOutputProps) {
    const tableHead = ['Input', 'Output']
    const tableContent = [table?.input, table?.output]
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