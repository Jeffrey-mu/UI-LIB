# Input 输入

常用的操作按钮。

## 基础用法

基础的输入框用法。

:::demo 

```vue
<template>
  <InputNumber :defaultValue="defaultValue"/>
</template>
<script setup>
import { ref } from 'vue';

const defaultValue = ref('来蹭饭')
</script>
```

:::

