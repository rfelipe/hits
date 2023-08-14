import React, { createContext, useContext } from 'react';
import { ProductType } from '../../types';

interface ProductContextValue {
  type: ProductType;
}

const ProductContext = createContext<ProductContextValue | null>(null);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  type: ProductType;
  children: React.ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ type, children }) => {
  return (
    <ProductContext.Provider value={{ type }}>
      {children}
    </ProductContext.Provider>
  );
};
