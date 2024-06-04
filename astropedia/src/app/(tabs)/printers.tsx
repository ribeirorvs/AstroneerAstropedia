import { FavoriteType } from '@/assets/enums';
import { PrintersList } from '@/assets/printers';
import { ComponentButton } from '@/components/componentButton';
import { Title } from '@/components/title';
import { translate } from '@/libs/localization';
import { layoutStyle } from '@/styles/layoutStyles';
import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';

export default function Printers() {
    return (
        <SafeAreaView style={layoutStyle.container}>
            <View style={layoutStyle.content} >

                <Title title={translate('printers')} />
                <FlatList
                    data={PrintersList}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item, index }) => (
                        <ComponentButton
                            key={index}
                            id={item.id}
                            type={FavoriteType.Printer}
                        />
                    )}
                    style={layoutStyle.flatList}
                />
            </View>
        </SafeAreaView>
    )
}