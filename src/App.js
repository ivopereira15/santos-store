import './App.css';
import ProductsList from './ProductsList'
import CategoryList from './CategoryList'
import { Routes, Route } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';
import imageslogo from './assets/imgs/logo.png';
import {ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { Tab, Popover, Transition  } from '@headlessui/react'
import { Fragment } from 'react'
import MiniCart from './MiniCart'
import React, {useContext } from 'react';
import Cart from './Cart'
import FinishOrder from './FinishOrder'

import { Context } from "./core/context/store";

function App() {
  const [state] = useContext(Context);
  return (
    <>
    <div className="App">
      <nav aria-label="Top" className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
            <div className="flex h-22 items-center">
              <div className="ml-4 flex lg:ml-0">
                  <img
                    className="w-auto logo"
                    src={imageslogo}
                    alt=""
                  />
              </div>
              <Link to={`/home`}>
                <div>
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                          <Tab                         
                            className='border-indigo-600 text-indigo-600
                                flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                          >
                            Categories
                          </Tab>           
                      </Tab.List>
                    </div>
                  </Tab.Group>
                </div>
              </Link>
              <div className="ml-4 flow-root lg:ml-6">
              </div>
                <Popover className="relative">
                  <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{state.products.length}</span>
                    </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    {(ref) => (<div ref={ref}> <MiniCart /></div>)}  
                  </Transition>
                </Popover>
              </div>
        </div>
      </nav>
    </div>
    <div className="mt-5">
    <Routes>
      <Route path="/categories/:slug" element={<ProductsList />} />
      <Route path="/categories/product/:slug" element={<ProductDetailPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/finishorder" element={<FinishOrder />} />
      <Route path="/home" element={<CategoryList />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
