import request from "@/utils/request";

export function login(data) {
  return request({
    url: "oa/userInfo/login",
    method: "post",
    data
  });
}

export function getInfo(params) {
  return request({
    url: "oa/userInfo/findPersonInfoByToken",
    method: "post",
    params
  });
}

export function logout() {
  return request({
    url: "/vue-admin-template/user/logout",
    method: "post"
  });
}
