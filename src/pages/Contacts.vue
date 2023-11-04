<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""

      },
    };
  },
}
</script>

<template>
  <div class="container">
    <form @submit="onFormSubmit">
      <div class="mb-3">
        <label>Nome</label>
        <input type="text" class="form-control" :model="formData.name">
      </div>
      <div class="mb-3">
        <label>Email</label>
        <input type="text" class="form-control" :model="formData.email">
      </div>
      <div class="mb-3">
        <label>Messaggio</label>
        <input type="text" class="form-control" :model="formData.message">
      </div>
      <button type="submit">Invia</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;
</style>