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
                    renderItem={({ item }) => (
                        <ComponentButton
                            title={translate(item.title)}
                            icon={item.icon}
                            link={item.link}
                        />
                    )}
                    style={layoutStyle.flatList}
                />
            </View>
        </SafeAreaView>
    )
}