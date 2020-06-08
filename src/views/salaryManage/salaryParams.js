export default {
  // 职员工资列表参数
  tableProps: [
    { label: "职员id", prop: "employeeID", width: "65" },
    { label: "姓名", prop: "name" },
    { label: "基本工资", prop: "basePay" },
    { label: "基本奖金", prop: "baseprize" },
    { label: "效益奖金", prop: "benifitprize" },
    { label: "养老保险", prop: "insurance" },
    { label: "医疗保险", prop: "medicare" },
    { label: "扣发工资", prop: "deprivepay" },
    { label: "扣发奖金", prop: "depriveprize" },
    { label: "考勤扣发", prop: "depriveattend" }
  ],
  salaryFormParams: {
    employeeID: "",
    basePay: "",
    baseprize: "",
    benifitprize: "",
    insurance: "",
    medicare: "",
    deprivepay: "",
    depriveprize: "",
    depriveattend: ""
  },
  salaryFormRules: {
    employeeID: [{ required: true, message: "请填写员工id", trigger: "blur" }],
    basePay: [{ required: true, message: "请填写员工基本工资", trigger: "blur" }],
    baseprize: [
      { required: true, message: "请填写员工基本奖金", trigger: "blur" }
    ],
    benifitprize: [
      { required: true, message: "请填写员工效益奖金", trigger: "blur" }
    ],
    insurance: [
      { required: true, message: "请填写员工养老保险", trigger: "blur" }
    ],
    medicare: [
      { required: true, message: "请填写员工医疗保险", trigger: "blur" }
    ],
    deprivepay: [
      { required: true, message: "请填写员工扣发工资", trigger: "blur" }
    ],
    depriveprize: [
      { required: true, message: "请填写员工扣发奖金", trigger: "blur" }
    ],
    depriveattend: [
      { required: true, message: "请填写员工考勤扣发", trigger: "blur" }
    ]
  }
};
