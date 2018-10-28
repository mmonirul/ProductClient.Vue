import { shallowMount, mount } from "@vue/test-utils";
import Products from "@/components/Products.Component.vue";
import { Component, Vue } from "vue-property-decorator";
jest.mock("axios");

describe("Products.Component.vue", () => {
  let cmp;
  let viewModel: any;
  const data = ["Iphne x"];

  beforeEach(() => {
    cmp = Vue.extend(Products);
    viewModel = new cmp({
      data: {
        products: data
      }
    }).$mount();
  });

  it("equals products to mockRawProducts", () => {
    expect(viewModel.products).toEqual(["Iphne x"]);
  });
});
