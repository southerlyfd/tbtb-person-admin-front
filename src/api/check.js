// 考勤信息
import request from '@/utils/request'

export default {
  // 职员考勤信息列表
  findAttendInfoLst(params) {
    return request({
      url: 'oa/attend/findAttendInfoLst',
      method: 'post',
      params
    })
  },
  // 删除职员考勤信息
  deleteAttendInfo(params) {
    return request({
      url: 'oa/attend/deleteAttendInfo',
      method: 'post',
      params
    })
  },
  // 新增职员考勤信息
  createAttendInfo(params) {
    return request({
      url: 'oa/attend/createAttendInfo',
      method: 'post',
      params
    })
  },
}
