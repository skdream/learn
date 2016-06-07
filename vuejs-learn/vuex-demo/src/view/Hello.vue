<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ counterRoute }}
  </div>
</template>

<script>

import { getRoute } from '../vuex/getters'


import store from '../vuex/store'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
      vuex: {
      getters: {
        counterRoute: getRoute
      }
    },
  store:store
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
