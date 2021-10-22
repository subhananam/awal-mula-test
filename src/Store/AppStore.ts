import React from 'react'
import { makeAutoObservable } from 'mobx'

export interface ICart {
  productId: number
  amount: number
}
export interface IUser {
  username: number
  amount: number
}

class AppStore {
  loggedIn: boolean = localStorage.getItem("loggedIn") === 'true'
  username: string = localStorage.getItem("username") || ""
  cartItems: Array<ICart> = [];
  isCartShow: boolean = false;
  constructor() {
    makeAutoObservable(this)
  }
  get cartCount(){
      return this.cartItems.length;
  }
  get getCartItems(){
      return this.cartItems;
  }
  get isLoggedIn(){
    return this.loggedIn;
  }
  authenticate(username : string){
    localStorage.removeItem("loggedIn");
    localStorage.setItem("loggedIn", "true");
    localStorage.removeItem("username");
    localStorage.setItem("username", username);
    this.loggedIn = true;
    this.username = username;
  }
  logout(){
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    this.loggedIn = false;
    this.username = "";
  }
  addToCart(productId: number) {
    if (
      this.cartItems.find((item) => item.productId === productId) === undefined
    ) {
      this.cartItems.push({ productId: productId, amount: 1 })
    } else {
      this.cartItems = this.cartItems.map((item) =>
        item.productId === productId
          ? { ...item, amount: item.amount + 1 }
          : item,
      )
    }
  }
  removeFromCart(productId: number) {
    this.cartItems = this.cartItems
      .map((item) =>
        item.productId === productId
          ? { ...item, amount: item.amount - 1 }
          : item,
      )
      .filter((item) => item.amount > 0)
  }

  get cartShow(){
    return this.isCartShow;
  }
  setCartShow(show: boolean){
    this.isCartShow = show;
  }
}
const AppStoreClass = new AppStore()
const AppStoreClassContext = React.createContext<AppStore>(AppStoreClass)

export { AppStoreClass, AppStoreClassContext }
