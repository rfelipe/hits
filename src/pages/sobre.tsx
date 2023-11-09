import type { NextPage } from "next";
import Head from "next/head";
import MainTemplate from "../common/templates/main";
import IntroBackgroundSobre from "../common/components/Sobre/IntroBackgroundSobre";
import IntroTitleSobre from "../common/components/Sobre/IntroTitleSobre";
import CircleNumbers from "../common/components/Sobre/CircleNumbers";
import GlobalMap from "../common/components/Sobre/GlobalMap";

const Sobre: NextPage = () => {
  return (
    <MainTemplate>
      <Head>
        <title>Sobre a Edenred | Hits da Edenred</title>
        <meta name="description" content=""></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.edenredhits.com.br/sobre/" />
        <meta property="og:title" content="Sobre a Edenred | Hits da Edenred" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://www.edenredhits.com.br/_next/static/media/img2.7c87ea43.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.edenredhits.com.br/sobre/" />
        <meta property="twitter:title" content="Sobre a Edenred | Hits da Edenred" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="https://www.edenredhits.com.br/_next/static/media/img2.7c87ea43.webp" />
      </Head>
      <div className="lg:pt-10">
        <div className="relative lg:pb-40 overflow-hidden">
          <IntroBackgroundSobre/>
          <div className="container m-auto z-10 relative">
            <IntroTitleSobre/>
          </div>

        </div>
        <CircleNumbers/>
        <GlobalMap/>
      </div>
    </MainTemplate>
  );
};

export default Sobre;
