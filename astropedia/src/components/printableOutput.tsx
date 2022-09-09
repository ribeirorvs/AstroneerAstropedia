import React from 'react';
import { View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';
import colors from '../styles/colors';


interface printableOutputProps {
    table?: printableTableOutput[];
}

interface printableTableOutput {
    input: [];
    output: string;
    cost: string;
}

export function PrintableOutput({
    table
}: printableOutputProps) {
    const tableHead = ['Input', 'Output', 'Unlock Cost']
    const tableContent = []
    table?.forEach(element => {
        tableContent.push([element.input, element.output, element.cost])
    });
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
                {
                    tableContent.map((data, index) =>(
                        <Row key={index} data={data} style={index%2 ? {backgroundColor: colors.gray} : {backgroundColor: colors.background}} textStyle={index%2 ? textStyle.sourceTableContent2 : textStyle.sourceTableContent1 } />
                    ))
                }
            </Table>
        </View>
    )
}