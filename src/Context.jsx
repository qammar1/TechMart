import { useState } from "react";
import React from "react";
import { storeProducts, detailProduct } from "./data";
import { useEffect } from "react";
const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const [storeProduct, setStoreProduct] = useState([]);
  const [dproduct, setDproduct] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modelOpen, setModalOpen] = useState(false);
  const [modelProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getItem = (id) => {
    return storeProduct.find((item) => item.id === id);
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDproduct(product);
  };

  const addToCart = (id) => {
    const tempProducts = [...storeProduct];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    // setStoreProduct(tempProducts);
    setCart([...cart, product]);
    setDproduct({ ...product });
    addTotals();
  };

  // console.log(cart)
  const openModel = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModel = () => {
    setModalOpen(false);
  };

  const increment = (id) => {
    let tempcart = [...cart]
    let product1 = tempcart.find((item)=>item.id===id);
    product1.count = (product1.count)+1;
    product1.total = (product1.price)*product1.count;
    setCart(tempcart)
    addTotals();
  };

  const decrement = (id) => {
    
    let tempcart = [...cart]
    let product1 = tempcart.find((item)=>item.id===id);
    product1.count === 1
    ? removeItem(id)
    : (() => {
        product1.count = product1.count - 1;
        product1.total = product1.count * product1.price;
        setCart([...tempcart]);
        addTotals();
      })();
  
  };

  const addTotals = () => {
    // const totals = getTotals();
    // setCartSubTotal(totals.subTotal);
    // setCartTax(totals.tax);
    // setCartTotal(totals.total);

    let subtotal = 0;
    cart.map((item) => (subtotal += item.total));
    setCartSubTotal(subtotal);
    const tax = (0.1 * subtotal).toFixed(3);
    

    const totalAmount = subtotal + tax;
    setCartTax(tax);
    setCartTotal(totalAmount);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    const item = getItem(id);
    item.inCart=false;
  };

  const clearCart = () => {
    setCart([]);
    setStoreProduct(storeProducts.map(item => ({ ...item })))
  
    // setStoreProduct([...storeProducts])
  };

  // useEffect to update totals whenever cart changes
  useEffect(() => {
    setStoreProduct(storeProducts.map(item => ({ ...item })));
  }, []);

  useEffect(() => {
    addTotals();
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        storeProduct,
        handleDetail,
        addToCart,
        dproduct,
        modelOpen,
        openModel,
        closeModel,
        modelProduct,
        increment,
        decrement,
        removeItem,
        clearCart,
        cart,
        cartSubTotal,
        cartTax,
        cartTotal,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
