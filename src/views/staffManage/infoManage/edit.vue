<template>
  <div class="staff-edit">
    <div class="top-btn">
      <el-button @click="$router.push('list')" type="primary" size="small">返 回</el-button>
      <span>职员信息档案</span>
    </div>
    <el-form
      :model="staffFormParams"
      :rules="staffFormRules"
      ref="staffForm"
      size="small"
      label-width="90px"
      class="staff-form"
    >
      <div class="main-form">
        <div class="left">
          <div class="item">
            <el-form-item label="员工姓名" prop="name">
              <el-input class="normal-input" v-model="staffFormParams.name"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-select class="normal-input" v-model="staffFormParams.sex" placeholder="请选择性别">
                <el-option
                  v-for="(item,ind) in sexList"
                  :key="ind"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="出生年月" prop="date">
              <el-date-picker
                class="normal-input"
                v-model="staffFormParams.date"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </el-form-item>
          </div>
          <div class="item">
            <el-form-item label="籍贯" prop="city">
              <el-input class="normal-input" v-model="staffFormParams.city"></el-input>
            </el-form-item>
            <el-form-item label="民族" prop="nation">
              <el-input class="normal-input" v-model="staffFormParams.nation"></el-input>
            </el-form-item>
            <el-form-item label="政治面貌" prop="polity">
              <el-input class="normal-input" v-model="staffFormParams.polity"></el-input>
            </el-form-item>
          </div>
          <div class="item">
            <el-form-item label="文化程度" prop="culture">
              <el-input class="normal-input" v-model="staffFormParams.culture"></el-input>
            </el-form-item>
            <el-form-item label="婚姻状况" prop="marriage">
              <el-input class="normal-input" v-model="staffFormParams.marriage"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="毕业院校" prop="graduate">
            <el-input v-model="staffFormParams.graduate"></el-input>
          </el-form-item>
          <el-form-item label="所学专业" prop="spec">
            <el-input v-model="staffFormParams.spec"></el-input>
          </el-form-item>
          <el-form-item label="个人专长" prop="speci">
            <el-input v-model="staffFormParams.speci"></el-input>
          </el-form-item>
        </div>
        <div class="right">
          <img class="full-img" :src="staffFormParams.photo" alt />
        </div>
      </div>
      <div class="form-item">
        <el-form-item label="工种" prop="wtype">
          <el-input class="normal-input" v-model="staffFormParams.wtype"></el-input>
        </el-form-item>
        <el-form-item label="职务" prop="duty">
          <el-input class="normal-input" v-model="staffFormParams.duty"></el-input>
        </el-form-item>
        <el-form-item label="部门名称" prop="depart">
          <el-input class="normal-input" v-model="staffFormParams.depart"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idcard">
          <el-input v-model="staffFormParams.idcard"></el-input>
        </el-form-item>
      </div>
      <div class="form-item">
        <el-form-item label="手机" prop="mobile">
          <el-input class="normal-input" v-model="staffFormParams.mobile"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input class="normal-input" v-model="staffFormParams.email"></el-input>
        </el-form-item>
        <el-form-item label="住宅电话" prop="homePhone">
          <el-input class="normal-input" v-model="staffFormParams.homePhone"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码" prop="postcode">
          <el-input v-model="staffFormParams.postcode"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="家庭住址" prop="address">
        <el-input v-model="staffFormParams.address"></el-input>
      </el-form-item>
      <el-form-item label="照片" prop="photo">
        <el-input v-model="staffFormParams.photo"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('staffForm')">保 存</el-button>
        <el-button @click="resetForm('staffForm')">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import staffParams from "../staffParams";
import staffApi from "@/api/staff";
export default {
  data() {
    return {
      employeeID: "",
      sexList: staffParams.sexList, //性别
      staffFormParams: { ...staffParams.staffFormParams }, //职员信息参数
      staffFormRules: staffParams.staffFormRules //职员信息参数规则
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.employeeID = this.$route.query.id;
      this.findPersonOne();
    }
  },
  methods: {
    // 职员信息
    async findPersonOne() {
      let res = await staffApi.findPersonOne({ employeeID: this.employeeID });
      if (res) {
        this.staffFormParams = res.data;
      }
    },
    submitForm(form) {
      this.$refs[form].validate(async valid => {
        if (valid) {
          let res = false;
          let params = { ...this.staffFormParams };
          params.date = params.date.getTime();
          if (this.employeeID) {
            res = await staffApi.updatePersonInfo(params);
          } else {
            res = await staffApi.createPersonInfo(params);
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