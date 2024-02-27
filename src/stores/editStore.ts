import { ref } from 'vue';

const useEditStore = () => {
  const isEditing = ref(false);

  const toggleShowForm = () => {
    isEditing.value = !isEditing.value;
  };

  return {
    isEditing,
    toggleShowForm,
  };
};

export { useEditStore };