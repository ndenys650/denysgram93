<template>
  <v-container my-4>
    <v-card dark hover raised>
      <v-card-media
        :src="post.urls.full"
        height="200px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline"><b>{{ post.user.name }}</b><br>aka {{ post.user.instagram_username }}</div>
          <span class="grey--text">Total Photos: {{ post.user.total_photos }}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="purple" target="_blank" :href="post.user.links.html">Explore Profile</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show">
          <b>Creator's Bio:</b><br>
          {{ post.user.bio}}
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  props: {
    post: Object
  }
}
</script>
