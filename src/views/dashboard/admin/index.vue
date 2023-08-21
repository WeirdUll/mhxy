<template>
  <div class="dashboard-editor-container">
    <div class="tab">
      <el-button type="primary" @click.native.prevent="bindDevice"
        >绑定设备</el-button
      >
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="deviceId" label="设备号"> </el-table-column>
      <el-table-column prop="deviceName" label="设备名称"> </el-table-column>
      <el-table-column prop="taskTips" label="状态"> </el-table-column>
      <el-table-column prop="lastChannelTime" label="时间"> </el-table-column>
      <el-table-column prop="ip" label="IP"> </el-table-column>
      <el-table-column prop="nickName" label="别名">
        <template slot-scope="scope">
          <div class="nickName">
            <div
              v-if="!(isEditNickName && scope.row.deviceId == deviceId)"
              class="test"
            >
              {{ scope.row.nickName }}
            </div>
            <div
              v-if="isEditNickName && scope.row.deviceId == deviceId"
              class="input-nickName"
            >
              <el-input
                v-model="input"
                placeholder="请输入内容"
                @blur="renewNickName(scope.row.id)"
              ></el-input>
            </div>
            <div class="nickName-button">
              <i
                class="el-icon-edit"
                @click="modifyNickName(scope.row.nickName, scope.row.deviceId)"
              ></i>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="总数(已完成)">
        <template slot-scope="scope">
          {{ scope.row.accountSize }}({{ scope.row.todayFinishSize }})
        </template>
      </el-table-column>
      <!-- <el-table-column prop="address" label="版本"> </el-table-column> -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="
              editingRemoteFiles(scope.row.id, scope.row.deviceId)
            "
            type="text"
            size="small"
          >
            编辑远程文件
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="绑定设备"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-input
        v-model="deviceNum"
        placeholder="请输入设备脚本端提供的code码"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="bondedDevices">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getDeviceList, updateDeviceNickName, bindDevice } from "@/api/device";
export default {
  name: "DashboardAdmin",
  components: {},
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      deviceNum: "",
      input: "",
      isEditNickName: false,
      deviceId: "",
    };
  },
  watch: {
    dialogVisible: {
      handler: function (newval, oldval) {
        if (!newval) {
          this.deviceNum = "";
        }
      },
    },
  },
  mounted() {
    this.deviceList();
  },
  methods: {
    bondedDevices() {
      bindDevice({deviceCode:this.deviceNum}).then((response) => {
        this.dialogVisible = false;
        this.$message({
          message: '绑定成功',
          type: 'success'
        });
        this.deviceList();
      });
    },
    editingRemoteFiles(id, deviceId) {
      console.log(id);
      this.$router.push({
        path: "/dashboard/remote-files",
        query: { data: id, deviceId: deviceId },
      });
    },
    //获取设备列表
    deviceList() {
      getDeviceList().then((response) => {
        this.tableData = response.data;
      });
    },
    bindDevice() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.dialogVisible = false;
    },
    modifyNickName(val, deviceId) {
      this.isEditNickName = true;
      this.deviceId = deviceId;
      this.input = val;
    },
    renewNickName(id) {
      updateDeviceNickName({ deviceId: id, nickName: this.input }).then(
        (response) => {
          this.isEditNickName = false;
          this.deviceList();
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  padding: 20px 10px;
  display: flex;
  justify-content: flex-end;
}
.el-table {
  padding: 0 10px;
  ::v-deep .el-table__body-wrapper {
    max-height: calc(100vh - 170px);
    overflow-y: auto;
  }
}
.nickName {
  display: flex;
  .nickName-button {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
