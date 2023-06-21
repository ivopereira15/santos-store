import './product.css'; 
import {useNavigate, useParams  } from 'react-router-dom';
import React, { useState, useEffect, useContext  } from 'react';
import ApiService from './core/service/service';
import { Context } from "./core/context/store";
import { Tab } from '@headlessui/react'

export default function ProductDetailPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useContext(Context);

    const callApi = async () => {
        try {
          setLoading(true);
          const productData = await ApiService.httpGetProduct(`/products/${slug}`);
          setProduct(productData);
          setLoading(false);
        } catch (err) {
          console.error(err.message);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        callApi();
      }, []);
    
      if (loading) {
        return <h1>Loading...</h1>;
      }

      const addToCart = async () => {
       
        const productToAdd = state.products.find(pdt => pdt.id === product.id);
        console.log(productToAdd)
        if(productToAdd === undefined){
          const newProduct = product;
          newProduct.quantity = Number(1);
          dispatch({type: 'ADD_TO_CART', payload: newProduct });
        } else {         
          console.log(productToAdd)
          productToAdd.quantity = Number(productToAdd.quantity) + Number(1); 
          dispatch({type: 'EDIT_CART', payload: productToAdd });
        }
      }
    return (
        <>
          <button
            onClick={() => navigate(-1)}
             className="goback flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
          >
            Go back
        </button>
     
          <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <Tab.Group as="div" className="flex flex-col-reverse">
                <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
                    <Tab.Panel >
                      <img
                      src={product.image} alt={product.name} 
                        className="h-full w-full object-cover object-center sm:rounded-lg mt-0"
                      />
                    </Tab.Panel>
                
                </Tab.Panels>
              </Tab.Group>
      
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">Price: {product.price} €</p> 
                </div>
                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>

                  <div
                    className="space-y-6 text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
                <div className="mt-10 flex">
                    <button
                    onClick={addToCart}
                      type="submit"
                      className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                    >
                    Add to Cart
                  </button>
              </div>
            </div>
          </div>
        </div>
      </main>
        </>
        
      );
}


