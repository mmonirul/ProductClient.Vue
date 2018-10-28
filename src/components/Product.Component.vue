<template>
    <div class="card mb-4 shadow-sm p-3 border-0 rounded-0" 
    :class="{' bg-turquoise': product.tag == 'Nyhet','panel-red': product.tag == 'Kampanj','panel-light-green': product.tag == 'Prissänkt'}">
      <div class="pill pill--ellipsis" 
      :class="{'pill-bg-blue': product.tag == 'Nyhet','pill-bg-red': product.tag == 'Kampanj','pill-bg-green': product.tag == 'Prissänkt'}">
          {{product.tag}}
      </div>
        <router-link :to="'/products/' + product.productId" class="" title="Product details.."> 
          <img class="card-img-top mt-5 mb-2 rounded-0 image-fluid" :src="product.defaultImageUrl">
        </router-link>
      <div class="card-body text-center pb-0">
        <div style="height: 250px; overflow: auto;">
          <div class="card-text">
            {{product.brand}} <br>
            <h4 class="display-7">{{product.name}}</h4>
          </div>
          <p>
            {{product.description}}
          </p>
          <p>
              <span class="display-6">{{product.price}} </span>kr/mån <br>
              Med {{product.memory}} GB
          </p>
        </div>
        <!-- <router-link :to="'/products/' + product.productId" class="btn btn-primary mt-2 px-4" title="Product details.." name="product"> Välj</router-link> -->
        <button class="btn btn-primary btn-lg px-5" @click="viewProductDetails"> Välj</button>
      </div>
    </div>       
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import router from "@/router";

@Component
export default class Product extends Vue {
  @Prop()
  product!: any;

  mounted() {}

  viewProductDetails() {
    router.replace("products/" + this.product.productId);
  }
}
</script>


<style scoped lang="scss">
// copied from telenor.se
.bg-turquoise {
  background-color: #eaf3f5;
}

.pill-bg-blue {
  background-color: #9ce7f5;
}
.pill-bg-red {
  background-color: #ffb4b4;
}
.pill-bg-green {
  background-color: #b0f0b2;
}
.pill {
  position: absolute;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: auto;
  left: 50%;
  top: -22px;
  z-index: 1;
  border-radius: 22px;
  padding: 9px 32px 0;
  height: 44px;
  text-align: center;
  white-space: nowrap;
  color: #1a1a1a;
  font-size: 16px;
  line-height: 25px;
}
.pill--ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
//
.panel-light-green {
  background-color: rgba(176, 240, 178, 0.32941176470588235);
}
.panel-red {
  background-color: #f7eded;
}
</style>
