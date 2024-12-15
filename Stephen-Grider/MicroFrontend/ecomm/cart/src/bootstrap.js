import faker from "faker";

const mount = (el) => {
  const cartItem = `<div>${faker.commerce.productName()}</div>`;
  el.innerHTML = cartItem;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");
  if (el) {
    mount(el);
  }
}

export { mount };
