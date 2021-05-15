<script>
import { Line } from 'vue3-chart-v2'
export default {
  name: "lineChart",
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      required: true
    },
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
    // Overwriting base render method with actual data.
  }
}
</script>

<style scoped>

</style>