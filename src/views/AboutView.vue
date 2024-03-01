<template>
  <navigation/>
  <div class="about">
    <div class="aboutbox">
      <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="my-4" id="heading">About OnlyElectronics</h1>
        <p id="para">Welcome to OnlyElectronics, your one-stop destination for cutting-edge electronic products. At OnlyElectronics, we are committed to providing the latest and most innovative electronic devices to meet the diverse needs of our customers.</p>

        <p id="para">Our journey began with a passion for technology and a vision to enhance the way people live, work, and connect. With a team of dedicated professionals, we strive to deliver high-quality products that combine functionality, style, and reliability.</p>

        <p id="para">Key features of OnlyElectronics:</p>
        <ul>
          <li>Wide Range: Explore a vast collection of electronic products, including smartphones, laptops, smartwatches, audio devices, and much more.</li>
          <li>Quality Assurance: We prioritize quality, ensuring that each product undergoes rigorous testing to meet industry standards.</li>
          <li>Customer Satisfaction: Our commitment to customer satisfaction is paramount. We aim to provide excellent service and support throughout your shopping experience.</li>
        </ul>

        <p id="para">Whether you are a tech enthusiast, a professional, or someone looking for the latest gadgets, OnlyElectronics has something for everyone. Join us on this exciting journey as we continue to push the boundaries of technology and bring you the best electronic innovations.</p>

        <p id="para">Thank you for choosing OnlyElectronics!</p>
      </div>
    </div>
  </div>
    </div>
  </div>
  <footers/>
</template>

<script>
import navigation from '@/components/navigation.vue';
import footers from '@/components/footers.vue';

export default {

  components: {
    navigation,
    footers
  }

}

</script>

<style>


.aboutbox {
  max-width: 800px !important; /* Adjust the maximum width based on your design */
  margin: auto !important; /* Center the box horizontally */
  padding: 20px !important; /* Add some padding for better spacing */
  background: rgba(0, 0, 0, 0.2) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.about {
  display: flex;
  justify-content: center;
}

#heading {
  color:rgb(78, 72, 72)!important;
  font-weight: 800;
}

#para{
  font-weight: 800 !important;
  color: white !important;
}
li{
  font-weight: 700 !important;
  color: greenyellow !important;
}
</style>
