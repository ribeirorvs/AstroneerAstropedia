import { Text, Image, TouchableOpacity } from 'react-native';
import { resourceSubItem1Style } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '@/styles/colors';
import { images } from '@/assets';
import { Link } from 'expo-router';

interface ResourceSubItem1Props {
    name: string,
    icon: string,
    link?: string
}

export function ResourceSubItem1({
    name,
    icon,
    link
}: ResourceSubItem1Props) {
    const content = (
        <TouchableOpacity
            style={resourceSubItem1Style.sourceSub1}
        >
            <MaterialIcons
                name="subdirectory-arrow-right"
                size={18}
                color={colors.white}
            />
            <Image source={images[icon]} style={resourceSubItem1Style.sourceIconSubItem} />
            <Text style={resourceSubItem1Style.sourceText}>{name}</Text>
        </TouchableOpacity>
    )
    return link ? <Link href={link} asChild>{content}</Link> : content
}