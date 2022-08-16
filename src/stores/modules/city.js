import { defineStore } from "pinia";

const useCityStore = defineStore('city', {
  store: () => ({
    cities: []
  }),
  active: {}
})

export default useCityStore