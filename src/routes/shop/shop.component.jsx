import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map(({ id, ...product }) => (
        <ProductCard key={id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
