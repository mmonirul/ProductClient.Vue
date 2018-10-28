<template>
  <div class="product">
    <div class="container">
      <div class="row">
          <div class="col-lg-7 col-sm-12 order-lg-1 order-md-2 pt-4">
            <div class="row">

              <div class="col-lg-12 d-none d-lg-block">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb bg-white">
                    <li class="breadcrumb-item"><a href="#">Start</a></li>
                    <li class="breadcrumb-item"><a href="#">Handla</a></li>
                    <li class="breadcrumb-item"><a href="#">Mobiler</a></li>
                    <li class="breadcrumb-item"><a href="#">{{product.brand}}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{product.name}}</li>
                  </ol>
                </nav>
              </div>
              <div class="col-lg-12 d-none d-lg-block">
                <h2 class="display-5 mb-3">{{product.name}}</h2>
                <p><i class="fa fa-check mr-2" aria-hidden="true"></i> Ingen bindningstid</p>
                <p><i class="fa fa-check mr-2" aria-hidden="true"></i> Fri frakt och snabba leveranser</p>
                <p><i class="fa fa-check mr-2" aria-hidden="true"></i> Prova oss i 14 dagar</p>
                <hr class="mt-3">
              </div>

              <div class="col-lg-12 mt-2">
                <h5 class="mb-3"> Välj färg & minne:</h5>
                <div class="row">
                  <div class="col-md-6" v-if="product.colors">
                    <div class="custom-control custom-radio custom-control-inline" 
                    v-for="color in product.colors" :key="'color'+color.colorId">
                      <input type="radio" :id="'color'+color.colorId" name="color" class="custom-control-input" 
                      :value="color" v-model="defaultSelectedColor">
                      <label class="custom-control-label" :for="'color'+color.colorId">{{color.name}}</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="custom-control custom-radio custom-control-inline" 
                    v-for="memory in storageOptions" :key="'memory'+memory.id">
                      <input type="radio" :id="'memory'+memory.id" name="storage" class="custom-control-input"  
                      :value="memory" v-model="selectedStorageCapacity">
                      <label class="custom-control-label" :for="'memory'+memory.id">{{memory.capacity}} GB</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-12 mt-2">
                <hr class="mt-3">
                <h5 class="mb-3"> Välj hur du vill köpa din mobil </h5>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="custom-control custom-radio mt-2" 
                    v-for="subscription in subscriptionOptions" :key="subscription.id">
                      <input type="radio" :id="subscription.id" name="subcription" class="custom-control-input"
                      :value="subscription.id" v-model="selectedSubscriptionId">
                      <label class="custom-control-label" :for="subscription.id">
                        {{subscription.description}}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-12 mt-5 mb-4" v-show="selectedSubscriptionId == 501">
                <div class="card shadow-sm rounded-0">
                  <div class="popup-dialog-arrow"></div>
                  <div class="card-body">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="custom-control custom-radio">
                            <input type="radio" id="buyoption1" name="option1" class="custom-control-input" value="" checked>
                            <label class="custom-control-label card-subtitle mb-2 text-muted" for="buyoption1">Köp mobil och förnya ditt abonnemang</label>
                          </div>
                          <div class="custom-control custom-radio">
                            <input type="radio" id="buyoption2" name="option2" class="custom-control-input">
                            <label class="custom-control-label card-subtitle mb-2 text-muted" for="buyoption2">Byt mobil med Telenor Change</label>
                          </div>
                          <div class="custom-control custom-radio">
                            <input type="radio" id="buyoption3" name="option3" class="custom-control-input">
                            <label class="custom-control-label card-subtitle mb-2 text-muted" for="buyoption3">Köp mobil och lägg till en extra användare</label>
                          </div>
                        </div>                      
                        <div class="col-lg-12 mt-3">
                          <div class="bg-light p-3">
                            <p class="font-weight-bold">
                              När du går vidare med ditt köp kommer du att uppgraderas till något av våra nya abonnemang. 
                            </p>
                            <p>
                              Om du har Telenor Familj sedan tidigare följer dina familjemedlemmar med automatiskt. Våra nya abonnemang har flera nya fördelar för dig som kund:
                            </p>
                          </div>
                        </div>                      

                      </div>

                  </div>
                </div>              
              </div>

              <div class="col-lg-12  order-lg-5 col-md-12 order-md-5 mt-3 d-block d-lg-none">
                  <button class="btn btn-primary btn-lg btn-block mt-4" @click.prevent="Greetings()"> Gå Vidare</button>
              </div>            
            </div>

          </div>

          <div class="col-lg-5 col-sm-12 order-lg-2 order-md-1 bg-light p-5" style="background-color: #f5f5f5; border: 1px solid #d6d6d6;">
            <div class="row">
              <div class="col-lg-12 order-lg-1 col-md-7 order-md-1 text-center">
                <img :src="imageUrlComputed" class="img-fluid" alt="Responsive image">
                <div class="text-center py-3">
                  <i class="fa fa-circle text-success mr-2" aria-hidden="true"></i>
                  I lager. Leverans 1-2 dagar.
                </div>
                <hr class="my-3 d-none d-lg-block">
              </div>
              <div class="col-lg-12 order-lg-2 col-md-7 order-md-3 mt-lg-2">
                <h5 class="mb-3"> Sammanställning</h5>

                <div class="media mb-3">
                  <img class="mr-2" :src="imageUrlComputed" alt="" style="max-width: 40px;">
                  <div class="media-body">
                    <div>
                      <span class="mt-0 h6 float-left">iPhoneX</span>
                      <span class="mt-0 float-right">{{totalPriceComputed}} kr/mån</span>
                      <div class="clearfix"></div>
                      <span class="" style="font-size: 13px;"> Silver {{selectedStorageCapacity.capacity}} GB</span>
                    </div>
                  </div>
                </div>
                <div class="media">
                  <img class="mr-2" src="https://www.telenor.se/globalassets/mediabibliotek/ikoner--grafik/ikoner/produktsidakopflode/obegransat-2018.svg" alt="" style="max-width: 40px;">
                  <div class="media-body">
                    <div>
                      <span class="mt-0 h6 float-left">Abonnemang</span>
                      <span class="mt-0 float-right">569 kr/mån</span>
                      <div class="clearfix"></div>
                      <span class="" style="font-size: 13px;"> Obegränsat</span>
                    </div>
                  </div>
                </div>
                <hr class="mt-2">
              </div>

              <div class="col-lg-12 order-lg-3 col-md-5 order-md-4 mt-lg-3  mt-mb-0">
                <h5 class="mb-3"> Att betala per månad</h5>
                  <div class="media mb-3">
                    <div class="media-body pb-mb-2">
                        <div>
                          <span class="mt-0 h6 float-left">Mån 1-24</span>
                          <span class="mt-0 float-right"><span class="display-6">1089</span> kr/mån</span>
                          <div class="clearfix"></div>
                        </div>
                        <div>
                          <span class="mt-0 h6 float-left">Därefter</span>
                          <span class="mt-0 float-right"><span class="display-7">520</span> kr/mån</span>
                          <div class="clearfix"></div>
                          <span class="" style="font-size: 10px;"> Minsta totalkostnad: 13 049 kr</span>
                        </div>
                    </div>
                  </div>
                  <hr class="mt-4">
                  
              </div>
              <div class="col-lg-12 col-md-5 order-lg-4 order-md-2 mt-lg-3 mt-md-2">
                  <h2 class="display-5 mb-3 d-lg-none d-md-block">{{product.name}}</h2>
                  <p><i class="fa fa-check" aria-hidden="true"></i> Ingen bindningstid</p>
                  <p><i class="fa fa-check" aria-hidden="true"></i> Fri frakt och snabba leveranser</p>
                  <p><i class="fa fa-check" aria-hidden="true"></i> Prova oss i 14 dagar</p>
              </div>
              <div class="col-lg-12  order-lg-5 col-md-12 order-md-5 mt-3 d-none d-lg-block">
                  <button class="btn btn-primary btn-lg btn-block mt-4" @click.prevent="Greetings()"> Gå Vidare</button>
              </div>
            </div>
          </div>
      </div>
    </div> 
    <!-- end container -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  IProduct,
  IProductImage,
  IProductColor,
  ISubscriptionOption
} from "@/Interfaces/Product";
import * as Enumerable from "linq";
import { productService } from "@/services/product.service";
import { productMockService } from "@/services/product.mockservice";

