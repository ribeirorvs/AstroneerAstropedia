import { images } from "@/assets";
import { FavoriteType } from "@/assets/enums";
import { HandleList, ListOptions } from "@/assets/utils";
import { translate } from "@/libs/localization";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { Text, TouchableOpacity } from "react-native";

interface PrintableRecipteProps {
    id: number,
    quantity: number,
    type: FavoriteType,
    title?: string
}

export function PrintableRecipte({id, quantity, type, title}: PrintableRecipteProps) {
    const [list, setList] = useState<ListOptions | null>(null);
    let titleQuantity = quantity > 1 ? quantity + "x" : "";

    useEffect(() => {
        setList(HandleList(type, id) || null);
    });

    const content = (
        <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text>
                {titleQuantity}
            </Text>
            <Image
                source={images[list?.nugget]}
                style={{width: 22, height: 22}}
            />
            <Text>
                {translate(list?.title ? list.title : title)}
            </Text>
        </TouchableOpacity>
    )
    return (
        list?.link ? <Link href={list.link} asChild>{content}</Link> : content
    );
}