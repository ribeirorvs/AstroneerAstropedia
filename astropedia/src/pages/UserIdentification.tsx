import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import { textStyle } from '../styles/textStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { imgStyle } from '../styles/imgStyles';
import logo from '../img/logo.png';
import confirm from '../img/confirm.png';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/core';

export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    return (
        <KeyboardAvoidingView style={layoutStyle.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={layoutStyle.wrapper}>
                    <Image
                        source={logo}
                    />
                    <Text style={textStyle.subTitle}>
                        What is your{'\n'}
                    Astroneer name?
                </Text>
                    <TextInput
                        style={[
                            textStyle.input,
                            (isFilled || isFocused) && { borderBottomColor: colors.blue }
                        ]}
                        placeholder="Astroneer"
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                    />
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => navigation.navigate('a')}
                    >
                        <Image
                            source={confirm}
                            style={imgStyle.button}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}