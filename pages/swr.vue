<template>
  <div>SWR test change</div>
  <div v-if="!pending && time">{{ time.time }}:{{ time.seconds }}</div>
  <div v-if="!pending && time">{{ time.date }}</div>
  <div v-else>loading...</div>
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
</script>
