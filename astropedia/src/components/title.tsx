import React from 'react';
import {
    Text
} from 'react-native';
import { textStyle } from '../styles/textStyles';

interface TitleProps {
    title: string
}

export function Title({
    title,
    ...rest
}: TitleProps) {
    return (
        <Text style={textStyle.title}>
            {title}
        </Text>
    )
}