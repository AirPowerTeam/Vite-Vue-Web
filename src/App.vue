<script setup lang="ts">
import {UserEntity} from "./model/UserEntity";
import {UserService} from "./model/UserService";
import {TableController, WebTable} from "@airpower/web";

// const { response, isLoading } = useTable(UserEntity, UserService);
const {response, isLoading} = new TableController(UserService)
</script>

<template>
  <div class="table">
    <WebTable v-loading="isLoading" :data="response.list" :clazz="UserEntity"/>
  </div>
</template>

<style scoped></style>
