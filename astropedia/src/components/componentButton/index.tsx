import { Text, Image, TouchableOpacity } from 'react-native';
import { images } from '@/assets/index';
import { componentButtonStyle } from './style';
import { Link } from 'expo-router';
import { PlanetList } from '@/assets/planets';

type ComponentButtonProps = {
    id: number
}

export function ComponentButton({id}: ComponentButtonProps) {
    const planet = PlanetList.find(planet => planet.id === id);
    return (
        <Link href={{
            pathname: planet ? planet.link : "sylva",
            params: {
                id: id
            }
        }}  asChild>
            <TouchableOpacity
                style={componentButtonStyle.component}
            >
                <Image source={images[planet?.icon]} style={componentButtonStyle.imgComponent} />
                <Text style={componentButtonStyle.txtComponent}>
                    {planet ? planet.title : "err"}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}