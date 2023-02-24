// Mengambil elemen button dari DOM
const button = document.getElementById('next-button');

// Mengambil elemen message-box dari DOM
const messageBoxes = document.querySelectorAll('.message-box');

// Membuat variabel counter untuk mengetahui pesan mana yang sedang ditampilkan
let counter = 0;

// Menambahkan event listener untuk button ketika diklik
button.addEventListener('click', function() {
  // Menampilkan pesan dan gambar sesuai dengan counter
  messageBoxes[counter].style.display = 'block';

  // Menambahkan 1 ke counter untuk menampilkan pesan selanjutnya ketika tombol diklik lagi
  counter++;

  // Jika counter melebihi jumlah pesan yang ada, tombol dihilangkan
  if (counter === messageBoxes.length) {
    button.style.display = 'none';
  }
});
