
// 时间戳转出生年月
const formatBirthday = time => {
  if (time) {
    return new Date(time).toLocaleDateString().replace(/\//g, '-')
  } else {
    return '未设置'
  }
}

export default formatBirthday;