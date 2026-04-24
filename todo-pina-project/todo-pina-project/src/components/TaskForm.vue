<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
const newTask = ref('')

const submitTask = () => {
  if (newTask.value.trim() === '') {
    return
  }

  taskStore.addTask(newTask.value)
  newTask.value = ''
}
</script>

<template>
  <section class="task-form">
    <h2>Add a New Task</h2>

    <div class="form-row">
      <input v-model="newTask" type="text" placeholder="Enter a task" />
      <button @click="submitTask">Add Task</button>
    </div>
  </section>
</template>

<style scoped>
.task-form {
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid #dcdcdc;
  color: #222222;
}

h2 {
  color: #222222;
}

.form-row {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #bbbbbb;
  border-radius: 6px;
  background: #ffffff;
  color: #222222;
}

button {
  padding: 0.75rem 1rem;
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
