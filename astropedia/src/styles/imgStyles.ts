import { Dimensions, StyleSheet } from 'react-native';
import colors from './colors';

export const imgStyle = StyleSheet.create({
    welcomeImage: {
        height: Dimensions.get('window').width * 0.7,
        marginTop: 40
    },
    button: {
        height: 88,
        width: 108,
        justifyContent: 'center'
    },
    player: {
        marginRight: 20
    },
})