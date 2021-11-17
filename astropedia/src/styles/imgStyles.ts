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
        marginHorizontal: 20
    },
    component: {
        height: 60,
        width: 60,
        marginHorizontal: 10
    },
    resourceTitleImg: {
        height: 100,
        width: 100,
        marginRight: 20
    },
    favIcon: {
        height: 15,
        width: 15,
        marginBottom: 25
    },
    nugget: {
        height: 90,
        width: 90,
        backgroundColor: colors.blue,
        borderWidth: 5,
        borderColor: colors.white,
        borderRadius: 45
    },
    resourceIconImg: {
        height: 70,
        width: 70,
        backgroundColor: colors.blue,
        marginTop: 10
    },
    sourceIconImg: {
        height: 30,
        width: 30
    }
})