import React from 'react';
import { Text, View } from 'react-native';
import { planetDetailsStyle } from './style';
import { translate } from '@/libs/localization';

interface PlanetDetailsProps {
    size: string,
    difficulty: string,
    cycle: string,
    sun: string,
    sunValue: string,
    wind: string
    windValue: string
}

export function PlanetDetails({
    size,
    difficulty,
    cycle,
    sun,
    sunValue,
    wind,
    windValue
}: PlanetDetailsProps){
    return (
        <View style={{width: '80%'}}>
            <Text style={planetDetailsStyle.sourceText}>
                {translate('size')}: {size}
            </Text>
            <Text style={planetDetailsStyle.sourceText}>
                {translate('difficulty')}: {difficulty}
            </Text>
            <Text style={planetDetailsStyle.sourceText}>
                {translate('dayNigthCycle')}: {cycle} {translate('minutes')}
            </Text>
            <Text style={planetDetailsStyle.sourceText}>
                {translate('sunPower')}: {sun} ({sunValue})
            </Text>
            <Text style={planetDetailsStyle.sourceText}>
                {translate('windPower')}: {wind} ({windValue})
            </Text>
        </View>
    )
}