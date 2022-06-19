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
        marginTop: 20
    }
});