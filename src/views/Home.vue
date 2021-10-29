<template>
    <div class="main">
        <h2>Czas spędzony na wezwaniach</h2>
        <h1>{{ totalCallTime['0'] }}<span class="colon" v-bind:class="{ colon__show: colonShow }">:</span>{{ totalCallTime['1'] }}<span class="colon" v-bind:class="{ colon__show: colonShow }">:</span>{{ totalCallTime['2'] }}</h1>
    </div>
</template>

<script>
    import CallDataService from '../services/CallDataService';

    export default {
        name: 'home',

        data () {
            return {
                totalCallTime: ["00", "00", "00"],
                colonShow: true,
                timer: null
            };
        },
        methods: {
            getTotalCallTime() {
                CallDataService.getTotalTime()
                    .then(response => {
                        this.totalCallTime = response.data[0].totalTime.split(':');
                        console.log(response.data[0].totalTime);
                    })
                    .catch(e => {
                        console.log(e);
                    })
            },
            changeColonState() {
                if(this.colonShow == true) 
                    this.colonShow = false;
                else 
                    this.colonShow = true;
            }
        },
        mounted() {
            this.getTotalCallTime();
            this.timer = setInterval(this.changeColonState, 1000);
        },
        beforeUnmount: function() {
            clearInterval(this.timer);
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        text-align: center;

        h1 {
            font-size: 3rem;
            font-weight: 200;
            text-transform: lowercase;
        }

        h2 {
            font-size: 2rem;
            font-weight: 200;
            text-transform: lowercase;
        }

        .colon {
            color: rgb(231,111,81);

            &__show {
                color: #F2F4FF;
            }
        }
    }
</style>