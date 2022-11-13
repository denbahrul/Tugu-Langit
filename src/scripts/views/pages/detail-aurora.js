const AuroraRoomPage = {
  async render() {
    return `
    <nav class="navbar">
    <ul>
        <li class="navbar-logo">TuguLangit.</li>
        <li class="navbar-toggle"><a href="#" aria-label="Humburger Label">☰</a></li>
        <li class="navbar-links"><a href="#hero">Kembali ke Beranda</a></li>
        <li class="navbar-links"><button class="button-primary">Pesan Sekarang</button></li>
    </ul>
</nav>
<main id="mainContent">
    <div class="content-detail">
    <article class="content-detail__room">
        <h1 class="content-detail__title">Kamar Aurora</h1>
        <p class="content-detail__tagline">Dapatkan penginapan yang nyaman disini</p>
        <div class="content-detail__thumbnail">
            <img class="content-detail__thumbnail1" src="./images/IMG-20221107-WA0061.jpg"/>
            <img class="content-detail__thumbnail2" src="./images/IMG-20221107-WA0061.jpg"/>
            <img class="content-detail__thumbnail3" src="./images/IMG-20221107-WA0061.jpg"/>
        </div>
        <div class="content-detail__description">
            <section>
                <p>Spesifikasi</p>
                <h2>1 Bed ukuran 200 x 180</h2>
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
                <h2>Rp. 250.000 / malam</h2>
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
        <a  href="/#/kamar-bulan">
        <section class="content-detail__other-item" href="/#/kamar-bulan">
            <img class="content-detail__other-thumbnail" src="./images/IMG-20221107-WA0063.jpg"/>
            <div class="content-detail__other-description">
                <h3 class="content-detail__other-title">Kamar Bulan</h3>
                <p class="content-detail__other-type">2 Bed</p>
                <p class="content-detail__other-price">Rp. 300.000,-</p>
            </div>
        </section>
        </a>
        <a  href="/#/kamar-meteor">
        <section class="content-detail__other-item">
            <img class="content-detail__other-thumbnail" src="./images/IMG-20221107-WA0064.jpg"/>
            <div class="content-detail__other-description">
                <h3 class="content-detail__other-title">Kamar Meteor</h3>
                <p class="content-detail__other-type">1 Bed</p>
                <p class="content-detail__other-price">Rp. 200.000,-</p>
            </div>
        </section>
        </a>
        <a  href="/#/kamar-satelit">
        <section class="content-detail__other-item">
            <img class="content-detail__other-thumbnail" src="./images/IMG-20221107-WA0066.jpg"/>
            <div class="content-detail__other-description">
                <h3 class="content-detail__other-title">Kamar Satelit</h3>
                <p class="content-detail__other-type">1 Bed</p>
                <p class="content-detail__other-price">Rp. 200.000,-</p>
            </div>
        </section>
        </a>
        <a  href="/#/kamar-bintang">
        <section class="content-detail__other-item">
            <img class="content-detail__other-thumbnail" src="./images/IMG-20221107-WA0060.jpg"/>
            <div class="content-detail__other-description">
                <h3 class="content-detail__other-title">Kamar Bintang</h3>
                <p class="content-detail__other-type">2 Bed</p>
                <p class="content-detail__other-price">Rp. 350.000,-</p>
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
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AuroraRoomPage;
