import { images } from "@/assets"
import { Text } from "react-native"
import { Image } from "react-native"
import { TouchableOpacity } from "react-native"
import { resourceSubItem3Style } from "./style"
import { MaterialIcons } from '@expo/vector-icons'
import colors from "@/styles/colors"
import { Link } from "expo-router"

interface ResourceSubItem3Props {
    name: string,
    icon: string,
    link?: string
}

export function ResourceSubItem3({
    name,
    icon,
    link
}: ResourceSubItem3Props) {

    const content = (
        <TouchableOpacity
            style={resourceSubItem3Style.sourceSub3}
        >
            <MaterialIcons
                name="subdirectory-arrow-right"
                size={18}
                color={colors.white}
            />
            <Image source={images[icon]} style={resourceSubItem3Style.sourceIconSubItem} />
            <Text style={resourceSubItem3Style.sourceText}>{name}</Text>
        </TouchableOpacity>
    )
    return (
        link ? <Link href={link} asChild >{content}</Link> : content
    )
}