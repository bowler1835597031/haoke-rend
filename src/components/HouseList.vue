<template>
  <van-card
    :price="detail.price"
    :desc="detail.desc"
    :title="detail.title"
    :thumb="imgUrl + detail.houseImg"
  >
    <template #tags>
      <van-tag plain type="danger">近地铁</van-tag>
    </template>
  </van-card>
</template>

<script>
export default {
  props: {
    detail: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      imgUrl: 'http://liufusong.top:8080'
    }
  }
}
</script>

<style></style>
