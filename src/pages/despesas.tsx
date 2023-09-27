import type { NextPage } from "next";
import Head from "next/head";
import MainTemplate from "../common/templates/main";
import { ProductProvider } from "../common/components/ProductContext";
import { Product } from "../types";
import { productsData } from "../common/lib/dataProduct";
import ProductSection from "../common/components/Product";

interface ProductProps {
  products: Product[];
}

const Despesas: NextPage = () => {
  return (
    <MainTemplate>
      <Head>
        <title>Despesas | Hits da Edenred</title>
        <meta name="description" content=""></meta>
      </Head>
      <>
        <ProductProvider type="despesas">
          <ProductSection products={productsData} type="despesas"></ProductSection>
        </ProductProvider>
      </>
    </MainTemplate>
  );
};

export default Despesas;
