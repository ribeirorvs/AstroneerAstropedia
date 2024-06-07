import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

export const planetDetailsStyle = StyleSheet.create({
    sourceText: {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 18,
        textTransform: 'capitalize',
        marginTop: 3,
        marginLeft: 10
    },
});