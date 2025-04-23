<template>
  <ADialog :title="title" @cancel="onCancel" @confirm="onSubmit">
    <div>
      {{ formData }}
    </div>
    <div>
      {{ rules }}
    </div>
    <el-form ref="formRef" :rules="rules" :model="formData">
      <!-- 不推荐 -->
      <el-form-item :label="getFieldLabel(formData, 'nickname')" prop="nickname">
        <AInput v-model="formData.nickname" :entity="UserEntity"></AInput>
      </el-form-item>
      
      <!-- 不推荐 -->
      <el-form-item :label="getFieldLabel(formData, 'phone')" prop="phone">
        <AInput v-model.phone="formData.phone" :entity="UserEntity"></AInput>
      </el-form-item>

      <!-- 还是不推荐 -->
      <el-form-item :label="getFieldLabel(formData, 'email')" prop="email">
        <AInput v-model.email="formData.email"></AInput>
      </el-form-item>

      <!-- 推荐 AFormField 和 useEditor 一起使用 -->
      <AFormField field="gender"></AFormField>
    </el-form>
  </ADialog>

</template>
<script lang="ts" setup>
import { ADialog, AFormField, AInput, DialogProps, getFieldLabel, useEditor } from '@airpower/web';
import { UserEntity } from './UserEntity';
import { UserService } from './UserService';
const props = defineProps(DialogProps.withParam(new UserEntity()))
const { title, rules, formRef, formData, onSubmit } = useEditor(props, UserService)

</script>