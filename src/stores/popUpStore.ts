import { ref} from "vue";
import { defineStore } from "pinia";

export const usePopUpStore = defineStore("popUp", () => {
  const showForm = ref(false);

  function toogleShowForm() {
    showForm.value = !showForm.value;
  }
  return {showForm, toogleShowForm};
});
