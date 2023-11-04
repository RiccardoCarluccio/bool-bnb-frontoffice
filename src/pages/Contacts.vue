<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""

      },
      errors: null,
      succes: null
    };
  },
  methods: {
    onFormSubmit() {
      axios.post("http://127.0.0.1:8000/api/contacts", this.formData)
      .then((resp) => {
          this.succes = true;
          this.errors = null;
      })
      .catch(e =>{
         this.errors = e.message;
      })
    },
  },
}
</script>

<template>
  <div class="container" >
    <div class="alert alert-danger" v-if="errors">Sembra che tu non abbia compilato tutti i campi: {{ errors }}</div>
    <form @submit.prevent="onFormSubmit" v-if="!succes">
      <div class="mb-3">
        <label>Nome</label>
        <input type="text" class="form-control" v-model="formData.name">
      </div>
      <div class="mb-3">
        <label>Email</label>
        <input type="text" class="form-control" v-model="formData.email">
      </div>
      <div class="mb-3">
        <label>Messaggio</label>
        <textarea class="form-control" v-model="formData.message"></textarea>
      </div>
      <button type="submit">Invia</button>
    </form>
    <div class="alert alert-success" v-else>Grazie per averci contattato. Vi ricontatteremo il prima possibile</div>
  </div>
</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;
</style>