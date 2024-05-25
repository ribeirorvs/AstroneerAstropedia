import colors from '@/styles/colors';
import fonts from '@/styles/fonts';
import { StyleSheet } from 'react-native';

export const titleStyle = StyleSheet.create({
    title: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontFamily: fonts.heading,
        color: colors.blue,
        marginVertical: 15
    },
});