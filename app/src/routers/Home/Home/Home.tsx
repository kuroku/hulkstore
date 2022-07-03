import { useCallback, useEffect, useState } from "react";
import { GetProductsResponse } from "../../../../../server/types/response";
import { getProductsRequest } from "../../../api/product";
import Header from "../../../components/Header/Header";
import Product from "../../../components/Product/Product";
import Section from "../../../components/Section/Section";

export default function Home() {
  const [products, setProducts] = useState<GetProductsResponse>([]);

  const getProducts = useCallback(async () => {
    const { data, status } = await getProductsRequest();
    if (status === 200) {
      setProducts(data);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <>
      <Header title='Home' />
      <Section grid>
        {products.map((product, i) => {
          return <Product product={product} key={i} />;
        })}
      </Section>
    </>
  );
}
