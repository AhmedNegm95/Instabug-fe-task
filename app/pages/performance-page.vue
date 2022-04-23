<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <!-- [Place filter component here] -->
      <date-range-filter-component 
        :minDate="minDate" 
        :maxDate="maxDate"
        @filter-daterange="onFilterDaterange"
      >
      </date-range-filter-component>
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :chartData="teamPerformanceData" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import DateRangeFilterComponent from '../components/vue-components/daterange-filter.vue';
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    DateRangeFilterComponent
  },
  data() {
    return {
      teamPerformanceData: [],
      minDate: '',
      maxDate: ''
    }
  },
  async mounted() {
    if(this.$store.getters.teamPerformanceChartPoints.length == 0) {
      let teamPerformanceData = await axios.get('https://fe-task.getsandbox.com/performance')
      if(teamPerformanceData) {
        this.teamPerformanceData = teamPerformanceData.data
        this.minDate = this.getDateIsoFormat(this.teamPerformanceData[0].date_ms)
        this.maxDate = this.getDateIsoFormat(this.teamPerformanceData[this.teamPerformanceData.length - 1].date_ms)
        this.$store.commit('setTeamPerformanceChartPoints', this.teamPerformanceData)
      }
    } else {
      this.teamPerformanceData = this.$store.getters.teamPerformanceChartPoints
    }

    
  },
  methods: {
    onFilterDaterange(daterange) {
      this.teamPerformanceData = this.getChartPointsInDaterange(daterange.startDate, daterange.endDate)
    },
    getChartPointsInDaterange(startDate, endDate) {
      let filteredChartPoints = []
      filteredChartPoints = this.$store.getters.teamPerformanceChartPoints.filter(ele => {
        return ele.date_ms > new Date(startDate).getTime() && ele.date_ms <= new Date(endDate).getTime()
      })
      return filteredChartPoints
    },
    getDateIsoFormat(dateMs) {
      return new Date(dateMs).toISOString().substr(0, 10)
    }
  }
};
</script>
