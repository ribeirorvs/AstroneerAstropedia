import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';

interface ResourceSubItem4Props {
    name: string,
    icon: string,
    link?: string
}

export function ResourceSubItem4({
    name,
    icon,
    link
}: ResourceSubItem4Props) {
    const navigation = useNavigation();

    function HandleSubimit() {
        if (link) {
            navigation.navigate(link);
        }
    }

    return (
        <TouchableOpacity
            style={layoutStyle.sourceSub4}
            onPress={HandleSubimit}
        >
            <Image source={images.subItem} />
            <Image source={images[icon]} style={imgStyle.sourceIconSubItem} />
            <Text style={textStyle.sourceText}>{name}</Text>
        </TouchableOpacity>
    )
}