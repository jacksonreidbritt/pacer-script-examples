import React from 'react';
import './App.css';

function App() {

  const handleCLickShippingBtn = () => {
    window.$kuaayApp.showModal({
      vin: "1FTRF07292K189154",
      pickupZip: "10010",
      year: "2020",
      make: "ford",
      model: "F-150 Crew Cab Long Bed",
      bodyType: "car"
    });
  }

  return (
          <div className="card-wrapper">
            <div className="card">
              <div className="product-imgs">
                <div className="img-display">
                  <div className="img-showcase">
                    <img
                            src="https://media-r2.carsandbids.com/cdn-cgi/image/width=1800,quality=70/4822e9034b0b6b357b3f73fabdfc10e586c36f68/photos/KDyOod8R-wEDhh-_MMS-(edit).jpg?t=169922897157"
                            alt="shoe image" />
                  </div>
                </div>
                <div className="img-select">
                  <div className="img-item">
                    <a href="#" data-id="1">
                      <img
                              src="https://media-r2.carsandbids.com/cdn-cgi/image/width=542,quality=70/4822e9034b0b6b357b3f73fabdfc10e586c36f68/photos/KDyOod8R-fsXYZlEWlG-(edit).jpg?t=169922914248"
                              alt="shoe image" />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id="2">
                      <img
                              src="https://media-r2.carsandbids.com/cdn-cgi/image/width=542,quality=70/4822e9034b0b6b357b3f73fabdfc10e586c36f68/photos/KDyOod8R-IwcWY04_M6-(edit).jpg?t=169922891420"
                              alt="shoe image" />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id="3">
                      <img
                              src="https://media-r2.carsandbids.com/cdn-cgi/image/width=542,quality=70/4822e9034b0b6b357b3f73fabdfc10e586c36f68/photos/KDyOod8R-Kasz6ZPAt_-(edit).jpg?t=169922900849"
                              alt="shoe image" />
                    </a>
                  </div>
                  <div className="img-item">
                    <a href="#" data-id="4">
                      <img
                              src="https://media-r2.carsandbids.com/cdn-cgi/image/width=542,quality=70/4822e9034b0b6b357b3f73fabdfc10e586c36f68/photos/KDyOod8R-gsdxjqIN_n-(edit).jpg?t=169922919375"
                              alt="shoe image" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <h2 className="product-title">2019 Tesla Model S Performance</h2>

                <div>
                  <b>Highlights</b>
                </div>
                <div>
                  THIS... is a 2019 Tesla Model S Performance, finished in Midnight Silver Metallic with a purple
                  exterior wrap
                  and a black interior.

                  The attached Carfax history report lists no accidents or mileage discrepancies in this Tesla's past...

                </div>

                <div className="shipping-container">
                  <div><b>Default kuaay-shipping-button</b></div>
                  <div>
                    <kuaay-shipping-button
                            data-vin-id="1FTRF07292K189152"
                            data-pickup-zip="10010"
                            data-year="2010"
                            data-make="ford"
                            data-model="F-150 Crew Cab Long Bed"
                            data-vehicle-type="car"
                            title="Car Shipping"
                            mobile-subtitle="Tap here to get quote"
                    >
                      Get Shipping Quote
                    </kuaay-shipping-button>
                  </div>

                </div>

                <div className="shipping-container">
                  <div><b>Customized kuaay-shipping-button</b></div>
                  <div>
                    <kuaay-shipping-button
                            data-vin-id="1FTRF07292K189153"
                            title="Car Shipping"
                            data-pickup-zip="10010"
                            data-year="2010"
                            data-make="ford"
                            data-model="F-150 Crew Cab Long Bed"
                            data-vehicle-type="car"
                            banner-background="#b8daf2"
                            banner-hover-background="#cae5f3"
                            banner-border-color="#013357"
                            banner-border-width="2px"
                            banner-padding="1rem 2rem"
                            banner-border-radius="16px"
                            button-font-size="16px"
                            button-color="#ffffff"
                            button-background="#1b3894"
                            button-hover-background="#1b389480"
                            button-border-color="#ffffff"

                            title-align="center"
                            title-font-size="20px"
                            title-color="#1b3894"
                            title-font-weight="600"
                            icon-width="72px"
                            icon-height="72px"
                    >
                      Get Shipping Quote
                    </kuaay-shipping-button>
                  </div>


                  <div className="shipping-container">

                    <div><b>Native button</b></div>
                    <div>
                      <button id="shipping-btn" onClick={handleCLickShippingBtn}>Get Shipping Quote</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
  );
}

export default App;
