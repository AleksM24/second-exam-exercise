import "./ProductList.css";

type Props = {
  title: string;
  description: string;
  currencyName: string;
  price: number;
};

const ProductItems = ({ title, description, currencyName, price }: Props) => {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <p>
          {currencyName}
          <span className="price">{price}</span>
        </p>
      </div>
      <button>Buy</button>
    </div>
  );
};
export default ProductItems;
