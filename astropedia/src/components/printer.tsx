import { useNavigation } from '@react-navigation/native';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { images } from '../assets/index';
import {imgStyle} from '../styles/imgStyles'
import { layoutStyle } from '../styles/layoutStyles';
import { textStyle } from '../styles/textStyles';

interface PrinterProps{
    name: string;
    link: string;
    image: string;
}

export function Printer({
    name,
    link,
    image
}: PrinterProps){
    const navigation = useNavigation()
    return(
        <TouchableOpacity
            activeOpacity={0.10}
            onPress={() => navigation.navigate(link)}
            style={layoutStyle.printer}
        >
            <Image source={images[image]} style={imgStyle.printerIcon} />
            <Text style={textStyle.sourceTableContent2}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}