const persistUserLocalStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type?.startsWith('user/')) {
    const userState = store.getState().user;
    localStorage.setItem('user', JSON.stringify(userState));
  }

  return result;
};

const reHydrateUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user); // re-hydrate the store
  }
};

export {
  persistUserLocalStorageMiddleware,
  reHydrateUserFromLocalStorage,
};
