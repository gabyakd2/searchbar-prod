import React, { ChangeEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ProductList } from "../../model";
import InputGroup from "react-bootstrap/InputGroup";
import swal from "sweetalert";
import { Product } from "../../model";

interface ProductListProps {
  productList: Product[];
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchBar({
  productList,
  setProductList,
  setIsLoading,
}: ProductListProps) {
  const [input, setInput] = useState<string>("");
  const auxProduct: Product[] = productList;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleCloseInput = () => {
    setProductList(auxProduct);
    setInput("");
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const filteredProducts = productList.filter(({ title }: Product) =>
        title.toLowerCase().includes(input.toLowerCase())
      );
      if (input && (!filteredProducts || !filteredProducts.length)) {
        swal("Error", "No se encontraron productos con ese nombre", "error");
      } else if (!input) {
        swal("Error", "Por favor ingrese un nombre", "error");
      } else {
        setProductList(filteredProducts);
      }
    }, 3000);
  };

  return (
    <Container className="pt-3">
      <Form onSubmit={handleSearch}>
        <InputGroup>
          <Form.Control
            type="text"
            value={input}
            placeholder="Buscar un articulo..."
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
          />
          <Button variant="dark" size="lg" type="submit" className="pb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <span className="fs-6 ms-2">Buscar</span>
          </Button>
        </InputGroup>
      </Form>
      {input.length ? (
        <Button variant="dark" className="mt-2" onClick={handleCloseInput}>
          {input}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </Button>
      ) : null}
    </Container>
  );
}

export default SearchBar;
