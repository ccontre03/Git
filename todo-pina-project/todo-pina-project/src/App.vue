<script setup>
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import TaskSummary from './components/TaskSummary.vue'
</script>

<template>
  <main class="app-container">
    <h1>My To-Do List</h1>
    <p class="subtitle">Track pending, completed, and tomorrow's tasks</p>

    <TaskSummary />
    <TaskForm />
    <TaskList />
  </main>
</template>

<style scoped>
.app-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 0.5rem;
  text-align: center;
  color: #ffffff;
}

.subtitle {
  text-align: center;
  color: #e5e7eb;
  margin-bottom: 2rem;
}
</style>

