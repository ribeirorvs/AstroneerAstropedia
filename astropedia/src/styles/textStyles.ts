import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from './colors';
import Fonts from './fonts'

export const textStyle = StyleSheet.create({
    title: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontFamily: Fonts.heading,
        color: colors.blue,
        marginVertical: 15
    },
    subTitle: {
        fontSize: 32,
        fontFamily: Fonts.heading,
        textAlign: 'center',
        color: colors.blue
    },
    component: {
        fontSize: 40,
        fontFamily: Fonts.heading,
        color: colors.white,
        textTransform: 'uppercase',
        paddingTop: 5
    },
    welcomeMessage: {
        color: colors.gold,
        fontSize: 40,
        textAlign: 'center',
        fontFamily: Fonts.heading
    },
    text: {
        color: colors.white,
        fontFamily: Fonts.text,
        fontSize: 18
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        color: colors.white,
        textAlign: 'center',
        fontFamily: Fonts.text,
        fontSize: 18,
        width: 220
    },
    contentTitle: {
        color: colors.white,
        fontFamily: Fonts.heading,
        fontSize: 18,
        textTransform: 'uppercase'
    },
    resourceName: {
        color: colors.gold,
        backgroundColor: colors.white,
        fontFamily: Fonts.heading,
        fontSize: 18,
        height: 70,
        width: 180,
        marginTop: 10,
        paddingLeft: 15,
        textAlignVertical: 'center',
        textTransform: 'uppercase'
    },
    sourceText: {
        color: colors.white,
        fontFamily: Fonts.text,
        fontSize: 18,
        textTransform: 'capitalize',
        marginTop: 3,
        marginLeft: 10
    },
    resourceTitle: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontFamily: Fonts.heading,
        color: colors.blue,
        marginVertical: 29
    },
    link: {
        color: colors.blue,
        fontSize: 18
    },
    creditName:{
        color: colors.black,
        textTransform: 'uppercase',
        fontSize: 18
    },
    contactInput: {
        fontSize: 18,
        color: colors.black,
        width: '80%'
    },
    sourceTableHeader:{
        fontSize: 14,
        color: colors.white,
        fontWeight: 'bold'
    }
});