<template>
    <div class="list-row">
        <h4>Units List</h4>
        <ul>
            <li 
                :class="{ active: index == currentIndex }" 
                v-for="(unit, index) in units" 
                :key="index"
                @click="setActiveUnit(unit, index)"
            >
                {{ unit.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    import UnitDataService from '../services/UnitDataService';

    export default {
        name: 'units',
        
        data() {
            return {
                units: [],
                currentUnit: null,
                currentIndex: -1,
                name: ""
            };
        }, 
        methods: {
            retrieveUnits() {
                UnitDataService.getAll()
                    .then(response => {
                        this.units = response.data;
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
        mounted() {
            this.retrieveUnits();
        }
    };
</script>

<style lang="scss" scoped>
    .list-row {
        text-align: center;
    }
</style>