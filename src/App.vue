<script setup lang="ts">
import { UserEntity } from "./model/UserEntity";
import { UserService } from "./model/UserService";
import { useTable, WebTable } from "@airpower/web";


const { response} = useTable(UserEntity,UserService)
</script>

<template>
  <div class="table">
    <WebTable :data="response.list" :clazz="UserEntity"></WebTable>
  </div>
</template>

<style scoped></style>
