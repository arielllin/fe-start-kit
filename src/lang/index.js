import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import enLocale from './en-us'
import zhLocale from './zh-cn'

import moment from 'moment'
import 'moment/locale/zh-tw'
import 'moment/locale/zh-cn'
import 'moment/locale/en-SG'

Vue.use(VueI18n)

const messages = {
  'en-us': {
    ...enLocale
  },
  'zh-cn': {
    ...zhLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: Cookies.get('language') || 'zh-cn',
  // set locale messages
  messages
})

// -- Setup moment locale --
moment.locale(i18n.locale === 'en-US' ? 'en-SG' : i18n.locale)

export default i18n
