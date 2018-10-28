import axios from "axios";
import {
  IProduct,
  IProductImage,
  IProductColor,
  ISubscriptionOption
} from "@/Interfaces/Product";
import * as Enumerable from "linq";

class ProductMockService {
  constructor() {
    console.log("Product.Mock.service instance created");
    // this.products = products;
  }

  getRawProducts() {
    return Enumerable.from(products).take(2);
  }
  getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
        reject("Something went wrong!");
      }, 100);
    });
  }
  getProduct(id: number) {
    var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(
          Enumerable.from(products).firstOrDefault(p => p.productId == id)
        );
        reject("Something went wrong!");
      }, 2000);
    });
    return promise;
  }
  getSubscriptionOptions() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(subscriptionOptions);
      }, 2 * 1000);
    });
  }
  getStorageOptions() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(storageOptions);
      }, 1000);
    });
  }
}
export const productMockService = new ProductMockService();

const colors: Array<IProductColor> = [];
const productImages: Array<IProductImage> = [];
const subscriptionOptions: Array<ISubscriptionOption> = [
  {
    id: 500,
    name: "new",
    price: 399,
    description: "Jag vill få ett nytt abonnemang"
  },
  {
    id: 501,
    name: "extend",
    price: 299,
    description:
      "Jag vill förändra befintligt mobilabonnemang (byta abonnemang, byta till ny mobil, lägga till fler användare)"
  }
];
const storageOptions: Array<any> = [
  {
    id: 1234,
    capacity: 64,
    price: 99
  },
  {
    id: 1235,
    capacity: 128,
    price: 299
  },
  {
    id: 1236,
    capacity: 256,
    price: 499
  }
];
const products = [
  {
    productId: 1,
    name: "iPhone Xs",
    price: 599,
    tag: "Nyhet",
    brand: "Apple",
    category: "Mobile",
    description: "Oled-skärm och 12 MP-kamera",
    defaultImageUrl:
      "https://www.telenor.se/globalassets/mediabibliotek/produktbilder/mobiler/apple/iphone-xs/grid/apple-iphone-xs-grid-258x310-gold.png",
    subscriptionId: 1,
    memory: 64,
    images: null,
    colors: null
  },
  {
    productId: 2,
    name: "iPhone Xs",
    price: 599,
    tag: "Prissänkt",
    brand: "Apple",
    category: "Mobile",
    description: "Oled-skärm och 12 MP-kamera",
    defaultImageUrl:
      "https://adockastorage.blob.core.windows.net/146-cloudfiles-public/sverek/apple-iphone-x-silver.png",
    subscriptionId: 1,
    memory: 64,
    images: null,
    colors: null
  },
  {
    productId: 3,
    name: "iPhone Xs Max",
    price: 599,
    tag: "Nyhet",
    brand: "Apple",
    category: "Mobile",
    description: "Oled-skärm och 12 MP-kamera",
    defaultImageUrl:
      "https://www.telenor.se/globalassets/mediabibliotek/produktbilder/mobiler/apple/iphone-xs-max/grid/apple-iphone-xs-max-grid-258x310-gold.png",
    subscriptionId: 1,
    memory: 64,
    images: null,
    colors: null
  },
  {
    productId: 4,
    name: "Galaxy Note9",
    price: 599,
    tag: "Kampanj",
    brand: "Samsung",
    category: "Mobile",
    description: "Oled-skärm och 12 MP-kamera",
    defaultImageUrl:
      "https://www.telenor.se/globalassets/mediabibliotek/produktbilder/mobiler/samsung/galaxy-note-9/mobilgrid/telenor-samsung-galaxzynote9black-2_344x414.png?quality=100&height=310",
    subscriptionId: 1,
    memory: 64,
    images: null,
    colors: null
  }
];
