'use server'
// stripe integration is present in woocommerce but in scope of this project will be setup manually 

import WooCommerceRestApi from "woocommerce-rest-ts-api";

// according to documentation best to call const api but I followed the video 
const WooCommerce = new WooCommerceRestApi({
  url: "http://benist85-yeezy.local",
  consumerKey: process.env.WC_CONSUMER_KEY as string,
  consumerSecret: process.env.WC_CONSUMER_SECRET as string,
  version: "wc/v3",
});

export async function getProducts() {
  try {
    const response = await WooCommerce.get("products?status=publish");
    response.data.forEach(element => {
      console.log(element.name); 
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

export async function getProduct(id: string) {
  const idAsNumber = parseInt(id)
  try {
    const product = await WooCommerce.get(`products/${idAsNumber}`)
    return product.data
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product");
  } 
}