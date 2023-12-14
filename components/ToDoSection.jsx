'use client'
import React from 'react'
import { FaCircleArrowRight, FaCircleCheck, FaHouseChimney, FaBriefcase, FaGraduationCap, FaBasketShopping, FaClapperboard, FaPersonRunning } from "react-icons/fa6";
import AreaLineItem from './AreaLineItem';
import GoalLineItem from './GoalLineItem';
import { useState, useEffect } from 'react';

const ToDoSection = ({ areas, goals }) => {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)
    const TASK_API_URL = 'http://localhost:3500/tasks'

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch(TASK_API_URL)
                if (!response.ok) throw Error('Did not receive expected data')
                const listTasks = await response.json()
                setTasks(listTasks)
                setFetchError(null)
            } catch (err) {
                setFetchError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchTasks()
      }, [])

    
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
    <section className='flex flex-row w-full'>
        <div className='flex flex-col bg-gray-800 h-screen'>
            <div className='w-full flex flex-col pt-12 pb-12 gap-6'>
                <AreaLineItem
                    area={areas[0]}
                    areaIcon={<FaCircleArrowRight size={20} />}
                />
                <AreaLineItem
                    area={areas[1]}
                    areaIcon={<FaCircleCheck size={20} />}
                />
            </div>
            <div className='w-full flex flex-col gap-6'>
                <h1 className='pl-8 text-gray-400 text-[12px]'>AREAS OF LIFE</h1>
                {/* TODO: Only render Areas which the User has toDoLineTasks with */}
                <AreaLineItem 
                    area={areas[2]}
                    areaIcon={<FaHouseChimney size={20} />}
                />
                <AreaLineItem
                    area={areas[3]}
                    areaIcon={<FaBriefcase size={20} />}
                />
                <AreaLineItem
                    area={areas[4]}
                    areaIcon={<FaGraduationCap size={20} />}
                />
                <AreaLineItem 
                    area={areas[5]}
                    areaIcon={<FaBasketShopping size={20} />}
                />
                <AreaLineItem
                    area={areas[6]}
                    areaIcon={<FaClapperboard size={20} />}
                />
                <AreaLineItem
                    area={areas[7]}
                    areaIcon={<FaPersonRunning size={20} />}
                />
            </div>
            <div className='flex flex-col pt-12 gap-2'>
                <h1 className='pl-8 text-gray-400 text-[12px]'>GOALS IN "WORK"</h1>
                <GoalLineItem goal={goals[0]}/>
                <GoalLineItem goal={goals[1]}/>
                <GoalLineItem goal={goals[2]}/>
                <GoalLineItem goal={goals[3]}/>
            </div>
        </div>
        <main className='flex flex-col bg-gray-900'>
            <h1>Task List here</h1>
            <div className='now'>
                <ul>
                    {tasks.map((task) => (
                        <li>
                            <input type="checkbox" />
                            <label>
                                {task.title}
                            </label>
                            <button>
                                {areas.filter((area) => area.area_id === task.area_id).title}
                            </button>
                            {}
                            <button>
                                {task.estimate < 60 ? `${task.estimate} minutes` : `${task.estimate / 60} hours`}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div className='next'>

            </div>
            <div className='later'>

            </div> */}
        </main>
    </section>
  )
}

export default ToDoSection