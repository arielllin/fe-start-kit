import { scrollTestRequest as request } from '@/utils/http'

export function feeds({
  tags,
  page,
  startDate = new Date(),
  endDate = new Date()
}) {
  // TODO 假裝startDate,endDate有當參數代出去了
  console.log('----API-----')
  console.log('startDate:', startDate)
  console.log('endDate:', endDate)
  return request({
    url: '/api/v1/search_by_date',
    method: 'get',
    params: {
      tags: tags,
      page: page
    }
  })
}

