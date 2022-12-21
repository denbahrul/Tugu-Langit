const HomePage = {
  async render() {
    return `
    <nav class="navbar">
    <ul>
        <li class="navbar-logo">TuguLangit.</li>
        <li class="navbar-toggle"><a class="fa fa-bars" aria-label="Humburger Label"></a></li>
        <li class="navbar-links"><a href="#hero">Beranda</a></li>
        <li class="navbar-links"><a href="#tentang">Tentang</a></li>
        <li class="navbar-links"><a href="#kamar">Kamar</a></li>
        <li class="navbar-links"><a href="#fasilitas">Fasilitas</a></li>
        <li class="navbar-links"><a href="#destinasi">Destinasi</a></li>
        <li class="navbar-links"><a href="#kontak">Kontak</a></li>
        <li class="navbar-links"><button class="button-nav">Pesan Sekarang</button></li>
    </ul>
</nav>
<main id="mainContent">
<section id="hero" class="hero">
<div class="div hero-container">
    <h2 class="t-xxl">Penginapan Terbaik di
        <br>Sikunir Dieng
    </h2>
    <p class="t-m mt-20 mb-20">Sedang mencari penginapan di sekitar Dieng? <br>
    Kami menyediakan Kamar terbaik untuk anda singgahi.<br>
    Klik tombol di bawah untuk melihat semua kamar!
    </p>

    <a href="#kamar"><button class="button-primary">Lihat Kamar</button></a>
</div>
</section>

<section id="tentang" class="tentang">
<div class="div tentang-container">
    <div class="div tentang-container__flex">
        <div class="div tentang-container__gambar">
            <div class="card-tentang">
                <img src="../images/TNTG.png" alt="" srcset="">
            </div>
        </div>
        <div class="tentang-container__text">
            <h2 class="t-xxl white-text">Tentang Kami? <br>
                Penginapan Sikunir Dieng.</h2>
            <p class="white-text t-regular mt-10">Tugu Langit Sikunir merupakan salah satu homestay terbaik Dieng yang beralamat di 
            Jl. Sembungan, RT.07/RW.02, Sawah & Hutan, Sembungan, Kec. Kejajar, Kabupaten Wonosobo, Jawa Tengah 56354. Kami menyediakan 
            berbagaik kamar terbaik yang bisa anda pilih sesuai dengan kebutuhan anda.
            </p>
            <p class="white-text t-regular mt-10">Alasan Kenapa memilih kami? Karena kami menawarkan pengalaman menginap terbaik dengan 
            harga sewa kamar yang relatif rendah. Kami juga menawarkan view eksotis khas dieng setiap anda bangun pagi atau bersantai setelah 
            beraktifitas seharian. Selain itu, Fasilitas disini juga sangat lengkap untuk menunjang kebutuhan anda.
            </p>
        </div>
    </div>
</div>
</section>

<section id="kamar">
<div class="kamar-container">
    <div class="kamar-container__flex">
        <div class="kamar-container__title">
            <h2 class="t-xxl">Rekomendasi Kamar.</h2>
            <p class="t-m mt-10 gray-text">Beberapa kamar terbaik yang bisa kami tawarkan untuk anda
            </p>
        </div>
        <div class="kamar-container__button">
            <button class="button-primary" id="button-kamar">Pesan Sekarang</button>
        </div>
    </div>
    <div class="cards mt-10">
        <section class="content-detail__room-item">
            <img class="content-detail__room-thumbnail" src="./images/kamar-tugulangit.jpg"/>
            <div class="content-detail__room-description">
                <h3 class="content-detail__room-title">Kamar Tugu Langit</h3>
                <p class="content-detail__room-type">2 Bed</p>
                <p class="content-detail__room-price">Rp. 800.000,-</p>
            </div>
            <a href="/#/kamar-bintang"><button class="button-detail button-primary mt-10 width-100 t-regular">Details</button></a>
        </section>
        <section class="content-detail__room-item">
            <img class="content-detail__room-thumbnail" src="./images/kamar-bintang.jpg"/>
            <div class="content-detail__room-description">
                <h3 class="content-detail__room-title">Kamar Bintang</h3>
                <p class="content-detail__room-type">2 Bed</p>
                <p class="content-detail__room-price">Rp. 550.000,-</p>
            </div>
            <a href="/#/kamar-bintang"><button class="button-detail button-primary mt-10 width-100 t-regular">Details</button></a>
        </section>
            <section class="content-detail__room-item">
            <img class="content-detail__room-thumbnail" src="./images/kamar-aurora.jpg"/>
            <div class="content-detail__room-description">
                <h3 class="content-detail__room-title">Kamar Aurora</h3>
                <p class="content-detail__room-type">1 Bed</p>
                <p class="content-detail__room-price">Rp. 350.000,-</p>
            </div>
            <a href="/#/kamar-aurora"><button class="button-detail button-primary mt-10 width-100 t-regular">Details</button></a>
        </section>
        <section class="content-detail__room-item" href="/#/kamar-bulan">
            <img class="content-detail__room-thumbnail" src="./images/kamar-bulan.jpg"/>
            <div class="content-detail__room-description">
                <h3 class="content-detail__room-title">Kamar Bulan</h3>
                <p class="content-detail__room-type">2 Bed</p>
                <p class="content-detail__room-price">Rp. 450.000,-</p>
            </div>
            <a href="/#/kamar-bulan"><button class="button-detail button-primary mt-10 width-100 t-regular">Details</button></a>
        </section>
            <section class="content-detail__room-item">
            <img class="content-detail__room-thumbnail" src="./images/kamar-meteor.jpg"/>
            <div class="content-detail__room-description">
                <h3 class="content-detail__room-title">Kamar Meteor</h3>
                <p class="content-detail__room-type">1 Bed</p>
                <p class="content-detail__room-price">Rp. 350.000,-</p>
            </div>
            <a href="/#/kamar-meteor"><button class="button-detail button-primary mt-10 width-100 t-regular">Details</button></a>
        </section>
        <section class="content-detail__room-item">
            <img class="content-detail__room-thumbnail" src="./images/kamar-satelit.jpg"/>
            <div class="content-detail__room-description">
                <h3 class="content-detail__room-title">Kamar Satelit</h3>
                <p class="content-detail__room-type">1 Bed</p>
                <p class="content-detail__room-price">Rp. 300.000,-</p>
            </div>
            <a href="/#/kamar-satelit"><button class="button-detail button-primary mt-10 width-100 t-regular">Details</button></a>
        </section>
    </div>
</div>
</section>
<section id="fasilitas" class="fasilitas">
<div class="fasilitas-container">
    <h2 class="t-xxl bold-text primary-text">Fasilitas.</h2>
    <p class="gray-text mt-10 t-m">Dapatkan fasilitas dan membuat Anda lebih nyaman</p>
    <div class="kartus mt-40">
        <div class="kartu">
            <p class="fa fa-car centered-text t-m"></p>
            <p class="primary-text centered-text bold-text mt-10">Tempat Parkir</p>
            <p class="centered-text mt-10 t-s">Tempat parkir luas.
            </p>

        </div>
        <div class="kartu">
            <p class=" fa fa-bath centered-text t-m"></p>
            <p class="primary-text centered-text bold-text mt-10">Kamar Mandi Dalam</p>
            <p class="centered-text mt-10 t-s">Kamar mandi dalam yang nyaman .
            </p>

        </div>
        <div class="kartu">
            <p class="fa fa-tint centered-text t-m"></p>
            <p class="primary-text centered-text bold-text mt-10">Air Hangat</p>
            <p class="centered-text mt-10 t-s">Air panas untuk menangkal udara dingin Dieng.
            </p>

        </div>
        <div class="kartu">
            <p class="fa fa-wifi centered-text t-m"></p>
            <p class="primary-text centered-text bold-text mt-10">Wifi</p>
            <p class="centered-text mt-10 t-s">Wifi kencang untuk anda berbagi di internet.
            </p>

        </div>
        <div class="kartu">
            <p class="fa fa-coffee centered-text t-m"></p>
            <p class="primary-text centered-text bold-text mt-10">Teh, Kopi, Gula</p>
            <p class="centered-text mt-10 t-s">Minuman hangat yang setia menemani anda saat santai.
            </p>

        </div>
        <div class="kartu">
            <p class="fa fa-cutlery centered-text t-m"></p>
            <p class="primary-text centered-text bold-text mt-10">Dapur Masak</p>
            <p class="centered-text mt-10 t-s">Dapur nyaman untuk anda memasak dikala lapar menerjang
            </p>

        </div>
        <div class="kartu">
            <p class="fa fa-shower centered-text t-m"></p>
            <p class="primary-text centered-text bold-text mt-10">Set Alat Mandi</p>
            <p class="centered-text mt-10 t-s">Alat mandi untuk anda gunakan secara gratis.
            </p>

        </div>
        <div class="kartu">
            <p class="fa fa-ticket centered-text t-m"></p>
            <p class="primary-text centered-text bold-text mt-10">Sendal Homestay</p>
            <p class="centered-text mt-10 t-s">Sandal khas homestay untuk anda merasa nyaman
            </p>

        </div>
        <div class="kartu">
            <p class="fa fa-male centered-text t-m"></p>
            <p class="primary-text centered-text bold-text mt-10">Handuk</p>
            <p class="centered-text mt-10 t-s">Handuk untuk anda gunakan saat maupun setelah mandi.
            </p>

        </div>
    </div>
</section>
<section id="destinasi" class="destinasi">
<div class="destinasi-header">
    <h3 class="t-xxl bold-text  primary-text">Destinasi Sekitar<br><br></h3>
    <p>Jelajahi destinasi di sekitar Homestay Tugu Langit untuk menambahkan pengalaman liburan Anda.</p>
</div>
<div class="destinasi-container">
    <div class="destinasi-list">
    <a href="https://goo.gl/maps/72KkdLducLZAFTDW8" target="blank" title="https://images.unsplash.com/photo-1624030058665-c243555d6f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80">
        <img class="destinasi-thumbnail" alt="Kawah Sikidang" src=https://images.unsplash.com/photo-1624030058665-c243555d6f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80">
        <div class="destinasi-title">
            <p class="fa fa-map-marker"> </p>
            <p> Kawah Sikidang</p>
        </div>
    </div>
    </a>
    <a href="https://goo.gl/maps/QWmPg7jb8zdVHmSJ7" target="blank" title="https://images.unsplash.com/photo-1611655906612-a06e250203fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGllbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
    <div class="destinasi-list">
        <img class="destinasi-thumbnail" src="https://images.unsplash.com/photo-1611655906612-a06e250203fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGllbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
        <div class="destinasi-title">
            <p class="fa fa-map-marker"> </p>
            <p> Sikurnir Dieng</p>
        </div>
    </div>
    </a>
    <a href="https://goo.gl/maps/srgtm9QUG1ytqeXUA" target="blank" title="https://images.unsplash.com/photo-1571738318198-fda6afce5348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGllbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
    <div class="destinasi-list">
        <img class="destinasi-thumbnail" src="https://images.unsplash.com/photo-1580890310980-27d60c2ce1c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
        <div class="destinasi-title">
            <p class="fa fa-map-marker"> </p>
            <p> Gunung Prau</p>
        </div>
    </div>
    </a>
    <a href="https://goo.gl/maps/kAWjwYrgpJPwisTf9" target="blank" title="https://images.unsplash.com/photo-1611658983468-9dcedf91db63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGllbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
    <div class="destinasi-list">
        <img class="destinasi-thumbnail" src="https://images.unsplash.com/photo-1611658983468-9dcedf91db63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGllbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
        <div class="destinasi-title">
            <p class="fa fa-map-marker"> </p>
            <p> Telaga Cebong</p>
        </div>
    </div>
    </a>
    <a href="https://goo.gl/maps/YLo2wG9mgzmewJDY6" target="blank" title="https://images.unsplash.com/photo-1638851777087-282c16994942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFyanVuYSUyMGRpZW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
    <div class="destinasi-list">
        <img class="destinasi-thumbnail" src="https://images.unsplash.com/photo-1638851777087-282c16994942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFyanVuYSUyMGRpZW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
        <div class="destinasi-title">
            <p class="fa fa-map-marker"> </p>
            <p> Telaga Pengilon</p>
        </div>
    </div>
    </a>
    <a href="https://goo.gl/maps/SDSJbgWKqWrmqPZh8" target="blank" title="https://images.unsplash.com/photo-1602808680514-8c04c7552632?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFyanVuYSUyMGRpZW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
    <div class="destinasi-list">
        <img class="destinasi-thumbnail" src="https://images.unsplash.com/photo-1602808680514-8c04c7552632?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFyanVuYSUyMGRpZW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
        <div class="destinasi-title">
            <p class="fa fa-map-marker"> </p>
            <p> Savana Dieng</p>
        </div>
    </div>
    </a>
</div>
</section>
<section id="kontak" class="kontak">
<div class="div kontak-container">
    <div class="kontak-container__flex">
        <div class="kontak-container__kontak">
            <h2 class="t-xxl white-text">Kontak.</h2>
            <p class="white-text t-m mt-20">Jl, Cebong, Sikunir, Sembungan, <br>Kabupaten Wonosobo, Jawa
                Tengah 56354</p>
            <p class="white-text t-m mt-20">081392068828</p>
            <p class="white-text t-m mt-20">081392068828</p>
        </div>
        <div class="kontak-container__map">
            <div class="card-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.064625276419!2d109.90771869678953!3d-7.233469599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700da120c1333d%3A0xbfaa9d1832340de9!2sVila%20tugu%20langit!5e0!3m2!1sid!2sid!4v1668151351280!5m2!1sid!2sid"
                    width="100%" height="450" style="border:0 ; margin: auto;" allowfullscreen=""
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</div>
</div>
</section>
</main>
      `;
  },

  async afterRender() {
    const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links');
    const buttonDetail2 = document.getElementsByClassName('button-detail');

    console.log(buttonDetail2);
    toggleButton.addEventListener('click', () => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < navbarLinks.length; i++) navbarLinks[i].classList.toggle('active');
    });

    buttonDetail2[0].addEventListener('click', () => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });

    buttonDetail2[1].addEventListener('click', () => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });

    buttonDetail2[2].addEventListener('click', () => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });

    buttonDetail2[3].addEventListener('click', () => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });

    buttonDetail2[4].addEventListener('click', () => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });

    buttonDetail2[5].addEventListener('click', () => {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });
  },
};

export default HomePage;
