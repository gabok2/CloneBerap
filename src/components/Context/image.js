import React, { createContext, useState, useContext } from 'react';

// import { Container } from './styles';

const ImageContext = createContext();

export default function ContextProvider({ children }) {
  const [activeImage, setActiveImage] = useState([]);
  const [cabelo, setCabelo] = useState([]);

  console.log('Teste', useState);
  return (
    <ImageContext.Provider
      value={{ activeImage, setActiveImage, cabelo, setCabelo }}
    >
      {children}
    </ImageContext.Provider>
  );
}
console.log('Teste', ContextProvider);

export function useImage() {
  const context = useContext(ImageContext);
  const { activeImage, setActiveImage } = context;
  const { cabelo, setCabelo } = context;
  return { activeImage, setActiveImage, cabelo, setCabelo };
}

console.log('Teste', useImage);
console.log('Teste', useContext);
