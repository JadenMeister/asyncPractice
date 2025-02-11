const applyBtn = document.getElementById("button");
const th = document.querySelector("th");

applyBtn.addEventListener(
  ("click",
  function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    const product = {
      name: name,
      price: price,
      quantity: quantity
    };
    console.log(product);
  })
);
