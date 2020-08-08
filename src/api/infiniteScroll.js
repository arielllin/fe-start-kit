import { scrollTestRequest as request } from '@/utils/http'

export function feeds({ page }) {
  return request({
    url: '/api/v1/search_by_date?tags=story',
    method: 'get',
    params: { page: page }
  })
}

