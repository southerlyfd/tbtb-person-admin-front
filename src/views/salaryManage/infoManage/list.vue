<template>
  <div class="staff">
    <filter-head
      :filterList="filterList"
      @searchFilter="searchFilter"
    ></filter-head>
    <div class="top-btn">
      <el-button
        @click="$router.push('edit')"
        type="primary"
        size="small"
        icon="el-icon-plus"
        >新增工资信息</el-button
      >
    </div>
    <rty-el-table
      :loading="loadTable"
      :tableData="tableList"
      :tableProps="tableProps"
    >
      <template slot="date" slot-scope="scope">
        <span>{{ scope.row.date | formatBirthday }}</span>
      </template>
      <el-table-column slot="handle" align="center" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" @click="editStaff(scope.row.wageId)"
            >编辑</el-button
          >
          <el-button type="text" @click="deleteStaff(scope.row.wageId)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </rty-el-table>
    <div class="pagination">
      <el-pagination
        background
        @size-change="changeSize"
        @current-change="changePage"
        :current-page.sync="salaryListParams.currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="salaryListParams.onePageCount"
        layout="total, sizes, prev, pager, next"
        :total="totalNum"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import salaryApi from "@/api/salary";
import salaryParams from "../salaryParams";
export default {
  data() {
    return {
      loadTable: false,
      totalNum: 0,
      //查询参数
      salaryListParams: {
        currentPage: 1,
        onePageCount: 10
      },
      filterList: [], //筛选列表
      filterParams: {}, //筛选参数
      tableList: [], //职员列表
      tableProps: salaryParams.tableProps //职员列表参数
    };
  },
  created() {
    this.filterList.push(this.formatSearchInput("职员ID", "employeeID"));
    this.filterList.push(this.formatSearchInput("职员姓名", "name"));
  },
  mounted() {
    this.findWageInfoLst();
  },
  methods: {
    // 职员列表
    async findWageInfoLst() {
      this.loadTable = true;
      let params = { ...this.salaryListParams, ...this.filterParams };
      let res = await salaryApi.findWageInfoLst(params);
      this.loadTable = false;
      if (res) {
        this.tableList = res.data.list;
        this.totalNum = res.data.countRecord;
      }
    },
    // 搜索、重置
    searchFilter(params) {
      this.filterParams = params;
      this.findWageInfoLst();
    },
    // 删除职员
    deleteStaff(id) {
      this.$confirm("此操作将删除该职员工资信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await salaryApi.deleteWageInfo({ wageId: id });
          if (res) {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.findWageInfoLst();
          }
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    // 编辑职员信息
    editStaff(id) {
      this.$router.push({
        path: "edit",
        query: { id }
      });
    },
    changePage(val) {
      this.staffListParams.currentPage = val;
      this.findWageInfoLst();
    },
    changeSize(val) {
      this.staffListParams.onePageCount = val;
      this.findWageInfoLst();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style.scss";
</style>
