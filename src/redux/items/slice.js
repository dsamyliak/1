import { createSlice } from '@reduxjs/toolkit';

//createSlice itemsSlice
export const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState: [],
  reducers: {
    add(state, action) {
      return state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = itemsSlice.actions;

// export const add = createAction('items/add');
// export const remove = createAction('items/remove');

// //Immer
// const itemsReducer = createReducer([123,'text'], {
//   //   [add]: (state, action) => [...state, action.payload],
//   [add]: (state, action) => state.push(action.payload),
//   [remove]: (state, action) => state.filter(item => item.id !== action.payload),
// });

// console.log(add('text'));
// console.log(remove('xt'));
