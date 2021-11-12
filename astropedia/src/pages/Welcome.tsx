import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import iconSylva from '../img/iconSylva.png';
import f from '../img/f.png';
import { styles } from '../styles/styles';


export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Image
                    source={iconSylva} style={styles.welcomeImage}
                    resizeMode='contain'
                />
                <Text style={styles.welcomeMessage}>
                    THE EASIER WAY{'\n'}
                    TO USE{'\n'}
                    THE ASTROPEDIA
                </Text>
                <TouchableOpacity
                    activeOpacity={0.75}
                >
                    <Image source={f} style={styles.button} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}