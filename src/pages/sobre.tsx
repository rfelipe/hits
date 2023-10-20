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
