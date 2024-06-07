import { FavoriteType } from "@/assets/enums";
import { PrintersList } from "@/assets/printers";
import { ContentTitle } from "@/components/contentTitle";
import { PrintableOutput } from "@/components/printableOutput";
import { PrintableSource } from "@/components/printableSource";
import { ResourceTitle } from "@/components/resourceTitle";
import { translate } from "@/libs/localization";
import { layoutStyle } from "@/styles/layoutStyles";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, Text } from "react-native";

export default function PrinterDetails() {
    const { id } = useLocalSearchParams();
    const printer = PrintersList.find(printer => printer.id === Number(id));

    return (
        <SafeAreaView style={layoutStyle.container} >
            <ScrollView>
                <ResourceTitle
                    id={printer?.id || 1}
                    type={FavoriteType.Printer}
                />
                <ContentTitle title={translate('sourceTitle')} />
                <PrintableSource
                    id={printer?.id || 1}
                />
                <ContentTitle title={translate('printTitle')} />
                <PrintableOutput
                    id={printer?.id || 1}
                />
            </ScrollView>
        </SafeAreaView>
    );
}