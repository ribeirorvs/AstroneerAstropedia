import React, { useState } from 'react';
import {
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
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/core';
import { images } from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    async function handleSubmit() {
        await AsyncStorage.setItem('@astropedia:astroName', name);
        navigation.navigate('Home');
    }

    return (
        <KeyboardAvoidingView style={layoutStyle.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={layoutStyle.wrapper}>
                    <Image
                        source={images.logo}
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
                        placeholderTextColor={colors.white}
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                    />
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={handleSubmit}
                    >
                        <Image
                            source={images.confirm}
                            style={imgStyle.button}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}