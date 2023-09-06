const product = [
  {
    id: 0,
    image: 'image/pakaian1stekspress.jpg',
    title: 'Rompi Mohawk',
    price: 12000,
  },
  {
    id: 1,
    image: 'image/pakaian2stekspress.jpg',
    title: 'Full White',
    price: 6000,
  },
  {
    id: 2,
    image: 'image/pakaian3stekspress.jpg',
    title: 'Batik Kencana',
    price: 15000,
  },
  {
    id: 3,
    image: 'image/pakaian4stekspress.jpg',
    title: 'Hoodie Vans',
    price: 21000,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById('root').innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp ${price}</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Tambahkan</button>" +
      `</div></div>`
    );
  })
  .join('');

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById('count').innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = 'Your cart is empty';
    document.getElementById('total').innerHTML = 'Rp ' + 0 + ''; // CEK DI SINI
  } else {
    document.getElementById('cartItem').innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById('total').innerHTML = 'Rp ' + total + '';
        return (
          `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}></div>
                    <p style='font-size: 12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>Rp ${price}</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join('');
  }
}
