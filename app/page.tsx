import Image from "next/image";

export default function Home() {
  return (
  <div className="relative w-full h-screen overflow-hidden">
    {/* <!-- Background with blur effect --> */}
    <Image
        src="/background.jpg" 
        alt="Background"
        fill
        className="object-cover fixed inset-0 bg-cover bg-center blur-md"
        priority
      />
     {/* <!-- Logo --> */}
      <header className="relative h-16">
      <div className="absolute top-4 left-4 z-10">
        <Image
          src="/logo-icon-name.png"
          alt="logo"
          width={100}
          height={20}
          className="object-contain"
        />
      </div>
      </header>
    
    {/* <!-- Content container --> */}
    <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-hidden h-full relative z-10 max-w-full mx-auto px-4 py-16 text-center flex flex-col min-h-screen">
      
      {/* <!-- Main content --> */}
      <div className="min-h-screen ax-w-full mx-auto flex-grow flex flex-col items-center justify-center">
        <div className="relative w-full h-220"> 
          <Image
            src="/jejak-rasa-g.png" 
            alt="Coming Soon" 
            fill
            className="object-contain"
          />
        </div>
        
        <div className="bg-[#234e40] bg-opacity-40 rounded-full py-2 px-6 inline-block backdrop-blur-sm">
          <p className="text-sm sm:text-base text-white">
            Launching on <span className="font-bold">15 Juni, 2025</span>
          </p>
        </div>

        <div className="py-2 mt-8 max-w-lg mx-auto">
          <p className="text-gray-300 mb-2 drop-shadow textshadow-md">Jejak Rasa Sebagai ungkapan manusiawi tentang bagaimana subjektivitas memaknai setiap fragment perjalanan, Dari proses mendasar bagaimana melihat sekitar dengan pancaindra, Lalu di hadirkan dalam bentuk realitas baru yang di kelola oleh imajinasi berbagai macam wujud. Tidak luput peran fenomenologi, Dimana sensibilitas perorangan mengalami kepekaan terhadap apa yang ingin mereka maknai baik dari segi latar belakang biografi, Tempat, Waktu, Bahkan situasi/kondisi hari ini. Rekaman ulang memori yang sukses kita ingat akan menimbulkan percikan estetis yang dapat di aplikasikan ke dalam visualisasi karya seni. Serta peran sumbangsi ilmu pengetahuan dari perjalanan empirik setiap individu dapat di berikan kepada khalayak umum agar tercetus dialektika dua arah yang positif.</p>
        </div>
      </div>

      {/* <!-- Social media buttons --> */}
      <div className="mt-auto pb-8">
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/mikrobait" className="w-12 h-12 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center text-white transition duration-300">
            <link
              rel="instagram-icon"
              href="/instagram-icon?32"
              type="image/32"
              sizes="32"
            />
          </a>
          <a href="https://www.tiktok.com/@mikrobait0" className="w-12 h-12 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center text-white transition duration-300">
            <link
              rel="tiktok-icon"
              href="/tiktok-icon?32"
              type="image/32"
              sizes="32"
            />
          </a>
        </div>
        <p className="text-gray-400 mt-6 text-sm">Follow us for updates</p>
      </div>

    </div>
  </div>
  );
}
