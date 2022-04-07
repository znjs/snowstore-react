import { logoMain } from "../assets";
import { confettiCanvas } from "./confettiCanvas";
import { toastMessage } from "./toastMessage";
const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};
const displayRazorpay = async (price, onsuccess) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    console.error("Razorpay SDK failed to load, check you connection", "error");
    return;
  }

  const options = {
    key: "rzp_test_mtJ2oeH0n6mxOP",
    amount: price * 100,
    currency: "INR",
    name: "SnowStore",
    description: "Thank you for shopping with us",
    image: logoMain,
    handler: function (response) {
      console.log(response);
      confettiCanvas();

      toastMessage("SUCCESS", "Order Placed succefully 🎉");
      onsuccess();
    },
    prefill: {
      name: "sfdghjk",
      email: "uasdjasd@gmail.com",
      contact: "9833445762",
    },
    theme: {
      color: "#1f2937",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export { displayRazorpay };
