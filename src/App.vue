<template>
<div>
  <menu-bar @showchart="showChart"></menu-bar>
  <line-chart v-if="loaded" :chart-data="this.chartData" :chart-options="this.chartOptions"></line-chart>
  <hero-section v-if="!loaded"></hero-section>
  <feature-section></feature-section>
<!--  <button type="button" @click="showChart">Click</button>-->
</div>
</template>

<script>
import menuBar from './components/menu-bar'
import heroSection from './components/hero-section'
import featureSection from './components/feature-section'
import lineChart from "@/components/line-chart";
export default {
  name: 'App',
  components: {
    menuBar,
    heroSection,
    featureSection,
    lineChart
  },
  data(){
    return{
      chartData: '',
      chartOptions: ''  ,
      loaded:false
    }
  },
  created() {
    console.log()
    this.chartData={
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Cases',
        backgroundColor: 'red',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      }]
    }
    console.log('22')
    this.chartOptions = {
      title: {
        display: true,
        text: 'Covid-19 all across the world'
      },
      maintainAspectRatio: false,
      responsive: true,
    }
  },
  methods: {
    showChart() {
      this.loaded = true
    }
  }
}
</script>

<style>

</style>
