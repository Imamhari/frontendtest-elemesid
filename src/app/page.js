import Navbar from './component/Navbar';
import Hero from './landing/Hero';
import Category from './landing/Category';
import Trending from './landing/Trending';

export default function Landing() {
  return (
    <main className='flex flex-col items-center'>
      <Navbar/>
      <Hero/>
      <Category/>
      <Trending/>
      hello everyone
    </main>
  );
}

