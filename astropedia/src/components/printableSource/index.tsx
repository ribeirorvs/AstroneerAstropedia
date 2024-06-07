import { PrintersList } from "@/assets/printers"
import { DataTable } from 'react-native-paper';
import { printableSourceStyle } from "./style";
import colors from "@/styles/colors";
import { translate } from "@/libs/localization";
import { View } from "react-native";
import { PrinterInput } from "../printerInput";
import { PrintableRecipte } from "../printableRecipte";

type PrintableSourceProps = {
    id: number
}

export function PrintableSource({id}: PrintableSourceProps) {
    const sourceTable = PrintersList.find(printer => printer.id === id)?.source || [];
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
                            <DataTable.Cell>
                                {source.unlockCost}
                            </DataTable.Cell>
                            <DataTable.Cell>
                                {source.powerConsumption}
                            </DataTable.Cell>
                        </DataTable.Row>
                    ))
                }
            </DataTable> 
    )
}