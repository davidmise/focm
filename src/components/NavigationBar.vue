<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top opacity-75" >
        <div class="container-fluid">
          <!-- <a class="navbar-brand" href="#">Logo</a> -->
          <RouterLink to="/"  class="navbar-brand" aria-current="page" href="#experience">
             <img src="../assets/images/logo/logo.svg" class="img-fluid" alt="fo logo"> 
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
                <!-- <RouterLink to="/"  class="nav-link navbar-brand fw-bold active d-flex justify-content-center text-white  text-uppercase" aria-current="page" href="#experience"></RouterLink> -->
                <a   class="nav-link navbar-brand fw-bold active d-flex justify-content-center text-white text-uppercase" aria-current="page" href="#contacts">Contacts</a>
            </div>
        </div>
        </div>
      </nav>
</template>