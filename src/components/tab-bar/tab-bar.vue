<template>
  <div class="tab-bar">

    <van-tabbar v-model="currentIndex">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" />
            <img v-else :src="getAssetURL(item.imageAction)" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
    <!-- <div class="tab-bar-item" 
         :class="{ active: currentIndex === index }"
         @click="itemClick(index, item)">
    <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
    <img v-else :src="getAssetURL(item.imageAction)" alt="" />
    <span class="text">{{item.text}}</span> -->
    <!-- </div> -->

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import tabbarData from "@/assets/data/tabbar.js"

import { getAssetURL } from '@/utils/load_assets'


const currentIndex = ref(0)
const router = useRouter()
const itemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
  console.log(item)
}
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }
  }

  .text {
    font-size: 12px;
  }

  img {
    width: 36px;
  }
}
</style>