import { Text, TouchableOpacity } from "react-native";
import { resourceItemStyle } from "./style";
import { Image } from "react-native";
import { images } from "@/assets";
import { Link } from "expo-router";

interface ResourceItemProps {
    name: string,
    icon: string,
    link?: string
}

export function ResourceItem({
    name,
    icon,
    link
}: ResourceItemProps) {
    const content = (
        <TouchableOpacity
            style={resourceItemStyle.source}
        >
            <Image source={images[icon]} style={resourceItemStyle.sourceIconImg} /> 
            <Text style={resourceItemStyle.sourceText}>{name}</Text>
        </TouchableOpacity>
    );

    return link ? <Link href={link} asChild>{content}</Link> : content;
    
}