<template>
  <div class="filter-type">
    <p>{{filter.name}}</p>
    <div class="img"
      :class="filter.name"
      :style="{ backgroundImage: 'url(' + image + ')' }"
      @click="selectFilter(filter)"
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilterType',
  props: {
    filter: Object,
    image: String
  },
  computed: {
    ...mapGetters([
      'getStep'
    ])
  },
  methods: {
    // selectFilter() {
    //   EventBus.$emit("filter-selected", { filter: this.filter.name });
    // },
    ...mapActions([
      'nextStep',
      'previousStep',
      'returnHome',
      'selectFilter'
    ])
  }
}
</script>

<style scoped>
img {
    max-width: 120px;
    display: block;
    margin: 0 auto;
    padding-top: 1px;
  }

.filter-type {
  width: 100px;
  display: inline-block;
  margin: 0 3px;
}

.filter-type p {
  font-size: 11px;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 5px!important;
}

.filter-type .img {
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center center;
}

.filter-type:last-child {
  margin-right: 20px;
}
</style>
