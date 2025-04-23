# Vue 3 + TypeScript + Vite + AirPowerWeb!


这是一个 `AirPower-Web` 的基础代码模板，其中：

### 修改了 

- `src/main.ts`
  
  添加了一些样式引入，以及初始化 `ElementPlus` 和 `AirPowerWeb` 部分配置。

- `src/App.vue`

  添加了示例代码的增删改查。

- `tsconfig.app.json`

  添加了 `experimentalDecorators` `emitDecoratorMetadata` 配置，用于支持装饰器。

### 添加了

- `src/user/UserEntity.ts`

  用户数据建模
 
- `src/user/UserService.ts`

  用户数据API服务

- `src/user/UserGender.ts`

  用户性别枚举

- `src/user/UserEditor.vue`

  用户编辑页面

- `src/user/UserList.vue`

  用户列表页面

