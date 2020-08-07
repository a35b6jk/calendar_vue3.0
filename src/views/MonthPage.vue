<template>
  <div class="container">
    <h1>This is an MonthPage</h1>
  </div>
</template>
<script>
	import getData from '@/services'
	import { getNowDate } from '@/lib/utils'
	import { onMounted } from 'vue'
	import { useStore } from 'vuex'
	export default {
    name: 'MonthPage',
    setup() {
		const store = useStore(),
		  	  state = store.state;
		onMounted(() => {
			getData(store, 'month', getNowDate('month'));
		})
	  }
	}
</script>