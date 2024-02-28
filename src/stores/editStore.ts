import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEditStore = defineStore('edit', () => { () => {
  const isEditing = ref(false);

  return {
    isEditing
  }
}
})