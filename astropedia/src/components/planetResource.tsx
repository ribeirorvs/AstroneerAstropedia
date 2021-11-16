import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';

interface PlanetResourceProps {
    nugget: string;
    icon: string;
    name: string;
}

export function PlanetResource({
    nugget,
    icon,
    name,
    ...rest
}: PlanetResourceProps) {
    return (
        <View style={layoutStyle.resource}>
            <Image source={images[nugget]} style={imgStyle.nugget} />
            <Image source={images[icon]} style={imgStyle.resourceIconImg} />
            < Text style={textStyle.resourceName}>{name}</Text>
        </View>
    )
}