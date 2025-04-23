<script setup lang="ts">
import { ATable, useTable } from '@airpower/web';
import { UserService } from './UserService';
import { UserEntity } from './UserEntity';
import UserEditor from './UserEditor.vue'
const { response, isLoading, onDisable, onEnable, onDelete, onEdit, onAdd } = useTable(UserService, {
  editView:UserEditor
})

</script>

<template>
  <ATable v-loading="isLoading" :data-list="response.list" :entity="UserEntity" show-enable-and-disable
    @disable="onDisable" @enable="onEnable" @delete="onDelete" @add="onAdd" @edit="onEdit">
    </ATable>
</template>

<style scoped></style>
