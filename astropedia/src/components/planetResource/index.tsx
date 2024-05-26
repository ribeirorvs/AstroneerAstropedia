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
import { PlanetList } from '@/assets/planets';

export type PlanetResourceProps = {
    resource: {
        id: number,
        nugget: string,
        icon: string,
        name: string,
        link: string,
        location?: string[]
    }
}

export function PlanetResource({
    resource
}: PlanetResourceProps) {
    return (
        <Link href={resource.link} asChild>
            <TouchableOpacity
                style={planetResourceStyle.resource}
            >
                <Image
                    source={images[resource.nugget]}
                    style={planetResourceStyle.nugget}
                />
                <Image
                    source={images[resource.icon]}
                    style={planetResourceStyle.resourceIconImg}
                />
                <View style={planetResourceStyle.resourceDetails}>
                    < Text style={planetResourceStyle.txtResourceName}>{resource.name} </Text>
                    {
                        !!resource.location &&
                        <View style={{flexDirection: 'row'}}>
                            <Text style={planetResourceStyle.txtResourceDetails}>{translate('location')}</Text>
                            {
                                resource.location.map((location, index) => (
                                    <Text key={index} style={planetResourceStyle.txtResourceDescription}>{translate(location)}, </Text>                        
                                ))
                            }
                        </View>
                    }
                </View>
            </TouchableOpacity>
        </Link>
    )
}
