import { Link } from 'react-router-dom';
import food from './assets/imgs/bifanaspao.jpg';
import drinks from './assets/imgs/ladron.jpg';
import accessories from './assets/imgs/hat.JPG';
import music from './assets/imgs/jakin.webp';
import mangerico from './assets/imgs/mangerico.jpg';



export default function Category({category}) {
    
    const renderSwitch = (param) => {
        switch(param) {
          case 'Food':
            return food;
          case 'Drinks':
            return drinks;
          case 'Accessories':
            return accessories;
          case 'Music':
              return music;
          case 'Others':
            return mangerico;
          default:
            return food;
        }
      }
    return (
        <>
           <div key={category} className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
              <Link to={`/categories/${category}`}>
                <img
                    src={renderSwitch(category)}
                    alt='img'
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full mt-0"
                    />
              </Link>
          </div>
        </>
      );
}
