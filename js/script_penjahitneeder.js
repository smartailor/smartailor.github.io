// LOGIKA SELECT TUKANG NEEDER
function submit() {
  let selectValue = document.querySelector('#select_lokasi').value;
  let namaValue = document.querySelector('#form_nama').value;
  alert('Hai ' + namaValue + ' !' + ' Kami akan segera mencari penjahit yang terdekat dengan lokasi anda.');
  if (selectValue === 'bekasi') {
    window.location.assign('bekasi.html');
  } else if (selectValue === 'jakarta') {
    window.location.assign('jakarta.html');
  } else {
    window.location.assign('bandung.html');
  }
}
