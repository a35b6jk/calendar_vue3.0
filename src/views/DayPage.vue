<template>
  	<div class="container">
	  <card 
	  	:data="dayData" /> 
	  <list 
	  	:data="dayData"/>
	</div>
</template>

<script>
	import getData from '@/services'
	import Card from '@/components/dayPage/Card'
	import List from '@/components/dayPage/List'
	import { getNowDate } from '@/lib/utils'
	import { onMounted, computed } from 'vue'
	import { useStore } from 'vuex'
	export default {
	  name: 'DayPage',
	  components: {
		  Card,
		  List
	  },
	  setup() {
		  const store = useStore(),
		  		state = store.state;
		  onMounted(() => {
			  getData(store, 'day', getNowDate('day'));
		  })
		  //console.log('day1', computed(() => state.dayData).value)
		  return  computed(() => state).value
		  
	  }
	}
</script>
