import i18n from 'i18n-js';
import enUS from './en-US';
import ptBR from './pt-BR';
import plpl from './pl';
import ruru from './ru';

i18n.translations = {
    en: enUS,
    pt: ptBR,
    pl: plpl,
    ru: ruru
}

i18n.locale = 'ru';

//console.log(i18n.locale);

export const translate = key => i18n.t(key);