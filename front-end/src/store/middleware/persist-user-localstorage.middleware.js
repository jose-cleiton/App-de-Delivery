const persistUserLocalStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type?.startsWith('user/')) {
    const userState = store.getState().user;
    localStorage.setItem('user', JSON.stringify(userState));
  }

  return result;
};

export default persistUserLocalStorageMiddleware;
