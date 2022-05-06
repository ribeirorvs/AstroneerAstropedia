import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Image,
    Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';

interface PlanetResourceProps extends RectButtonProps {
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
        <RectButton
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
        </RectButton>
    )
}