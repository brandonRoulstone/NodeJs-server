<template>
    <div v-if="!loaded" id="spin">
        <div class="spinner"></div>
    </div>
</template>
<script>
export default {
 
    data() {
        return {
            loaded: false
        }
    },
    mounted() {
     setTimeout(() => {
           this.loaded = true
     }, 2000);
    }
    
}
</script>
<style>
#spin{
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
}
.spinner {
 width: 56px;
 height: 56px;
 border: 11px gray double;
 border-left-style: solid;
 border-radius: 50%;
 animation: spinner-aib1d7 0.75s infinite linear;
}

@keyframes spinner-aib1d7 {
 to {
  transform: rotate(360deg);
 }
}

</style>