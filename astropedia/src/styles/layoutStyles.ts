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
    contactInput: {
        backgroundColor: colors.gray,
        borderRadius: 20,
        paddingLeft: 15,
        width: '90%',
        height: 70,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    contactMessage: {
        backgroundColor: colors.gray,
        borderRadius: 20,
        paddingLeft: 30,
        width: '90%',
        height: '40%',
        marginVertical: 15,
        paddingTop: 23
    },
    contactButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%'
    },
    resourceContent: {
        flex: 1,
        marginBottom: 12
    },
});