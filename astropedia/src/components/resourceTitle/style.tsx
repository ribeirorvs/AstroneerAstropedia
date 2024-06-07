import { StyleSheet } from 'react-native';
import colors from '@/styles/colors';
import fonts from '@/styles/fonts';

export const resourceTitleStyle = StyleSheet.create({
    resourceTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 15,
        marginRight: 20,
        justifyContent: 'space-between'
    },
    resourceTitleImg: {
        height: 100,
        width: 100,
        marginRight: 20
    },
    txtResourceTitle: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontFamily: fonts.heading,
        color: colors.blue,
    },
    favIcon: {
        height: 25,
        width: 25,
        marginBottom: 25
    },
});