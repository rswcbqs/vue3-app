<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>  
import { reactive, onMounted, computed } from 'vue'
import Header from '@/components/Header/index.vue'
import TabBar from '@/components/TabBar'

export default {
  setup () {

  }
}

</script>
<style>
</style>
