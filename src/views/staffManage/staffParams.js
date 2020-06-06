export default {
  // 职员信息列表参数
  tableProps: [
    { label: '职员id', prop: 'employeeID',width:'65' },
    { label: '姓名', prop: 'name' },
    // { label: '性别', prop: 'sex' },
    { label: '出生年月', prop: 'date', custom: true, minWidth: '90' },
    // { label: '籍贯', prop: 'city' },
    // { label: '民族', prop: 'nation' },
    { label: '政治面貌', prop: 'polity' },
    { label: '文化程度', prop: 'culture' },
    // { label: '婚姻状况', prop: 'marriage' },
    { label: '毕业院校', prop: 'graduate', minWidth: '100' },
    { label: '工种', prop: 'wtype' },
    { label: '身份证号', prop: 'idcard', minWidth: '160' },
    { label: '部门名称', prop: 'depart', minWidth: '100' },
    { label: '手机', prop: 'mobile', minWidth: '110' },
    { label: '电子邮件', prop: 'email', minWidth: '120' },
  ],
  // 职员信息参数
  staffFormParams: {
    // employeeID: '',  //职员id
    name: '',  //员工姓名
    sex: '',  //性别
    date: '',  //出生年月
    city: '',  //籍贯
    nation: '',  //民族
    polity: '',  //政治面貌
    culture: '',  //文化程度
    marriage: '',  //婚姻状况
    graduate: '',  //毕业院校
    spec: '',  //所学专业
    speci: '',  //个人专长
    wtype: '',  //工种
    duty: '',  //职务
    depart: '',  //部门名称
    idcard: '',  //身份证号
    address: '',  //家庭住址
    postcode: '',  //邮编
    homePhone: '',  //家庭电话
    mobile: '',  //手机
    email: '',  //电子邮件
    photo: '',  //照片
  },
  // 职员信息参数规则
  staffFormRules: {
    name: [{ required: true, message: '请填写员工姓名', trigger: 'blur' }],
    sex: [{ required: true, message: '请选择性别', trigger: 'change' }],
    date: [{ type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }],
    city: [{ required: true, message: '请填写籍贯', trigger: 'change' }],
    nation: [{ required: true, message: '请填写民族', trigger: 'change' }],
    polity: [{ required: true, message: '请填写政治面貌', trigger: 'change' }],
    culture: [{ required: true, message: '请填写文化程度', trigger: 'change' }],
    marriage: [{ required: true, message: '请填写婚姻状况', trigger: 'change' }],
    graduate: [{ required: true, message: '请填写毕业院校', trigger: 'change' }],
    spec: [{ required: true, message: '请填写所学专业', trigger: 'change' }],
    speci: [{ required: true, message: '请填写个人专长', trigger: 'change' }],
    wtype: [{ required: true, message: '请填写工种', trigger: 'change' }],
    duty: [{ required: true, message: '请填写职务', trigger: 'change' }],
    depart: [{ required: true, message: '请填写部门名称', trigger: 'change' }],
    idcard: [{ required: true, message: '请填写身份证号', trigger: 'change' }],
    // address: [{ required: true, message: '请填写家庭住址', trigger: 'change' }],
    // postcode: [{ required: true, message: '请填写邮编', trigger: 'change' }],
    // homePhone: [{ required: true, message: '请填写家庭电话', trigger: 'change' }],
    mobile: [{ required: true, message: '请填写手机号', trigger: 'change' }],
    email: [{ required: true, message: '请填写邮箱', trigger: 'change' }],
    phote: [{ required: true, message: '请填写照片', trigger: 'change' }],
  },
  sexList: [
    {
      label: '男',
      value: '男'
    },
    {
      label: '女',
      value: '女'
    },
    {
      label: '保密',
      value: '保密'
    },
  ]
}