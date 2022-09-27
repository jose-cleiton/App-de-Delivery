import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  produtos: [],
};

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    utualizarCarrinho: (state, action) => {
      state.produtos = action.payload;
    },
  },
});

const obterCarrinho = (state) => state.carrinho.produtos;

export { obterCarrinho };

export const { utualizarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
