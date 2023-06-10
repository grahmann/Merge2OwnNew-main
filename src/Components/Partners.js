import React from 'react';
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter1.png";
import meter3 from "../assets/img/meter1.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Partners = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="partner" id="partners">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="partner-bx wow zoomIn">
                        <h2>Partnerships</h2>
                        <p>Merge2Own collaborates with trusted partners ranging from real estate agencies and financial institutions to background check providers and educational bodies, providing a secure, comprehensive, and educative platform for seamless property co-ownership.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Realtors" />
                                <h5>Realtors</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Agencies" />
                                <h5>Agencies</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Financial Literacy" />
                                <h5>Financial Institutions</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Background Checks" />
                                <h5>Background Check Providers</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}