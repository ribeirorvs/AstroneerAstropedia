import React from 'react';
import { Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { textStyle } from '../styles/textStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { imgStyle } from '../styles/imgStyles';
import { images } from '../assets/index';
import { useNavigation } from '@react-navigation/core';

interface ComponentButtonProps extends RectButtonProps {
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
        <RectButton
            onPress={() => navigation.navigate(link)}
            style={layoutStyle.component}
            {...rest}
        >
            <Image source={images[icon]} style={imgStyle.component} />
            <Text style={textStyle.component}>
                {title}
            </Text>
        </RectButton>
    )
}