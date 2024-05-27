import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

export const resourceItemStyle = StyleSheet.create({
    source: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15
    },
    sourceText: {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 18,
        textTransform: 'capitalize',
        marginTop: 3,
        marginLeft: 10
    },
    sourceIconImg: {
        height: 30,
        width: 30
    },
});