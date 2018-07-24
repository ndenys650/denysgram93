import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: 'Guest',
    userImage: '',
    image: '',
    likes: 1,
    hasBeenLiked: false,
    caption: '',
    selectedFilter: '',
    step: 1,
    posts: [
      {
        userName: 'socleansofreshh',
        userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg',
        image:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg',
        likes: 36,
        hasBeenLiked: false,
        caption: 'When youre ready for summer 2018 ☀️',
        filter: 'perpetua'
      },
      {
        userName: 'djirdehh',
        userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png',
        image:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg',
        likes: 20,
        hasBeenLiked: false,
        caption: 'Views from the six...',
        filter: 'clarendon'
      },
      {
        userName: 'puppers',
        userImage:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg',
        image:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg',
        likes: 49,
        hasBeenLiked: false,
        caption: 'Current mood 🐶',
        filter: 'lofi'
      }
    ],
    filters: [
      { name: 'normal' },
      { name: 'clarendon' },
      { name: 'gingham' },
      { name: 'moon' },
      { name: 'lark' },
      { name: 'reyes' },
      { name: 'juno' },
      { name: 'slumber' },
      { name: 'aden' },
      { name: 'perpetua' },
      { name: 'mayfair' },
      { name: 'rise' },
      { name: 'hudson' },
      { name: 'valencia' },
      { name: 'xpro2' },
      { name: 'willow' },
      { name: 'lofi' },
      { name: 'inkwell' },
      { name: 'nashville' }
    ]
  },
  actions,
  getters,
  mutations
})
