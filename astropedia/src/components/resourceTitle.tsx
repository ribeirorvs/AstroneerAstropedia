import React, { useEffect, useState } from 'react';
import { Text, Image, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';
import { deleteFavorite, favIcon, loadFavoriteIcon, pageDetails, saveFavorite } from '../libs/storage';

interface ResourceTitleProps {
    title: string;
    icon: string;
    nugget: string;
    link: string;
}

export function ResourceTitle({
    title,
    icon,
    nugget,
    link
}: ResourceTitleProps) {
    const [page] = useState<pageDetails>({
        pageTitle: title,
        pageIcon: icon,
        pageNugget: nugget,
        pageLink: link
    });
    const [favIcon, setFavIcon] = useState('favIcon');
    const [favorited] = useState<favIcon>({
        pageTitle: title,
        favorited: false
    });

    useEffect(() => {
        async function loadFavIcon() {
            setFavIcon(await loadFavoriteIcon(favorited) as string)
        }
        loadFavIcon()
    })

    async function handleFavorite() {
        if (favIcon == 'favIcon') {
            await saveFavorite(page);
            setFavIcon('favIconActive')
        } else {
            await deleteFavorite(page)
            setFavIcon('favIcon')
        }
    }
    return (
        <View style={layoutStyle.resourceTitle}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={images[nugget]}
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