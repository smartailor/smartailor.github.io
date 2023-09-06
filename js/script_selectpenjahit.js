function kirim() {
  let namaValue = document.querySelector('.form_nama').value;
  let umurValue = document.querySelector('.form_umur').value;
  let projekValue = document.querySelector('.form_projekselesai').value;
  let lokasiValue = document.querySelector('.form_lokasi').value;
  let teleponValue = document.querySelector('.form_nomortelepon').value;
  let spesialisasiValue = document.querySelector('.form_spesialisasi').value;

  document.getElementById('p_nama').innerHTML = 'Nama: ' + namaValue;
  document.getElementById('p_umur').innerHTML = 'Umur: ' + umurValue;
  document.getElementById('p_projek').innerHTML = 'Projek yang sudah terselesaikan: ' + projekValue;
  document.getElementById('p_lokasi').innerHTML = 'Lokasi tempat tinggal: ' + lokasiValue;
  document.getElementById('p_nomor_telepon').innerHTML = 'Nomor telepon: ' + teleponValue;
  document.getElementById('p_spesialisasi').innerHTML = 'Spesialisasi pakaian: ' + spesialisasiValue;
  document.getElementById('p_konfirmasi').innerHTML = 'Terimakasih ! Anda sudah terdaftar di website kami sekarang.';
  document.querySelector('.form').reset();
}
