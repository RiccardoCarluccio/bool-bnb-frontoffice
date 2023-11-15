<script>
import axios from "axios";
export default {
  props: {
    apartment_id: Number,
  },

  data() {

    return {
      formData: {
        name: "",
        email: "",
        message: "",
        apartment_id: "",
      },
      errors: null,
      succes: null
    };
  },
  methods: {

    onFormSubmit() {
      this.formData.apartment_id = this.apartment_id;
      console.log( this.formData);
      axios.post("http://127.0.0.1:8000/api/contacts", this.formData)
        .then((resp) => {
          this.succes = resp.data.message;
          this.errors = null;
          console.log(resp.data.aparmtent_id);
        })
        .catch(e => {
          this.errors = e.response?.data.message ?? e.message;
        })

    },
  },
}
</script>

<template>
  <div class="container">
    <h1 class="text-center">Contatta il Proprietario del tuo appartamento</h1>
    <div class="alert alert-danger" v-if="errors">{{ errors }}</div>
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
    <div class="alert alert-success" v-else>{{ this.succes }}</div>
  </div>
</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;
</style>
