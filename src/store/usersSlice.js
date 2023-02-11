import {createSlice,} from '@reduxjs/toolkit';


const initialState = {
  usersList: [],
  user: {},
  
};



export const usersSlice = createSlice({
  name:'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      if(state.usersList.some(user => user.email===action.payload.email)){
        alert('Такой пользователь уже зарегистрирован');
      }else{
        state.usersList = [...state.usersList, action.payload];
        state.user= action.payload;
      }
    },
    enterUser: (state,action) => {
      if(state.usersList.some(user => user.email === action.payload.email && user.password === action.payload.password)){
        const item =  state.usersList.filter( user => user.email === action.payload.email && user.password === action.payload.password);
        console.log(item)
        state.user= item[0]
      }else{
        alert('Такой пользователь не зарегистрирован')
      }
       
    },
    logOutUser: (state) => {
      state.user = {}
    },
  }
});

export const userSelect = (state) => state.users.user;
export default usersSlice.reducer;
export const {addUser, enterUser, logOutUser} = usersSlice.actions;
