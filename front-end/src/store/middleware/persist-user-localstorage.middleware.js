import { handleLoginRedirect } from '../../utils';

const persistUserLocalStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type?.startsWith('user/')) {
    const userState = store.getState().user;
    localStorage.setItem('user', JSON.stringify(userState));
    console.log(result.meta);
    if (userState.token) {
      result.meta.arg.navigate(handleLoginRedirect(userState.role));
    }
  }

  return result;
};

const reHydrateUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
};

export {
  persistUserLocalStorageMiddleware,
  reHydrateUserFromLocalStorage,
};
