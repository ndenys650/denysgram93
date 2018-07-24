const nextStep = function ({ commit }) {
  commit('NEXT_STEP')
}

const previousStep = function ({ commit }) {
  commit('PREVIOUS_STEP')
}

const returnHome = function ({ commit }) {
  commit('RETURN_HOME')
}

const selectFilter = function ({ commit }, payload) {
  commit('SELECTED_FILTER', payload)
}

const createPost = function ({ commit }, { getUserName, getImage, getLikes, getCaption, getSelectedFilter }) {
  commit('CREATE_POST', {
    userName: getUserName,
    userImage: getUserName,
    image: getImage,
    likes: getLikes,
    hasBeenLiked: false,
    caption: getCaption,
    selectedFilter: getSelectedFilter
  })
}

export default {
  nextStep,
  previousStep,
  returnHome,
  selectFilter,
  createPost
}
