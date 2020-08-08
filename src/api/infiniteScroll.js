import { scrollTestRequest as request } from '@/utils/http'

export function feeds({ tags, page }) {
  return request({
    url: '/api/v1/search_by_date',
    method: 'get',
    params: {
      tags: tags,
      page: page
    }
  })
}

