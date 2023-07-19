import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "../CardProducts/CardProduct";
import Spinner from "react-bootstrap/Spinner";
import style from "./Cards.module.css";

function Cards() {
  return (
    <Container>
        <Row className={style.products}>
            {
                isLoading
            }
        </Row>
    </Container>
  )
}

export default Cards