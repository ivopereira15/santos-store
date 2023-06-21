import React, { useState, useEffect, Fragment } from 'react';
import ApiService from './core/service/service';
import Category from './Category'




export default function CategoryList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const callApi = async () => {
        try {
          setLoading(true);
          const productsData = await ApiService.httpGetCategoryList('/categories');
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
        <div key='categoryList' className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">      
            {products.map((category) => {
              return <Category key={category} category={category} />;
            })}
        </div>

      </>
    );
  }