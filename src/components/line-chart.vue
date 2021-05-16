<script>
import { Line } from 'vue3-chart-v2'
export default ({
  name: 'MonthlyChart',
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: 'black',
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    },
        {
          title: {
            display: true,
            text: 'Covid-19 all across the world'
          },
          maintainAspectRatio: false,
          responsive: true,
        })
  }
})
</script>

<style scoped>

</style>