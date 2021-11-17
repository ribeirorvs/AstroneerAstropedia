import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';

interface ResourceSubItem1Props extends RectButtonProps {
    name: string,
    icon: string,
    link?: string
}

export function ResourceSubItem1({
    name,
    icon,
    link,
    ...rest
}: ResourceSubItem1Props) {
    const navigation = useNavigation();

    function HandleSubimit() {
        if (link) {
            navigation.navigate(link);
        }
    }

    return (
        <RectButton
            style={layoutStyle.sourceSub1}
            onPress={HandleSubimit}
        >
            <Image source={images.subItem} />
            <Image source={images[icon]} style={imgStyle.sourceIconImg} />
            <Text style={textStyle.sourceText}>{name}</Text>
        </RectButton>
    )
}