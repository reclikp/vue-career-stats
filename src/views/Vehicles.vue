<template>
    <div class="main">
        <h1>Lista Pojazdów</h1>
        <DataTableList :list_data="list_data" />
    </div>
</template>

<script>
    import VehicleDataService from '../services/VehicleDataService';
    import DataTableList from '../components/DataTableList.vue';

    export default {
        name: 'vehicles-list',
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
                    columns_display_names: ['brand', 'model', 'number', 'designation', 'unitId'],
                    columns: ['Marka', 'Model', 'Numer Op.', 'Rodzaj', 'Jednostka'],
                    router_links: { 'unitId': '/units/id'}
                }
            };
        }, 
        methods: {
            retrieveVehicles() {
                VehicleDataService.getAll()
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
            this.retrieveVehicles();
        },
        mounted() {
            this.retrieveVehicles();
        }
    };
</script>

<style lang="scss" scoped>
   
</style>