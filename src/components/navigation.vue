<template>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0">
        <li class="nav-item">
          <router-link class=" nav-link" to="/">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link class=" nav-link" to="/about">About</router-link> 
        </li>
        <li class="nav-item">
          <router-link class=" nav-link" to="/product">Product</router-link> 
        </li>
        <li class="nav-item">
          <router-link class=" nav-link" to="/admin">Admin</router-link> 
        </li>
        <li class="nav-item">
          <router-link class=" nav-link" :to="{ name: 'adminUser'} ">user</router-link> 
        </li>
        <li class="nav-item">
          <router-link class=" nav-link" to="/contact">contact</router-link> 
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  </template>
<!--  

   <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/product">Product</router-link>  |
      <router-link to="/admin">Admin</router-link>  |
      <router-link :to="{ name: 'adminUser'} ">user</router-link> |
      <router-link to="/contact">contact</router-link> 


-->
  
