// 'use client';

// import Head from 'next/head';
// import Link from 'next/link';

// export default function Login() {
//   return (
//     <>
//       <Head>
//         <title>Login - SAPIENS JustLibs</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>

//       {/* Container utama dengan background image */}
//       <div 
//         className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
//         // Pastikan gambar bglogin.jpg ada di dalam folder 'public'
//         style={{ backgroundImage: "url('/asset/bglogin.png')" }} 
//       >
//         {/* Overlay gelap sedikit blur agar form lebih terbaca melawan background terang */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Card Login */}
//         <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden ">
//           <div className="p-8 sm:p-10">
            
//             {/* Header / Logo */}
//             <div className="text-center mb-8 ">
//               <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-2">
//                 JUSTLIBS
//               </h1>
//               <h2 className="text-gray-500 text-sm font-medium">
//                 Masuk ke Akun Anda
//               </h2>
//             </div>

//             {/* Form */}
//             <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
//               {/* Input Email */}
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-1.5" htmlFor="email">
//                   E-mail
//                 </label>
//                 <input 
//                   type="email" 
//                   id="email"
//                   className="w-full px-4 py-3 rounded-lg border text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all"
//                   placeholder="Masukkan e-mail"
//                   required
//                 />
//               </div>

//               {/* Input Password */}
//               <div>
//                 <div className="flex items-center justify-between mb-1.5">
//                   <label className="block text-sm font-bold text-gray-700" htmlFor="password">
//                     Kata Sandi
//                   </label>
//                   <a href="#" className="text-xs text-[#11cdef] hover:text-cyan-600 font-bold transition-colors">
//                     Lupa sandi?
//                   </a>
//                 </div>
//                 <input 
//                   type="password" 
//                   id="password"
//                   className="w-full px-4 py-3 rounded-lg border text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all"
//                   placeholder="Masukkan kata sandi"
//                   required
//                 />
//               </div>

//               {/* Checkbox Remember Me */}
//               <div className="flex items-center pt-2">
//                 <input 
//                   type="checkbox" 
//                   id="remember"
//                   className="w-4 h-4 text-[#11cdef] border-gray-300 rounded focus:ring-[#11cdef]"
//                 />
//                 <label htmlFor="remember" className="ml-2 text-sm text-gray-600 font-medium">
//                   Ingat saya
//                 </label>
//               </div>

//               {/* Tombol Login */}
//               <button 
//                 type="submit"
//                 className="w-full py-3.5 px-4 bg-[#11cdef] hover:bg-[#0ebbe0] text-white font-bold rounded-xl shadow-lg shadow-cyan-200/50 transition-all transform hover:-translate-y-0.5 mt-4"
//               >
//                 Masuk
//               </button>
//             </form>

//             {/* Link Register */}
//             <div className="mt-8 text-center text-sm text-gray-600">
//               Belum punya akun?{' '}
//               <Link href="/auth/register" className="text-[#11cdef] font-bold hover:underline">
//                 Daftar di sini!
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

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    const res = await authApi.login({ email, password });

    if (!res.ok) {
      // Sesuaikan status code ini dengan backend kamu.
      // Umumnya: 404 = user/email tidak ditemukan, 401 = password salah
      if (res.status === 404) {
        setError('Akun dengan e-mail tersebut tidak ditemukan. Silakan daftar terlebih dahulu.');
      } else if (res.status === 401) {
        setError('E-mail atau kata sandi salah.');
      } else {
        setError(res.data?.message || 'Gagal login. Silakan coba lagi.');
      }
      return;
    }

    // Sesuaikan field ini dengan response backend kamu
    const token = res.data?.token;
    if (token) {
      localStorage.setItem('token', token);
    }
    if (res.data?.user) {
      localStorage.setItem('user', JSON.stringify(res.data.user));
    }

    router.push('/dashboard');
  } catch (err) {
    setError('Tidak bisa terhubung ke server. Pastikan backend berjalan.');
  } finally {
    setLoading(false);
  }
  
};


  return (
    <>
      <Head>
        <title>Login - SAPIENS JustLibs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div
        className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/asset/bglogin.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden ">
          <div className="p-8 sm:p-10">
            <div className="text-center mb-8 ">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-2">
                JUSTLIBS
              </h1>
              <h2 className="text-gray-500 text-sm font-medium">
                Masuk ke Akun Anda
              </h2>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all"
                  placeholder="Masukkan e-mail"
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-bold text-gray-700" htmlFor="password">
                    Kata Sandi
                  </label>
                  <a href="#" className="text-xs text-[#11cdef] hover:text-cyan-600 font-bold transition-colors">
                    Lupa sandi?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#11cdef] focus:border-transparent transition-all"
                  placeholder="Masukkan kata sandi"
                  required
                />
              </div>

              <div className="flex items-center pt-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-[#11cdef] border-gray-300 rounded focus:ring-[#11cdef]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600 font-medium">
                  Ingat saya
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 bg-[#11cdef] hover:bg-[#0ebbe0] text-white font-bold rounded-xl shadow-lg shadow-cyan-200/50 transition-all transform hover:-translate-y-0.5 mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Memproses...' : 'Masuk'}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-600">
              Belum punya akun?{' '}
              <Link href="/auth/register" className="text-[#11cdef] font-bold hover:underline">
                Daftar di sini!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}