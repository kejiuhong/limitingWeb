let defaultCity = '上海'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  currentCity: defaultCity
}
