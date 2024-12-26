import React from "react";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container hum">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={clearCart}
            >
              clear cart
            </button>
            <h5>subTotals : ${cartSubTotal}</h5>
            <h5>Tax : ${cartTax}</h5>
            <h5>Total : ${cartTotal}</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
