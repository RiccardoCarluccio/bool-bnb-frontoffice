<script>
export default {
  props: {
    availableServices: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filters: {
        location: "",
        distance: 0,
        services: [],
      },
    };
  },
  methods: {
    applyFilters() {
      this.$emit("applyFilters", this.filters);
    },
  },
};
</script>

<template>
  <div class="advanced-search-card">
    <label for="distance" class="form-label"
      >Distance (km): {{ filters.distance }} km</label
    >

    <div class="input-group">
      <input
        v-model="filters.distance"
        type="range"
        id="distance"
        min="0"
        max="20"
        class="form-range"
        style="--bs-thumb-bg: #001632"
      />
      <span class="input-group-text">{{ filters.distance }} km</span>
    </div>

    <div
      v-for="service in availableServices"
      :key="service.id"
      class="service-item"
    >
      <input
        type="checkbox"
        v-model="filters.services"
        :value="service.id"
        id="service-{{ service.id }}"
      />
      <label :for="'service-' + service.id">{{ service.name }}</label>
    </div>

    <button @click="applyFilters" class="mt-3">Apply Filters</button>
  </div>
</template>

<style lang="scss" scoped>
button {
  background-color: #001632;
  color: #d87767;
  padding: 0.5rem 1rem;
  border: none;
  font-weight: bold;
  border-radius: 10px;
}

button:hover {
  background-color: #d87767;
  color: #001632;
}
.advanced-search-card {
  background-color: #fff;
  padding: 1rem;
  z-index: 100;
}

.input-group {
  margin-top: 10px;
  max-width: 10%;
  width: 100%;
}
</style>
