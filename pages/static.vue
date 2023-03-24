<template>
  <div>Static test change</div>
  <div v-if="!pending && user">{{ user.first_name }}</div>
  <div v-else>loading...</div>
</template>
<script setup lang="ts">
const { data: user, pending } = await useAsyncData<{
  first_name: string;
}>("posts", () =>
  $fetch("https://random-data-api.com/api/v2/users?size=1", {})
);
</script>
