<template>
  <main class="card">
    <slot />
  </main>
</template>

<style scoped>
.card {
    width: min(600px, 100%);
    background: #c60a87;
    padding: 18px;
    border-radius: 16px;
    box-shadow: 0 10px 24px rgba(79, 70, 229, .2);
}
</style>