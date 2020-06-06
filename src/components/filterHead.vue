<template>
  <div class="common-filters">
    <div class="item" v-for="(item, ind) in filterList" :key="ind">
      <span>{{ item.label }}：</span>
      <el-select
        v-if="item.type === 1"
        @change="changeSelect(item)"
        size="small"
        v-model="item.value"
        :placeholder="`请选择${item.label}`"
      >
        <el-option
          v-for="select in item.options"
          :key="select.value"
          :label="select.label"
          :value="select.value"
        ></el-option>
      </el-select>
      <el-input
        v-if="item.type === 2"
        @input="changeInput(item)"
        class="limit-input"
        size="small"
        v-model="item.value"
        :placeholder="`请输入${item.label}`"
      ></el-input>
    </div>
    <div class="btns">
      <el-button type="primary" size="small" @click="submitSearch">查 询</el-button>
      <el-button size="small" @click="resetFilter">重 置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filterList: {
      type: Array,
      default: () => []
    },
    //是否重置页面其他筛选项
    resetAllFilters: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 筛选项绑定值
      filterObj: {}
    };
  },
  methods: {
    submitSearch() {
      this.$emit("searchFilter", this.filterObj);
    },
    resetFilter() {
      // 重置
      this.filterList.map(val => {
        val.value = "";
      });
      for (let item in this.filterObj) {
        this.filterObj[item] = "";
      }
      // 是否重置页面其他筛选项
      this.$emit("searchFilter", this.filterObj, this.resetAllFilters);
    },
    changeSelect(val) {
      this.filterObj[val.key] = val.value;
    },
    changeInput(val) {
      this.filterObj[val.key] = val.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.common-filters {
  font-size: 14px;
  background: #eef1f6;
  color: #666;
  padding: 10px;
  padding-bottom: 0;
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  .item {
    margin: 0 30px 10px 0;
    .limit-input {
      width: 180px;
    }
  }
  .btns {
    margin-bottom: 10px;
  }
}
</style>
