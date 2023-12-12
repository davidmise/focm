<template>
    <nav class="navbar nav navbar-expand-lg  ">
        <div class="container-fluid">
          <!-- <a class="navbar-brand" href="#">Logo</a> -->
          <RouterLink to="/"  class="navbar-brand" aria-current="page" href="#experience">
             <img src="../assets/images/logo/fo.jpg" width="150" height="150" class="img-fluid" alt="fo logo"> 
             <!-- <span> Overland </span> -->
            </RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse nav-justified  justify-content-lg-center " id="navbarNavAltMarkup">
            <div class="navbar-nav  " >
                <RouterLink to="/"  class="nav-link navbar-brand active  fw-bold d-flex justify-content-center" aria-current="page" href="#experience">  Branding </RouterLink>
                <RouterLink to="/"  class="nav-link navbar-brand fw-bold  d-flex justify-content-center" aria-current="page" href="#experience"> Content </RouterLink>
                <RouterLink to="/"  class="nav-link navbar-brand fw-bold active  d-flex justify-content-center" aria-current="page" href="#experience">Design</RouterLink>
                <RouterLink to="/"  class="nav-link navbar-brand fw-bold active d-flex justify-content-center" aria-current="page" href="#experience">photography</RouterLink>
                <RouterLink to="/"  class="nav-link navbar-brand fw-bold active d-flex justify-content-center" aria-current="page" href="#experience">Contacts  </RouterLink>
            </div>
        </div>
        </div>
      </nav>
</template>