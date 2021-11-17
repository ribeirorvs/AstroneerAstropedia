import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';

interface ResourceItemProps extends RectButtonProps {
    name: string,
    icon: string,
    link?: string
}

export function ResourceItem({
    name,
    icon,
    link,
    ...rest
}: ResourceItemProps) {
    const navigation = useNavigation();

    function HandleSubimit() {
        if (link) {
            navigation.navigate(link);
        }
    }

    return (
        <RectButton
            style={layoutStyle.source}
            onPress={HandleSubimit}
        >
            <Image source={images[icon]} style={imgStyle.sourceIconImg} />
            <Text style={textStyle.sourceText}>{name}</Text>
        </RectButton>
    )
}