@Component({
  components: {}
})
export default class ProductDetail extends Vue {
  product: any = {};
  defaultSelectedColor: any = null;

  subscriptionOptions: any = [];
  selectedSubscriptionId = 501;

  storageOptions: any = [];
  selectedStorageCapacity: any = {
    capacity: 0
  };

  created() {
    this.getProductDetails();
    this.getSubscriptionOptions();
    this.getStorageOptions();
  }

  async getProductDetails() {
    try {
      let response = await productService.getProductDetails(
        Number(this.$route.params.id)
      );
      this.product = response.data;
      document.title = this.product.name + " | " + this.$route.meta.title;
      this.defaultSelectedColor = this.product.colors[0]; // known data payload
    } catch (error) {
      console.error("Error: ", error);
    }
  }
  getSubscriptionOptions() {
    productMockService
      .getSubscriptionOptions()
      .then(options => {
        this.subscriptionOptions = options;
      })
      .catch(error => {
        console.log(error);
      });
  }
  getStorageOptions() {
    productMockService
      .getStorageOptions()
      .then(options => {
        this.storageOptions = options;
        this.selectedStorageCapacity = this.storageOptions[0];
      })
      .catch(error => {
        console.log(error);
      });
  }

  get imageUrlComputed() {
    if (this.product.images && this.product.images.length > 0) {
      let image = this.product.images.find((obj: any) => {
        return obj.imageId == this.defaultSelectedColor.imageId;
      });
      if (image) return image.url;
    }
    return this.product.defaultImageUrl;
  }
  get totalPriceComputed() {
    if (this.selectedStorageCapacity) {
      return this.selectedStorageCapacity.price + this.product.price;
    }
    return this.product.price;
  }

  Greetings() {
    alert("..........The end! Thank you -:) ........ ");
  }
}
</script>

<style scoped lang="scss">
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}
.nav-tabs .nav-link {
  border: 2px solid transparent;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.nav-link {
  display: block;
  padding: 0.5rem 1.5rem;
}

// Copied
.popup-dialog-arrow {
  top: -22px;
  left: 20px;
}
.popup-dialog-arrow {
  position: absolute;
  width: 36px;
  height: 21px;
  top: -20px;
  left: 10;
}
.popup-dialog-arrow:before {
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 21px solid rgba(0, 0, 0, 0.125);
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
}
.popup-dialog-arrow:after {
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 21px solid #fff;
  content: "";
  position: absolute;
  top: 1px;
  left: 0;
}
</style>