<template>
  <div>
    <div class="container mt-5">
      <div class="row pt-4">
        <div class="col-12" v-show="!products">
            <div class="alert alert-danger">
              <p><strong> Ops!</strong> Please run the server to see the server product and products details. <a href="https://github.com/mmonirul/ProductServer.NetCore2.1/tree/master" target="_blank" title="https://github.com/mmonirul/ProductServer.NetCore2.1/tree/master"><i class="fa fa-info-circle"></i> </a>
              or replace <b> 'productService'</b> with <b> 'productMockService'</b>
              </p>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-md-5" v-for="product in products" :key="product.id">
          <Product :product="product"/>
        </div>         
      </div>
    </div>        
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Product from "@/components/Product.Component.vue";
import { IProduct, IProductColor, IProductImage } from "@/Interfaces/Product";
import { productService } from "@/services/product.service";
import { productMockService } from "@/services/product.mockservice";

@Component({
  components: {
    Product
  }
})
export default class Products extends Vue {
  products: any = null;

  created() {
    productService
      .getProducts()
      .then(response => {
        this.products = response.data;
      })
      .catch(er => {
        console.log(er);
      });
  }
  mounted() {}
}
</script>


<style scoped lang="scss">
</style>
