import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: 1,
        text: 'Finish Vue project setup',
        status: 'pending',
      },
      {
        id: 2,
        text: 'Read Pinia notes',
        status: 'completed',
      },
      {
        id: 3,
        text: 'Plan tomorrow homework',
        status: 'tomorrow',
      },
    ],
  }),

  getters: {
    pendingTasks: (state) => state.tasks.filter((task) => task.status === 'pending'),

    completedTasks: (state) => state.tasks.filter((task) => task.status === 'completed'),

    tomorrowTasks: (state) => state.tasks.filter((task) => task.status === 'tomorrow'),

    totalTasks: (state) => state.tasks.length,
  },

  actions: {
    addTask(taskText) {
      this.tasks.push({
        id: Date.now(),
        text: taskText,
        status: 'pending',
      })
    },

    markCompleted(taskId) {
      const task = this.tasks.find((task) => task.id === taskId)

      if (task) {
        task.status = 'completed'
      }
    },

    moveToTomorrow(taskId) {
      const task = this.tasks.find((task) => task.id === taskId)

      if (task) {
        task.status = 'tomorrow'
      }
    },
  },
})
