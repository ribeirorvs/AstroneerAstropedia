import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { planetResourceStyle } from './style';
import { Link } from 'expo-router';
import { images } from '@/assets';
import { translate } from '@/libs/localization';

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
    return (
        <Link href={link} asChild>
            <TouchableOpacity
                style={planetResourceStyle.resource}
            >
                <Image
                    source={images[nugget]}
                    style={planetResourceStyle.nugget}
                />
                <Image
                    source={images[icon]}
                    style={planetResourceStyle.resourceIconImg}
                />
                <View style={planetResourceStyle.resourceDetails}>
                    < Text style={planetResourceStyle.txtResourceName}>{name} </Text>
                    {
                        !!location &&
                        <View style={{flexDirection: 'row'}}>
                            <Text style={planetResourceStyle.txtResourceDetails}>{translate('location')}</Text>
                            <Text style={planetResourceStyle.txtResourceDescription}>{location}</Text>
                        </View>
                    }
                </View>
            </TouchableOpacity>
        </Link>
    )
}
