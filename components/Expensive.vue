<template>
  <div style="display: flex; gap: 12px" v-for="user in users" :key="user.id">
    <div v-for="[key, value] in Object.entries(user)" :key="key">
      {{ value }}
    </div>
  </div>
</template>
<script setup lang="ts">
//import { faker } from "@faker-js/faker";

// function createRandomUser() {
//   return {
//     id: faker.datatype.uuid(),
//     birthday: faker.date.birthdate(),
//     email: faker.internet.email(),
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     sex: faker.name.sexType(),
//     subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
//   };
// }
function createRandomUser() {
  return {
    id: "23423-235-2-235-23-2" + Math.random(),
    birthday: "15.05.23",
    email: "hans@peter.de",
    firstName: "hans",
    lastName: "peter",
    sex: "male",
    subscriptionTier: "free",
  };
}
const users = Array.from({ length: 50000 }).map(() => createRandomUser());
</script>
