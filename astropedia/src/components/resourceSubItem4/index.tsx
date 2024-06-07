import { images } from "@/assets"
import { Text } from "react-native"
import { Image } from "react-native"
import { TouchableOpacity } from "react-native"
import { resourceSubItem4Style } from "./style"
import { MaterialIcons } from '@expo/vector-icons'
import colors from "@/styles/colors"
import { Link } from "expo-router"

interface ResourceSubItem4Props {
    name: string,
    icon: string,
    link?: string
}

export function ResourceSubItem4({
    name,
    icon,
    link
}: ResourceSubItem4Props) {

    const content = (
        <TouchableOpacity
            style={resourceSubItem4Style.sourceSub4}
        >
            <MaterialIcons
                name="subdirectory-arrow-right"
                size={18}
                color={colors.white}
            />
            <Image source={images[icon]} style={resourceSubItem4Style.sourceIconSubItem} />
            <Text style={resourceSubItem4Style.sourceText}>{name}</Text>
        </TouchableOpacity>
    )
    return (
        link ? <Link href={link} asChild >{content}</Link> : content
    )
}