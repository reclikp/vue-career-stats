<template>
    <div class="main">
        <table>
            <thead>
                <tr>
                    <th v-for="column in list_data.columns" :key="column">{{ column }}</th>      
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in list_data.rows" :key="index">
                    <td v-for="row_name in list_data.columns_display_names" :key="row_name">
                        <router-link :to="{ name: 'unit', params: { id: row[row_name] } }" v-if="row_name.includes('Id')">{{ row[row_name] }}</router-link>   
                        <span v-else>{{ row[row_name] }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'data-table-list',
        props: {
            'list_data': {
                rows: Array,
                columns_display_names: Array,
                columns: Array
            }
        },
        data() {
            return {
                currentUnit: null,
                currentIndex: -1,
                name: ""
            };
        }, 
        methods: {
            logg() {
                console.log(this.list_data.units);
            }
        },        
        mounted() {
            this.logg()
        }
    };
</script>

<style lang="scss" scoped>
    .main {
        h1 {
            font-size: 3rem;
            font-weight: 200;
            text-transform: lowercase;
        }

        table {
            border-collapse: collapse;
            font-size: 1.5rem;
            font-weight: 200;

            display: block;
            overflow-y: scroll;
            max-height: 70vh;

            &::-webkit-scrollbar {
                width: 20px;
                cursor: pointer;
                
                &-thumb {
                    background: #F2F4FF;
                    border-radius: 10px;
                    border: 5px solid transparent;
                    background-clip: content-box;
                }
            }

            tr {
                th {
                    text-align: left;
                    font-weight: 300;
                    text-transform: lowercase;

                    position: sticky;
                    top: 0;
                    background: rgb(231,111,81);

                    &:not(:first-of-type):not(:last-of-type) {
                        padding-right: 0.7rem;
                        padding-left: 0.7rem;
                    }
                }

                td{
                    padding-top: .4rem;
                    padding-bottom: .4rem;

                    &:first-of-type {
                        padding-right: 4rem;
                        padding-left: .2rem;
                    }

                    &:last-of-type {
                        padding-right: .2rem;
                    }

                    &:not(:first-of-type):not(:last-of-type) {
                        padding-right: 0.7rem;
                        padding-left: 0.7rem;
                    }
                }

                &:first-of-type {
                    th {
                        padding-bottom: 1rem;
                    }
                }

                &:not(:first-of-type) {
                    border-top: 1px solid #fff;
                }   
            }
        }
    }
</style>