// Inisialisasi Isotope
var $grid = $('.collection-list').isotope({
  itemSelector: '.col-md-6', // Pilih elemen grid yang akan difilter
  layoutMode: 'fitRows' // Gunakan layout 'fitRows'
});

// Filter items on button click
$('.filter-button-group').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter'); // Ambil nilai data-filter dari tombol yang diklik
  
  // Reset semua tombol
  resetFilterBtns();
  
  // Menambahkan kelas active-filter-btn ke tombol yang dipilih
  $(this).addClass('active-filter-btn');
  
  // Menyaring grid berdasarkan filter yang dipilih
  $grid.isotope({ filter: filterValue });
});

// Fungsi untuk menghapus kelas active-filter-btn dari semua tombol
function resetFilterBtns() {
  var filterBtns = $('.filter-button-group').find('button');
  filterBtns.each(function() {
    $(this).removeClass('active-filter-btn'); // Menghapus kelas aktif dari semua tombol
  });
}


// Ambil elemen navbar
var navbar = document.querySelector('.navbar');

// Ambil posisi offset navbar dari atas
var sticky = navbar.offsetTop;

// Fungsi untuk menambahkan kelas sticky saat scroll
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// Event listener untuk scroll
window.onscroll = function() {
    stickyNavbar();
};
