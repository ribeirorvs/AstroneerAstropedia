import { PrintersList } from "@/assets/printers"
import { DataTable } from 'react-native-paper';
import { printableSourceStyle } from "./style";
import colors from "@/styles/colors";

type PrintableSourceProps = {
    id: number
}

export function PrintableSource({id}: PrintableSourceProps) {
    const sourceTable = PrintersList.find(printer => printer.id === id)?.source || [];
    const tableHead = ['Crafted at', 'Recipe', 'Unlock Cost', 'Power Consumptio']
    return (
            <DataTable
                style={printableSourceStyle.sourceTableContainer}
            >
                <DataTable.Header>
                    <DataTable.Title>
                        {tableHead[0]}
                    </DataTable.Title>
                    <DataTable.Title>
                        {tableHead[1]}
                    </DataTable.Title>
                    <DataTable.Title>
                        {tableHead[2]}
                    </DataTable.Title>
                    <DataTable.Title>
                        {tableHead[3]}
                    </DataTable.Title>
                </DataTable.Header>
                {
                    sourceTable.map((source, index) => (
                        <DataTable.Row key={index}>
                            <DataTable.Cell>
                                {source.craftAt}
                            </DataTable.Cell>
                            <DataTable.Cell>
                                {source.recipte}
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