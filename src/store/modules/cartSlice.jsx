import { createSlice } from '@reduxjs/toolkit'
import productData from '../../assets/api/cartdata'
const initialState = {
  carts : [],
    cartTotal : 0,
    products: productData,
    cntItem: [],
}
let ItemNum = 1
export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCart: (state,action) => {
      state.carts = [...state.carts, {cntItem: ItemNum, ...action.payload }]
      // state.carts.push(action.payload)
    },
    removeCart: (state,action) => {
      state.carts = state.carts.filter(item => item.id !== action.payload)
    },
    totalCart: (state,action) => {
      state.cartTotal = state.cntItem.reduce((acc, curr) => acc + curr.calEachItem, 0)
    },
    sortCart: (state, action) => {
      if( action.payload !== '') {
        state.products.sort( (a,b) => a[action.payload] > b[action.payload] ? 1: -1 )
      }
    },
    searchCart: (state, action) => {
      state.products = productData.filter(item=> item.description.toLowerCase().includes( action.payload.toLowerCase() ))
    },
    resetCart :  (state, action) => {
      state.products = productData
    },
    clearCart: (state, action) => {
      state.carts = []
    },
    singleChk : (state, action) =>{
      state.cntItem.push(action.payload)
      // console.log(state.cntItem[0].calEachItem)
      state.cartTotal = state.cntItem.reduce((acc, curr) => acc + curr.calEachItem, 0)
    },
    removeSingleChk: (state, action) => {
      state.cntItem = state.cntItem.filter(item=> item.id !== action.payload)
      state.cartTotal = state.cntItem.reduce((acc, curr) => acc + curr.calEachItem, 0)
    }
  },
})

export const { addCart, removeCart, totalCart,sortCart, resetCart , searchCart, clearCart, singleChk, removeSingleChk } = cartSlice.actions

export default cartSlice.reducer