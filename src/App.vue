<script setup lang="ts">
import { UserEntity } from "./model/UserEntity";
import { UserService } from "./model/UserService";
import { useTable, WebTable } from "@airpower/web";

const { response, isLoading } = useTable(UserEntity, UserService);
</script>

<template>
  <div class="table">
    <WebTable v-loading="isLoading" :data="response.list" :clazz="UserEntity">
    </WebTable>
  </div>
</template>

<style scoped></style>
