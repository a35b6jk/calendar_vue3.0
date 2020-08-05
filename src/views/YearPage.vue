<template>
  <div class="container">
    <h1>This is an YearPage</h1>
  </div>
</template>
<script>
  import getData from '@/services'
	import { onMounted } from 'vue'
	export default {
    name: 'YearPage',
    setup() {
		  onMounted(() => {
			  getData('year', '2020')
		  })
	  }
	}
</script>