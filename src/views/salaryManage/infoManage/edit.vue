<template>
  <div class="staff-edit">
    <div class="top-btn">
      <el-button @click="$router.push('list')" type="primary" size="small"
        >返 回</el-button
      >
      <span>职员工资信息档案</span>
    </div>
    <el-form
      :model="salaryFormParams"
      :rules="salaryFormRules"
      ref="staffForm"
      size="small"
      label-width="90px"
      class="staff-form"
    >
      <div class="flex-normal">
        <el-form-item label="职员id" prop="employeeID">
          <el-input
            class="normal-input"
            v-model="salaryFormParams.employeeID"
          ></el-input>
        </el-form-item>
      </div>
      <div class="flex-normal">
        <el-form-item label="姓名" prop="name">
          <el-input
            disabled
            class="normal-input"
            v-model="salaryFormParams.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="基本工资" prop="basePay">
          <el-input
            class="normal-input"
            v-model="salaryFormParams.basePay"
          ></el-input>
        </el-form-item>
        <el-form-item label="基本奖金" prop="baseprize">
          <el-input
            class="normal-input"
            v-model="salaryFormParams.baseprize"
          ></el-input>
        </el-form-item>
      </div>
      <div class="flex-normal">
        <el-form-item label="效益奖金" prop="benifitprize">
          <el-input
            class="normal-input"
            v-model="salaryFormParams.benifitprize"
          ></el-input>
        </el-form-item>
        <el-form-item label="养老保险" prop="insurance">
          <el-input
            class="normal-input"
            v-model="salaryFormParams.insurance"
          ></el-input>
        </el-form-item>
        <el-form-item label="医疗保险" prop="medicare">
          <el-input
            class="normal-input"
            v-model="salaryFormParams.medicare"
          ></el-input>
        </el-form-item>
      </div>
      <div class="flex-normal">
        <el-form-item label="扣发工资" prop="deprivepay">
          <el-input
            class="normal-input"
            v-model="salaryFormParams.deprivepay"
          ></el-input>
        </el-form-item>
        <el-form-item label="扣发奖金" prop="depriveprize">
          <el-input
            class="normal-input"
            v-model="salaryFormParams.depriveprize"
          ></el-input>
        </el-form-item>
        <el-form-item label="考勤扣发" prop="depriveattend">
          <el-input
            class="normal-input"
            v-model="salaryFormParams.depriveattend"
          ></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('staffForm')"
          >保 存</el-button
        >
        <el-button @click="resetForm('staffForm')">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import salaryParams from "../salaryParams";
import salaryApi from "@/api/salary";
export default {
  data() {
    return {
      wageId: "",
      salaryFormParams: { ...salaryParams.salaryFormParams }, //职员信息参数
      salaryFormRules: salaryParams.salaryFormRules //职员信息参数规则
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.wageId = this.$route.query.id;
      this.findWageOne();
    }
  },
  methods: {
    // 职员信息
    async findWageOne() {
      let res = await salaryApi.findWageOne({ wageId: this.wageId });
      if (res) {
        this.salaryFormParams = res.data;
      }
    },
    submitForm(form) {
      this.$refs[form].validate(async valid => {
        if (valid) {
          let res = false;
          let params = { ...this.salaryFormParams };
          if (this.wageId) {
            res = await salaryApi.updateWageInfo(params);
          } else {
            res = await salaryApi.createWage(params);
          }
          if (res) {
            this.$message({
              type: "success",
              message: "操作成功!"
            });
            this.$router.push("list");
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style.scss";
</style>
