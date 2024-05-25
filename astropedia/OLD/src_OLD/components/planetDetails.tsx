import React from 'react';
import { Text, View } from 'react-native';
import { translate } from '../libs/localization';
import { textStyle } from '../styles/textStyles';

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
            <Text style={textStyle.sourceText}>
                {translate('size')}: {size}
            </Text>
            <Text style={textStyle.sourceText}>
                {translate('difficulty')}: {difficulty}
            </Text>
            <Text style={textStyle.sourceText}>
                {translate('dayNigthCycle')}: {cycle} {translate('minutes')}
            </Text>
            <Text style={textStyle.sourceText}>
                {translate('sunPower')}: {sun} ({sunValue})
            </Text>
            <Text style={textStyle.sourceText}>
                {translate('windPower')}: {wind} ({windValue})
            </Text>
        </View>
    )
}