<script setup lang="ts">
const onClickShippingBtn = () => {
  window.$kuaayApp.showModal({
    vin: "1FTRF07292K189154",
    pickupZip: "10010",
    year: "2020",
    make: "ford",
    model: "F-150 Crew Cab Long Bed",
    bodyType: "car"
  });
}
</script>

<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="product-imgs">
        <div class="img-display">
          <div class="img-showcase">
            <img
              src="https://media-r2.carsandbids.com/cdn-cgi/image/width=1800,quality=70/4822e9034b0b6b357b3f73fabdfc10e586c36f68/photos/KDyOod8R-wEDhh-_MMS-(edit).jpg?t=169922897157"
              alt="shoe image" />
          </div>
        </div>
        <div class="img-select">
          <div class="img-item">
            <a href="#" data-id="1">
              <img
                src="https://media-r2.carsandbids.com/cdn-cgi/image/width=542,quality=70/4822e9034b0b6b357b3f73fabdfc10e586c36f68/photos/KDyOod8R-fsXYZlEWlG-(edit).jpg?t=169922914248"
                alt="shoe image" />
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="2">
              <img
                src="https://media-r2.carsandbids.com/cdn-cgi/image/width=542,quality=70/4822e9034b0b6b357b3f73fabdfc10e586c36f68/photos/KDyOod8R-IwcWY04_M6-(edit).jpg?t=169922891420"
                alt="shoe image" />
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="3">
              <img
                src="https://media-r2.carsandbids.com/cdn-cgi/image/width=542,quality=70/4822e9034b0b6b357b3f73fabdfc10e586c36f68/photos/KDyOod8R-Kasz6ZPAt_-(edit).jpg?t=169922900849"
                alt="shoe image" />
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="4">
              <img
                src="https://media-r2.carsandbids.com/cdn-cgi/image/width=542,quality=70/4822e9034b0b6b357b3f73fabdfc10e586c36f68/photos/KDyOod8R-gsdxjqIN_n-(edit).jpg?t=169922919375"
                alt="shoe image" />
            </a>
          </div>
        </div>
      </div>
      <div class="product-content">
        <h2 class="product-title">2019 Tesla Model S Performance</h2>

        <div>
          <b>Highlights</b>
        </div>
        <div>
          THIS... is a 2019 Tesla Model S Performance, finished in Midnight Silver Metallic with a purple
          exterior wrap
          and a black interior.

          The attached Carfax history report lists no accidents or mileage discrepancies in this Tesla's past...

        </div>

        <div class="shipping-container">
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

        <div class="shipping-container">
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


          <div class="shipping-container">

            <div><b>Native button</b></div>
            <div>
              <button id="shipping-btn" @click="onClickShippingBtn">Get Shipping Quote</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  width: 100%;
  display: flex;
}

body {
  font-family: sans-serif;
  background-color: #FFFFFF;
  padding: 48px;
  line-height: 1.5;
}

h1 {
  text-align:center;
  display:inline-block;
  font-size:72px;
}
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}
.card-wrapper{
  max-width: 1100px;
  margin: 0 auto;
}
img{
  width: 100%;
  display: block;
}
.img-display{
  overflow: hidden;
}
.img-showcase{
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
}
.img-showcase img{
  min-width: 100%;
}
.img-select{
  display: flex;
}
.img-item{
  margin: 0.3rem;
}
.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3){
  margin-right: 0;
}
.img-item:hover{
  opacity: 0.8;
}
.product-content{
  padding: 2rem 1rem;
}
.product-title{
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  color: #12263a;
  margin: 1rem 0;
}
.product-title::after{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 80px;
  background: #12263a;
}

.shipping-container {
  margin-top: 16px;
}

@media screen and (min-width: 992px){
  .card{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
  .card-wrapper{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-imgs{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .product-content{
    padding-top: 0;
  }
}

</style>
