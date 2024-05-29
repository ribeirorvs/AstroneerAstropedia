import { PrinterOutputList } from "@/assets/printerOutputList";
import { View } from "react-native";
import { DataTable } from "react-native-paper";
import { printableOutputStyle } from "./style";
import { useEffect, useState } from "react";

interface printableTableOutput {
    id: number;
}

export function PrintableOutput({
    id,
}: printableTableOutput) {
    const outputList = PrinterOutputList.filter(item => item.printerId === id);
    const tableHead = ['Input', 'Output', 'Unlock Cost'];
    
    const [page, setPage] = useState<number>(0);
    const [numberOfItemsPerPageList] = useState([5, 10, 15]);
    const [itemsPerPage, onItemsPerPageChange] = useState(
        numberOfItemsPerPageList[0]
    )

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, outputList.length);

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <View style={printableOutputStyle.sourceTableContainer}>
            <DataTable >
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
                </DataTable.Header>
                {
                    outputList
                        .slice(from, to)
                        .map((output, index) => (
                            <DataTable.Row key={index} >
                                <DataTable.Cell>
                                    {output.input}
                                </DataTable.Cell>
                                <DataTable.Cell>
                                    {output.output}
                                </DataTable.Cell>
                                <DataTable.Cell>
                                    {output.cost}
                                </DataTable.Cell>
                            </DataTable.Row>
                    ))
                }

                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(outputList.length / itemsPerPage)}
                    onPageChange={(page) => setPage(page)}
                    label={`${from + 1}-${to} of ${outputList.length}`}
                    numberOfItemsPerPage={itemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    showFastPaginationControls
                    //numberOfItemsPerPageList={numberOfItemsPerPageList}
                    //selectPageDropdownLabel={'Rows per page'}
                />
            </DataTable>
        </View>
    )
}