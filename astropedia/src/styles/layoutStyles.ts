import { StyleSheet } from 'react-native';
import colors from './colors';


export const layoutStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    wrapper: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    flatList: {
        width: '110%',
        paddingLeft: '10%'
    },
    modal: {
        backgroundColor: colors.gray,
        marginHorizontal: '5%',
        marginTop: '10%',
        alignItems: 'center',
        paddingBottom: '5%'
    },
    modalCreditName: {
        width: '95%',
        marginTop: 6,
        marginBottom: 20
    },
    configItem: {
        flexDirection: 'row',
        width: '85%',
        marginTop: 20,
        alignItems: 'center'
    },
    dropdown: {
        borderRadius: 15,
        backgroundColor: colors.background
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});