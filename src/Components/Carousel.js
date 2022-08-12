import React from "react";
import { Carousel } from "react-bootstrap";
import "./car.css";

export default function Carouselo() {
  return (
    <Carousel className="main">
      <Carousel.Item interval={4000}>
        <img
          className="img"
          src="https://cdn.mos.cms.futurecdn.net/NHNFJ3npPLC4dGGrRcuXy-1200-80.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="img"
          src="https://static.toiimg.com/photo/msid-71563551/71563551.jpg?imgsize=71563551"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/April/NTA/cratives/V1/V2/pHeader_750x300.jpg"
          alt="third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/10/02/4c0d783d7832682e9915c1497c86a6fd_original.JPG?impolicy=abp_cdn&imwidth=1200&imheight=628"
          alt="fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
