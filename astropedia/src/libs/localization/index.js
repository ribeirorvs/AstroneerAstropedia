import i18n from 'i18n-js';
import enUS from './en-US';
import ptBR from './pt-BR';
import plpl from './pl';

i18n.translations = {
    en: enUS,
    pt: ptBR,
    pl: plpl
}

i18n.locale = 'pl';

//console.log(i18n.locale);

export const translate = key => i18n.t(key);