import { FavIcon, PageDetails, deleteFavorite, loadFavoriteIcon, saveFavorite } from '@/libs/storage';
import { useEffect, useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { resourceTitleStyle } from './style';
import { images } from '@/assets';
import { PlanetList } from '@/assets/planets';
import { MaterialIcons } from "@expo/vector-icons";
import colors from '@/styles/colors';

export interface ResourceTitleProps {
    favTitle?: string;
    id: number;
}

export function ResourceTitle({
    favTitle,
    id
}: ResourceTitleProps) {
    const planet = PlanetList.find(planet => planet.id === Number(id))
    const [page] = useState<PageDetails>({
        pageTitle: favTitle ? favTitle : planet ? planet.title : "Sylva",
        pageIcon: planet ? planet.icon : "sylva",
        pageNugget: planet ? planet.nugget : "nuggetSylva",
        pageLink: planet ? planet.link : "planetsDetails"
    });
    const [favIcon, setFavIcon] = useState(false);
    const [favorited] = useState<FavIcon>({
        pageTitle: page.pageTitle,
        favorited: false
    });

    useEffect(() => {
        async function loadFavIcon() {
            const data = await loadFavoriteIcon(favorited);
            setFavIcon(data? true: false)
        }
        loadFavIcon()
    })

    async function handleFavorite() {
        if (!favIcon) {
            await saveFavorite(page);
            setFavIcon(true)
        } else {
            await deleteFavorite(page)
            setFavIcon(false)
        }
    }
    return (
        <View style={resourceTitleStyle.resourceTitle}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={images[planet?.nugget]}
                    style={resourceTitleStyle.resourceTitleImg}
                />
                <Text style={resourceTitleStyle.txtResourceTitle}>
                    {planet?.title}
                </Text>
            </View>
            <TouchableOpacity
                onPress={handleFavorite}
            >
                <MaterialIcons 
                    name={favIcon ? "star-outline" : "star"}
                    size={22}
                    color={favIcon ? colors.white : colors.gold}
                />
            </TouchableOpacity>
        </View>
    )
}