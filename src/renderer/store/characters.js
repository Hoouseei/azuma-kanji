import hiragana from '@/assets/characters/hiragana/data.json'
import katakana from '@/assets/characters/katakana/data.json'
import ps1 from '@/assets/characters/ps1/data.json'
import ps2 from '@/assets/characters/ps2/data.json'
import ps3 from '@/assets/characters/ps3/data.json'
import ps4 from '@/assets/characters/ps4/data.json'
import ps5 from '@/assets/characters/ps5/data.json'
import ps6 from '@/assets/characters/ps6/data.json'


export const state = () => ({
  hiragana,
  katakana,
  ps1,
  ps2,
  ps3,
  ps4,
  ps5,
  ps6
})

export const getters = {
  getAll(state) {
    return {hiragana, katakana, ps1, ps2, ps3, ps4, ps5, ps6};
  },
  hiragana(state) {
    return state.hiragana
  },
  katakana(state) {
    return state.katakana
  },
  ps1(state) {
    return state.ps1
  },
  ps2(state) {
    return state.ps2
  },
  ps3(state) {
    return state.ps3
  },
  ps4(state) {
    return state.ps4
  },
  ps5(state) {
    return state.ps5
  },
  ps6(state) {
    return state.ps6
  }
}
