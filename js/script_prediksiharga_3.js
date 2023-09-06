document.querySelector('.minus-btn').setAttribute('disabled', 'disabled');

var valueCount;

var price = document.getElementById('price').innerText;

function priceTotal() {
  var total = valueCount * price;
  document.getElementById('price').innerText = total;
}

document.querySelector('.plus-btn').addEventListener('click', function () {
  valueCount = document.getElementById('quantity').value;

  valueCount++;

  document.getElementById('quantity').value = valueCount;

  if (valueCount > 1) {
    document.querySelector('.minus-btn').removeAttribute('disabled');
    document.querySelector('.minus-btn').classList.remove('disabled');
  }

  priceTotal();
});

document.querySelector('.minus-btn').addEventListener('click', function () {
  valueCount = document.getElementById('quantity').value;

  valueCount--;

  document.getElementById('quantity').value = valueCount;

  if (valueCount == 1) {
    document.querySelector('.minus-btn').setAttribute('disabled', 'disabled');
  }

  priceTotal();
});
