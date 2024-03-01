<template>
	<navigation />
	


  <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6" id="overlay">
            <img src="https://cdn-images.imagevenue.com/6e/85/aa/ME17P63J_o.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>

            <div class="col-lg-6">

                <div id="card">
                    <div id="loader">
                    <p>Quality</p>
                    <div class="words">
                        <span class="word">Gaming</span>
                        <span class="word">Cellphones</span>
                        <span class="word">Speakers</span>
                        <span class="word">Televisions</span>
                        <span class="word">Gaming</span>
                    </div>
                    </div>
                </div>

                <h1 class="display-5 fw-bold lh-1 mb-3 text-white">Only Electonics inc.</h1>

                <p class="lead text-white">High quality products made just for you</p>

                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                   
                  <router-link to="/about" class="btn btn-outline-light btn-lg px-4 me-md-2">about</router-link>
                  <router-link to="/product" class="btn btn-outline-secondary btn-lg px-4">product</router-link>


                </div>


                
                
                
                <div class="text-center pt-3 text-white fw-bold">
                    Featured brands:
                </div>
                <div class="d-flex overflow-scroll pt-3 container">
                    <img class="img-fluid h-50 w-50 px-4" src="https://cdn-images.imagevenue.com/de/b2/d0/ME17P74S_o.png" alt="">
                    <img class="img-fluid h-50 w-50 px-4" src="https://cdn-images.imagevenue.com/59/bf/cc/ME17P754_o.png" alt="">
                    <img class="img-fluid h-50 w-50 px-4" src="https://cdn-images.imagevenue.com/03/b0/7a/ME17P759_o.png" alt="">
                    <img class="img-fluid h-50 w-50 px-4" src="https://cdn-images.imagevenue.com/ce/50/c3/ME17P75C_o.png" alt="">
                    <img class="img-fluid h-50 w-50 px-4" src="https://cdn-images.imagevenue.com/e1/cb/7a/ME17P75E_o.png" alt="">
                    <img class="img-fluid h-50 w-50 px-4" src="https://cdn-images.imagevenue.com/5f/3f/b6/ME17P75G_o.png" alt="">
                </div>

            </div>

        </div>
        
      </div>
      <footers/>

  </template>
  
  <script>
  import navigation from "@/components/navigation.vue";
  import footers from "@/components/footers.vue";
  
  
  
  export default {
	components: {
	  navigation,
    footers
	 
	},
	data() {
    return {
    
    };
  },
  mounted() {
 
  },
  methods: {
 

   
  }
  };
  
  </script>
  
  <style>

  ::-webkit-scrollbar{
    display: none;
}


body{
    background: linear-gradient( to right, rgba(0, 0, 0, 0.988), rgb(72, 70, 70) );
}


#card {
    --bg-color: #ffffff00;
    background-color: var(--bg-color);
    text-align: start;
}
#loader {
    color: rgb(255, 255, 255);
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 25px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
}
  
.words {
    overflow: hidden;
    position: relative;
}
.words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
}
  
.word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #956afa;
    animation: spin_4991 11s infinite;
}
  
  @keyframes spin_4991 {
    10% {
      -webkit-transform: translateY(-102%);
      transform: translateY(-102%);
    }
  
    25% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  
    35% {
      -webkit-transform: translateY(-202%);
      transform: translateY(-202%);
    }
  
    50% {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }
  
    60% {
      -webkit-transform: translateY(-302%);
      transform: translateY(-302%);
    }
  
    75% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
    }
  
    85% {
      -webkit-transform: translateY(-402%);
      transform: translateY(-402%);
    }
  
    100% {
      -webkit-transform: translateY(-400%);
      transform: translateY(-400%);
    }
  }
  </style>
  