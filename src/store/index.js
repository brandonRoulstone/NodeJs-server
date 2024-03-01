import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
let web = 'https://nodejs-server-qp0i.onrender.com/products'
let webuser = 'https://nodejs-server-qp0i.onrender.com/users'

export default createStore({
  state: {
    products: [],
    product: [],
    admin: [],
    user: [],
    categroy:[]
  },
  getters: {
  },
  mutations: {
    setproducts(state,data){
      state.products = data
    },
    setoneproduct(state,data){
      state.product = data
    },
    setadmin(state,data){
      state.admin = data
    },
    setuser(state,data){
      state.user = data
    },
    setcategroy(state,data){
      state.categroy = data
    }
   

  },
  actions: {
  async  getproducts({commit}){
 

      let {data} = await axios.get(web)
      console.log(data);
      if(data){

        commit('setproducts',data)
      }
    
    },

   
    async getproduct({commit},prodID){
      console.log(prodID);
      let {data} = await axios.get(web+'/'+prodID);
      console.log(data);
      commit('setoneproduct',data)
    },
    async getadmin({commit}){
      let {data} = await axios.get(web)
      console.log(data);
      commit('setadmin',data)
    },
    async addproduct({commit},product){
      let {data} = await axios.post(web,product)
      console.log(data);
      // window.location.reload()
    },
    async deleteproduct({commit},prodID){
     let {data} = await axios.delete(web+'/'+prodID)
     console.log(data);

   
    },
    async updateproduct({commit},update){
      let {data} = await axios.patch(web+'/'+ update.prodID,update)
      console.log(data);
      // window.location.reload()
    },
 
    //users
 async getuser({ commit }) {
  let { data } = await axios.get(webuser); 
  console.log(data);
  commit('setuser', data);
},

  async adduser({ commit }, newuser) {  
    let { data } = await axios.post(webuser, newuser); 
    console.log(data);  
    // window.location.reload(); 
  },
 async deleteuser({ commit }, userID) {
   let { data } = await axios.delete(webuser + '/' + userID); 
   console.log(data);
  //  window.location.reload(); 
 },
 async updateuser({ commit }, update) {
   let { data } = await axios.patch(webuser + '/' + update.userID, update); 
   console.log(data);
  //  window.location.reload();  
 }
 },
  

  modules: {
  }
})
