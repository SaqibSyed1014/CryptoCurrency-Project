<template>
<div>
  <menu-bar></menu-bar>
  <hero-section></hero-section>
  <feature-section></feature-section>
</div>
</template>

<script>
import menuBar from './components/menu-bar'
import heroSection from './components/hero-section'
import featureSection from './components/feature-section'
export default {
  name: 'App',
  components: {
    menuBar,
    heroSection,
    featureSection
  }
}
</script>

<style>

</style>
