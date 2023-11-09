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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.edenredhits.com.br/despesas/" />
        <meta property="og:title" content="Despesas | Hits da Edenred" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://www.edenredhits.com.br/_next/static/media/img2.7c87ea43.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.edenredhits.com.br/despesas/" />
        <meta property="twitter:title" content="Despesas | Hits da Edenred" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="https://www.edenredhits.com.br/_next/static/media/img2.7c87ea43.webp" />
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
