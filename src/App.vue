<script setup lang="ts">
import {Languages} from "./config/Languages";
import {TableController, WebTable} from '@airpower/web'
import {UserEntity} from "./model/UserEntity";
import {UserService} from "./model/UserService";

const {response, isLoading} = new TableController(UserService)
</script>

<template>
  <div>
    {{ Languages.get().GoodsName }}
  </div>
  <div>{{ response.list }}</div>
  <WebTable v-loading="isLoading" :data="response.list" :clazz="UserEntity"/>
</template>
