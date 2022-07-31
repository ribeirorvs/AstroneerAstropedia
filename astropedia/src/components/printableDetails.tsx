import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { textStyle } from '../styles/textStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { imgStyle } from '../styles/imgStyles';
import { images } from '../assets/index';
import { useNavigation } from '@react-navigation/core';

interface printableDetailsProps {
    title?: string;
    icon?: string;
    link?: string;
}

export function PrintableDetails({
    title,
    icon,
    link,
    ...rest
}: printableDetailsProps) {
    const navigation = useNavigation();
    const tableHead = ['Crafted at', 'Recipe', 'Unlock Cost', 'Power Consumption']
    const tableContent = ['Backpack Printer', '1x ' + 'Compound', 'Unlocked', '1U/s']
    return (
        <View style={layoutStyle.sourceTableContainer}>
            <Table 
                style={layoutStyle.sourceTable} 
                borderStyle={{
                    borderWidth: 2, 
                    borderColor: '#c8e1ff'
                }}
            >
                <Row data={tableHead} style={layoutStyle.sourceTableHeader} textStyle={textStyle.sourceTableHeader}/>
                <Row data={tableContent}/>
            </Table>
        </View>
    )
}