import { DataTable } from 'react-native-paper';
import { printableSourceStyle } from "./style";
import { translate } from "@/libs/localization";
import { View } from "react-native";
import { PrintableRecipte } from "../printableRecipte";
import { FavoriteType } from "@/assets/enums";
import { HandleList, ListOptions } from "@/assets/utils";
import { useEffect, useState } from "react";
import { PrintersList } from '@/assets/printers';

type PrintableSourceProps = {
    id: number,
    type: FavoriteType
}

export function PrintableSource({id, type}: PrintableSourceProps) {
    const [list, setList] = useState<ListOptions | null>(null);

    useEffect(() => {
        setList(HandleList(type, id));
    }, [type, id]);

    let sourceTable = null;
    if (list) {
        sourceTable = list?.source;
    } else {
        return null;  
    }

    const tableHead = ['craftedAt', 'recipe', 'unlockCost', 'powerConsumption']
    return (
            <DataTable
                style={printableSourceStyle.sourceTableContainer}
            >
                <DataTable.Header>
                    <DataTable.Title>
                        {translate(tableHead[0])}
                    </DataTable.Title>
                    <DataTable.Title>
                        {translate(tableHead[1])}
                    </DataTable.Title>
                    <DataTable.Title>
                        {translate(tableHead[2])}
                    </DataTable.Title>
                    <DataTable.Title>
                        {translate(tableHead[3])}
                    </DataTable.Title>
                </DataTable.Header>
                {
                    sourceTable.map((source, index) => (
                        <DataTable.Row key={index}>
                            <DataTable.Cell>
                                {translate(source.craftAt)}
                            </DataTable.Cell>
                            <DataTable.Cell>
                                <View key={index} style={{flex: 1, flexDirection: "column"}}>
                                    {
                                        //translate(source.recipte)
                                        source.recipte.map((recipte, index) => (
                                            <PrintableRecipte 
                                                key={index}
                                                id={recipte.listId}
                                                quantity={recipte.quantity}
                                                type={recipte.type}
                                                title={recipte.title}
                                            />
                                        ))
                                    }
                                </View>
                            </DataTable.Cell>
                            <DataTable.Cell numeric>
                                {source.unlockCost}
                            </DataTable.Cell>
                            <DataTable.Cell numeric>
                                {source.powerConsumption}
                            </DataTable.Cell>
                        </DataTable.Row>
                    ))
                }
            </DataTable> 
    )
}