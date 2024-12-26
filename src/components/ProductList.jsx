import React, { useContext, useState } from "react";
import Product from "./Product";
import Title from "./Title";
// import { ProductContext } from "../Context";
import { ProductConsumer } from "../Context";

function ProductList() {

  // const contextValue = useContext(ProductContext);
  return (
    
      <React.Fragment>
        <div className="py-5 bg-hum">
          <div className="container">
            <Title name={"our"} title={"Products "} />
            <div className="row">
              {/* <h1>asdf{contextValue.value}</h1> */}
              <ProductConsumer>
                {(value)=>{
                  return(value.storeProduct.map((product)=>{
                    return <Product key={product.id} product={product}/>
                  }));
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default ProductList;
