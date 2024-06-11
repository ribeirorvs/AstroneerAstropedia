import { FavoriteType } from "@/assets/enums";
import { HandleList, ListOptions } from "@/assets/utils";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ItemDetailsStyle } from "./style";

type ItemsTextProps = {
    id: number,
    type: FavoriteType,
    source: string
}

export function ItemsUse({id, type, source}: ItemsTextProps) {
    const [list, setList] = useState<ListOptions | null>(null);
    useEffect(() => {
        setList(HandleList(type, id));
    }, [type, id]);

    if(!list){
        return null
    }

    return (
        <View style={ItemDetailsStyle.detailsContainer}>
            {
                list[source].map(item => (
                    <Text 
                        key={item.id} 
                        style={ItemDetailsStyle.detailsText}
                    >
                        {item.text}
                    </Text>
                ))
            }
        </View>
    );
}