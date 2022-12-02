import React from "react";
import Carousel from "react-elastic-carousel";
import "./Styles.css";
import { Item } from "./Item";
import step1 from "../../../assets/step1.png";
import stp3 from "../../../assets/stp3.png";
import step2 from "../../../assets/step2.png";

const CarouselData = [
  {
    id: 1,
    icon: step1,
    caption: "walking foot",
    amount: "7 579",
    sub: "",
  },
  {
    id: 2,
    icon: step2,
    caption: "Active Users",
    amount: "866",
    sub: "",
  },
  {
    id: 3,
    icon: stp3,
    caption: "Active Users",
    amount: "27",
    sub: "mins",
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1280, itemsToShow: 2 },
  { width: 1000, itemsToShow: 2 },
];

const CarouselComponent = () => {
  return (
    <Carousel
      breakPoints={breakPoints}
      pagination={false}
      className="carousel-root"
    >
      {CarouselData.map((item, index) => (
        <Item key={index} className="item-div">
          <div className="usercard">
            <h3 className="name">
              {item.amount} <sub style={{ fontWeight: "100" }}>{item.sub}</sub>
            </h3>

            <img src={item.icon} alt="" className="img" />
          </div>
        </Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
