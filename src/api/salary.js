// 工资信息
import request from '@/utils/request'

export default {
  // 职员工资信息列表
  findWageInfoLst(params) {
    return request({
      url: 'oa/wage/findWageInfoLst',
      method: 'post',
      params
    })
  },
  // 删除职员工资信息
  deleteWageInfo(params) {
    return request({
      url: 'oa/wage/deleteWageInfo',
      method: 'post',
      params
    })
  },
  // 新增员工工资
  createWage(params) {
    return request({
      url: 'oa/wage/createWage',
      method: 'post',
      params
    })
  },
  // 新增员工工资
  updateWageInfo(params) {
    return request({
      url: 'oa/wage/updateWageInfo',
      method: 'post',
      params
    })
  },
  // 查询职员信息
  findWageOne(params) {
    return request({
      url: 'oa/wage/findWageOne',
      method: 'post',
      params
    })
  },
}
