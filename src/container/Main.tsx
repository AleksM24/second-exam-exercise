import ProductList from "../components/ProductList";

type Props = {
  price: number;
};

const Main = ({ price }: Props) => {
  return (
    <div>
      <ProductList price={price} />
    </div>
  );
};
export default Main;
