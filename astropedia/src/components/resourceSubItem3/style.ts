import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

export const resourceSubItem3Style = StyleSheet.create({
    sourceSub3: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 100
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