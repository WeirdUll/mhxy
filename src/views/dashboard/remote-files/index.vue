<template>
  <div class="remote-files">
    <div class="tips">
      当前设备号:{{ deviceId }},帐号数量:{{deviceAccountListNum}}
    </div>
    <div class="text">
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 10 }"
        placeholder="请输入文件执行内容"
        v-model="textarea"
      >
      </el-input>
    </div>
    <div class="buttons">
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
import { getDeviceAccountList,updateDeviceAccountList } from "@/api/device";
export default {
  name: "DashboardAdmin",
  components: {},
  data() {
    return {
      deviceId: "",
      textarea: "",
      id: '',
      deviceAccountListNum:''
    };
  },
  watch: {},
  mounted() {
    this.id = this.$route.query.data;
    this.deviceId = this.$route.query.deviceId;
    this.deviceAccountList()
  },
  methods: {
    deviceAccountList() {
      getDeviceAccountList({deviceId:this.id}).then((response) => {
        this.textarea = response.data.deviceAccountList.join("\n")
        this.deviceAccountListNum = response.data.deviceAccountList.length
      });
    },
    save() {
      let lines=this.textarea.split(/\n/);
      console.log(this.textarea)
      console.log(lines)
      updateDeviceAccountList({deviceId:this.id,accountInfoList:lines}).then((response) => {
        this.$message({
          message: '保存成功',
          type: 'success'
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.remote-files {
  .tips {
    padding: 10px 0;
    margin: 0 15px;
    margin-top: 20px;
    // background-color: rgba(245, 108, 108, 0.1);
    color: #f56c6c;
    // border: 1px solid rgba(245, 108, 108, 0.2);
    // border-radius: 4px;
  }
  .text {
    margin: 0 15px 15px 15px;
  }
  .buttons {
    margin: 0 15px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
// .el-textarea {
//   margin: 10px 0 10px 15px;
// }
</style>
