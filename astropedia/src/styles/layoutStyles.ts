import { Dimensions, StyleSheet } from 'react-native';
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
        backgroundColor: colors.background,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        marginLeft: '5%',
        marginTop: 0
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
    }
});