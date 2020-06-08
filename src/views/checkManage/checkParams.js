export default {
  // 职员考勤列表参数
  tableProps: [
    { label: "职员id", prop: "employeeID", width: "65" },
    { label: "姓名", prop: "name" },
    { label: "迟到", prop: "late" },
    { label: "早退", prop: "leaceearly" },
    { label: "公休", prop: "jobwound" },
    { label: "病假", prop: "sleave" },
    { label: "事假", prop: "paLeave" }
  ],
  salaryFormParams: {
    employeeID: "",
    late: "",
    leaceearly: "",
    jobwound: "",
    sleave: "",
    paLeave: ""
  },
  salaryFormRules: {
    employeeID: [{ required: true, message: "请填写员工id", trigger: "blur" }],
    late: [{ required: true, message: "请填写员工迟到次数", trigger: "blur" }],
    leaceearly: [
      { required: true, message: "请填写员工早退次数", trigger: "blur" }
    ],
    jobwound: [
      { required: true, message: "请填写员工公休次数", trigger: "blur" }
    ],
    sleave: [
      { required: true, message: "请填写员工病假次数", trigger: "blur" }
    ],
    paLeave: [
      { required: true, message: "请填写员工事假次数", trigger: "blur" }
    ]
  }
};
