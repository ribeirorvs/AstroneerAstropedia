import { Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import colors from "@/styles/colors";
import { Image } from "react-native";
import { images } from "@/assets";
import { resourceSubItem2Style } from "./style";
import { Link } from "expo-router";

interface ResourceSubItem2Props {
    name: string,
    icon: string,
    link?: string
}

export function ResourceSubItem2({
    name,
    icon,
    link
}: ResourceSubItem2Props) {
    const content = (
        <TouchableOpacity
            style={resourceSubItem2Style.sourceSub2}
        >
            <MaterialIcons
                name="subdirectory-arrow-right"
                size={18}
                color={colors.white}
            />
            <Image source={images[icon]} style={resourceSubItem2Style.sourceIconSubItem} />
            <Text style={resourceSubItem2Style.sourceText}>{name}</Text>
        </TouchableOpacity>
    )
    return (
        link ? <Link href={link} asChild>{content}</Link> : content
    )
}