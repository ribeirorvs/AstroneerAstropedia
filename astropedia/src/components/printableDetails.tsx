import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { textStyle } from '../styles/textStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { useNavigation } from '@react-navigation/core';
import { Printer } from './printer';
import colors from '../styles/colors';

interface printableDetailsProps {
    title?: string;
    icon?: string;
    link?: string;
}

export function PrintableDetails({
    title,
    icon,
    link
}: printableDetailsProps) {
    const navigation = useNavigation();
    const tableHead = ['Crafted at', 'Recipe', 'Unlock Cost', 'Power Consumption']
    const tableContent = [[<Printer name='BackpackaaaaaaaaPrinter' image='backpackPrinter' link='Home'/>, 'image'+'1x ' + 'Compound', 'Unlocked', '1U/s'], ['Backpack Printer', '1x ' + 'Compound', 'Unlocked', '1U/s']]
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
                  tableContent.map((rowData, index) => (
                    <Row 
                        data={rowData}
                        style={index %2 ? {backgroundColor: colors.gray} : {backgroundColor: colors.background}}
                        textStyle={index %2 ? textStyle.sourceTableContent2 : textStyle.sourceTableContent1}
                    />
                  ))
                }
            </Table>
        </View>
    )
}