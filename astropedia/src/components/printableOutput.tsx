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
}

export function PrintableOutput({
    table
}: printableOutputProps) {
    const tableHead = ['Input', 'Output']
    const tableContent = []
    table?.forEach(element => {
        tableContent.push([element.input, element.output])
    });
    /*{
        tableContent.map((row, ind) => (
            console.log(ind),
            console.log(row)
        ))
    }*/
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
                <Rows data={tableContent} style={{backgroundColor: colors.background}} textStyle={textStyle.sourceTableContent1} />
            </Table>
        </View>
    )
}