import i18n from 'i18n-js';
import enUS from './en-US';
import ptBR from './pt-BR';

i18n.translations = {
    en: enUS,
    pt: ptBR
}

i18n.locale = 'en';

//console.log(i18n.locale);

export const translate = key => i18n.t(key);