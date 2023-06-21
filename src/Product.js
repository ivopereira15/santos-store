import './product.css'; 
import { Link } from 'react-router-dom';

export default function Product({product}) {
    return (
        <>
          <Link to={`/categories/product/${product.id}`}>
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4 mt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    <span aria-hidden="true" className="absolute inset-0" />
                    <label>{product.name}</label>
                  </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                <p className="text-base font-medium text-gray-900">Price: {product.price}€</p>
              </div>
            </div>
          </div>  
        </Link>
        </>
      );
}


