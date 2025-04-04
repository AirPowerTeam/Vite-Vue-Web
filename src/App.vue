<script setup lang="ts">
import { Strings } from "./config/Strings";

console.log(Strings.get());


</script>

<template>
  <div class="test">
    {{ Strings.get().Hello_Fucking_World }}
    </div>
</template>

<style scoped>
.test{
  font-size: 32px;
}
</style>
