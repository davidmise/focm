<template>
    <section class="slideshow">
        <div id="carouselExampleControls" class=" slideshow carousel slide  shadow-lg carousel-fade " data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">     
            <div v-for="(image, index) in images" :key="index" :class="['carousel-item slide ', index === 0 ? 'active' : '']">
                <img :src="image" class=" d-block w-100 slideshow"  alt="Slide" />
                <div class="top">
                 
                </div>
                    <div  class="centered ">
                        <div class="row text-center text-white">
                            <div class="col-lg-12  ">
                                <strong class="fw-bold vw-4 sm-txt-4"> Creative Thinking.  </strong> <br>
                                    <span class="vw-3 sm-txt-3"> 
                                        Introducing new ideas or methods  
                                        Characteristics of One Person or thing, and 
                                        so serving to distinguish it from others.
                                    </span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next "  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon"  aria-hidden="true"></span>
            <span class="visually-hidden" >Next</span>
        </button>
    </div>
    </section>
   
</template>
<script>
    import img1 from '../assets/images/carousel/1.jpg';
    import img2 from '../assets/images/carousel/2.jpg';
    import img3 from '../assets/images/carousel/3.jpg';
    import img4 from '../assets/images/carousel/4.jpg';
    import img5 from '../assets/images/carousel/5.jpg';
    export default {
        data() {
            return {
            images: [img1, img2, img3, img4, img5]
            }
        },
    }
</script>
<style>
/* Hide the navigation links on small devices by default */
@media (max-width: 991.98px) {
 .slideshow{
    height: 100vh;
    background: #000;
 }
 .sm-txt-3{
    font-size: 3vh;

 }
 .sm-txt-4{
    font-size: 4vh;

 }
 
}
</style>