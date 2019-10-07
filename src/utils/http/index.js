import request from '@/utils/http/request'

export const accountRequest = req => {
  const serviceApiPrefix = ''

  return request({
    ...req,
    url: `${serviceApiPrefix}${req.url}`
  })
}
