<template>
  <a v-link="{ path: '/hello' }">Go to hello</a>
  <a v-link="{ path: '/add' }">Go to add</a>
</template>

<router-view   transition="fade"   transition-mode="out-in"></router-view>
</template>