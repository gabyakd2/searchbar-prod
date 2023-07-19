import React, { useState } from 'react';
import Cards from "../home/components/Cards/Cards"
import { products } from "../mock/products.json"
import SearchBar from "../home/components/SearchBar/SearchBar";
import { Product, ProductList } from "./model"
import { Container } from "react-bootstrap";

function Home() {
  const [productList, setProductList] = useState<Product[]>(products);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div>
      <SearchBar 
        productList={productList}
        setProductList={setProductList}
        setIsLoading={setIsLoading}
      />
      <Cards  />
      <Container>
        <hr className="border-top mt-5 w-100" />
        <p>{!isLoading && productList?.length} resultados</p>
      </Container>
    </div>
  )
}

export default Home