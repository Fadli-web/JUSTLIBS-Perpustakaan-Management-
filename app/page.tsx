import Head from 'next/head';
import Link from 'next/link';
import react from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      <Head>
        <title>JustLibs Management Perpustakaan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* ==================== 1. NAVBAR / HEADER ==================== */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tight text-slate-900">
              JustLibs
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <Link href="#fitur" className="hover:text-cyan-600 transition-colors">Fitur Utama</Link>
            <Link href="#tentang" className="hover:text-cyan-600 transition-colors">Tentang Kami</Link>
            <Link href="#katalog" className="hover:text-cyan-600 transition-colors">Katalog</Link>
          </div>

          <div className="flex items-center space-x-3">
            <Link href="/auth/login">
              <button className="shadow-2xl hover:scale-115 px-4 py-2 text-xs md:text-sm font-semibold text-slate-700 bg-gray-100 hover:backdrop-blur-3xl rounded-full transition">
                Login
              </button>
            </Link>
            <Link href="/auth/register">
              <button className="hover:scale-115 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 hover:backdrop-blur-3xl rounded-full transition shadow-sm">
                Register
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* ==================== 2. HERO SECTION ==================== */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-4 max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Welcome To Our Website, <br className="hidden sm:block" /> <span className="text-slate-900">JustLibs</span>
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Ini adalah website untuk Management Perpustakaan dan digunakan untuk  siswa dan siswi yang ingin mencari atau meminjam buku di perpustakaan sekolah. Dengan JustLibs, proses pencarian dan peminjaman buku menjadi lebih mudah dan efisien.
        </p>
        <Link href="#langsungaja" className="inline-block">
          <button className="hover:scale-115 bg-[#11cdef] hover:bg-[#0ebbe0] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-cyan-200 transition-all transform hover:-translate-y-0.5">
            Mulai Sekarang
          </button>
        </Link>
      </section>

      {/* ==================== 3. MOCKUP & BANNER BIRU ==================== */}
      <div className="relative z-20 w-[92%] max-w-4xl mx-auto mt-8 sm:mt-12" id="tentang">
        <div className="hover:scale-105 bg-slate-900 rounded-2xl p-2 sm:p-4 shadow-2xl border border-white/20 aspect-[16/9] flex flex-col items-center justify-center">
          <div className=" bg-slate-800 rounded-xl overflow-hidden border border-slate-700 w-full h-full flex flex-col items-center justify-center relative group">
            <img 
              src="asset/mockup.jpg" 
              alt="Dashboard Mockup" 
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <section className="bg-linear-to-t from-cyan-300 to-cyan-800 relative z-10 -mt-20 sm:-mt-24 md:-mt-48 pt-32 sm:pt-40 md:pt-60 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center relative z-10 mt-8 md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            Temukan, Pinjam, dan Kelola Koleksi Buku
          </h2>
          <p className="text-white/85 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Nikmati kemudahan mencari buku fisik maupun digital dalam satu aplikasi. Proses peminjaman, pengembalian, hingga laporan dapat dilakukan kapan saja dan di mana saja.
          </p>
          <button className="border-2 border-white/60 text-white hover:bg-white hover:text-[#11cdef] px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all hover:scale-120">
            Cari Buku
          </button>
        </div>

        {/* PERBAIKAN: Maskot Kiri Bawah - Ukuran diperbesar dinamis */}
        <div className="absolute bottom-0 left-0 md:left-8 lg:left-16 w-40 sm:w-56 md:w-72 lg:w-80 z-20">
          <img 
            src="asset/maskot1.png" 
            alt="Maskot bos daget" 
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </section>

