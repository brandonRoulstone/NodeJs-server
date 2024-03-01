    <template> 
      <navigation/>
    <div class="container">
      <div class="d-flex" role="search">
        <input class="me-5 input" type="search" placeholder="Search by name or category" aria-label="Search" v-model="search" @change="searching()">
        <button @click="sortProducts()" >sort</button>
        
          </div>
    </div>

    <div v-if="$store.state.products.length !== 0">
      <div class="container">
      <div class="row">
          <div class="col-lg-4 pb-5 justify-content-center d-flex" v-for="item,index in searching() || sortProducts() " :key="item.prodID">
            <article class="cards">
      <div class="card-int">
          <span class="card__span">{{item.Category}}</span>
      <img :src="item.prodUrl" alt="" class="img img-fluid mt-5">
          <div class="card-data">
            <p class="title">{{ item.prodName }}
            </p>
            <!-- <p :id="'c'+index" >{{ descriptions[index] }}</p> -->
            <p>R{{ item.amount }}</p>
            <router-link @click="getproduct(item.prodID)" :to="{ name: 'productDetails', params: { prodID: item.prodID }} " class="btn btn-dark">details</router-link>
      
          </div>
      </div>
      </article>
          </div>
      </div>
      </div>
    </div>

<div  v-else>
<spinners/>
</div>

    

    





    <footers/>  

    </template>
    <script>
    import navigation from '@/components/navigation.vue';
    import footers from '@/components/footers.vue';
    import sweet from 'sweetalert';
    import spinners from '@/components/spinners.vue';








    export default {
        components: {
            navigation,
            footers,
            spinners
        
        },
        data() {
        
          return {
          search:''
        
          
        
          }
          
        },
        methods: {
          getproduct(prodID) {
              console.log(prodID);
              this.$store.dispatch('getproduct',prodID);
            },
            searching() {
    
        let storage = this.$store.state.products;
        let s = this.search;
        let v =   storage.filter(prod => {
          return prod.prodName.toLowerCase().includes(s.toLowerCase()) || prod.Category.toLowerCase().includes(s.toLowerCase());
        });
        if (v.length === 0) {
            // Display SweetAlert error when the filtered array is empty
            sweet({
              title: 'Error',
              text: 'No matching items found.',
              icon: 'error',
          
            });
          }
        console.log(v);
        return v;
      } ,
      sortProducts() {
        let products = this.$store.state.products
        if (products) {
          products.sort((a, b) => a.amount - b.amount);
        }
      }
    },
    
    

      
        computed:{
            getproducts(){
                this.$store.dispatch('getproducts')
            },
         
        
        },
        mounted(){
            this.getproducts
            this.searching()
          
            
        }

    }
    </script>
    <style scoped>

    p{
        color: #000;
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
      font-size: 13px;
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
      background-color: gray;
      padding: 5px 10px;
      border-radius: 15px;
      color: #000;
      font-weight: 800;
    }

    button {
      width: 5%;
      margin-bottom: 15px;
      background-image: linear-gradient(to right bottom, #5d0391, #7b05ae, #9b05cb, #bd00e7, #bd00e7);
      background-size: 200% 200%;
      border: none;
      margin-top: 1%;
      color: white;
      font-size: 14px;
      font-weight: bold;
      border-radius: 5px;
      transition: transform 0.1s ease-in;
    }

    button:active {
      transform: translateY(3px);
    }

    .cards:hover, button:hover {
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
    p{
      color: #000 !important;
    }

   

    .input {
      width: 22%;
      height: 40px;
      line-height: 18px;
      padding: 0 1em;
      padding-left: 1.5rem;
      border: 2px solid transparent;
      border-radius: 8px;
      outline: none;
      background-color: #f3f3f4;
      color: #f3f3f4;
      transition: 0.3s ease;
      margin-bottom: 1%;
      margin-left: 4.5%;
      margin-top: 1%;
    }

    .input::placeholder {
      color: #9e9ea7;
    }

    .input:focus,
    input:hover {
      outline: none;
      border-color: rgba(255, 255, 255, 0.982);
      background-color: #0e0e0e;
      box-shadow: 0 0 0 4px rgb(247 127 0 / 10%);
    }

   


      
    </style>