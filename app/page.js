import Image from 'next/image'
import { ToDoSection, HabitCard } from '../components';
import { areaLinks, goalLinks } from '@/constants';

const Home = () => {
  return (
    <section className='app'>
      {/* <HabitCard /> */}
      <ToDoSection areas={areaLinks} goals={goalLinks} />
    </section>
  )
}

export default Home