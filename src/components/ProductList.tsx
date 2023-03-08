import { Grid } from "@mui/material";
import { useState } from "react";
import productsArray from "../utils/productsArray";
import ProductItems from "./ProductItems";
import "./ProductList.css";

type Props = {};

const ProductList = (props: Props) => {
  const [currencyName, setCurrencyName] = useState("UAH");
  return (
    <section>
      <div>
        <h1 className="shop-title">Our shop page</h1>
      </div>
      <div className="currency-btns">
        <button onClick={() => setCurrencyName("UAH")}>UAH</button>
        <button onClick={() => setCurrencyName("USD")}>USD</button>
        <button onClick={() => setCurrencyName("EUR")}>EUR</button>
        <button onClick={() => setCurrencyName("GBP")}>GBP</button>
      </div>
      <Grid
        container
        justifyContent="center"
        spacing={3}
        sx={{ marginTop: "20px" }}
      >
        {productsArray.map(({ title, description, price }, id) => (
          <Grid item key={id}>
            <ProductItems
              title={title}
              description={description}
              price={price}
              currencyName={currencyName}
            />
          </Grid>
        ))}
      </Grid>
      <div className="total-section">
        <h5 className="total-title">Total:</h5> <span>82000</span>
      </div>
    </section>
  );
};

export default ProductList;
