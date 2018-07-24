<template>
  <div>
    <v-layout row v-if="getStep === 1">
      <v-flex xs12 md8 lg6 offset-lg3 offset-md2>
        <gram-fake-post v-for="userPost in userPosts"
        :key="userPosts.indexOf(userPost)"
        :upost="userPost"
        :likes="getLikes">
        </gram-fake-post>
        <grampost v-for="post in posts"
        :key="post.name"
        :post="post">
        </grampost>
      </v-flex>
    </v-layout>
    <v-layout v-if="getStep === 2" mt-5>
      <v-flex>
        <div
          class="selected-image"
          :class="getSelectedFilter"
          :style="{ backgroundImage: 'url(' + image + ')' }">
        </div>
        <div class="filter-container">
          <filter-type v-for="filter in filters"
            :filter="filter"
            :image="image"
            :key="filters.indexOf(filter)">
          </filter-type>
        </div>
      </v-flex>
    </v-layout>
    <v-layout v-if="getStep === 3" mt-5>
      <v-flex>
        <div class="selected-image"
          :class="getSelectedFilter"
          :style="{ backgroundImage: 'url(' + image + ')' }">
        </div>
        <div class="caption-container">
          <textarea class="caption-input"
            placeholder="Write a caption..."
            type="text"
            v-model="caption"
            >
          </textarea>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import GramPost from './GramPost'
import GramFakePost from './GramFakePost'
import FilterType from './FilterType'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BodySlide',
  props: {
    image: '',
    posts: Array,
    userPosts: Array,
    filters: Array
  },
  components: {
    'grampost': GramPost,
    'gram-fake-post': GramFakePost,
    'filter-type': FilterType
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
    ]),
    caption: {
      get () {
        return this.$store.state.caption
      },
      set (value) {
        this.$store.commit('SET_CAPTION', value)
      }
    }
  },
  methods: {
    ...mapActions([
      'nextStep',
      'previousStep',
      'returnHome',
      'addCaption'
    ])
  }
}
</script>

<style scoped>
.selected-image {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 400px;
}
img {
  max-width: 120px;
  display: block;
  margin: 0 auto;
  padding-top: 1px;
}

.caption-container {
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.caption-container textarea {
  border: 0;
  font-size: 1rem;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
}

.caption-container textarea:focus {
  outline: 0;
}

.filter-container {
  height: 220px;
  padding: 30px 10px;
  white-space: nowrap;
  overflow-x: scroll;
}
</style>
