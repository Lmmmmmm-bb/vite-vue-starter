<script setup lang="ts">
const isDarkMode = useDark();

useHead({
  meta: [
    {
      name: 'theme-color',
      content: () => isDarkMode.value ? '#222' : '#fff',
    },
  ],
});

const toggleDark = async (e: MouseEvent) => {
  // @ts-expect-error experimental API
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isAppearanceTransition) {
    isDarkMode.value = !isDarkMode.value;
    return;
  }

  const [x, y] = [e.clientX, e.clientY];
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  const transition = document.startViewTransition(async () => {
    isDarkMode.value = !isDarkMode.value;
    await nextTick();
  });
  await transition.ready;
  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${endRadius}px at ${x}px ${y}px)`,
  ];
  document.documentElement.animate(
    { clipPath },
    {
      duration: 400,
      easing: 'ease-out',
      pseudoElement: '::view-transition-new(root)',
    },
  );
};
</script>

<template>
  <button
    i-carbon-sun dark:i-carbon-moon
    cursor-pointer text-lg
    @click="toggleDark"
  />
</template>
