import { resolveBrowserLocale } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import en from 'ra-language-english';
import ua from 'ra-language-ukrainian';
import ru from 'ra-language-russian';

import domainMessages from "./domainMessages";

const messages = {
  en: { ...en, ...domainMessages.en },
  ua: { ...ua, ...domainMessages.ua },
  ru: { ...ru, ...domainMessages.ru },
};

const getLocale = () => {
  let locale;
  locale = localStorage.getItem('LOCALE');
  if (!locale) locale = resolveBrowserLocale();
  if (!locale) locale = 'ru';
  return locale;
}

export default polyglotI18nProvider(
  locale => messages[locale],
  getLocale(),
  {
    allowMissing: true,
    onMissingKey: (key) => key && key.split('.')[key.split('.').length - 1]
  }
);