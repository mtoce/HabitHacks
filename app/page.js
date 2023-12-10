import Image from 'next/image'
import { ToDoSection, HabitCard } from '../components';
import { areaLinks, tagLinks } from '@/constants';

const Home = () => {
  return (
    <section className='app'>
      {/* <HabitCard /> */}
      <ToDoSection areas={areaLinks} tags={tagLinks} />
    </section>
  )
}

export default Home