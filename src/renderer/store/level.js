const levelSettings = {
  isShowStroke: 0,
  isShowWatermark: 0,
  isShowCopybook: 1,
}

export const state = () => ({
  level: 0,
  isShowStroke: true,
  isShowWatermark: true,
  isShowCopybook: true,
})

export const mutations = {
  setLevel(state, level) {
    state.level = level
    for (const key in levelSettings) {
      state[key] = levelSettings[key] >= level
    }
  }
}

export const getters = {
  getAll(state) {
    return state
  },
}
