import { images } from "@/assets";
import { FavoriteType } from "@/assets/enums";
import { HandleList, ListOptions } from "@/assets/utils";
import { translate } from "@/libs/localization";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface PrinterInputProps {
    id: number,
    quantity: number,
    type: FavoriteType
}

export function PrinterInput({id, quantity, type}: PrinterInputProps) {
    const [list, setList] = useState<ListOptions | null>(null);
    let title = quantity > 1 ? quantity + "x" : ""
    useEffect(() => {
        setList(HandleList(type, id) || null);
    });

    const content = (
        <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text>
                {title}
            </Text>
            <Image
                source={images[list?.nugget]}
                style={{width: 22, height: 22}}
            />
            <Text>
                {translate(list?.title)}
            </Text>
        </TouchableOpacity>
    )
    return (
        list?.link ? <Link href={list.link} asChild>{content}</Link> : content
    );
}