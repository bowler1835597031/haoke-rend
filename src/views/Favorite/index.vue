<template>
  <div class="favorite">
    <NavBar title="收藏列表" />
    <HouseList
      v-for="(item, index) in favorites"
      :key="index"
      :detail="item"
    ></HouseList>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import HouseList from '@/components/HouseList'
import { getLikeHouse } from '@/api'

export default {
  name: 'Favorite',
  components: { NavBar, HouseList },
  data() {
    return {
      favorites: []
    }
  },
  created() {
    this.getLikeHouse()
  },
  methods: {
    async getLikeHouse() {
      this.$toast.loading({
        message: '加载中',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await getLikeHouse()
        console.log(data)
        this.favorites = data.body
        this.$toast.success('加载成功')
      } catch (error) {
        this.$toast.fail('加载失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.favorite {
  padding-top: 1.22667rem;
}
</style>
