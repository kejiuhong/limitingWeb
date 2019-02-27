<template>
  <div>
    <city-header></city-header>
    <city-search :list="list"></city-search>
    <city-list :list="list" :hot="hotcity" :letter="letter"></city-list>
    <city-alphabet :list="list" @change="handleChangeLetter"></city-alphabet>
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
      list: {},
      letter: ''
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
    },
    handleChangeLetter (letter) {
      // console.log(letter)
      this.letter = letter
    }
  },
  mounted () {
    this.getCityList()
  }
}
</script>

<style>

</style>
