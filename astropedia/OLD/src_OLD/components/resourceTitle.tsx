import React, { useEffect, useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';
import { deleteFavorite, FavIcon, loadFavoriteIcon, PageDetails, saveFavorite } from '../libs/storage';

interface ResourceTitleProps {
    title: string;
    favTitle?: string;
    icon: string;
    nugget: string;
    link: string;
}

export function ResourceTitle({
    title,
    favTitle,
    icon,
    nugget,
    link
}: ResourceTitleProps) {
    const [page] = useState<PageDetails>({
        pageTitle: favTitle ? favTitle : title,
        pageIcon: icon,
        pageNugget: nugget,
        pageLink: link
    });
    const [favIcon, setFavIcon] = useState('favIcon');
    const [favorited] = useState<FavIcon>({
        pageTitle: page.pageTitle,
        favorited: false
    });

    useEffect(() => {
        async function loadFavIcon() {
            const data = await loadFavoriteIcon(favorited);
            setFavIcon(data)
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
            <TouchableOpacity
                onPress={handleFavorite}
            >
                <Image style={imgStyle.favIcon} source={images[favIcon]} />
            </TouchableOpacity>
        </View>
    )
}