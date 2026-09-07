const whatsappNumber = "918593990210";

function orderProduct(productName) {

  const message =
    "Hi Dreamy Loops 🧶, I am interested in " +
    productName +
    ". Please send me the price and details.";

  const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}


function contactWhatsApp() {

  const message =
    "Hi Dreamy Loops 🧶, I would like to know more about your crochet products.";

  const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}