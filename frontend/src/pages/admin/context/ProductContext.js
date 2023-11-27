import React from "react";
import { createContext, useState,useEffect } from "react";
import useFetch from "../../../hook/useFetch";


const ProductContext = createContext({});

export const ProductContextProvider = ({ children }) => {
  const { loading, error, data } = useFetch(
    "http://127.0.0.1:8000/api/read/products/pagination?page=1"
  );
  useEffect(() => {
    console.log("ProductContext data",data);
  }, [data]);
  if (loading) return <p>loading</p>;

  if (error) return <p>error</p>;
  
  return (
    <ProductContext.Provider
      value={{
        data,
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
