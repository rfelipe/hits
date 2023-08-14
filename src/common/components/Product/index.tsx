import React from 'react';
import ProductTemplate from '../../templates/product';
import { Product } from '../../../types';

interface ProductListProps {
  products: Product[];
  type?: string;
}

const ProductSection: React.FC<ProductListProps> = ({ products, type }) => {
  const filteredProducts = products.filter((product) => product.type === type);

  return (
    <div>
      {filteredProducts.map((product, index) => (
        <ProductTemplate key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductSection;
