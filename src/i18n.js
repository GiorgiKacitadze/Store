import { createI18n } from 'vue-i18n'
import locales from './locales/locales.json'

 
 

export default createI18n({
  locale: 'ge' || 'en',
  fallbackLocale:'ge' || 'en',
  messages: locales
})