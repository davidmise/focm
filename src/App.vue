<script >
  // import {  RouterView } from 'vue-router'
  import NavigationBar from './components/NavigationBar.vue';
  // import FooterSection from './components/FooterSection.vue';
  export default {
    components:{
      NavigationBar,
      // FooterSection
    }
  };
</script>
<template>
  <NavigationBar/>
  <!-- <FooterSection/> -->
  <RouterView />
</template>

