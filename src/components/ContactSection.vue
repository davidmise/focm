<template>
    <section id="contacts">
        <div class="container-fluid py-5 bg-dark ">
            <div class="row text-white">
                <div class="col-lg-12  mx-auto">
                    <div class="text-center pb-3">
                        <span class=" display-4 px-3 fw-bold"> Let's take take a step towards a better world. </span>
                    </div>     
                    <div class="container-fluid ">
                        <div class="row">
                            <div class="">
                                <div class="col-lg-12 mx-auto col-md-8 col-sm-6 mb-5">
                                    <div class="   rounded-5 shadow py-5 ">
                                        <div class=" text-center py-2 pb-2">
                                            <h5 class="mb-0" style="color: white;">Schedule a free discovery call with our Executive.
                                            </h5>
                                        </div>
                                        <!-- form Div -->
                                        <div class=" col-lg-6 mx-auto  pt-2 " style="color:aliceblue; font-size:large; ">
                                            <!-- form starts here -->
                                            <form @submit.prevent="submitForm" action="" method="POST">
                                                <!-- name -->
                                                <div class="row" >
                                                    <div class="col-lg-6">
                                                        <label for="name" class="form-label">First Name:</label>
                                                        <input v-model="formData.fname" required type="text" name="name" id="myForm" class="form-control my-2  py-2"/>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <label for="name" class="form-label">Last Name:</label>
                                                        <input v-model="formData.lname" required type="text" name="name" id="myForm" class="form-control my-2 py-2" />
                                                    </div>
                                                </div> <br>

                                                <!-- email input -->
                                                <label for="email">Email:</label>
                                                <input v-model="formData.email" required  type="email" name="email" id="email" class="form-control my-2  py-2" placeholder="Email"/> <br>

                                                <!--message-->
                                                <label for="textarea" class="form-label">Send us a Message:</label>
                                                <textarea v-model="formData.message" required name="" class="text-area rounded form-control" id="" cols="47" rows="5" placeholder="Message"></textarea>
                                               
                                            
                                            <!-- button -->
                                                <div class="text-center mt-5 mt-3" >
                                                    <button type="submit" class=" contact-btn rounded btn-lg px-5 rounded-5 fw-bold " style="border: 3px solid white;" name="submit">SUBMIT</button>
                                                </div> 
                                            
                                                <!-- <a class=" nav-link" href="https://www.overland.co.tz/Login/">
                                                    <span style="color: black;" > Do not have an Acount?</span>
                                                </a> -->
                                                <!-- <div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div> -->
                                            </form>                    
                                        </div>
                                    </div>  <!-- End of secondary color bg-->
                                </div><!-- End -->
                            </div>
                        </div>
                        <!-- <div class="text-center">
                            <span>
                                <strong class="h6 text-uppercase">
                                    contact us
                                </strong>
                            </span> <br>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg>  
                            </span>

                            <span>
                                <b>  Phone:</b> +255 67897565 |   +255 689354667 <br>
                            </span>

                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                </svg>
                            </span>
                            <span>
                                <b> Email:</b> business@focreativeminds.com <br>
                            </span>
                              
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>
                            </span>
                            <span>
                                <strong>
                                    WE ARE LOCATED AT SINZA PALESTINA DAR ES SALAAM, TANZANIA 
                                </strong>
                            </span>
                            
                       
                        </div>  -->
                    </div>
                </div>
            </div>
        </div><!-- End of dark bg --> 
    </section>
</template>

<script>
import axios from 'axios';
export default{
 data(){
    return {
        formData:{
            fname: "",
            lname:"",
            email:"",
            message:"",
        },
    }; //end of return 
 }, //end of data(){}

 methods:{
    async submitForm(){
        try {
        const response = await axios.post('[http://127.0.0.1:8000/api/contact', this.formData);
        console.log(response.data);
        
        // Handle success, e.g., show a success message to the user
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error, e.g., show an error message to the user
      }
    },
 }, // end of methods
} // end of export default{}


</script>