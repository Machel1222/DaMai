<template>
  <div class="all">
    <div>
      <label>用户名：</label>
      <Input type="text" v-model="username" style="width: 200px"/>
    </div>
    <div>
      <label>密码：</label>
      <Input type="password" v-model="pwd" style="width: 200px"/>
    </div>
    <div>
      <Button type="primary">登录</Button>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'HelloWorld',
    data(){
      return {
        username: "",
        pwd: ""
      }
    }
  }
</script>

<style scoped>
</style>

