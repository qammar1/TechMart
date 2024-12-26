import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartItem({item,value}) {
  const {id,title,img,price,total,count} = item;
  const {increment,decrement,removeItem} = value;
  return (
    <React.Fragment>
      <div className='my-1 row text-capitalized text-center'>
        
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} style={{width:"5rem",height:"5rem"}}/>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
            <span className='d-lg-none'>Product : </span>{title}
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <p className='text-uppercase'>${price}</p>
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='d-flex justify-content-center'>
                  <div>
                    <span className='btn btn-black mx-1' onClick={()=>decrement(id)}>-</span>
                    <span className='btn btn-black my-1 '>{count}</span>
                    <span className='btn btn-black mx-1' onClick={()=>increment(id)}>+</span>
                  </div>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-2' onClick={()=>removeItem(id)}>
            <div className='cart-icon' style={{cursor:'pointer'}}>
      <FontAwesomeIcon icon={faTrash} />
            </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <p className='text-uppercase'>item total : ${total}</p>
            </div>
        </div>
    
    </React.Fragment>
  )
}
