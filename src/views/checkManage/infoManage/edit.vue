<template>
  <div class="staff-edit">
    <div class="top-btn">
      <el-button @click="$router.push('list')" type="primary" size="small"
        >返 回</el-button
      >
      <span>职员考勤信息档案</span>
    </div>
    <el-form
      :model="checkFormParams"
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
            v-model="checkFormParams.employeeID"
          ></el-input>
        </el-form-item>
        <el-form-item label="迟到" prop="late">
          <el-input
            class="normal-input"
            v-model="checkFormParams.late"
          ></el-input>
        </el-form-item>
        <el-form-item label="早退" prop="leaceearly">
          <el-input
            class="normal-input"
            v-model="checkFormParams.leaceearly"
          ></el-input>
        </el-form-item>
      </div>
      <div class="flex-normal">
        <el-form-item label="公休" prop="jobwound">
          <el-input
            class="normal-input"
            v-model="checkFormParams.jobwound"
          ></el-input>
        </el-form-item>
        <el-form-item label="病假" prop="sleave">
          <el-input
            class="normal-input"
            v-model="checkFormParams.sleave"
          ></el-input>
        </el-form-item>
        <el-form-item label="事假" prop="paLeave">
          <el-input
            class="normal-input"
            v-model="checkFormParams.paLeave"
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
import checkParams from "../checkParams";
import checkApi from "@/api/check";
export default {
  data() {
    return {
      attendId: "",
      checkFormParams: { ...checkParams.checkFormParams }, //职员信息参数
      salaryFormRules: checkParams.salaryFormRules //职员信息参数规则
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.attendId = this.$route.query.id;
      // this.findPersonOne();
    }
  },
  methods: {
    // 职员信息
    async findPersonOne() {
      let res = await checkApi.findPersonOne({ attendId: this.attendId });
      if (res) {
        this.checkFormParams = res.data;
      }
    },
    submitForm(form) {
      this.$refs[form].validate(async valid => {
        if (valid) {
          let res = false;
          let params = { ...this.checkFormParams };
          if (this.attendId) {
            res = await checkApi.updateWageInfo(params);
          } else {
            res = await checkApi.createAttendInfo(params);
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
