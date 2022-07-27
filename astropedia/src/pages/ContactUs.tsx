import React, {createRef} from 'react';
import { TextInput, View, Image, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { layoutStyle } from '../styles/layoutStyles';
import { translate } from '../libs/localization';
import { textStyle } from '../styles/textStyles';
import { images } from '../assets';
import { imgStyle } from '../styles/imgStyles';

const nameRef = createRef();
const mailRef = createRef();
const messageRef = createRef();

export function ContactUs() {
    return (
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
                        placeholder={translate('name')}
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
                        placeholder={translate('email')}
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
                        placeholder={translate('message')}
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
                    <Image
                        source={images.submit}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}