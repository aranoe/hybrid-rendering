<template>
  <div>Static Render Id: {{ $route.params.id }}</div>
  <div v-if="!pending && time">{{ time.time }}:{{ time.seconds }}</div>
  <div v-if="!pending && time">{{ time.date }}</div>
  <div v-else>loading...</div>
  <div>User</div>
  <div>{{ user?.name ?? "no name" }}</div>
</template>
<script setup lang="ts">
const { data: time, pending } = await useAsyncData<{
  time: string;
  date: string;
  seconds: string;
}>("time", () =>
  $fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
    {}
  )
);

const { data: user } = await useAsyncData<{
  name: string;
}>("user", () => $fetch("https://apimocha.com/hybrid-rendering/users", {}));
</script>
