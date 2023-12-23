<template>
  
    <nav  class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top opacity-75" :class="{ 'navbar-hidden': isNavbarHidden }" >
        <div class="container-fluid">
          <!-- <a class="navbar-brand" href="#">Logo</a> -->
          <RouterLink to="/"  class="navbar-brand" aria-current="page" href="#experience">
             <img src="../assets/images/logo/logo.svg" class="img-fluid img-logo" alt="fo logo"> 
             <!-- <span> Overland </span> -->
            </RouterLink>
          <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-white "></span>
          </button>
          <div class="collapse navbar-collapse nav-justified  justify-content-lg-center " id="navbarNavAltMarkup">
            <div class="navbar-nav  " style="color: white;" >
                <a  class="nav-link navbar-brand active  fw-bold d-flex justify-content-center text-white text-uppercase" aria-current="page" href="#home" >  HOME </a>
                <a class="nav-link navbar-brand fw-bold  d-flex justify-content-center text-white text-uppercase" aria-current="page" href="#about"> About us </a>
                <a   class="nav-link navbar-brand fw-bold active  d-flex justify-content-center text-white text-uppercase" aria-current="page" href="#services">Services</a>
                <a   class="nav-link navbar-brand fw-bold active  d-flex justify-content-center text-white text-uppercase" aria-current="page" href="#gallery">Gallery</a>
                <!-- <RouterLink to="/"  class="nav-link navbar-brand fw-bold active d-flex justify-content-center text-white  text-uppercase" aria-current="page" href="#experience"></RouterLink> -->
                <a   class="nav-link navbar-brand fw-bold active d-flex justify-content-center text-white text-uppercase" aria-current="page" href="#contacts">Contacts</a>
            </div>
        </div>
        </div>
      </nav>

    
</template>
<script>
export default {
  data() {
    return {
      isNavbarHidden: false,
      lastScrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if scrolling down
      this.isNavbarHidden = currentScrollTop > this.lastScrollTop && currentScrollTop > 50;

      this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    },
  },
};
</script>



<style scoped>
/* Add styling for the hidden class */
.navbar-hidden {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}
.container{
  display: flex;
  flex-direction: column;
}
/* Hide the navigation links on small devices by default */
@media (max-width: 991.98px) {
  .navbar-nav {
    display: none;
  }
  .img-logo{
    max-width: 60px;
    max-height: 60px;
  }
.container {
    flex-direction: column; /* Stack items vertically on small devices */
  }


  /* Show the navigation links when the menu is expanded */
  .navbar-toggler[aria-expanded="true"] + .collapse .navbar-nav {
    display: flex;
  }
}
</style>