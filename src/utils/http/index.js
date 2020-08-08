import request from '@/utils/http/request'

export const accountRequest = req => {
  const serviceApiPrefix = '/mock'

  return request({
    ...req,
    url: `${serviceApiPrefix}${req.url}`
  })
}

export const scrollTestRequest = req => {
  const serviceApiPrefix = '/scroll'

  return request({
    ...req,
    url: `${serviceApiPrefix}${req.url}`
  })
}
