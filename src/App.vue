<template>
  <div id="app">
    <my-header
      :headerTitle="headerTitle" />
      <!-- <my-header>{{ headerTitle }}</my-header> -->
    <search 
      :placeholder="placeholder"
      :maxlength="maxlength"/>
    <router-view />
    <tab />
  </div>
</template>
<script>
  import MyHeader from '@/components/header'
  import Tab from '@/components/tab'
  import Search from '@/components/search'

  import { computed, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  export default {
    name: 'App',
    components: {
      MyHeader,
      Tab,
      Search
    },
    setup(){
      const store = useStore(),
            state = store.state,
            router = useRouter();
      router.push('/');
      store.commit('changePlaceHolder', 'day');
      watch(() => {
        return router.currentRoute.value.name;
      }, (value) => {
        
        store.commit('changeHeaderTitle', value);
        store.commit('changePlaceHolder', value);
        store.commit('changeMaxlength', value);
        console.log(computed(() => state).value)
      })
      return computed(() => state).value
    }
  }
</script>
<style lang="scss">

</style>
