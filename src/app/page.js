import Navbar from './component/Navbar';
import Hero from './landing/Hero';
import Category from './landing/Category';
import Trending from './landing/Trending';
import Footer from './landing/Footer';

export default function Landing() {
  return (
    <main className='flex flex-col items-center '>
      <Navbar/>
      <Hero/>
      <Category/>
      <Trending/>
      <Footer/>
    </main>
  );
}

