import { useEffect, useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { resourceTitleStyle } from './style';
import { images } from '@/assets';
import { MaterialIcons } from "@expo/vector-icons";
import colors from '@/styles/colors';
import { FavoriteType } from '@/assets/enums';
import { FavoriteDetails, cehckFavorited, deleteFavorite, saveFavorite } from '@/libs/storage';
import { HandleList, ListOptions } from '@/assets/utils';
import { translate } from '@/libs/localization';

export interface ResourceTitleProps {
    id: number;
    type: FavoriteType
}


export function ResourceTitle({
    id,
    type
}: ResourceTitleProps) {

    const [list, setList] = useState<ListOptions | null>(null);

    useEffect(() => {
        setList(HandleList(type, id));
    });

    const favorite: FavoriteDetails = {
        id: list ? list.id : 1,
        type: type
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
                    source={images[list ? list.nugget : "nuggetSylva"]}
                    style={resourceTitleStyle.resourceTitleImg}
                />
                <Text style={resourceTitleStyle.txtResourceTitle}>
                    {translate(list ? list.title : "Sylva")}
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