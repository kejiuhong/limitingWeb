<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :list="list" :hot="hotcity"></city-list>
    <city-alphabet :list="list"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotcity: [],
      list: {}
    }
  },
  methods: {
    getCityList () {
      axios.get('/api/city.json')
        .then(this.getCityListSucc)
    },
    getCityListSucc (res) {
      console.log(res)
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
