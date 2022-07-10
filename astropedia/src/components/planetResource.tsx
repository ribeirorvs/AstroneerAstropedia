import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';

interface PlanetResourceProps {
    nugget: string,
    icon: string,
    name: string,
    link: string
}

export function PlanetResource({
    nugget,
    icon,
    name,
    link
}: PlanetResourceProps) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={layoutStyle.resource}
            onPress={() => { navigation.navigate(link) }}
        >
            <Image
                source={images[nugget]}
                style={imgStyle.nugget}
            />
            <Image
                source={images[icon]}
                style={imgStyle.resourceIconImg}
            />
            < Text style={textStyle.resourceName}>{name}</Text>
        </TouchableOpacity>
    )
}