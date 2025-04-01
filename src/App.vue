<script setup lang="ts">
import { ref } from "vue";
import { UserEntity } from "./model/UserEntity";
import { UserService } from "./model/UserService";
import { QueryPageRequest, QueryPageResponse,  } from "@airpower/web";

const response = ref(new QueryPageResponse<UserEntity>());

async function init() {
  response.value = await UserService.create().getPage(
    new QueryPageRequest(UserEntity)
  );
  console.log(response.value);
}
init();
</script>

<template>
  <div>
    {{ response }}
    <div class="list">
      <div class="item" v-for="user in response.list" :key="user.id">
        {{ user.nickname }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
