const getUserName = state => state.userName

const getUserImage = state => state.userImage

const getImage = state => state.image

const getLikes = state => state.likes

const gethasBeenLiked = state => state.hasBeenLiked

const getCaption = state => state.caption

const getSelectedFilter = state => state.selectedFilter

const getStep = state => state.step

const getFilters = state => state.filters

const getUserPosts = state => state.posts

export default {
  getUserName,
  getUserImage,
  getImage,
  getLikes,
  gethasBeenLiked,
  getCaption,
  getSelectedFilter,
  getStep,
  getFilters,
  getUserPosts
}
