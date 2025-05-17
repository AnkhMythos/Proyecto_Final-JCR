// src/utils/db.js
const DB_KEY = "mi_catalogo_local";

export const getLocalProducts = () => {
  return JSON.parse(localStorage.getItem(DB_KEY)) || [];
};

export const saveLocalProducts = (products) => {
  localStorage.setItem(DB_KEY, JSON.stringify(products));
};

export const addProductToLocal = (product) => {
  const current = getLocalProducts();
  product.idLocal = Date.now(); // ID único para tu base local
  saveLocalProducts([...current, product]);
};

export const updateProductInLocal = (updatedProduct) => {
  const current = getLocalProducts().map(p =>
    p.idLocal === updatedProduct.idLocal ? updatedProduct : p
  );
  saveLocalProducts(current);
};

export const deleteProductFromLocal = (idLocal) => {
  const current = getLocalProducts().filter(p => p.idLocal !== idLocal);
  saveLocalProducts(current);
};