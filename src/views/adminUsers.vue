<template>
    <navigation/>
    <div class="table-responsive"> 
    <div v-if="$store.state.user.length !== 0">

        <table class="table table-bordered table-hover table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>userRole</th>
                    <th>emailAdd</th>
                    <th>userProfile</th>
                    <th>delete</th>
                    <th>edit</th>
                    
                </tr>
            </thead>
            <tbody v-for="item in $store.state.user" :key="item.userID">
                <tr>
                    <td>{{item.userID}}</td>
                    <td>{{item.firstName}}</td>
                    <td>{{item.lastName}}</td>
                    <td>{{item.Gender}}</td>
                    <td>{{item.userAge}}</td>
                    <td>{{item.userRole}}</td>
                    <td>{{item.emailAdd}}</td>
                    <td>{{item.userProfile}}</td>
                    <td><button @click="deleteuser(item.userID)" id="btn">delete</button></td>
                    <td><button @click="updateuser(item.userID)" id="btn">edit</button></td>
    
                    
                </tr>
            </tbody>
        </table>
    </div>         
           
    <div v-else>
<spinners/>
    </div>
            <div>
        <!-- <input type="number" placeholder="id" v-model="productID"> -->
        <input id="input" type="text" placeholder="firstname" v-model="firstName">
        <input id="input" type="text" placeholder="surname" v-model="lastName">
        <input id="input" type="text" placeholder="gender" v-model="Gender">
        <input id="input" type="number" placeholder="userage" v-model="userAge">
        <input id="input" type="text" placeholder="role" v-model="userRole">
        <input id="input" type="text" placeholder="email" v-model="emailAdd">
        <input id="input" type="text" placeholder="userProfile" v-model="userProfile">
        <input id="input" type="text" placeholder="password" v-model="userPass">
        <button @click="adduser()" id="btn">add</button>
    </div>
       
       
    </div>
</template>
<script>
import navigation from '@/components/navigation.vue';
import spinners from '@/components/spinners.vue';
import sweet from 'sweetalert';
export default {
    components: {
        navigation,
        spinners
    },
    data() {
        return{
            firstName: '',
            lastName: '',
            Gender: '',
            userAge: '',
            userRole: '',
            emailAdd: '',
            userProfile:'',
            userPass:'',
        }
    },
    methods: {
        adduser() {
            console.log(this.$data);
            this.$store.dispatch('adduser',this.$data)
            .then(() => {
      // Use SweetAlert for confirmation
      sweet({
        title: "added?",
        text: "You added user!",
        type: "success",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "add user!",
        closeOnConfirm: true,
      })
        .then(() => {
          // Reload the page after successful deletion
          window.location.reload();
        })
        .catch((error) => {
          // Handle any errors that occurred during the SweetAlert
          console.error("Error with SweetAlert:", error);
        });
    })
    .catch((error) => {
      // Handle any errors that occurred during the delete action
      console.error("Error deleting product:", error);
      sweet({
        title: 'Error',
        text: 'An error occurred while deleting the product.',
        icon: 'error',
        timer: 2000
      });
    });
        },
        deleteuser(userID) {
          this.$store.dispatch('deleteuser',userID)
          .then(() => {
      // Use SweetAlert for confirmation
      sweet({
        title: "Are you sure?",
        text: "You will not be able to recover this file!",
        type: "danger",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: true,
      })
        .then(() => {
          // Reload the page after successful deletion
          window.location.reload();
        })
        .catch((error) => {
          // Handle any errors that occurred during the SweetAlert
          console.error("Error with SweetAlert:", error);
        });
    })
    .catch((error) => {
      // Handle any errors that occurred during the delete action
      console.error("Error deleting product:", error);
      sweet({
        title: 'Error',
        text: 'An error occurred while deleting the product.',
        icon: 'error',
        timer: 2000
      });
    });
        },
        updateuser(id){
            let edit = {
                userID: id,
                firstName: this.firstName,
                lastName: this.lastName,
                Gender: this.Gender,
                userAge: this.userAge,
                userRole: this.userRole,
                emailAdd: this.emailAdd,
                userProfile: this.userProfile,
                userPass: this.userPass,
            }
            this.$store.dispatch('updateuser',edit)
            .then(() => {
      // Use SweetAlert for confirmation
      sweet({
        title: "add?",
        text: "You added user!",
        type: "success",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "edit",
        closeOnConfirm: true,
      })
        .then(() => {
          // Reload the page after successful deletion
          window.location.reload();
        })
        .catch((error) => {
          // Handle any errors that occurred during the SweetAlert
          console.error("Error with SweetAlert:", error);
        });
    })
    .catch((error) => {
      // Handle any errors that occurred during the delete action
      console.error("Error deleting product:", error);
      sweet({
        title: 'Error',
        text: 'An error occurred while deleting the product.',
        icon: 'error',
        timer: 2000
      });
    });
        }
     
    },
    computed:{
        getuser() {
             this.$store.dispatch('getuser')
        }
    },
    
    mounted() {
        this.getuser
    }

    
}
</script>
<style scoped>
 #btn{
        margin-top: 20px !important;
        margin-bottom: 20px !important;
        width: 100px !important;
        height: 25px !important;
        border-radius: 10px !important;
        border: 1px solid black !important;
        background-color: white !important;
        color: black !important;
        font-size: 15px !important;
        font-weight: bold !important;
        cursor: pointer !important;
    }
    #input {
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
  color: white;

}
#input::placeholder{
    color: gray ;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>