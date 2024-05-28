import { images } from "@/assets"
import { Text } from "react-native"
import { Image } from "react-native"
import { TouchableOpacity } from "react-native"
import { resourceSubItem5Style } from "./style"
import { MaterialIcons } from '@expo/vector-icons'
import colors from "@/styles/colors"
import { Link } from "expo-router"

interface ResourceSubItem5Props {
    name: string,
    icon: string,
    link?: string
}

export function ResourceSubItem5({
    name,
    icon,
    link
}: ResourceSubItem5Props) {

    const content = (
        <TouchableOpacity
            style={resourceSubItem5Style.sourceSub5}
        >
            <MaterialIcons
                name="subdirectory-arrow-right"
                size={18}
                color={colors.white}
            />
            <Image source={images[icon]} style={resourceSubItem5Style.sourceIconSubItem} />
            <Text style={resourceSubItem5Style.sourceText}>{name}</Text>
        </TouchableOpacity>
    )
    return (
        link ? <Link href={link} asChild >{content}</Link> : content
    )
}