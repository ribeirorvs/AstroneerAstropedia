import React from 'react';
import { Text, View } from 'react-native';
import { contentTitleStyle } from './style';

interface ContentTitleProps {
    title: string;
}

export function ContentTitle({
    title
}: ContentTitleProps) {
    return (
        <View style={contentTitleStyle.contentTitle}>
            <Text style={contentTitleStyle.txtContentTitle}>{title}</Text>
        </View>
    )
}