import React from 'react';
import {
    Text
} from 'react-native';
import { titleStyle } from './style';

interface TitleProps {
    title: string
}

export function Title({
    title
}: TitleProps) {
    return (
        <Text style={titleStyle.title}>
            {title}
        </Text>
    )
}