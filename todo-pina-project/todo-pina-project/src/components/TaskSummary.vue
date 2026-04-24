<script setup>
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
</script>

<template>
  <section class="task-summary">
    <h2>Task Summary</h2>

    <div class="summary-grid">
      <div class="summary-box">
        <h3>Total Tasks</h3>
        <p>{{ taskStore.totalTasks }}</p>
      </div>

      <div class="summary-box">
        <h3>Pending</h3>
        <p>{{ taskStore.pendingTasks.length }}</p>
      </div>

      <div class="summary-box">
        <h3>Completed</h3>
        <p>{{ taskStore.completedTasks.length }}</p>
      </div>

      <div class="summary-box">
        <h3>Tomorrow</h3>
        <p>{{ taskStore.tomorrowTasks.length }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.task-summary {
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  color: #222222;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.summary-box {
  background: #f5f7fa;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

h2,
h3,
p {
  color: #222222;
}

h3 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

p {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
