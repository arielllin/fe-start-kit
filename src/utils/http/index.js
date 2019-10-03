import request from './request'

// API前綴設定

export const accountRequest = req => {
  // const serviceApiPrefix = 'fe-account'
  const serviceApiPrefix = ''
  return request({
    ...req,
    url: `${serviceApiPrefix}${req.url}`
  })
}

// export const financeRequest = req => {
//   const serviceApiPrefix = 'finance'
//   return request({
//     ...req,
//     url: `${serviceApiPrefix}${req.url}`
//   })
// }
