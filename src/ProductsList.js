import React, { useState, useEffect } from 'react';
import ApiService from './core/service/service';
import Product from './Product'
import {useNavigate, useParams } from 'react-router-dom';
import './productList.css'; 

export default function ProductsList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();

    const callApi = async () => {
        try {
          setLoading(true);
          const productsData = await ApiService.httpGetProducts('/products');
          setProducts(productsData);
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

   
    return (
      <>
      <div className="container">
       <button
          onClick={() => navigate(-1)}
            
            className="gobackCategories flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
          >
            Go to Categories
        </button>
        <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
              {products.filter(cat=> cat.category === slug).map((product) => {
                return <Product product={product} />;
              })}
          </div>
    </section>
    </div>
      </>
    );
  }