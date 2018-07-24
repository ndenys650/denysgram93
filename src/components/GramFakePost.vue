<template>
  <v-container my-4>
    <v-card dark hover raised>
      <v-card-media
        :class="upost.selectedFilter"
        :src="upost.image"
        height="200px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline"><b>{{ upost.userName }}</b><br>aka {{ upost.userName }}</div>
          <span class="grey--text">Total Photos: {{ upost.likes }}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
        <v-spacer />
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show">
          <b>Caption:</b><br>
          {{ upost.caption }}
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    show: false
  }),
  props: {
    upost: Object
  },
  computed: {
    ...mapGetters([
      'getUserName',
      'getUserImage',
      'getImage',
      'getLikes',
      'gethasBeenLiked',
      'getCaption',
      'getSelectedFilter',
      'getStep',
      'getFilters',
      'getUserPosts'
    ])
  }
}
</script>
