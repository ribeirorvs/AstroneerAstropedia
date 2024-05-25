import React from 'react';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ComponentButton } from '../components/component';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { layoutStyle } from '../styles/layoutStyles';
import { ResourceList } from '../assets/resources';
import { translate } from '../libs/localization';

export function Resources() {
    return (
        <SafeAreaView style={layoutStyle.container}>
            <Header />
            <View style={layoutStyle.content} >
                <Title title={translate('resourcesTitle')} />
                <FlatList
                    data={ResourceList}
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