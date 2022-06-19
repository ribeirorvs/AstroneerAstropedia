import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/header';
import { layoutStyle } from '../styles/layoutStyles';
import { translate } from '../libs/localization';
import { textStyle } from '../styles/textStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

export function Configuration() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={layoutStyle.container}>
            <Header />
            <View style={layoutStyle.content} >
                <View style={layoutStyle.configItem}>
                    <Text style={textStyle.text}>{translate('language')}</Text>
                    <Text style={textStyle.text}> Bandeira 1</Text>
                </View>
                <View style={layoutStyle.configItem}>
                    <Text style={textStyle.text}>{translate('whatYouWant')}</Text>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => navigation.navigate('Configuration')}
                    >
                        <Text style={[textStyle.text, textStyle.link]}>{translate('contactUs')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={layoutStyle.configItem}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                    >
                        <Text style={[textStyle.text, textStyle.link]}>{translate('aboutUs')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}