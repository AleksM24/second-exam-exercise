import "./ProductList.css";

type Props = {
  title: string;
  description: string;
  currencyName: string;
  price: number;
  cartData: {
    totalPrice: number;
  };
  AddProductToTotal: (price: number) => void;
};

type currencyRatesType = {
  [id: string]: number;
};

export const currencyRates: currencyRatesType = {
  ["UAH"]: 1,
  ["USD"]: 37,
  ["EUR"]: 40,
  ["GBP"]: 43,
};

const ProductItems = ({
  AddProductToTotal,
  title,
  description,
  currencyName,
  price,
}: Props) => {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <p>
          {currencyName}
          <span className="price">
            {Math.round(price / currencyRates[currencyName])}
          </span>
        </p>
      </div>
      <button onClick={() => AddProductToTotal(price)}>Buy</button>
    </div>
  );
};
export default ProductItems;
