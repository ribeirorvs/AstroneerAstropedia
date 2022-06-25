import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, Alert, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/header';
import { layoutStyle } from '../styles/layoutStyles';
import { translate } from '../libs/localization';
import { textStyle } from '../styles/textStyles';
import { images } from '../assets';
import { useNavigation } from '@react-navigation/core';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../styles/colors';
import SelectDropdown from 'react-native-select-dropdown';
import Flag from 'react-native-flags';

export function Configuration() {

    const navigation = useNavigation();
    const [initialLang, setInitialLang] = useState<{name: string, flag: string}>();
    const [initialSuit, setInitialSuit] = useState<{name: string, image: string}>();
    const [astroName, setAstroName] = useState<string>();
    const [isFocused, setIsFocused] = useState(false);
    const [messageShowed, SetMessageShowed] = useState(false);
    const languages = [
        { name: 'English', flag: 'US', lang: 'en'},
        { name: 'Polski', flag: 'PL', lang: 'pl'},
        { name: 'Português', flag: 'BR', lang: 'pt'}
    ];
    const avatars = [
        {name: 'Classic', image: 'classicSuit'},
        {name: 'Exo Suit', image: 'exoSuit'},
        {name: 'Flight Suit', image: 'flightSuit'}
    ];

    useEffect(() => {
        async function loadName() {
            const data = await AsyncStorage.getItem('@astropedia:astroName');
            setAstroName(data ? data : 'Astroneer');
        }
        loadName();
    }, []);

    useEffect(() => {
        async function loadLanguage() {
            const data = await changeLanguague();
            setInitialLang(data ? data : {name: 'English', flag: 'US'})
        }
        loadLanguage();
    }, [])

    useEffect(() => {
        async function loadSuit() {
            const data = await changeSuit();
            setInitialSuit(data ? data : avatars[0]);
        }
        loadSuit();
    })

    async function handleSelect(selectedItem: string, key: string){
        await AsyncStorage.setItem(key, selectedItem);
        if(key == '@astropedia:lang'){
            setInitialLang(await changeLanguague());
        } else {
            setInitialSuit(await changeSuit());
        }
        showMessage();
    }

    function handleInput(name: string){
        AsyncStorage.setItem('@astropedia:astroName', name);
        showMessage();
    }

    async function changeLanguague(){
        const data = await AsyncStorage.getItem('@astropedia:lang');
        var lang = {name: '', flag: ''}
        switch(data) {
            case 'en':
                lang = { name: 'English', flag: 'US' };
                break;
            case 'pl':
                lang = { name: 'Polski', flag: 'PL'};
                break;
            case 'pt':
                lang = { name: 'Português', flag: 'BR'};
                break;
        }
        return lang;
    }

    async function changeSuit(){
        const data = await AsyncStorage.getItem('@astropedia:astroSuit');
        var suit = {name: '', image: ''}
        switch(data) {
            case 'classicSuit':
                suit = avatars[0];
                break;
            case 'exoSuit':
                suit = avatars[1];
                break;
            case 'flightSuit':
                suit = avatars[2];
                break;
        }
        return suit;
    }

    function showMessage(){
        console.log(messageShowed);
        if(!messageShowed){
            Alert.alert(translate('warningTitle'), translate('warningMessage'));
            SetMessageShowed(true);
        }
    }

    return (
        <SafeAreaView style={layoutStyle.container}>
            <Header />
            <View style={layoutStyle.content} >
                <View style={layoutStyle.configItem}>
                    <Text style={textStyle.text}>{translate('avatar')}</Text>
                    <SelectDropdown 
                        data={avatars}
                        buttonStyle={layoutStyle.dropdown}
                        buttonTextStyle={textStyle.link}
                        dropdownStyle={layoutStyle.dropdown}
                        rowTextStyle={textStyle.link}
                        //Render the first value when open the config page
                        renderCustomizedButtonChild={(selectedItem, index) => {
                            return (
                                <View style={layoutStyle.dropdownItem}>
                                    {selectedItem ? 
                                        (
                                            <Image source={images[selectedItem.image]} />
                                        ) :
                                        (
                                            <Image source={initialSuit ? images[initialSuit.image] : images[avatars[0].image]} />
                                        )
                                    }
                                    <Text style={textStyle.link}>{selectedItem ? selectedItem.name : initialSuit ? initialSuit.name : avatars[0].name}</Text>
                                </View>
                            )
                        }}
                        //Render the dropdown list
                        renderCustomizedRowChild={(item, index) =>{
                            return (
                                <View style={layoutStyle.dropdownItem}>
                                    <Image source={images[item.image]} />
                                    <Text style={textStyle.link}>{item.name}</Text>
                                </View>
                            )
                        }}
                        //Render the dropdown icon (arrow icon)
                        renderDropdownIcon={isOpened => {
                            return <FontAwesome5 
                                        name={isOpened ? 'chevron-up' : 'chevron-down'} 
                                        color={colors.blue}
                                    />
                        }}
                        //Define what happens when a new item is selected
                        onSelect={(selectedItem, index) => {
                            handleSelect(selectedItem.image, '@astropedia:astroSuit')
                        }}
                    />
                </View>
                <View style={layoutStyle.configItem}>
                    <Text style={textStyle.text}>{translate('name')}</Text>
                    <TextInput
                        style={[
                            textStyle.input,
                            isFocused && {borderBottomColor: colors.blue}
                        ]}
                        placeholder={astroName}
                        placeholderTextColor={colors.white}
                        onChangeText={handleInput}
                        onFocus={() => {setIsFocused(true)}}
                        onBlur={() => {setIsFocused(false)}}
                    />
                </View>
                <View style={layoutStyle.configItem}>
                    <Text style={textStyle.text}>{translate('language')}</Text>
                    <SelectDropdown 
                        data={languages}
                        buttonStyle={layoutStyle.dropdown}
                        buttonTextStyle={textStyle.link}
                        dropdownStyle={layoutStyle.dropdown}
                        rowTextStyle={textStyle.link}
                        //Render the first value when open the config page
                        renderCustomizedButtonChild={(selectedItem, index) => {
                            return (
                                <View style={layoutStyle.dropdownItem}>
                                    {selectedItem ? 
                                        (
                                            <Flag 
                                                code={selectedItem.flag}
                                                size={32}
                                                style={layoutStyle.flag}
                                            />
                                        ) :
                                        (
                                            <Flag 
                                                code={initialLang ? initialLang.flag : languages[0].name}
                                                size={32}
                                                style={layoutStyle.flag}
                                            />
                                        )
                                    }
                                    <Text style={textStyle.link}>{selectedItem ? selectedItem.name : initialLang ? initialLang.name : languages[0].name}</Text>
                                </View>
                            )
                        }}
                        //Render the dropdown list
                        renderCustomizedRowChild={(item, index) =>{
                            return (
                                <View style={layoutStyle.dropdownItem}>
                                    <Flag 
                                        code={item.flag}
                                        size={32}
                                        style={layoutStyle.flag}

                                    />
                                    <Text style={textStyle.link}>{item.name}</Text>
                                </View>
                            )
                        }}
                        //Render the dropdown icon (arrow icon)
                        renderDropdownIcon={isOpened => {
                            return <FontAwesome5 
                                        name={isOpened ? 'chevron-up' : 'chevron-down'}
                                        color={colors.blue}
                                    />
                        }}
                        //Define what happens when a new item is selected
                        onSelect={(selectedItem, index) => {
                            handleSelect(selectedItem.lang, '@astropedia:lang')
                        }}
                    />
                </View>
                <View style={layoutStyle.configItem}>
                    <Text style={textStyle.text}>{translate('whatYouWant')}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        activeOpacity={0.10}
                    >
                        <Text style={[textStyle.text, textStyle.link]}>{translate('contactUs')}</Text>
                    </TouchableOpacity>                        
                </View>
                <View style={layoutStyle.configItem}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        activeOpacity={0.10}
                    >
                        <Text style={[textStyle.text, textStyle.link]}>{translate('aboutUs')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}