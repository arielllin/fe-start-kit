import Cookies from 'js-cookie'
import { cookieKeys } from '@/utils/constant'

const ExpireInKey = cookieKeys.ExpireInKey
const LanguageKey = cookieKeys.LanguageKey
const LoginStatusKey = cookieKeys.LoginStatusKey
const MarqueeUidKey = cookieKeys.MarqueeUidKey

export function getExpireIn() {
  return Cookies.get(ExpireInKey)
}

export function setExpireIn(expireIn) {
  return Cookies.set(ExpireInKey, expireIn)
}

export function removeExpireIn() {
  return Cookies.remove(ExpireInKey)
}

export function getLanguage() {
  return Cookies.get(LanguageKey)
}

export function setLanguage(language) {
  return Cookies.set(LanguageKey, language, { expires: 15 })
}

export function removeLanguage() {
  return Cookies.remove(LanguageKey)
}

export function getLoginStatus() {
  return Cookies.get(LoginStatusKey)
}

export function setLoginStatus(status, expires) {
  return Cookies.set(LoginStatusKey, status, { expires: (expires - 180) / 86400 })
}

export function removeLoginStatus() {
  return Cookies.remove(LoginStatusKey)
}

export function removeMarqueeUid() {
  return Cookies.remove(MarqueeUidKey)
}
