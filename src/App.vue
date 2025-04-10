<script setup lang="ts">
import { Languages } from "./config/Languages";
import { TableController, WebTable, AirCrypto } from '@airpower/web'
import { UserEntity } from "./model/UserEntity";
import { UserService } from "./model/UserService";

const { response, isLoading } = new TableController(UserService)
const a = AirCrypto.aesEncrypt("xxxxx", "xxxxxx")
</script>

<template>
  <div>
    {{ Languages.get().GoodsName }}
  </div>
  {{ a }}
  <div>{{ response.list }}</div>
  <WebTable v-loading="isLoading" :data="response.list" :clazz="UserEntity" />
</template>
