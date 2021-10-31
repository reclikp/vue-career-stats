<template>
    <div class="main">
        <h1>Jednostka #{{ data.id }}</h1>
        <p>{{ data.name }}</p>
        <p>{{ data.city }}</p>
    </div>
</template>

<script>
    import UnitDataService from '../services/UnitDataService';

    export default {
        name: 'units-list',      
        data() {
            return {
                currentUnit: null,
                currentIndex: -1,
                name: "",
                data: [],
                id: this.$route.params.id
            };
        }, 
        methods: {
            retrieveUnit() {
                UnitDataService.get(this.id)
                    .then(response => {
                        this.data = response.data;
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
        },
        created() {
            this.retrieveUnit();
        },
        mounted() {
            this.retrieveUnit();
        }
    };
</script>

<style lang="scss" scoped>
   
</style>