# pacer-script-examples
Examples of the Pacer API shipping widget

There are examples of the widget implementaion in 3 different frontend frameworks: Vanilla JS, React, and Vue.

# Kuuay embedded script

## 1. Add kuaay-embedded-script.js into your app

Add following code into ``&lt;head&gt;`` tag of your html file

``<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/jacksonreidbritt/pacer-embedded@release2/pacer-co-embedded-obf.js"  defer></script>
``

## 2. Get Shipping quote form work

### 2.1: Use embedded button

Add ``&lt;kuaay-shipping-button&gt;`` in a place in the page that you want to show the pre-built button, when user
click/press on the button, it will show the Shipping quote form in a dialog

```
<div> // your page code
  <kuaay-shipping-button
   data-vin-id="1FTRF07292K189152"
   data-pickup-zip="10010"
   data-year="2010"
   data-make="ford"
   data-model="F-150 Crew Cab Long Bed"
   data-vehicle-type="car"
   title="Car Shipping"
   mobile-subtitle="Tap to get quote"
 >
   Get Shipping Quote
 </kuaay-shipping-button>
</div> // your page code
```

You can override default style of kuaay-shipping-button:

Banner: background, border color, border width, border style, hover background, hover opacity, padding, border radius, height, width,...

Button: font size, font weight, letter spacing, color, background, border color, border width, border style, hover background, hover opacity, padding, border radius, height, width,...

Title: font size, font weight, letter spacing, color, text align

subtitle: font size, font weight, letter spacing, color, text align.

Icon: width, height.

Example:

```

<kuaay-shipping-button
   title="Car Shipping"
   data-pickup-zip="10010"
   data-year="2010"
   data-make="ford"
   data-model="F-150 Crew Cab Long Bed"
   data-vehicle-type="car"
   data-vin-id="1FTRF07292K189153"


   // customize banner styles
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

```

### 2.2: Use your own button and bind it's click event to window.$kuaayApp.showModal function

#### With normal html and javascript

```
<script>
  function openQuoteModal() {
      window.$kuaayApp.showModal({
        vin: "1FTRF07292K189154",
        pickupZip: "10010",
        year: "2020",
        make: "ford",
        model: "F-150 Crew Cab Long Bed",
        bodyType: "car",
      });
    }
</script>
<button
  style={{ padding: '1rem' }}
  onclick="openQuoteModal()"
>
 Get Shipping Quote
</button>
```

#### With React

```
<button
  style={{ padding: '1rem' }}
  onClick={() => {
    window.$kuaayApp.showModal({
      vin: "1FTRF07292K189154",
      pickupZip: "10010",
      year: "2020",
      make: "ford",
      model: "F-150 Crew Cab Long Bed",
      bodyType: "car",
    });
  }}
>
 Get Shipping Quote
</button>
```

## 3. Customize style for Shipping form (Optional)

You can call $kuaayApp.setConfig(config}) to change the default style of Shipping form.

Below is structure of config object:


```
{
  form: {
    backgroundColor: <cssColor>,
    color: <cssColor>,
    fontSize: <cssFontSize>
  },
  input: {
    borderColor: <cssColor>,
    borderWidth: <cssWidth>,
    borderStyle: <cssBorderStyle>,
    borderRadius: <cssBorderRadius>,
    fontSize: <cssFontSize>,
    color: <cssColor>,
    backgroundColor: <cssColor>
  },
  dropdownMenu: {
    borderColor: <cssColor>,
    borderWidth: <cssWidth>,
    borderStyle: <cssBorderStyle>,
    borderRadius: <cssBorderRadius>,
    fontSize: <cssFontSize>,
    color: <cssColor>,
    backgroundColor: <cssColor>
  },
  quoteOptions: {
    active: {
      borderColor: <cssColor>,
      borderWidth: <cssWidth>,
      borderStyle: <cssBorderStyle>,
      borderRadius: <cssBorderRadius>,
      fontSize: <cssFontSize>,
      color: <cssColor>,
      backgroundColor: <cssColor>
    },
    default: {
      borderColor: <cssColor>,
      borderWidth: <cssWidth>,
      borderStyle: <cssBorderStyle>,
      borderRadius: <cssBorderRadius>,
      fontSize: <cssFontSize>,
      color: <cssColor>,
      backgroundColor: <cssColor>
    },
    button: {
      borderColor: <cssColor>,
      borderWidth: <cssWidth>,
      borderStyle: <cssBorderStyle>,
      borderRadius: <cssBorderRadius>,
      fontSize: <cssFontSize>,
      color: <cssColor>,
      backgroundColor: <cssColor>
    }
  },
  switch: {
    backgroundColor: <cssColor>,
    borderColor: <cssColor>
  }

}

```

## NOTICE for React with typescript:

You need to declare globally for ``kuaay-shipping-button`` and ``$kuaayApp``. Please create file ``kuaay.d.ts`` and copy following code:

```
declare global {
  namespace JSX {
    interface IntrinsicElements {
     "kuaay-shipping-button": React.DetailedHTMLProps<
       React.HTMLAttributes<HTMLElement>,
       HTMLElement
     >;
    }
  }
  interface Window {
    $kuaayApp: {
      config: { [key: string]: any },
      createModal: (value: any) => void,
      showModal: (value: any) => void,
      hideModal: () => void,
      setConfig: (value: any) => void,
    }
  }
}

export {}

```
