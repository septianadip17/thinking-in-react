import FilterableProductTable from "./components/FilterableProductTable";
import PRODUCTS from "./components/Products";

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
