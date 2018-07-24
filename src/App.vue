<template>
  <v-app>
    <v-container text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-toolbar dark fixed height="85px">
            <v-spacer />
              <v-btn
                icon
                v-if="getStep === 3"
                @click="previousStep"
              >
                <icon name="undo-alt" scale="2" />
              </v-btn>
            <v-spacer />
            <v-toolbar-title id="title">DenysGram</v-toolbar-title>
            <v-spacer />
            <v-btn
              icon
              v-if="getStep === 2"
              @click="nextStep"
            >
              <icon name="arrow-alt-circle-right" scale="2"/>
            </v-btn>
            <v-btn
              icon
              v-if="getStep === 3"
              @click="createPost({getUserName, getImage, getLikes, getCaption, getSelectedFilter})"
            >
              <icon name="share-square" scale="2"/>
            </v-btn>
            <v-spacer />
          </v-toolbar>
          <v-content>
            <v-flex>
              <v-container id="app" grid-list-lg mb-5>
                <body-slide
                  :username="getUserName"
                  :image ="getImage"
                  :selectedFilter="getSelectedFilter"
                  :posts="posts.data"
                  :caption="getCaption"
                  :userPosts="getUserPosts"
                  :filters="getFilters"
                ></body-slide>
              </v-container>
            </v-flex>
          </v-content>
          <v-footer fixed dark height="112px">
            <v-card
              class="flex"
              flat
              tile
            >
              <v-card-title class="teal">
                <v-spacer></v-spacer>
                  <v-btn icon
                  v-if="getStep === 2 || getStep === 3"
                  @click="returnHome">
                    <icon name="home" scale="2"/>
                  </v-btn>
                  <v-btn icon
                        @change="uploadImage"
                        >
                    <input type="file"
                      name="file"
                      id="file"
                      v-if="getStep === 1"
                    />
                      <label for="file" v-if="getStep === 1">
                        <icon name="plus-square" scale="2"/>
                      </label>
                  </v-btn>
                <v-spacer></v-spacer>
              </v-card-title>
              <v-card-actions class="grey darken-3 justify-center">
                &copy; 2018 — <strong>Built by Nate Denys</strong>
              </v-card-actions>
            </v-card>
          </v-footer>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'
import BodySlide from './components/BodySlide'
import Icon from 'vue-awesome/components/Icon'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      posts: null,
      ROOT_URL: 'http://localhost:3000/posts'
    }
  },
  components: {
    'body-slide': BodySlide,
    'icon': Icon
  },
  created () {
    this.getPictureList()
  },
  mounted () {
    axios
      .get('https://api.unsplash.com/photos/?client_id=5208342da5583cdbfb09845c2f61cc2e15e098bfa535f97d5fc70da4e06c3e9f')
      .then(response => (this.posts = response))
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
  },
  methods: {
    uploadImage (evt) {
      const files = evt.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(files)
      reader.onload = evt => {
        this.$store.state.image = evt.target.result
      }
      // To enable reuploading of same files in Chrome
      document.querySelector('#file').value = ''
      this.nextStep()
    },
    getPictureList () {
      axios
        .get(this.ROOT_URL)
        .then(response => {
          this.userPosts = response.data
        })
        .catch(error => console.log(error))
    },
    ...mapActions([
      'nextStep',
      'previousStep',
      'returnHome',
      'createPost'
    ])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Great+Vibes');

#app {
  text-align: center;
}

#title {
  font-family: 'Great Vibes', cursive!important;
  font-size: 40px!important;
  padding: 15px;
}

input[name="file"] {
  visibility: hidden;
  display: none;
}

label {
  cursor: pointer;
}
</style>
