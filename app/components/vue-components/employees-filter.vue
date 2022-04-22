<template>
    <div class="c-employees-filter">
        <form class="form-inline form-inline--align-center">
            <input @keyup="onSearch" v-model="searchText" type="text" class="form-inline__input" id="text-search" placeholder="Search">
            <button @click="onClear" type="button" class="form-inline__btn form-inline__btn--ml-1 ">Clear</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['employeesList'],
    data() {
        return {
            searchText: ''
        }
    },
    methods: {
        onSearch() {
            this.$emit('filter-employees', this.searchText)
        },
        onClear() {
            this.searchText = ''
            this.$emit('filter-employees', this.searchText)
            this.$emit('reset-filter-param')
        }
    }
}
</script>