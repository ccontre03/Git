<script setup>
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
</script>

<template>
  <section class="task-list">
    <div class="task-group">
      <h2>Pending Tasks</h2>
      <ul>
        <li
          v-for="task in taskStore.pendingTasks"
          :key="task.id"
        >
          <span>{{ task.text }}</span>
          <div class="button-group">
            <button @click="taskStore.markCompleted(task.id)">Complete</button>
            <button @click="taskStore.moveToTomorrow(task.id)">Tomorrow</button>
          </div>
        </li>
      </ul>
    </div>

    <div class="task-group">
      <h2>Completed Tasks</h2>
      <ul>
        <li
          v-for="task in taskStore.completedTasks"
          :key="task.id"
        >
          <span>{{ task.text }}</span>
        </li>
      </ul>
    </div>

    <div class="task-group">
      <h2>Tomorrow's Tasks</h2>
      <ul>
        <li
          v-for="task in taskStore.tomorrowTasks"
          :key="task.id"
        >
          <span>{{ task.text }}</span>
          <button @click="taskStore.markCompleted(task.id)">Complete</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.task-list {
  display: grid;
  gap: 1rem;
}

.task-group {
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 1rem;
  color: #222222;
}

h2 {
  color: #222222;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 0.75rem;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eeeeee;
}

li:last-child {
  border-bottom: none;
}

li span {
  color: #222222;
}

.button-group {
  display: flex;
  gap: 0.5rem;
}

button {
  padding: 0.45rem 0.75rem;
  border: none;
  background: #2c3e50;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #1f2d3d;
}
</style>
