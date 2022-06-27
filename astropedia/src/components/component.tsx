import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { textStyle } from '../styles/textStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { imgStyle } from '../styles/imgStyles';
import { images } from '../assets/index';
import { useNavigation } from '@react-navigation/core';

interface ComponentButtonProps {
    title: string;
    icon: string;
    link: string;
}

export function ComponentButton({
    title,
    icon,
    link,
    ...rest
}: ComponentButtonProps) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(link)}
            style={layoutStyle.component}
        >
            <Image source={images[icon]} style={imgStyle.component} />
            <Text style={textStyle.component}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}