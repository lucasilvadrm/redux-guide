export const selectProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
};

export const selectProductsToTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
};
