<template>
  <div id="nav" class="nav"
    @mouseover="hover = true" 
    @mouseleave="hover = false"
    :class="{ nav__active: hover }"
  >
    <div class="nav_ul"
      :class="{ nav_ul__active: hover }"
    >
      <!-- <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/units">Units</router-link>
      <router-link to="/calls">Calls</router-link> -->

      <router-link to="/">Licznik</router-link> 
      <router-link to="/units">Jednostki</router-link>
      <router-link to="/vehicles">Pojazdy</router-link>
      <router-link to="/calls">Wezwania</router-link>
      <router-link to="/calls">Zdarzenia</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
  export default {
    data() {
      return {
        hover: false,
      };
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

  #app {
    font-family: 'Lato';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #F2F4FF;
  } 

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background: rgb(231,111,81);

    overflow-x: hidden;
    overflow-y: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .nav {
      width: 10vh;
      height: 10vh;
      border-radius: 0% 0% 100% 0%;
      /* width: 15vw;
      height: 50vh;
      border-radius: 0% 0% 100% 0%; */

      position: absolute;
      top: 0;
      left: 0;

      background: #F2F4FF;

      transition: 0.6s width, 0.6s height, 0.6s border-radius;

      &__active {
        width: 15vw;
        height: 50vh;
        border-radius: 0% 0% 100% 0%;
      } 

      &_ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        a {
          color: #264653;
          text-decoration: none;

          padding-left: 3rem;
          padding-top: 3rem;

          transform: translate(-200%);
          transition: 0.6s transform;
        }

        &__active {
          a {
            transform: translate(0%);
          }
        }
      }


    }
  }

</style>
