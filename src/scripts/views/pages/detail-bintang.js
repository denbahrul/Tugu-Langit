const BintangRoomPage = {
  async render() {
    return `
    <nav class="navbar">
    <ul>
        <li class="navbar-logo">TuguLangit.</li>
        <li class="navbar-toggle"><a class="fa fa-bars" aria-label="Humburger Label"></a></li>
        <li class="navbar-links"><a href="#hero">Kembali ke Beranda</a></li>
        <li class="navbar-links"><button class="button-nav">Pesan Sekarang</button></li>
    </ul>
</nav>
<main id="mainContent">
    <div class="content-detail">
    <article class="content-detail__room">
        <h1 class="content-detail__title">Kamar Bintang</h1>
        <p class="content-detail__tagline">Dapatkan penginapan yang nyaman disini</p>
        <div class="content-detail__thumbnail">
            <img class="content-detail__thumbnail1" src="./images/kamar-bintang.jpg"/>
            <img class="content-detail__thumbnail2" src="./images/kamar-bintang.jpg"/>
            <img class="content-detail__thumbnail3" src="./images/kamar-bintang.jpg"/>
        </div>
        <div class="content-detail__description">
            <section>
                <p>Spesifikasi</p>
                <h2>1 Bed ukuran 100 x 180<br>1 Bed ukuran 100 x 180</h2>
            </section>
            <section>
                <p>Check-In</p>
                <h2>Pukul 14.00 WIB</h2>
            </section>
            <section>
                <p>Check-Out</p>
                <h2>Pukul 12.00 WIB</h2>
            </section>
            <section>
                <p>Harga Mulai</p>
                <h2><strong>Rp. 550.000</strong><i>/malam</i></h2>
            </section>
        </div>
        <div class="content-detail__fasilitas">
            <h3>Fasilitas dan Layanan</h3>
            <div class="fasilitas-list">
                <div class="fasilitas-item">
                    <p class=" fa fa-car"></p>
                    <p>Tempat Parkir</p>
                </div>
                <div class="fasilitas-item">
                    <p class=" fa fa-bath"></p>
                    <p>Kamar Mandi Dalam</p>
                </div>
                <div class="fasilitas-item">
                    <p class=" fa fa-tint"></p>
                    <p>Air Hangat</p>
                </div>
                <div class="fasilitas-item">
                    <p class=" fa fa-wifi"></p>
                    <p>Wifi</p>
                </div>
                <div class="fasilitas-item">
                    <p class=" fa fa-coffee"></p>
                    <p>Teh, Kopi, Gula</p>
                </div>
                <div class="fasilitas-item">
                    <p class=" fa fa-cutlery"></p>
                    <p>Dapur Masak</p>
                </div>
                <div class="fasilitas-item">
                    <p class=" fa fa-shower"></p>
                    <p>Set Alat Mandi</p>
                </div>
                <div class="fasilitas-item">
                    <p class=" fa fa-ticket"></p>
                    <p>Sendal Homestay</p>
                </div>
                <div class="fasilitas-item">
                    <p class=" fa fa-male"></p>
                    <p>Handuk</p>
                </div>
            </div>
            <div class="button-book_nav">
                <a href="#" class="button-book">Pesan Sekarang</a>
            </div>
        </div>
    </article>
</div>
<div class="content-other">
    <article class="content-detail__other">
        <h2>Lihat Kamar Lain..</h2>
        <div class="content-detail__other-list">
            <a  href="/#/kamar-aurora">
            <section class="content-detail__other-item">
                <img class="content-detail__other-thumbnail" src="./images/kamar-aurora.jpg"/>
                <div class="content-detail__other-description">
                    <h3 class="content-detail__other-title">Kamar Aurora</h3>
                    <p class="content-detail__other-type">1 Bed</p>
                    <p class="content-detail__other-price">Rp. 350.000,-</p>
                </div>
            </section>
            </a>
            <a  href="/#/kamar-bulan">
            <section class="content-detail__other-item" href="/#/kamar-bulan">
                <img class="content-detail__other-thumbnail" src="./images/kamar-bulan.jpg"/>
                <div class="content-detail__other-description">
                    <h3 class="content-detail__other-title">Kamar Bulan</h3>
                    <p class="content-detail__other-type">1 Bed</p>
                    <p class="content-detail__other-price">Rp. 450.000,-</p>
                </div>
            </section>
            </a>
            <a  href="/#/kamar-meteor">
            <section class="content-detail__other-item">
                <img class="content-detail__other-thumbnail" src="./images/kamar-meteor.jpg"/>
                <div class="content-detail__other-description">
                    <h3 class="content-detail__other-title">Kamar Meteor</h3>
                    <p class="content-detail__other-type">1 Bed</p>
                    <p class="content-detail__other-price">Rp. 350.000,-</p>
                </div>
            </section>
            </a>
            <a  href="/#/kamar-satelit">
            <section class="content-detail__other-item">
                <img class="content-detail__other-thumbnail" src="./images/kamar-satelit.jpg"/>
                <div class="content-detail__other-description">
                    <h3 class="content-detail__other-title">Kamar Satelit</h3>
                    <p class="content-detail__other-type">1 Bed</p>
                    <p class="content-detail__other-price">Rp. 300.000,-</p>
                </div>
            </section>
            </a>
            <a  href="/#/kamar-tugulangit">
            <section class="content-detail__other-item">
                <img class="content-detail__other-thumbnail" src="./images/kamar-tugulangit.jpg"/>
                <div class="content-detail__other-description">
                    <h3 class="content-detail__other-title">Kamar Tugu Langit</h3>
                    <p class="content-detail__other-type">2 Bed</p>
                    <p class="content-detail__other-price">Rp. 800.000,-</p>
                </div>
            </section>
            </a>
        </div>

    </article>
</div>
</main>
      `;
  },

  async afterRender() {
    const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links');

    toggleButton.addEventListener('click', () => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < navbarLinks.length; i++) navbarLinks[i].classList.toggle('active');
    });
  },
};

export default BintangRoomPage;
