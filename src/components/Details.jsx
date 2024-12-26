import React from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { Buttoncontainer } from "./Button";

export default function Details() {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, title, img, price, company, info, inCart } = value.dproduct;
        return (
          <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end title */}
            {/* pruduct info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} className="img-fluid" alt="product" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h3>model : {title}</h3>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by : <span className="text-uppercase ">{company}</span>
                </h4>
                <h4 className="text-blue ">
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Some info about product:
                </p>
                <p className="text-mutex lead">{info}</p>
                <Link to='/'>
              <Buttoncontainer>back to product </Buttoncontainer>
                </Link>
              <Buttoncontainer cart disabled={inCart?true:false} onClick={()=>{value.addToCart(id)}}>{inCart?"in Cart":"Add to Cart"}</Buttoncontainer>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
