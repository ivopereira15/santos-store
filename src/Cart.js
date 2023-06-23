
import React, {useContext } from 'react';
import { Context } from "./core/context/store";
import { Link } from 'react-router-dom';
import cartempty from './assets/imgs/cartempty.png';
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Cart() {
    const [state, dispatch] = useContext(Context);
    const removefromCart = async (id) => {
        dispatch({type: 'DELETE_PRODUCT', payload: id});
    }
    const calculateTotal = () => {
        let total = 0;
        state.products.map((product)=> {
            return total += product.price * product.quantity;
        });
        return total.toFixed(2);
    };

    const NoResults = () => (
        <div id="results">
            <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> The Cart is empty</h1>
            <img
                    src={cartempty}
                    alt='img'
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full mt-0"
                    />

            
            </main>
        </div>
    )
    const Results = () => (
        <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {state.products.map((product) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link to={`/categories/product/${product.id}`}>
                                <div className="font-medium text-gray-700 hover:text-gray-800">
                                {product.name}
                                </div>
                            </Link>
                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                <label>
                                    Quantity: {product.quantity}
                                </label>
                                <div className="absolute right-0 top-0">
                                    <XMarkIcon
                                        onClick={() => removefromCart(product.id)}
                                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                            </h3>
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">{product.price}€</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <p>€{calculateTotal()}</p>
              </div>
            </dl>

            <div className="mt-6">
            <Link to={`/finishorder`}>
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Finish Order
              </button>
              </Link>
            </div>
          </section>
        </form>
      </main>
    )
    return (
        <>
        {state.products.length === 0 ? <NoResults /> : <Results />}
        </>
      );
}


