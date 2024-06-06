// import { CardComponent } from "../components/CardComponent.js";
// // import { products } from "../data/product.js";
// let renderArea = document.querySelector("#renderArea");
import { getData } from "../store/fetchApi.js";
import { UserComponent } from "../components/UserComponent.js";
import { ProductComponent } from "../components/ProductComponent.js";
// RENDER PRODUCT
// products
//   .slice(0, 10)
//   .map((product) => (renderArea.innerHTML += CardComponent(product)));

// import { CardComponent } from "../components/CardComponent.js";
//  let renderArea = document.querySelector("#renderArea");

//  const url = "http://127.0.0.1:5500/data/product.json";

// fetch(url)
//   .then((res) => res.json())
//   .then((datas) => {
//     let products = datas;
//     products.map((product) => (renderArea.innerHTML += CardComponent(product)));
//   });

const Base_Url = "https://fakestoreapi.com/products";
let renderUser = document.querySelector("#renderUser")
let renderProducts = document.querySelector("#renderProducts")
let users = await getData("users"); //Endpoints of URL api
let products = await getData("products");
users.map((user)=>renderUser.innerHTML+=UserComponent(user))
products.map((product)=>renderProducts.innerHTML+=ProductComponent(product))
