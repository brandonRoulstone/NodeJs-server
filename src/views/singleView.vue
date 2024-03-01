<template>
    <navigation/>
    <div class="container d-flex justify-content-center mt-5">
      <div class="row">
        <div class="col-md-4" v-for="item in $store.state.product" :key="item.prodID">
          <article class="cards">
            <div class="card-int">
              <span class="card__span">{{ item.Category }}</span>
              <img :src="item.prodUrl" alt="" class="img img-fluid mt-5">
              <div class="card-data">
                <p class="title" id="p">{{ item.prodName }}</p>
                <p :id="'c'+ index" id="p">{{ descriptions[item.prodID-1] }}</p>
                <p id="p">R{{ item.amount }}</p>
                  <button class="btn">purchase</button>
            
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <footers />
  </template>
  
  <script>
  import navigation from '@/components/navigation.vue';
  import footers from '@/components/footers.vue';
  
  export default {
    components: {
      navigation,
      footers
    },
    data() {
      return {
        descriptions: [
        `The JBL speaker combines compact design with powerful audio performance, making it a perfect portable companion for immersive sound on the go.`,
        `The Volcano Bazooka unleashes explosive power with its cutting-edge design, propelling molten fury in a controlled burst to conquer any geological challenge.`,
        `Beats headphones offer a sleek and stylish audio experience, delivering powerful bass and crisp sound quality, making them a popular choice among music enthusiasts and fashion-conscious consumers alike.`,
        `The Xbox One Series S is a compact and powerful gaming console that delivers high-quality graphics, smooth gameplay, and a vast library of games in a digital-only format.`,
        'The PlayStation 5 offers an immersive gaming experience with powerful hardware, stunning graphics, and innovative features for enthusiasts.',
        'The Razer gaming laptop offers top-notch performance, impressive visuals, and a sleek design for an immersive gaming experience.',
        'Gaming laptop with powerful AMD Ryzen 7 cpu for top-tier gaming, featuring advanced technology and quality components.',
        'The LG O-LED Curved TV offers an immersive viewing experience with its vibrant OLED display and sleek, curved design.',
        'TSamsung UHD TV offers stunning 4K resolution, vibrant colors, and smart features for an immersive and high-quality viewing experience.',
        'Samsung Galaxy S24 Ultra: Advanced camera, refined design, top-notch performance for a true flagship experience.',
        'Sony Noise-Canceling Headphones provide premium sound with advanced noise cancellation.',
        'The iPhone 15 Pro Max features a sleek design, an advanced triple-lens camera system, and a powerful A16 Bionic chip for enhanced performance.',
        // Add more descriptions as needed
      ],
      };
    },
    computed: {
      getproduct() {
        this.$store.dispatch("getproduct", this.$route.params.prodID);
      },
    },
    mounted() {
      this.getproduct; // Corrected the function invocation
    },
  }
  </script>
  
  <style scoped>
p{
    color: #000 !important;
}
.cards {
  width: 300px;
  padding: 10px;
  background-image: linear-gradient(to right bottom, #fa11b0, #7b05ae, #fc06b6, #f5ecf7, #f70ea5);
  background-size: 200% 200%;
  border-radius: 12px;
}

.card-int {
  position: relative;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
  border-radius: 6px;
  background-color: white;
}

.img {
  width: 95%;
  object-fit:contain;
  height: 175px;
  background-color: gray;
}

.title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}

.card-data {
  padding: 20px;
  font-size: 14px;
}

.card__span {
  font-family: 'Lucida Sans' sans-serif;
  font-size: 11px;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  padding: 5px 10px;
  border-radius: 15px;
  color: #000;
}

.btn {
  width: 100%;
  margin-top: 15px;
  background-image: linear-gradient(to right bottom, #5d0391, #7b05ae, #9b05cb, #bd00e7, #bd00e7);
  background-size: 200% 200%;
  border: none;
  padding: 8px 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  transition: transform 0.1s ease-in;
}

.btn:active {
  transform: translateY(3px);
}

.cards:hover, .btn:hover {
  animation: gradient 0.8s ease-in 1;
}

@keyframes gradient {
  0% {
    background-position: 200% 200%;
  }

  100% {
    background-position: 400% 400%;
  }
}


  </style>
  