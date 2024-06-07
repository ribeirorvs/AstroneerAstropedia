import React from 'react';
import { Text, View } from 'react-native';
import { planetDetailsStyle } from './style';
import { translate } from '@/libs/localization';
import { PlanetList } from '@/assets/planets';

interface PlanetDetailsProps {
    id: number
}

export function PlanetDetails({
    id
}: PlanetDetailsProps){
    const planet = PlanetList.find(planet => planet.id === Number(id))
    return (
        <View style={{width: '80%'}}>
            <Text style={planetDetailsStyle.sourceText}>
                {translate('size')}: {translate(planet?.size || "medium")}
            </Text>
            <Text style={planetDetailsStyle.sourceText}>
                {translate('difficulty')}: {translate(planet?.difficulty || "easy")}
            </Text>
            <Text style={planetDetailsStyle.sourceText}>
                {translate('dayNigthCycle')}: {planet?.cycle || 12} {translate('minutes')}
            </Text>
            <Text style={planetDetailsStyle.sourceText}>
                {translate('sunPower')}: {translate(planet?.sun || "medium")} ({planet?.sunValue || "100%"})
            </Text>
            <Text style={planetDetailsStyle.sourceText}>
                {translate('windPower')}: {translate(planet?.wind || "medium")} ({planet?.windValue || "100%"})
            </Text>
        </View>
    )
}