import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataList: localStorage.getItem('dataList') ? JSON.parse(localStorage.getItem('dataList')) : [{
    // dataList:  [{
    username: '관리자', email: 'abb@naver.com', tel: '010-1111-1111', password: 'a1234'
  }],
  user:null, 
  authed: false
}
let no = 1
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action) => {
      const { email, password } = action.payload
      const newItem = state.dataList.find(item => item.email === email ) //이메일이 일치하는지 거르고 
      if(newItem) {
        console.log('넘어감')
      }
      if(newItem.password === password) {
        state.user = newItem 
        state.authed = true
      }
    },

    logout: (state,action) => {
      state.user = null
      state.authed = false
    },

    signup: (state,action) => {
      state.dataList = [...state.dataList, {id: no++, ...action.payload}]
      localStorage.setItem('dataList', JSON.stringify(state.dataList))
    },
  },
})

export const { login, logout, signup } = authSlice.actions

export default authSlice.reducer