<template>
  <div id="app">
    <div v-if="$auth.ready()">
      <router-view></router-view>
    </div>

    <div v-if="!$auth.ready()">
      Loading ...
    </div>
  </div>
</template>

<script>
export default {
  name: `App`
}
</script>

<style>
</style>
