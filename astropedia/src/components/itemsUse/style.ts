import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

export const ItemDetailsStyle = StyleSheet.create({
    detailsContainer: {
        backgroundColor: colors.blue,
        borderRadius: 10,
        borderColor: colors.white,
        borderWidth: 1,
        width: "96%",
        margin: '2%',
        padding: 15,
    },
    detailsText:{
        fontFamily: fonts.text,
        fontSize: 12,
        color: colors.black,
        marginVertical: 3
    }
});