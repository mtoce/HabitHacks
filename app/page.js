import Image from 'next/image'
import { Dashboard, Feed, Footer, Habits, Nav, Profile } from '../components';

const Home = () => {
  return (
    <section className='app'>
      <Dashboard />
    </section>
  )
}

export default Home