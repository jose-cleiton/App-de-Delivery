import { handleLoginRedirect } from '../../utils';

const persistUserLocalStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type?.startsWith('user/')) {
    const userState = store.getState().user;
    localStorage.setItem('user', JSON.stringify(userState));
    if (userState.token) {
      result.meta.arg.navigate(handleLoginRedirect(userState.role));
    }
  }

  if (action.type === 'user/setResetUser') {
    localStorage.removeItem('user');
  }

  if (action.type?.startsWith('carrinho/')) {
    const cartProducts = store.getState().carrinho.produtos;
    localStorage.setItem('carrinho', JSON.stringify(cartProducts));
  }

  return result;
};

const reHydrateUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
};

const reHydrateCartFromLocalStorage = () => {
  const user = localStorage.getItem('carrinho');
  if (user) {
    return JSON.parse(user);
  }
};

export {
  persistUserLocalStorageMiddleware,
  reHydrateUserFromLocalStorage,
  reHydrateCartFromLocalStorage,
};
