<template>
  <div>Prerender Render Id: {{ $route.params.id }}</div>
  <Fetch />
</template>
<script lang="ts" setup>
useHead({
  title: "prerender/id",
});
</script>
