import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';
import { pageDetails, saveFavorite } from '../libs/storage';

interface ResourceTitleProps {
    title: string;
    image: string;
    link: string;
}

export function ResourceTitle({
    title,
    image,
    link,
    ...rest
}: ResourceTitleProps) {
    const [page, setPage] = useState<pageDetails>({
        pageTitle: title,
        pageIcon: image,
        pageLink: link
    });
    const [favIcon, setFacIcon] = useState('favIcon');

    async function handleFavorite() {
        if (favIcon == 'favIcon') {
            setFacIcon('favIconActive');
            await saveFavorite(page);
        } else {
            setFacIcon('favIcon');
        }
    }
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
            <RectButton
                onPress={handleFavorite}
            >
                <Image style={imgStyle.favIcon} source={images[favIcon]} />
            </RectButton>
        </View>
    )
}