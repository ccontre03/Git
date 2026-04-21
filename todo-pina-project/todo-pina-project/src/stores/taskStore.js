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
})
