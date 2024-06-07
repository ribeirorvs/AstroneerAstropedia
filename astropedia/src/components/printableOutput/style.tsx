import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

export const printableOutputStyle = StyleSheet.create({
    sourceTableContainer: {
        backgroundColor: colors.blue,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.white,
        width: '96%',
        marginLeft: "2%",
        marginTop: 10,
        paddingVertical: 3
    },
});