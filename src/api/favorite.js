import request from '@/utils/request'
export function getLikeHouse() {
  return request({ url: '/user/favorites' })
}
