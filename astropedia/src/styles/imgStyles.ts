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
    }
})