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
        <title>Combustível | Hits da Edenred</title>
        <meta name="description" content=""></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.edenredhits.com.br/combustivel/" />
        <meta property="og:title" content="Combustível | Hits da Edenred" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://www.edenredhits.com.br/_next/static/media/img2.7c87ea43.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.edenredhits.com.br/combustivel/" />
        <meta property="twitter:title" content="Combustível | Hits da Edenred" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="https://www.edenredhits.com.br/_next/static/media/img2.7c87ea43.webp" />
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
