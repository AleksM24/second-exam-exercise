import "./ProductList.css";

type Props = {
  title: string;
  description: string;
  currencyName: string;
  price: number;
};

type currencyRates = {
  [id: string]: number;
};

export const currencyRates: currencyRates = {
  ["UAH"]: 1,
  ["USD"]: 37,
  ["EUR"]: 40,
  ["GBP"]: 43,
};

const ProductItems = ({ title, description, currencyName, price }: Props) => {
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
      <button>Buy</button>
    </div>
  );
};
export default ProductItems;
