<template>
  <div>Static Render Id: {{ $route.params.id }}</div>
  <Fetch />
</template>
<script lang="ts" setup>
useHead({
  title: "static/id",
});
</script>
