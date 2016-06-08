<template>
	 <p>当前路径：{{ routePath }}</p>
</template>

<script>
	
import { getRoute } from '../vuex/getters'
import store from '../vuex/store'

export default {
    vuex: {
      getters: {
        routePath: getRoute
      }
    },
	store:store
}

</script>