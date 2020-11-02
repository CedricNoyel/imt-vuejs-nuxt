export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, tvshow) {
    state.list.push(tvshow)
  },
}

export const getters = {
  get(state) {
    return state.list
  },
}
