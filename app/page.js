import Image from 'next/image'
import { Dashboard, Feed, Footer, Habits, Nav, Profile, HabitCard } from '../components';

const Home = () => {
  return (
    <section className='app'>
      <HabitCard />
    </section>
  )
}

export default Home