import { Grid } from "@mui/material";
import { useState } from "react";
import productsArray from "../utils/productsArray";
import ProductItems, { currencyRates } from "./ProductItems";
import "./ProductList.css";

type Props = {};

type CartDataProps = {
  totalPrice: number;
};

const ProductList = (props: Props) => {
  const [currencyName, setCurrencyName] = useState("UAH");

  const [cartData, setCartData] = useState<CartDataProps>({
    totalPrice: 0,
  });

  const AddProductToTotal = (price: number) => {
    setCartData((prevState) => ({
      totalPrice: prevState.totalPrice + price,
    }));
  };

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
              currencyName={currencyName}
              price={price}
              cartData={cartData}
              AddProductToTotal={AddProductToTotal}
            />
          </Grid>
        ))}
      </Grid>
      <div className="total-section">
        <h5 className="total-title">Total:</h5>{" "}
        <span>
          {Math.round(cartData.totalPrice / currencyRates[currencyName])}
        </span>
      </div>
    </section>
  );
};

export default ProductList;
