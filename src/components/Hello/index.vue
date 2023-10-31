<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    h-full
    flex flex-col
    items-center justify-center
  >
    <h1>
      Hello, Vite + Vue + TS
    </h1>
    <button
      i-carbon-sun dark:i-carbon-moon
      cursor-pointer text-lg
      @click="toggleDark()"
    />
  </div>
</template>
