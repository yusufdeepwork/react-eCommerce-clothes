export const getAddCardToast = (product, addToast) => {
  addToast(`added shopping card :${product.description}`, {
    appearance: 'success',
    autoDismiss: true,
  });
};
export const removeFavoriteToast = (product, addToast) => {
  addToast(`removed favorite :${product.description}`, {
    appearance: 'info',
    autoDismiss: true,
  });
};
export const addFavoriteToast = (product, addToast) => {
  addToast(`add favorite :${product.description}`, {
    appearance: 'success',
    autoDismiss: true,
  });
};
