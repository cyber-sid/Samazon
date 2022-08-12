import React from "react";
import Carouselo from "./Carousel";
import "./home.css";
import Products from "./Products";
import Cdata from "../asset/cards-data";

function Home() {
  return (
    <div className="home">
      <Carouselo />

      <div className="home-cards">
        <Products
          cid={Cdata[0].cid}
          cinfo={Cdata[0].cinfo}
          cprice={Cdata[0].cprice}
          cimg={Cdata[0].cimg}
        />
        <Products
          cid={Cdata[1].cid}
          cinfo={Cdata[1].cinfo}
          cprice={Cdata[1].cprice}
          cimg={Cdata[1].cimg}
        />
      </div>

      <div className="home-cards">
        <Products
          cid={Cdata[2].cid}
          cinfo={Cdata[2].cinfo}
          cprice={Cdata[2].cprice}
          cimg={Cdata[2].cimg}
        />
      </div>
      <div className="home-cards">
        <Products
          cid={Cdata[3].cid}
          cinfo={Cdata[3].cinfo}
          cprice={Cdata[3].cprice}
          cimg={Cdata[3].cimg}
        />

        <Products
          cid={Cdata[4].cid}
          cinfo={Cdata[4].cinfo}
          cprice={Cdata[4].cprice}
          cimg={Cdata[4].cimg}
        />

        <Products
          cid={Cdata[5].cid}
          cinfo={Cdata[5].cinfo}
          cprice={Cdata[5].cprice}
          cimg={Cdata[5].cimg}
        />
      </div>
    </div>
  );
}

export default Home;
