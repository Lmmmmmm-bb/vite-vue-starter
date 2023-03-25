<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div h-full flex items-center justify-center flex-col>
    <h1>
      Hello, Vite + Vue + TS
    </h1>
    <button text-lg cursor-pointer dark:i-carbon-moon i-carbon-sun @click="toggleDark()" />
  </div>
</template>
