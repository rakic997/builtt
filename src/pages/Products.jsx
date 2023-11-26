import React, { useState } from 'react';

import Product from '../components/Product';
import testImage1 from '../assets/Proizvod-1.jpg';
import testImage2 from '../assets/Proizvod-2.jpg';
import testImage3 from '../assets/Proizvod-3.jpg';
import testImage4 from '../assets/Proizvod-4.jpg';
import testImage5 from '../assets/Proizvod-5.jpg';
import testImage6 from '../assets/Proizvod-6.jpg';
import testImage7 from '../assets/Proizvod-7.jpg';
import testImage8 from '../assets/Proizvod-8.jpg';
import testImage9 from '../assets/Proizvod-9.jpg';
import testImage10 from '../assets/Proizvod-10.jpg';
import testImage11 from '../assets/Proizvod-11.jpg';
import testImage12 from '../assets/Proizvod-12.jpg';

const products = [
  { id: 0, image: testImage1, title: 'Naturela sa Rogačem i Agava Šećerom 1', price: 446, newPrice: 263 },
  { id: 1, image: testImage2, title: 'Naturela sa Rogačem i Agava Šećerom 2', price: 546, newPrice: 421 },
  { id: 2, image: testImage3, title: 'Naturela sa Rogačem i Agava Šećerom 3', price: 122 },
  { id: 3, image: testImage4, title: 'Naturela sa Rogačem i Agava Šećerom', price: 621 },
  { id: 4, image: testImage5, title: 'Naturela sa Rogačem i Agava Šećerom', price: 632 },
  { id: 5, image: testImage6, title: 'Naturela sa Rogačem i Agava Šećerom', price: 754 },
  { id: 6, image: testImage7, title: 'Naturela sa Rogačem i Agava Šećerom', price: 621 },
  { id: 7, image: testImage8, title: 'Naturela sa Rogačem i Agava Šećerom', price: 546 },
  { id: 8, image: testImage9, title: 'Naturela sa Rogačem i Agava Šećerom', price: 546 },
  { id: 9, image: testImage10, title: 'Naturela sa Rogačem i Agava Šećerom', price: 546 },
  { id: 10, image: testImage11, title: 'Naturela sa Rogačem i Agava Šećerom', price: 546 },
  { id: 11, image: testImage12, title: 'Naturela sa Rogačem i Agava Šećerom', price: 546 },
]

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortType, setSortType] = useState(null); products

  const handleSortByTitle = () => {
    const sortedList = [...filteredProducts].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setFilteredProducts(sortedList);
    setSortType('title');
  };

  const handleSortByPrice = () => {
    const sortedList = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sortedList);
    setSortType('price');
  };

  return (
    <div className='products-page'>
      <div className='container'>

        <div className='products-page-header'>
          <h1>
            Svi proizvodi
            <span>{products.length} prozvioda</span>
          </h1>

          <div className='filters'>
            <span>Sortiraj po</span>
            <button onClick={handleSortByTitle}>nazivu</button>
            <span>ili</span>
            <button onClick={handleSortByPrice}>cijeni</button>
          </div>
        </div>


        <div className='products'>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products