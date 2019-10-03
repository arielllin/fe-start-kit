import { accountRequest as request } from '@/utils/http'

export function login(form) {
  return request({
    url: '/login',
    method: 'post',
    data: form
  })
}

export function logout(form) {
  return request({
    url: '/logout',
    method: 'post',
    data: form
  })
}
