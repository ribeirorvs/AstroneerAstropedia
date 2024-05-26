import { useEffect, useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { resourceTitleStyle } from './style';
import { images } from '@/assets';
import { PlanetList } from '@/assets/planets';
import { MaterialIcons } from "@expo/vector-icons";
import colors from '@/styles/colors';
import { FavoriteType } from '@/assets/enums';
import { FavoriteDetails, cehckFavorited, deleteFavorite, saveFavorite } from '@/libs/storage';

export interface ResourceTitleProps {
    id: number;
}


export function ResourceTitle({
    id
}: ResourceTitleProps) {
    const planet = PlanetList.find(planet => planet.id === Number(id))
    const favorite: FavoriteDetails = {
        id: planet ? planet.id : 1,
        type: FavoriteType.Planet
    };
    const [exist, setExist] = useState(false);

    //Check if the planet is favorite when the page open
    useEffect(() => {
        async function checkIfExist() {
            setExist(await cehckFavorited(favorite))
        };
        checkIfExist();
    }, []);

    //Change the favorite status of the planet
    async function handleFavorite(){
        if(exist){
            await deleteFavorite(favorite)
            setExist(false)
        } else {
            await saveFavorite(favorite)
            setExist(true)
        }
    }

    return (
        <View style={resourceTitleStyle.resourceTitle}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={images[planet ? planet.nugget : "nuggetSylva"]}
                    style={resourceTitleStyle.resourceTitleImg}
                />
                <Text style={resourceTitleStyle.txtResourceTitle}>
                    {planet ? planet.title : "Sylva"}
                </Text>
            </View>
            <TouchableOpacity
                onPress={handleFavorite}
            >
                <MaterialIcons 
                    name={ exist ? "star" : "star-outline"}
                    size={22}
                    color={ exist ? colors.gold : colors.white}
                />
            </TouchableOpacity>
        </View>
    )
}