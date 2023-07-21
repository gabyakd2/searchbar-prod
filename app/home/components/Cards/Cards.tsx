import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "../CardProducts/CardProduct";
import Spinner from "react-bootstrap/Spinner";
import style from "./Cards.module.css";
import { Product } from "../../model";

interface PropsCard {
  isLoading: boolean;
  productList: Product[];
}

function Cards({ isLoading, productList }: PropsCard) {
  return (
    <Container>
      <Row className={style.products}>
        {isLoading ? (
          <Spinner animation="border" role="status" className={style.spinnerPosition}>
          </Spinner>
        ) : (
          productList.map(({ id, title, code, price, image }: Product) => (
            <Col className={`${style.cardsList}`} key={id} md={6}>
              <CardProduct
                title={title}
                code={code}
                price={price}
                image={image}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default Cards;
