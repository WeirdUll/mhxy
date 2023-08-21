<template>
    <div id="log">
        
        <el-button @click='rrr'>任务管理</el-button>
    </div>
</template>
  
<script>
import { fetchList } from '@/api/liyulong'
  export default {
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
      rrr() {
        alert('1')
        fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.loading = false
      })
      }
    }
  }
</script>
  
<style lang="scss" scoped>
</style>
  