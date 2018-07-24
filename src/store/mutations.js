const NEXT_STEP = (state) => {
  if (state.step < 3) {
    state.step++
  }
}

const PREVIOUS_STEP = (state) => {
  state.step--
}

const RETURN_HOME = (state) => {
  state.step = 1
}

const SELECTED_FILTER = (state, payload) => {
  state.selectedFilter = payload.name
}

const SET_CAPTION = (state, value) => {
  state.caption = value
}

const CREATE_POST = (state, post) => {
  state.posts.unshift(post)
  state.step = 1
  state.selectedFilter = ''
  state.image = ''
  state.caption = ''
  state.likes++
}

export default {
  NEXT_STEP,
  PREVIOUS_STEP,
  RETURN_HOME,
  SELECTED_FILTER,
  SET_CAPTION,
  CREATE_POST
}
