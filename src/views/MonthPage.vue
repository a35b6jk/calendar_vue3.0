<template>
  <div class="container">
    <h1>This is an MonthPage</h1>
  </div>
</template>
<script>
  import getData from '@/services'
	import { onMounted } from 'vue'
	export default {
    name: 'MonthPage',
    setup() {
		  onMounted(() => {
			  getData('year-month', '2020-1')
		  })
	  }
	}
</script>