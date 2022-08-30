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
    header: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        marginLeft: '5%',
        marginTop: 0,
        paddingRight: 20
    },
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    component: {
        borderRadius: 20,
        paddingTop: 5,
        backgroundColor: colors.blue,
        flexDirection: 'row',
        width: '90%',
        height: 70,
        marginVertical: 15
    },
    resourceTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 15,
        marginRight: 20,
        justifyContent: 'space-between'
    },
    contentTitle: {
        height: 47,
        width: '100%',
        marginTop: 12,
        alignItems: 'center',
        backgroundColor: colors.blue,
        justifyContent: 'space-around'
    },
    resource: {
        flexDirection: 'row',
        marginTop: 12
    },
    resourceContent: {
        flex: 1,
        marginBottom: 12
    },
    source: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15
    },
    sourceSub1: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 30
    },
    sourceSub2: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 65
    },
    sourceSub3: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 100
    },
    sourceSub4: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 135
    },
    sourceSub5: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 170
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
    flag: {
        marginRight: 10
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
    sourceTableContainer: {
        backgroundColor: colors.blue,
        borderRadius: 10,
        width: '96%',
        marginLeft: "2%",
        marginTop: 10,
        alignItems: 'center',
        paddingVertical: 3
    },
    sourceTable: {
        width: '98%',
        backgroundColor: colors.background
    },
    sourceTableHeader: {
        backgroundColor: colors.blue
    },
    printer:{
        flexDirection: 'row',
        alignItems: 'center'
    }
});