<template>
  <div>UNIVERSAL</div>
  <nuxt-link to="/static/fetch">to static</nuxt-link>
  <Fetch />
</template>
<script lang="ts" setup>
useHead({
  title: "universal (ssr)",
});
</script>
