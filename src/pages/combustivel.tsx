import type { NextPage } from "next";
import Head from "next/head";
import MainTemplate from "../common/templates/main";
import { ProductProvider } from "../common/components/ProductContext";
import { productsData } from "../common/lib/dataProduct";
import ProductSection from "../common/components/Product";

const Combustivel: NextPage = () => {
  return (
    <MainTemplate>
      <Head>
        <title>Combustível | Ticket Log</title>
        <meta name="description" content=""></meta>
      </Head>
      <>
        <ProductProvider type="combustivel">
          <ProductSection products={productsData} type="combustivel"></ProductSection>
        </ProductProvider>
      </>
    </MainTemplate>
  );
};

export default Combustivel;
