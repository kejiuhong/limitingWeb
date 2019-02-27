export default {
  changeCity (state, city) {
    state.currentCity = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
