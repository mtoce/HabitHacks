'use client'
import { useState, useEffect } from 'react';
import { initTasks, initAreas, initGoals } from '@/constants'
import { FaCircleArrowRight, FaCircleCheck, FaHouseChimney, FaBriefcase, FaGraduationCap, FaBasketShopping, FaClapperboard, FaPersonRunning } from "react-icons/fa6";

const Content = () => {
    
    const [tasks, setTasks] = useState(initTasks)
    const [goals, setGoals] = useState(initGoals)
    const [areas, setAreas] = useState(initAreas)
    const [newTask, setNewTask] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)
    const TASKS_API_URL = 'http://localhost:3500/tasks'
    const GOALS_API_URL = 'http://localhost:3500/goals'
    const AREAS_API_URL = 'http://localhost:3500/areas'

    // useEffect(() => {
    //     const fetchTasks = async () => {
    //         try {
    //             const response = await fetch(TASK_API_URL)
    //             if (!response.ok) throw Error('Did not receive expected data')
    //             const listTasks = await response.json()
    //             setTasks(listTasks)
    //             setFetchError(null)
    //         } catch (err) {
    //             setFetchError(err.message)
    //         } finally {
    //             setIsLoading(false)
    //         }
    //     }
    //     fetchTasks()
    //   }, [])
    
    //   const handleCheck = async (id) => {
    //     // Recreate the list of tasks from default state by checking if an task is checked by the user. Swap the checked status if it is checked and return the same task if it is not checked.
    //     const listTasks = tasks.map((task) => task.id === id ? { ...task, checked: !task.checked } : task)
    //     setTasks(listTasks);
    
    //     const myTask = listTasks.filter((task) => task.id === id)
    //     const updateOptions = {
    //       method: 'PATCH',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({ checked: myTask[0].checked})
    //     }
    
    //     const reqUrl = `${API_URL}/${id}`
    //     const result = await apiRequest(reqUrl, updateOptions)
    //     if (result) setFetchError(result)
    //   }
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!newTask) return;
    //     addTask(newTask);
    //     setNewTask('');
    //   }
    
    //   const handleDelete = async (id) => {
    //     // console.log(id)
    //     const listTasks = tasks.filter((task) => task.id !== id)
    //     setTasks(listTasks);
    
    //     const deleteOptions = { method: 'DELETE' }
    //     const reqUrl = `${API_URL}/${id}`
    //     const result = await apiRequest(reqUrl, deleteOptions)
    //     if (result) setFetchError(result)
    //   }

  return (
    <section className='flex flex-row w-full h-full'>
        <div className='flex flex-col bg-gray-800'>
            <div className='w-full flex flex-col pt-10 pb-6 gap-6'>
                <div className='flex justify-start items-center gap-2 ml-8'>
                    <FaCircleArrowRight size={20} fill="white"/>
                    <p className='text-white text-[14px]'>Next to work on</p>
                </div>
                <div className='flex justify-start items-center gap-2 ml-8'>
                    <FaCircleCheck size={20} fill="white"/>
                    <p className='text-white text-[14px]'>Logbook</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-4'>
                <h1 className='pl-8 text-gray-400 text-[12px]'>AREAS OF LIFE</h1>
                <div>
                    <ul className='flex flex-col gap-2'>
                        {areas.map((area) => (
                            <li className='flex flex-col bg-gray750 rounded-lg pl-4 pr-4 ml-3 mr-3 pt-2 pb-2'>
                                <label className='absolute -top-full -left-full'>
                                    {area.title}
                                </label>
                                <p className='text-white text-[12px]'>{area.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* TODO: Only render Areas which the User has toDoLineTasks with */}
                
            </div>
            <div className='flex flex-col pt-4 gap-2'>
                <h1 className='pl-8 text-gray-400 text-[12px]'>GOALS IN "PERSONAL TASKS"</h1>
                <div>
                    <ul className='flex flex-col gap-2'>
                        {/* Change to filter based on currently selected Area */}
                        {goals.map((goal) => (
                            <li className=' text-[14px] flex flex-col gap-1 bg-gray750 rounded-lg pl-4 ml-3 mr-3 pt-2 pb-2'>
                                <label className='absolute -left-full -top-full'>
                                    {goal.title}
                                </label>
                                <p className='text-white text-[12px]'>{goal.title}</p>
                                <div className='bg-gray-700 rounded-xl h-[6px] mr-10'>
                                </div>
                                {goals[0].due && goals[0].due < 100 && 
                                    <div>
                                        <p style={ {'font-size' : '12px'} }>DUE IN {goals[0].due} DAYS</p>
                                    </div>
                                }
                            </li>
                        ))}
                    </ul>
                    {/* Show due date if not null and < 100 days away. Change color of text based on time until due */}
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gray-900'>
            <div className='flex'>
                <ul className='flex flex-col gap-4 m-14'>
                    {tasks.map((task) => (
                        <li className='flex justify-start items-center gap-2'>
                            <input type="checkbox" />
                            <label className='absolute -left-full -top-full'>
                                {task.title}
                            </label>
                            <p className='text-white text-[10px]'>{task.title}</p>
                            {task.area_id && 
                                <button type="button" className='bg-gray-700 rounded-xl text-white text-[12px]'>
                                    {areas.filter((area) => area.area_id === task.area_id).title}
                                </button>
                            }
                            {task.estimate && 
                                <button
                                    type="button"
                                    className='bg-gray-700 rounded-xl text-white pl-2 pr-2 text-[8px]'
                                    >
                                    {task.estimate < 60 ? `${task.estimate} minutes` : `${task.estimate / 60} hours`}
                                </button>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Content