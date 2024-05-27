import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

export const resourceSubItem1Style = StyleSheet.create({
    sourceSub1: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 30
    },
    sourceIconSubItem: {
        height: 30,
        width: 30,
        marginLeft: 5
    },
    sourceText: {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 18,
        textTransform: 'capitalize',
        marginTop: 3,
        marginLeft: 10
    },
});