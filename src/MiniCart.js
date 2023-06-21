import './product.css'; 
import './mini-cart.css';
import { Popover  } from '@headlessui/react'
import React, {useContext } from 'react';
import { Context } from "./core/context/store";
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

export default function MiniCart() {
    const [state, dispatch] = useContext(Context);
    const removefromCart = async (id) => {
      dispatch({type: 'DELETE_PRODUCT', payload: id});
    }

    const Results = () => (
        <div  id="results" className="product-mini-cart">
         { state.products.map((product) => { 
             return  <div key={product.id} className="product-mini-cart"> 
         
              <p className='product-name'>{product.name},   Qty: {product.quantity} </p>  
         
              <p className="remove-mini-cart">
                  <XMarkIcon
                      onClick={() => removefromCart(product.id)}
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                  />
              </p>
          </div>
          })
        }
         <Link to={`/cart`}>
            <div>
              <button
                type="submit"
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">
                    Go to Checkout
              </button>
            </div>
        </Link>
      </div>
    )

    const NoResults = () => (
      <div id="results">
          The Cart is empty
      </div>
    )
    return (
        <>
            <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">   
                    <div  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    {state.products.length === 0 ? <NoResults /> : <Results />}
                      <div>           
                      </div>
                    </div>
                </div>
              </div>
            </Popover.Panel> 
        </>
      );
}


