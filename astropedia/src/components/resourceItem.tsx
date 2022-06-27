import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';

interface ResourceItemProps {
    name: string,
    icon: string,
    link?: string
}

export function ResourceItem({
    name,
    icon,
    link
}: ResourceItemProps) {
    const navigation = useNavigation();

    function HandleSubimit() {
        if (link) {
            navigation.navigate(link);
        }
    }

    return (
        <TouchableOpacity
            style={layoutStyle.source}
            onPress={HandleSubimit}
        >
            <Image source={images[icon]} style={imgStyle.sourceIconImg} />
            <Text style={textStyle.sourceText}>{name}</Text>
        </TouchableOpacity>
    )
}