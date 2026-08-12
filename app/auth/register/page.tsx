// "use client";

// import Head from 'next/head';
// import Link from 'next/link';

// export default function Register() {
//   return (
//     <>
//       <Head>
//         <title>Daftar Akun - SAPIENS JustLibs</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>

//       {/* Container utama dengan background register perpustakaan dan efek estetik */}
//       <div 
//         className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
//         style={{ backgroundImage: "url('/asset/bgregister.png')" }} 
//       >
//         {/* Overlay gelap elegan agar form register tampil menonjol */}
//         <div className="absolute inset-0 bg-slate-950/50 "></div>

//         {/* Card Register */}
//         <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden my-8 border border-white/20">
//           <div className="p-8 sm:p-10">
            
//             {/* Header / Logo */}
//             <div className="text-center mb-8">
//               <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-2">
//                 JUSTLIBS
//               </h1>
//               <p className="text-gray-500 text-sm font-medium">
//                 Registrasi Akun Baru untuk mendaftar sebagai anggota perpustakaan JustLibs. Silakan isi data diri Anda dengan benar.
//               </p>
//             </div>

//             {/* Form Register */}
//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              
//               {/* Input Nama Lengkap */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5" htmlFor="name">
//                   Nama Lengkap
//                 </label>
//                 <input 
//                   type="text" 
//                   id="name"
//                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all text-sm text-gray-800 bg-gray-50/50"
//                   placeholder="Masukkan nama lengkapmu"
//                   required
//                 />
//               </div>

//               {/* Input Email */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5" htmlFor="email">
//                   E-mail
//                 </label>
//                 <input 
//                   type="email" 
//                   id="email"
//                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all text-sm text-gray-800 bg-gray-50/50"
//                   placeholder="nama@email.com"
//                   required
//                 />
//               </div>

//               {/* Input Password */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5" htmlFor="password">
//                   Kata Sandi
//                 </label>
//                 <input 
//                   type="password" 
//                   id="password"
//                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all text-sm text-gray-800 bg-gray-50/50"
//                   placeholder="Minimal 6 karakter"
//                   required
//                 />
//               </div>

//               {/* Input Konfirmasi Password */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5" htmlFor="confirm-password">
//                   Konfirmasi Kata Sandi
//                 </label>
//                 <input 
//                   type="password" 
//                   id="confirm-password"
//                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all text-sm text-gray-800 bg-gray-50/50"
//                   placeholder="Ulangi kata sandi"
//                   required
//                 />
//               </div>

//               {/* Tombol Register */}
//               <button 
//                 type="submit"
//                 className="w-full py-3.5 px-4 bg-[#11cdef] hover:bg-[#0ebbe0] text-white font-bold rounded-xl shadow-lg shadow-cyan-200/50 transition-all transform hover:-translate-y-0.5 text-sm mt-4"
//               >
//                 Daftar Sekarang
//               </button>
//             </form>

//             {/* Link ke Login */}
//             <div className="mt-8 text-center text-xs sm:text-sm text-gray-600">
//               Sudah punya akun?{' '}
//               <Link href="/auth/login" className="text-[#11cdef] font-bold hover:underline">
//                 Masuk di sini
//               </Link>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import { authApi } from '@/lib/api';

export default function Register() {
  const router = useRouter();
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Konfirmasi kata sandi tidak cocok.');
      return;
    }
    if (password.length < 6) {
      setError('Kata sandi minimal 6 karakter.');
      return;
    }

    setLoading(true);
    try {
      const res = await authApi.register({ nama, email, password });

      if (!res.ok) {
        setError(res.data?.message || 'Registrasi gagal. Coba lagi.');
        return;
      }

      setSuccess('Registrasi berhasil! Mengalihkan ke halaman login...');
      setTimeout(() => router.push('/auth/login'), 1200);
    } catch (err) {
      setError('Tidak bisa terhubung ke server. Pastikan backend berjalan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Daftar Akun - SAPIENS JustLibs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div
        className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/asset/bgregister.png')" }}
      >
        <div className="absolute inset-0 bg-slate-950/50 "></div>

        <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden my-8 border border-white/20">
          <div className="p-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-2">
                JUSTLIBS
              </h1>
              <p className="text-gray-500 text-sm font-medium">
                Registrasi Akun Baru untuk mendaftar sebagai anggota perpustakaan JustLibs. Silakan isi data diri Anda dengan benar.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm text-center">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-600 text-sm text-center">
                {success}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5" htmlFor="name">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all text-sm text-gray-800 bg-gray-50/50"
                  placeholder="Masukkan nama lengkapmu"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all text-sm text-gray-800 bg-gray-50/50"
                  placeholder="nama@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5" htmlFor="password">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all text-sm text-gray-800 bg-gray-50/50"
                  placeholder="Minimal 6 karakter"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5" htmlFor="confirm-password">
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all text-sm text-gray-800 bg-gray-50/50"
                  placeholder="Ulangi kata sandi"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 bg-[#11cdef] hover:bg-[#0ebbe0] text-white font-bold rounded-xl shadow-lg shadow-cyan-200/50 transition-all transform hover:-translate-y-0.5 text-sm mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Memproses...' : 'Daftar Sekarang'}
              </button>
            </form>

            <div className="mt-8 text-center text-xs sm:text-sm text-gray-600">
              Sudah punya akun?{' '}
              <Link href="/auth/login" className="text-[#11cdef] font-bold hover:underline">
                Masuk di sini
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}