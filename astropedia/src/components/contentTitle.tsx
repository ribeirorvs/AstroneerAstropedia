import React from 'react';
import { Text, View } from 'react-native';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';

interface ContentTitleProps {
    title: string;
}

export function ContentTitle({
    title,
    ...rest
}: ContentTitleProps) {
    return (
        <View style={layoutStyle.contentTitle}>
            <Text style={textStyle.contentTitle}>{title}</Text>
        </View>
    )
}