import React from 'react';
import { Text, Image, View } from 'react-native';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';

interface ResourceTitleProps {
    title: string;
    image: string;
}

export function ResourceTitle({
    title,
    image,
    ...rest
}: ResourceTitleProps) {
    return (
        <View style={layoutStyle.resourceTitle}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={images[image]}
                    style={imgStyle.resourceTitleImg}
                />
                <Text style={textStyle.resourceTitle}>
                    {title}
                </Text>
            </View>
            <Image style={imgStyle.favIcon} source={images.favIcon} />
        </View>
    )
}