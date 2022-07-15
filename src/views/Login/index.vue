<template>
  <div>
    <van-nav-bar
      class="nav-bar"
      title="账号登录"
      left-arrow
      @click-left="backToPrePage"
    />
    <van-form @submit="login">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="usernameRules"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="codeRules"
      />
      <div style="margin: 16px">
        <van-button class="btn" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="toRegister"><a href="#/registe">还没有账号，去注册~</a></div>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { usernameRules, codeRules } from './rules'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      usernameRules,
      codeRules
    }
  },
  methods: {
    backToPrePage() {
      this.$router.back()
    },
    async login() {
      this.$toast.loading({
        message: '正在火急火燎加载中',
        forbidClick: true
      })
      try {
        const res = await login(this.username, this.password)
        console.log(res.data.body)
        this.$store.commit('setUser', res.data.body)
        this.$router.push('/home/profile')
        this.$toast.success('登录成功')
      } catch (error) {
        this.$toast.fail('登录失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
.nav-bar {
  background-color: #21b97a;
  :deep(.van-icon) {
    color: #fff;
  }

  :deep(.van-nav-bar__title) {
    color: #fff;
  }
}
.btn {
  background-color: #21b97a;
}
.toRegister {
  margin-top: 30px;
  text-align: center;
  a {
    font-size: 14px;
    color: #666;
  }
}
</style>
