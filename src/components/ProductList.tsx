import { Grid } from "@mui/material";
import { useState } from "react";
import productsArray from "../utils/productsArray";
import ProductItems from "./ProductItems";
import "./ProductList.css";

type Props = {
  price: number;
};

const ProductList = ({ price }: Props) => {
  const [currencyName, setCurrencyName] = useState("UAH");
  const [convertPrice, setConvertPrice] = useState(price);

  function handleClick() {
    setCurrencyName("USD");
  }
  console.log(convertPrice);

  return (
    <section>
      <div>
        <h1 className="shop-title">Our shop page</h1>
      </div>
      <div className="currency-btns">
        <button onClick={() => setCurrencyName("UAH")}>UAH</button>
        <button onClick={() => handleClick()}>USD</button>
        <button onClick={() => setCurrencyName("EUR")}>EUR</button>
        <button onClick={() => setConvertPrice(convertPrice / 37)}>GBP</button>
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
              currencyName={currencyName}
              price={price}
            />
          </Grid>
        ))}
      </Grid>
      <div className="total-section">
        <h5 className="total-title">Total:</h5> <span>79000</span>
      </div>
    </section>
  );
};

export default ProductList;
