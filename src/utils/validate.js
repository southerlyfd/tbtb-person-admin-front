/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  return true
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
}

// 搜索筛选select数据
export function formatSearchSelect(data, lebel, key, optLabel, optVal) {
  // data 选项array
  // label 选框表示文字
  // key  选项绑定值
  // optLabel  选项label
  // optVal   选项value
  let selectItem = {
    // 筛选-选择器默认值
    label: '',
    value: '',
    type: 1, // 1.select 2.input
    options: []
  };
  let defaultOptions = {
    // 筛选-选择器默认值 options
    value: '',
    label: ''
  };
  // 拷贝选项
  let item = JSON.parse(JSON.stringify(selectItem));
  let opt = JSON.parse(JSON.stringify(defaultOptions));
  // 选框赋值
  item.label = lebel;
  item.key = key;
  // 选项赋值
  for (let i = 0; i < data.length; i++) {
    opt.value = data[i][optVal];
    opt.label = data[i][optLabel];
    item.options.push({ ...opt });
  }
  return item;
}

// 搜索筛选input数据
export function formatSearchInput(label, key) {
  // label 输入框表示文字
  // key 输入框绑定字段
  // val  输入框绑定值
  let inputItem = {
    label: '',
    key: '',
    type: 2, // 1.select 2.input
    value: ''
  };
  // 拷贝选项
  let item = Object.assign({}, inputItem);
  // 输入选项赋值
  item.label = label;
  item.key = key;
  return item;
}