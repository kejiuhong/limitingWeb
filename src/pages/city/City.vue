<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/Search'
import CityList from './components/List'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  data () {
    return {
      hotcity: [],
      list: []
    }
  },
  methods: {
    getCityList () {
      axios.get('/api/city.json')
        .then(this.getCityListSucc)
    },
    getCityListSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotcity = data.hotCities
        this.list = data.cities
      }
    }
  },
  mounted () {
    this.getCityList()
  }
}
</script>

<style>

</style>
