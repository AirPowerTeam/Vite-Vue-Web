<script setup lang="ts">
import { ref } from "vue";
import { UserEntity } from "./model/UserEntity";
import { UserService } from "./model/UserService";
import { QueryPageRequest, QueryPageResponse } from "@airpower/web";

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
  <div class="table">
    {{ response }}
  </div>
</template>

<style scoped></style>
