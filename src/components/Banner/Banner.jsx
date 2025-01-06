import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.jpg";
import sliderImg1 from "../../assets/images/slider/2.jpg";
import sliderImg2 from "../../assets/images/slider/3.jpg";
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  3+ Year Experience
                </h5>
                <p className="sub_text">
                  Over 3 years of expertise delivering unparalleled solutions and insights for your success
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  Dedicated Members
                </h5>
                <p className="sub_text">
                Passionate team members dedicated to exceeding expectations and achieving mutual success
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg2} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                Valuable Supports
                </h5>
                <p className="sub_text">
                Tailored support and guidance ensuring reliability and innovation every step of the way
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </section>
    </>
  );
};

export default Banner;
