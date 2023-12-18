import { createSlice } from '@reduxjs/toolkit'
import customerdata from '../../assets/api/customerdata'

const initialState = {
  customerData: customerdata,
  current : { } //특정객체수정 빈값선언
}
let no = customerdata.length + 1
export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    edit: (state,action) => { 
      state.current = action.payload
    },
    add: (state,action) => {
      state.customerData.push( { id: no++, ...action.payload })
    },
    remove: (state,action) => {
      state.customerData = state.customerData.filter(item => item.id !== action.payload)
    },

    cancel: (state,action) => {
      
    },

    update: (state,action) => { //find , map 수정된값 업데이트
      state.customerData = state.customerData.map(item => item.id === action.payload.id ? action.payload : item)

    },

    
  },
})

export const { add, remove, cancel, update, edit } = customerSlice.actions

export default customerSlice.reducer