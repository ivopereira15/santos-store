import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FinishOrder() {
    const navigate = useNavigate();
    navigate('/home');
    useEffect(() => {
      const delay = 5000; 
      const timeoutId = setTimeout(() => {
      
        navigate('/home');
      }, delay);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [navigate]);
 
    return (
        <>

        <div id="results">
            <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Can't finish your order. The servers are out of capacity. Please try again.</h1>
            </main>
        </div>
         
        </>
         

      );
}


