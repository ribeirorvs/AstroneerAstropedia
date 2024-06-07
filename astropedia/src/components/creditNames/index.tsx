import React from 'react';
import { Text } from 'react-native';
import { creditNameStyle } from './style';

interface CreditNames {
    name: string;
}

export function CreditNames({
    name
}: CreditNames) {
    return (
        <Text style={creditNameStyle.creditName}>
            {name}
        </Text>
    )
}