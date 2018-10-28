<template>
  <div>

    <!-- Doing nothing  -->
    <Carousel/>
    
      <div class="container-fluid bg-dark text-light text-center">
        <div class="row mt-2">
          <div class="col-12 p-3 mb-2">
            <div class="container">
              <div class="col-12">
                <h1 class="mt-0">Mini description</h1>
                <p class="px-4">Please scroll down and click 'Välj' 
                  In the first one, I've added three different pictures based on color (image urls form telenor.se > mobile), storage capacity and also subscription option

                  You might add more products. Please note, there is connetion between color. Color object hold imageId (optional)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- I'm responsible for all grid products -->
    <Products /> 
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import * as Enumerable from "linq";

import Carousel from "@/components/Carousel.Component.vue";
import Products from "@/components/Products.Component.vue";

@Component({
  components: {
    Carousel,
    Products
  }
})
export default class Home extends Vue {
  created() {
    document.title = "Alla mobiler | iPhone, Samsung och Sony Xperia";
    //axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
    //   var data1 = Enumerable.from(response.data).first();
    //   console.log("Axois installed! & linqjs ", data1);
    // });
  }
}
</script>
