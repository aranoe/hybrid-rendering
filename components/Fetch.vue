<template>
  <div style="font-family: sans-serif">
    <div v-if="!pending && time">
      {{ new Date(time.dateTime).toLocaleString() }}
      <span style="color: black; opacity: 0.7"> (build time)</span>
    </div>
    <div v-else>loading...</div>

    <div>
      {{ initalTime }}
      <span style="color: black; opacity: 0.7"> (page loaded time)</span>
    </div>
    <div>
      {{ currentTime }}
      <span style="color: black; opacity: 0.7"> (current time)</span>
    </div>
    <div>User</div>
    <div>{{ user?.name ?? "no name" }}</div>
  </div>
</template>
<script setup lang="ts">
let interval: any;
const initalTime = new Date().toLocaleString();
const currentTime = ref(initalTime);
const { data: user } = await useAsyncData<{
  name: string;
}>("user", () => $fetch("https://apimocha.com/hybrid-rendering/users", {}));

const { data: time, pending } = await useAsyncData<{
  time: string;
  dateTime: string;
  seconds: string;
}>("time", () =>
  $fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
    {}
  )
);

onMounted(() => {
  interval = setInterval(() => {
    currentTime.value = new Date().toLocaleString();
  }, 500);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>