{/* buat teks bergulir horizontal ini custom */}
    <div className="mt-10 w-full mb md:w-full sm:w-full overflow-hidden bg-linear-to-r from-cyan-500 to-cyan-800 text-white py-3 flex items-center">
      <div className="animate-marquee whitespace-nowrap font-semibold text-sm md:text-base">
        <span className="mx-4">Halo Bos! Silahkan menjelajahi website kami</span>
        <span className="mx-4">Website kami adalah website untuk managemen system perpustakaan</span>
        <span className="mx-4">Bisa memantau status peminjaman bagi siswa dan siswi</span>
         <span className="mx-4">Silahkan registrasi terlebih dahulu untuk masuk ke dalam sistem</span>
         <span className="mx-4">Website ini dibuat untuk mempermudah siswa dan siswi dalam mencari buku</span>
         
      </div>
    </div>



      {/* ==================== 4. FEATURES SECTION ==================== */}
      <section id="fitur" className="py-20 md:py-32 px-4 sm:px-6 max-w-6xl mx-auto space-y-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Pencatatan Data Buku Otomatis
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Pustakawan cukup memasukkan barcode atau memasukkan nomor ISBN/Katalog. Sistem akan otomatis mengisi detail informasi buku, membuat proses inventaris menjadi jauh lebih cepat dan akurat.
            </p>
          </div>
          <div className="bg-slate-100 rounded-2xl border border-gray-200 shadow-sm aspect-[4/3] flex items-center justify-center overflow-hidden relative">
            <img src="asset/pencatatan.jpg" alt="Fitur 1" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center md:flex-row-reverse">
          <div className="bg-slate-100 rounded-2xl border border-gray-200 shadow-sm aspect-[4/3] flex items-center justify-center overflow-hidden relative md:order-1">
            <img src="asset/fitur2.webp" alt="Fitur 2" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4 md:order-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Akses Terintegrasi dari Berbagai Perangkat
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Berbasis cloud, katalog perpustakaan akan selalu terbarui secara real-time. Siswa dapat mencari, memesan buku, dan membaca modul referensi melalui komputer sekolah, laptop pribadi, maupun ponsel mereka.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Kategori & Rak Buku Digital yang Rapi
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Temukan buku dengan mudah! Sistem kami mengelompokkan koleksi berdasarkan mata pelajaran, kelas, genre fiksi/nonfiksi, hingga modul referensi untuk mendukung kebutuhan belajar siswa.
            </p>
          </div>
          <div className="bg-slate-900 rounded-2xl shadow-xl aspect-[4/3] flex items-center justify-center overflow-hidden relative">
             <img src="https://png.pngtree.com/thumb_back/fh260/background/20240914/pngtree-digital-bookshelf-open-book-on-tablet-display-next-to-real-in-image_16205714.jpg" alt="Fitur 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ==================== 5. BANNER PENGALAMAN SISWA ==================== */}
      <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto overflow-visible" id="katalog">
        <div className="bg-[#e7f9fd] rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8  bg-linear-to-b from-cyan-400 to-white/55 shadow-lg relative">
          <div className="space-y-4 max-w-xl text-center md:text-left z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
              Membantu Ribuan Siswa Lebih Rajin Membaca
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Sistem dirancang secara khusus untuk lingkungan sekolah. Kami terus berkembang & berinovasi memberikan pengalaman membaca yang seru, serta mendukung tercapainya budaya literasi yang lebih baik.
            </p>
          </div>
          
          {/* PERBAIKAN: Maskot Kanan - Diperbesar & keluar box sedikit pakai negative margin di Desktop */}
          <div className="w-48 sm:w-64 md:w-80 lg:w-96 shrink-0 md:-mr-12 lg:-mr-20 z-10 mt-6 md:mt-0">
            <img 
              src="asset/maskot2.png" 
              alt="Maskot Bintang" 
              className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* ==================== 6. CALL TO ACTION / AUTH SECTION ==================== */}
      <section className="py-20 px-4 text-center max-w-5xl mx-auto " id="langsungaja">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 mb-12 leading-snug">
          Langsung aja Reg Login atau Register untuk mengakses!
        </h2>

        {/* PERBAIKAN: Layout Tombol & Maskot disejajarkan sesuai screenshot */}
        <div className="flex flex-col sm:flex-row items-end justify-center gap-6 sm:gap-12 max-w-2xl mx-auto relative">
          
          {/* Maskot Kiri */}
          <div className="w-40 sm:w-56 md:w-60 shrink-0 sm:absolute sm:left-0 sm:bottom-0 sm:-ml-24 md:-ml-32 lg:-ml-40  flex justify-center sm:block z-10">
            <img 
              src="asset/maskot3.png" 
              alt="Maskot Auth" 
              className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform"
            />
          </div>

          {/* Tombol */}
          <Link href="/auth/login">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-20 sm:ml-auto mb-4 sm:mb-8">
              <button className="px-12 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-sm transition shadow-lg w-full sm:w-auto">
                Login
              </button>
            </div>
          </Link>
          <Link href="/auth/register">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-20 sm:ml-auto mb-4 sm:mb-8">
              <button className="px-12 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-sm transition shadow-lg w-full sm:w-auto">
                Register
              </button>
            </div>
          </Link>
        </div>
      </section>

      {/* ==================== 7. FOOTER ==================== */}
      <footer className="bg-[#0b131e] text-gray-400 py-16 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition">About Sapiens</Link></li>
              <li><Link href="#" className="hover:text-white transition">Kedudukan</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider">Media</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">Contribute</Link></li>
              <li><Link href="#" className="hover:text-white transition">Explore</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">FAQs</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider">Policies</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Disclaimer</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider">Social</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">YouTube</Link></li>
              <li><Link href="#" className="hover:text-white transition">GitHub</Link></li>
              <li><Link href="#" className="hover:text-white transition">Twitter</Link></li>
              <li><Link href="#" className="hover:text-white transition">Instagram</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-3">
            <h3 className="text-white font-black text-lg tracking-tight">SAPIENS</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Sapiens dan JustLibs adalah solusi Sistem Manajemen Perpustakaan Terpadu. Dirancang khusus untuk mempermudah sekolah dan siswa dalam mengelola koleksi buku secara digital.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/60 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} SAPIENS & JustLibs. All rights reserved.
        </div>
      </footer>

    </div>
  );
}