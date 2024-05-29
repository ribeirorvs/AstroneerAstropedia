import { Text, Image, TouchableOpacity } from 'react-native';
import { images } from '@/assets/index';
import { componentButtonStyle } from './style';
import { Link } from 'expo-router';
import { FavoriteType } from '@/assets/enums';
import { useEffect, useState } from 'react';
import { HandleList, ListOptions } from '@/assets/utils';
import { translate } from '@/libs/localization';

type ComponentButtonProps = {
    id: number,
    type: FavoriteType
}

export function ComponentButton({id, type}: ComponentButtonProps) {

    const [list, setList] = useState<ListOptions | null>(null);
    
    useEffect(() => {
        setList(HandleList(type, id));
    },[]);

    return (
        <Link href={{
            pathname: list ? list.link : "/planet/1",
        }}  asChild>
            <TouchableOpacity
                style={componentButtonStyle.component}
            >
                <Image source={images[list?.icon]} style={componentButtonStyle.imgComponent} />
                <Text 
                    style={componentButtonStyle.txtComponent}
                    numberOfLines={1}
                >
                    {translate( list ? list.title : "err")}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}