// Script Navbar
hamburger = document.querySelector('.hamburger');
hamburger.onclick = function () {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
};

// Script Pendaftaran
function daftar() {
  let selectValue = document.querySelector('#daftar').value;
  if (selectValue === 'penjahit') {
    window.location.assign('select_penjahit.html');
  } else {
    window.location.assign('select_penjahitneeder.html');
  }
}

// Script Google Spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxFZmkNWSXg9eJ32A93gyV_HeP3yaloTrbJvxRi9efulnlNgAUyi-KSIKyKW7JmVHpx/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      console.log('Success!', response);
      alert('Terimakasih ! Pesan anda sudah kami terima.');
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
