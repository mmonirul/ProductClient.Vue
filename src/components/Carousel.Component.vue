<template>
<div class="product-presentation-block">
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Alla mobiler</h1>
      <p class="lead">Tre favoriter hos våra kunder just nu. Fler mobiler hittar du längre ner.</p>
  </div>

<div class="container">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 bg-transparent border-0 align-items-center">
          <div class="pill" style="background-color: #9ce7f5; border-color:#9ce7f5;">
            Nyhet
          </div>
          <div class="card-body">
            
            <img alt="Vue logo" src="../assets/apple-iphone-xr-red-grid-258x310-gold.png">
            <!-- <img src="https://www.telenor.se/globalassets/mediabibliotek/produktbilder/mobiler/apple/iphone-xr/grid/apple-iphone-xr-red-grid-258x310-gold.png?quality=100&height=310" class="img-fluid rounded mx-auto d-block" alt="..."> -->
            <h2 class="m-2">iPhone XR</h2>
          </div>
        </div>
        <div class="card mb-4 bg-transparent border-0 align-items-center">
          <div class="pill" style="background-color: #b0f0b2; border-color:#b0f0b2;">
            Prissänkt
          </div>
          <div class="card-body">
            <img alt="Vue logo" src="../assets/apple-iphone-x-silver.png">
            <!-- <img src="https://www.telenor.se/globalassets/mediabibliotek/produktbilder/mobiler/apple/iphone-x/grid/produktbild-grid-apple-iphone-x-silver.png" class="img-fluid rounded mx-auto d-block" alt="..."> -->
            <h2 class="m-2">iPhone X</h2>
          </div>
        </div>           
        <div class="card mb-4 bg-transparent border-0 align-items-center">
          <div class="pill" style="background-color: #ffb4b4;">
            Kampanj
          </div>
          <div class="card-body">
            <img alt="Vue logo" src="../assets/samsung_s9_258x310.png">
            <!-- <img src="https://www.telenor.se/globalassets/mediabibliotek/produktbilder/mobiler/samsung/galaxy-s9/gridbild/samsung_s9_258x310.png" class="img-fluid rounded mx-auto d-block" alt="..."> -->
            <h2 class="m-2"> Galaxy S9</h2>
          </div>
        </div>
             
      </div>
    </div>


</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Carousel extends Vue {}
</script>


<style scoped lang="scss">
.container {
  max-width: 960px;
}
.pricing-header {
  max-width: 700px;
}
.card-deck .card {
  min-width: 220px;
}

.product-presentation-block {
  color: #1a1a1a;
  font-weight: 300;
  font-size: 16px;
  font-family: Roboto, arial, sans-serif;
  background-color: #eaf3f5;
}
.pill {
  border-radius: 22px;
  padding: 9px;
  height: 44px;
  text-align: center;
  white-space: nowrap;
  color: #1a1a1a;
  font-size: 16px;
  line-height: 25px;
  width: 40%;
}
</style>
