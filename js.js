  document.addEventListener('DOMContentLoaded', (event) => {
        const buttons = document.querySelectorAll('.selengkapnya-btn');
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            alert('Tombol Selengkapnya diklik!');
          });
        });
      });

    var myCarousel = document.querySelector('#carouselExample');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000, 
      wrap: true 
    });

    let navLinks = document.querySelectorAll('.nav-link'); 
    window.onscroll = () => {
    let fromTop = window.scrollY + 100; // Menambahkan 100 untuk mengompensasi perubahan offset

    navLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute('href')); // Mendapatkan elemen section berdasarkan href link

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navLinks.forEach(link => link.classList.remove('active')); // Menghapus kelas 'active' dari semua link navigasi
            link.classList.add('active'); // Menambahkan kelas 'active' pada link yang sesuai dengan section yang sedang aktif
        }
    });
};

  