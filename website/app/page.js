import About from '@/components/About';
import Featured from '@/components/Featured';
import Testionials from '@/components/Testionials';
import FAQ from '@/components/FAQ';
import RateUs from '@/components/RateUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <About />
      <Featured />
      <Testionials />
      <FAQ />
      <RateUs />
      <Contact />
      <Footer />
    </main>
  );
}
