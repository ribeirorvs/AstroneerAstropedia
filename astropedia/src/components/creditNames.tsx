import React from 'react';
import { Text } from 'react-native';
import { textStyle } from '../styles/textStyles';

interface CreditNames {
    name: string;
}

export function CreditNames({
    name
}: CreditNames) {
    return (
        <Text style={textStyle.creditName}>
            {name}
        </Text>
    )
}