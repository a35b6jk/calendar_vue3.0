<template>
  	<div class="container">
	  <h1>This is an DayPage</h1>
	</div>
</template>

<script>
	import getData from '@/services'
	import { onMounted } from 'vue'
	export default {
	  name: 'DayPage',
	  setup() {
		  onMounted(() => {
			  getData('day', '2020-1-1')
		  })
	  }
	}
</script>
