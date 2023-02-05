import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { images } from '../assets';
import { translate } from '../libs/localization';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';

interface PlanetResourceProps {
    nugget: string,
    icon: string,
    name: string,
    link: string,
    location?: string
}

export function PlanetResource({
    nugget,
    icon,
    name,
    link,
    location
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
            <View style={layoutStyle.resourceDetails}>
                < Text style={textStyle.resourceName}>{name} </Text>
                {
                    !!location &&
                    <View style={{flexDirection: 'row'}}>
                        <Text style={textStyle.resourceDetails}>{translate('location')}</Text>
                        <Text style={textStyle.resourceDescription}>{location}</Text>
                    </View>
                }
            </View>
        </TouchableOpacity>
    )
}
