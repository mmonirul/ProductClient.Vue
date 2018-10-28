import axios from "axios";
import {
  IProduct,
  IProductImage,
  IProductColor,
  ISubscriptionOption
} from "@/Interfaces/Product";
import * as Enumerable from "linq";

const SERVER_URL = "https://localhost:44350/api/Products";

class ProductService {
  constructor() {
    console.log("creating new instance of Product.service");
  }
  getProducts() {
    return axios.get(`${SERVER_URL}/GetProducts`);
  }
  getProductDetails(id: number) {
    return axios.get(`${SERVER_URL}/GetProduct/${id}`);
  }
}
export const productService = new ProductService();
