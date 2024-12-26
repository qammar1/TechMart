import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { Buttoncontainer } from "./Button";
import { Link } from "react-router-dom";

export default function Model() {
  return (
    <React.Fragment>
      <ProductConsumer>
        {(value) => {
          const modelOpen = value.modelOpen;
          const modelClose = value.closeModel;
          {/* const addtoCart = value.addToCart; */}
          const { id, img, title, price, inCart } = value.modelProduct;
          if (!modelOpen) {
            return null;
          } else {
            return (
              <ModelContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="model"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                      style={{ padding: 50 }}
                    >
                      <h4>Item Added to the Cart</h4>
                      <img src={img} className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price : ${price}</h5>

                      <Link to="/cart">
                        <Buttoncontainer onClick={modelClose}>
                          Go To Cart
                        </Buttoncontainer>
                      </Link>
                      <Buttoncontainer cart onClick={modelClose}>
                        Continue Shopping
                      </Buttoncontainer>
                    </div>
                  </div>
                </div>
              </ModelContainer>
            );
          }
        }}
      </ProductConsumer>
    </React.Fragment>
  );
}
const ModelContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #model {
    background: var(--mainwhite);
  }
`;
