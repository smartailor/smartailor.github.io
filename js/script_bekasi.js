const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// Script prediksi harga - 1
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
