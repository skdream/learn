<template>
  <div>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>



<script>
import Display from '../components/Display'
import Increment from '../components/Increment'
import store from '../vuex/store'

export default {
  components: {
    Display: Display,
    Increment: Increment
  },
  store:store 
}
</script>

<style>

</style>
