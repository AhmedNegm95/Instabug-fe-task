<template>
    <div class="c-date-range-filter">
        <div class="form-inline form-inline--align-center">
            <div class="form-control">{{startDate}}
                <label for="start-date">Start date:</label>
                <input @input="filterByDate" :min="minDate" :max="maxDate" v-model="startDate" class="form-inline__input" type="date" id="start-date" name="start-date">
            </div>
            <div class="form-control form-control--ml-2">
                <label for="end-date">End date:</label>
                <input @input="filterByDate" :min="minDate" :max="maxDate" v-model="endDate" class="form-inline__input" type="date" id="end-date" name="end-date">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DaterangeComponent',

    props: ['minDate', 'maxDate'],
    data() {
        return {
            startDate: '',
            endDate: ''
        }
    },
    methods: {
        filterByDate() {
            if (!this.startDate || !this.endDate || new Date(this.startDate).getTime() > new Date(this.endDate).getTime())
                return;
            let daterange = {
                startDate: this.startDate,
                endDate: this.endDate
            }
            this.$emit('filter-daterange', daterange)
        }
    }
}
</script>