import './style.css'
import NavBar from './components/navbar'
import images from './assets/Fotoelfan.png'
import Motion from './components/motion'

function App() {
  return (
    <div>
      <NavBar />
    <section id="home">
      <div className="container">
        <div className="flex flex-wrap">
         <div className="w-full self-center px-6 lg:w-1/2">
          <Motion pos='kiri'>
           <h1 className='text-base font-bold text-primary md:text-xl lg:text-2xl'>Halo Semua👋, Saya <span className='block font-bold text-black text-4xl mt-1 lg:text-5xl'>ELFANSYAH</span></h1>
          </Motion>
           <h2 className='font-medium text-lg mb-5 lg:text-2xl'>Web Programmer</h2>
           <p className='font-normal text-black mb-10 leading-relaxed'>Saya bercita-cita untuk menjadi programmer yang <span className='font-bold'>handal!</span></p>

           <a href='#' className='text-base font-semibold text-white bg-teal-700 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Hubungi Saya</a>
          </div> 

          <div className='w-full px-4 lg:w-1/2'>
            <div class ="mt-9 lg:mt-10 lg:right-0 ">

              <img src={images} alt='Elfansyah' width="400" className='max-w-full mx-auto -top-30'/>
              <span className='absolute -bottom-52 -z-10 -right-1/3 -translate-x-1/2'>
                <svg width="900" height="900" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="">
                <path fill="#faad1b" d="M38.2,-40.9C48.9,-27.4,56.9,-13.7,56.3,-0.5C55.8,12.6,46.9,25.3,36.1,34.7C25.3,44.1,12.6,50.3,-4,54.3C-20.7,58.4,-41.4,60.3,-55.5,50.9C-69.6,41.4,-77,20.7,-74.5,2.5C-72,-15.7,-59.5,-31.4,-45.5,-44.9C-31.4,-58.5,-15.7,-69.9,-1,-68.9C13.7,-67.9,27.4,-54.4,38.2,-40.9Z" transform="translate(100 100) scale(0.7)"/>
                </svg>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* About Start*/}
    <section id='about' className='pt-36 pb-32'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 mb-10 lg:w-1/2'>
            <h4 className='font-bold uppercase text-primary text-lg mb-3'>Tentang Saya</h4>
            <h2 className='font-bold text-black text-3xl mb-3 max-w-medium lg:text-4xl'>Saya adalah Junior Web Programing</h2>
            <p className='font-medium text-base text-black max-w-md lg:text-lg'>Saya mulai mengenal dan belajar mengenai dunia IT khususnya dibidang Web Programing, saat Saya mengikut sekolah/pendidikan non formal di Purwadhika Digital Technology School Kampus Bandung pada tahun 2024.</p>
          </div>
          
          <div className='w-full px-4 lg:w-1/2'>
            <h3 className='font-bold uppercase text-black text-2xl lg:2xl mb-4 lg:text-3xl lg:pt-10'>Mari Berteman</h3>
            <p className='font-medium text-base text-black mb-6 lg:text-lg'>"Tak Kenal Maka Tak Sayang", Yuk kenalan dan ikuti lebih detail tentang Saya melalui link-link media sosial berikut :</p>
            <div className='flex items-center'>
              <a href="https://www.youtube.com/channel/UCkSJ07L2E_yfdI7TLvnQTRw" target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-400 border-slate-500 hover:border-primary hover:bg-primary hover:text-white'>
              <svg role="img" width="20" className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://instagram.com/elfansyahh" target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-400 border-slate-500 hover:border-primary hover:bg-primary hover:text-white'>
              <svg role="img" width="20" className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg></svg>
              </a>
              <a href="https://wa.me/6281222214035" target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-400 border-slate-500 hover:border-primary hover:bg-primary hover:text-white'>
              <svg role="img" width="20" className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></svg>
              </a>
              <a href="https://www.linkedin.com/in/elfan-syah-814b931b7/" target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-slate-400 border-slate-500 hover:border-primary hover:bg-primary hover:text-white'>
              <svg role="img" width="20" className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* About End*/}

    {/* Porto Start*/}
    <section id="portofolio" className="pt-36 pb-16 bg-[#344c36]">
      <div className="container">
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h4 className='font-semibold text-lg text-primary mb-2 sm:text-2xl lg:text-5xl'>Portfolio</h4>
            <h2 className='font-bold text-white text-3xl mb-4'>Project Terbaru</h2>
            <p className='font-medium text-md text-white md:text-lg'>Project terbaru yang Saya mulai dari awal mengenal dunia IT khususnya sebagai Web Developer adalah dengan mengerjakan berbagai macam fitur landing page sesuai dengan permintaan atau kebutuhan Perusahaan</p>

          </div>
        </div>
        <div className='w-full px-4 flex flex-wrap justify-center'>
          <div className='mb-12 p-4 md:w-1/2'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img src="src/assets/porto1.png" alt="Landing Page" width="w-full"></img>
            </div>
            <h3 className='font-semibold text-xl text-white mt-5 mb-3'>Landing Page PT. Pos Indonesia</h3>
            <p className='font-medium text-base text-white'>Pembuatan company profile yang terintegrasi dengan sistem pelacakan pos Indonesia</p>
          </div> 
          <div className='mb-12 p-4 md:w-1/2'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img src="src/assets/porto2.png" alt="Landing Page" width="w-full"></img>
            </div>
            <h3 className='font-semibold text-xl text-white mt-5 mb-3'>Landing Page PT. Ofal Kreatif Indonesia</h3>
            <p className='font-medium text-base text-white'>Pembuatan QR Code berbasis Syariah Serta Sistem Pelacakan Untuk Manajemen Karyawan </p>
          </div> 

      
        
          <div className='mb-12 p-4 md:w-1/2'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img src="src/assets/porto3.png" alt="Landing Page" width="w-full"></img>
            </div>
            <h3 className='font-semibold text-xl text-white mt-5 mb-3'>Landing Page PT. Insan Agritama Teknologi</h3>
            <p className='font-medium text-base text-white'>Pembuatan landing page untuk pencatatan gudang dan pendistribusian Pasar</p>
          </div> 

          <div className='mb-12 p-4 md:w-1/2'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <img src="src/assets/porto4.png" alt="Landing Page" width="w-full"></img>
            </div>
            <h3 className='font-semibold text-xl text-white mt-5 mb-3'>Landing Page Telkom University</h3>
            <p className='font-medium text-base text-white'>Pembuatan Platform E-learning untuk Dosen, Mahasiswa, Dan Koordinator Interaksi</p>
          </div> 
        </div>
      </div>
    </section>
    {/* Porto End*/}

    {/* Client */}
    <section id="clients" className='pt-36 pb-32 bg-white'>
    <div className="container">
      <div className='w-full px-4'>
      <div className='max-w-xl mx-auto text-center mb-16'>
            <h4 className='font-semibold text-lg text-primary mb-2 lg:text-4xl'>Clients</h4>
            <h2 className='font-bold text-black text-3xl mb-4'>Pernah Bekerjasama</h2>
            <p className='font-medium text-md text-black md:text-lg'>Perusahaan yang pernah bekerjasama dengan Saya</p>
          </div>
      </div>
      <div className='w-full px-4'>
        <div className='flex flex-wrap items-center justify-center'>
          <a href='#' className='max-w-[150px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-100 lg:mx-6 xl:mx-8'>
            <img src="src/assets/google-logo.png" alt="Google"></img>
          </a>
          <a href='#' className='max-w-[150px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-100 lg:mx-6 xl:mx-8'>
            <img src="src/assets/logo Android.png" alt="Android"></img>
          </a>
          <a href='#' className='max-w-[170px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-100 lg:mx-6 xl:mx-8'>
            <img src="src/assets/logo purwadhika.png" alt="Purwadhika"></img>
          </a>
          <a href='#' className='max-w-[150px] mx-4 py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-100 lg:mx-6 xl:mx-8'>
            <img src="src/assets/Logo Telu.png" alt="Telkom University"></img>
          </a>

        </div>

      </div>
    </div>
    </section>
    {/* Clients End */}

    {/* Blog Start*/}
      <section id="blog" className='pt-36 pb-32 bg-gray-400'>
        <div className='container'>
          <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h4 className='font-semibold text-lg text-[#344c36] mb-2 lg:text-4xl'>Blog</h4>
            <h2 className='font-bold text-white text-3xl mb-4'>Tulisan Terkini</h2>
            <p className='font-medium text-md text-white md:text-lg'>Blog tulisan yang berkaitan dengan hobby dan minat Saya dalam kehidupan sehari-hari</p>
          </div>
          </div>
          <div className="flex flex-wrap">
           <div className="w-full px-4 lg:w-1/2 xl:1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10"> 
                <img src='https://cdn.analyticsvidhya.com/wp-content/uploads/2024/04/Top-8-Coding-Platforms-for-Data-Science-Beginner-01-scaled.jpg'alt='programming' className='w-full'></img>
              <div className="py-8 px-6">
                <h3 className='font-semibold mb-3 text-xl hover:opacity-80'>
                  <a href='#'>Tips Belajar Programming </a></h3>
                <p className='mb-7 font-medium text-gray-600 text-base'>Belajar programming mulai dari tidak bisa dengan menggunakan berbagaimacam pilihan bahasa pemograman</p>
                <a href='#' className='font-medium text-sm text-white bg-primary rounded-md py-2 px-4 hover:opacity-80 '>Baca Selengkapnya</a>
              </div>
            </div>
          </div> 
           <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10"> 
                <img src='https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/13/2023/12/01/FotoJet-2023-12-01T114859749-2238848866.jpg'alt='Drakor' className='w-full'></img>
              <div className="py-8 px-6">
                <h3 className='font-semibold mb-3 text-xl hover:opacity-80'>
                  <a href='#'>Drama Korea Dengan Rating Tinggi </a></h3>
                <p className='mb-7 font-medium text-gray-600 text-base'>Review dan rekomendasi drama korea berbagai gendre</p>
                <a href='#' className='font-medium text-sm text-white bg-primary rounded-md py-2 px-4 hover:opacity-80 '>Baca Selengkapnya</a>
              </div>
            </div>
          </div> 
           <div className="w-full px-4 lg:w-1/2 xl:1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden"> 
                <img src='https://help.iubenda.com/wp-content/uploads/2024/03/william-hook-9e9PD9blAto-unsplash.jpg'alt='Mobile App' className='w-full'></img>
              <div className="py-8 px-6">
                <h3 className='font-semibold mb-3 text-xl hover:opacity-80'>
                  <a href='#'>Build Mobile App </a></h3>
                <p className='mb-7 font-medium text-gray-600 text-base'>Bahas mobile app untuk pemanfaatan teknologi IoT untuk mempermudah kelangsungan hidup manuasia</p>
                <a href='#' className='font-medium text-sm text-white bg-primary rounded-md py-2 px-4 hover:opacity-80 '>Baca Selengkapnya</a>
              </div>
            </div>
          </div> 
          </div>
        </div>
      </section>
    {/* Blog End*/}

    {/* Contact */}

    <section id='contact' className='pt-36 pb-32'>
      <div className='container'>
        <div className='w-full px-4'>
        <div className='max-w-xl mx-auto text-center mb-16'>
            <h4 className='font-semibold text-lg text-primary mb-2 lg:text-4xl'>Contact</h4>
            <h2 className='font-bold text-black text-3xl mb-4'>Hubungi Kami</h2>
            <p className='font-medium text-md text-black md:text-lg'>Hubungi Kami untuk pertanyaan lebih detail</p>
          </div>
        </div>
        <form>
        <div className="w-full mb-8 px-4">
           <label for="name" className='text-base font-bold text-primary'>Nama</label>   
           <input type="text" id="name" className='w-full bg-gray-300 text-black p-3 rounded-md focus:outline-none focus:ring-primary pocus:ring-1 focus:border-primary'></input>
        </div>
        <div className="w-full mb-8 px-4">
           <label for="Email" className='text-base font-bold text-primary'>Email</label>   
           <input type="email" id="name" className='w-full bg-gray-300 text-black p-3 rounded-md focus:outline-none focus:ring-primary pocus:ring-1 focus:border-primary'></input>
        </div>
        <div className="w-full mb-8 px-4">
           <label for="Message" className='text-base font-bold text-primary'>Pesan</label>   
           <textarea type="text" id="name" className='w-full bg-gray-300 text-black p-3 rounded-md focus:outline-none focus:ring-primary pocus:ring-1 focus:border-primary h-32'></textarea>
        </div>
        <div className='w-full px-4'>
          <button className='text-base font-semibold bg-primary rounded-full text-white py-2 px-8 w-full hover:opacity-80 hover:shadow-lg transition duration-300'>Kirim</button>
        </div>
        </form>

      </div>

    </section>

    </div>
  )
}

{/* <div className='relative h-screen overflow-hidden'>
<video className='absolute top-0 w-full h-full object-cover' src='src/assets/background.mp4'autoPlay loop muted>
</video>
</div> */}

export default App
