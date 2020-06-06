// 职员信息
import request from '@/utils/request'

export default {
  // 职员信息列表
  findPersonInfoLst(params) {
    return request({
      url: 'oa/userInfo/findPersonInfoLst',
      method: 'post',
      params
    })
  },
  // 添加职员信息
  createPersonInfo(params) {
    return request({
      url: 'oa/userInfo/createPersonInfo',
      method: 'post',
      params
    })
  },
  // 查询职员信息
  findPersonOne(params) {
    return request({
      url: 'oa/userInfo/findPersonOne',
      method: 'post',
      params
    })
  },
  // 修改职员信息
  updatePersonInfo(params) {
    return request({
      url: 'oa/userInfo/updatePersonInfo',
      method: 'post',
      params
    })
  },
  // 删除职员
  deletePersonInfo(params) {
    return request({
      url: 'oa/userInfo/deletePersonInfo',
      method: 'post',
      params
    })
  },
}
