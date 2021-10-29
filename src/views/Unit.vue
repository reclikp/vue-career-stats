<template>
    <div class="main">
        <h1>Lista Jednostek</h1>
        <DataTableList :list_data="list_data" />
    </div>
</template>

<script>
    import UnitDataService from '../services/UnitDataService';
    import DataTableList from '../components/DataTableList.vue';

    export default {
        name: 'units-list',
        components: {
            DataTableList
        },        
        data() {
            return {
                currentUnit: null,
                currentIndex: -1,
                name: "",
                list_data: {
                    rows: [],
                    columns_display_names: ['name', 'city'],
                    columns: ['Nazwa jednostki', 'Lokalizacja']
                }
            };
        }, 
        methods: {
            retrieveUnits() {
                UnitDataService.getAll()
                    .then(response => {
                        this.list_data.rows = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    })
            },
            setActiveUnit(unit, index) {
                this.currentUnit = unit;
                this.currentIndex = index;
            }
        },
        created() {
            this.retrieveUnits();
        },
        mounted() {
            this.retrieveUnits();
        }
    };
</script>

<style lang="scss" scoped>
   
</style>