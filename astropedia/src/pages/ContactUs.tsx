import React, {createRef, useState} from 'react';
import { TextInput, View, Image, TouchableOpacity, Alert, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { layoutStyle } from '../styles/layoutStyles';
import { translate } from '../libs/localization';
import { textStyle } from '../styles/textStyles';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';
import email from 'react-native-email';

const nameRef = createRef();
const mailRef = createRef();
const messageRef = createRef();

function handleEmail(name: string, mail: string, message: string){
    const to = ['ribeiro.rvs@hotmail.com']
    if(!name){
        name = translate('name')
    }
    if(!mail){
        mail = translate('email')
    }
    if(!message){
        Alert.alert(translate('warningTitle'),translate('contactUsWarnning'))
        messageRef.current.focus()
    } else {
        message = message + translate('contactUsMessageFrom') + name
        message = message + translate('contactUsMessageReply') + mail
        email(to, {
            subject: 'Astropedia Contact US',
            body: message
        });
    }
}

export function ContactUs() {
    const [name, setName] = useState('Astroneer');
    const [mailAddress, setMailAddress] = useState('noreply');
    const [message, setMessage] = useState('');
    return (
        <KeyboardAvoidingView behavior='padding'  style={layoutStyle.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={layoutStyle.container}>
                    <Header />
                    <View style={layoutStyle.content} >
                        <Title title={translate('contactUs')} />
                        <View style={layoutStyle.contactInput}>
                            <Image 
                                source={images.user}
                                style={imgStyle.input}
                            />
                            <TextInput
                                ref={nameRef}
                                style={textStyle.contactInput}
                                placeholder={translate('contactUsPlaceholderName')}
                                onChangeText={setName}
                            />
                        </View>
                        <View style={layoutStyle.contactInput}>
                            <Image 
                                source={images.mail}
                                style={imgStyle.input}
                            />
                            <TextInput
                                ref={mailRef}
                                style={textStyle.contactInput}
                                placeholder={translate('contactUsPlaceholderEmail')}
                                onChangeText={setMailAddress}
                            />
                        </View>
                        <TouchableOpacity
                                onPress={() => {
                                    messageRef.current.focus()
                                }}
                                activeOpacity={1}
                                style={layoutStyle.contactMessage}
                        >
                            <TextInput 
                                multiline
                                ref={messageRef}
                                style={textStyle.contactInput}
                                placeholder={translate('contactUsPlaceholderMessage')}
                                onChangeText={setMessage}
                            />
                        
                        </TouchableOpacity>
                        <View style={layoutStyle.contactButtons}>
                            <TouchableOpacity
                                onPress={() => {
                                    nameRef.current.clear();
                                    mailRef.current.clear();
                                    messageRef.current.clear();
                                }}
                                activeOpacity={0.10}
                            >
                            <Image
                                source={images.close}
                            />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    handleEmail(name, mailAddress, message)
                                }}
                            >
                            <Image
                                source={images.submit}
                            />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}