import i18n from 'i18n-js';
import enUS from './en-US';
import ptBR from './pt-BR';
import plpl from './pl';
import ruru from './ru';
import eses from './es';
import AsyncStorage from '@react-native-async-storage/async-storage';

i18n.translations = {
    en: enUS,
    pt: ptBR,
    pl: plpl,
    ru: ruru,
    es: eses
}

i18n.locale = 'en';

export async function handleLocale(){
    const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem('@astropedia:lang')));
    i18n.locale = (data? data : 'en')
}

handleLocale()

export const translate = key => i18n.t(key);