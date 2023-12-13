<template>
        <div>
            <div id="carouselExampleControls" class="carousel slide  shadow-lg carousel-fade " data-bs-ride="carousel">
            <div class="carousel-inner">     
                <div v-for="(image, index) in images" :key="index" :class="['carousel-item slide ', index === 0 ? 'active' : '']">
                    <img :src="image" class=" d-block w-100"  alt="Slide" />
                    <div class="top">
                        <NavigationBar/>
                    </div>
                        <div class="centered ">
                            <div class="row text-center text-white">
                                <div class="col-lg-12 mx-auto">
                                    <strong class="fw-bold vw-4"> Creative thinking.  </strong> <br>
                                        <span class="vw-3"> 
                                            Introducing new ideas or methods  
                                            Characteristics of One Person or thing, and 
                                            so serving to distinguish it from others
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
        </div>
</template>
<script>
import NavigationBar from '@/components/NavigationBar.vue'

import img1 from '../assets/images/carousel/1.png';
import img3 from '../assets/images/carousel/3.png';
import img2 from '../assets/images/carousel/2.png';
import img4 from '../assets/images/carousel/4.png';
export default {
  data() {
    return {
      images: [img1,img2,img3,img4]
    }
  },
  components:{
    NavigationBar
  }
}
</script>