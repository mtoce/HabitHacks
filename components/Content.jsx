'use client'
import { useState, useEffect } from 'react';
import { initTasks, initAreas, initGoals } from '@/constants'
import { FaCircleArrowRight, FaCircleCheck, FaPlus, FaHouseChimney, FaBriefcase, FaGraduationCap, FaBasketShopping, FaClapperboard, FaPersonRunning } from "react-icons/fa6";
import NewTaskForm from './NewTaskForm';


const Content = () => {
    
    // const [tasks, setTasks] = useState(initTasks)
    // const [goals, setGoals] = useState(initGoals)
    // const [areas, setAreas] = useState(initAreas)

    const [tasks, setTasks] = useState([])
    const [goals, setGoals] = useState([])
    const [areas, setAreas] = useState([])

    const [newTask, setNewTask] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)

    const [areaSelectedId, setAreaSelectedId] = useState(null)
    const [goalSelectedId, setGoalSelectedId] = useState(null)

    const [showNewTaskForm, setShowNewTaskForm] = useState(false)

    const TASKS_API_URL = 'http://localhost:3500/tasks'
    const GOALS_API_URL = 'http://localhost:3500/goals'
    const AREAS_API_URL = 'http://localhost:3500/areas'

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                console.log('Fetching tasks')
                const tasksResponse = await fetch(TASKS_API_URL)
                if (!tasksResponse.ok) throw Error('Did not receive expected tasks data')
                const tasksData = await tasksResponse.json()
                setFetchError(null)
                return tasksData
            } catch (err) {
                setFetchError(err.message)
            }
        }
        const fetchGoals = async () => {
            try {
                console.log('Fetching goals')
                const goalsResponse = await fetch(GOALS_API_URL)
                if (!goalsResponse.ok) throw Error('Did not receive expected goals data')
                const goalsData = await goalsResponse.json()
                setFetchError(null)
                return goalsData
            } catch (err) {
                setFetchError(err.message)
            }
        }
        const fetchAreas = async () => {
            try {
                console.log('Fetching areas')
                const areasResponse = await fetch(AREAS_API_URL)
                if (!areasResponse.ok) throw Error('Did not receive expected areas data')
                const areasData = await areasResponse.json()
                setFetchError(null)
                return areasData
            } catch (err) {
                setFetchError(err.message)
            }
        }

        const fetchAll = async () => {
            console.log('Fetching all')
            const tempLoadedTasks = await fetchTasks()
            const tempLoadedGoals = await fetchGoals()
            const tempLoadedAreas = await fetchAreas()
            setTasks(tempLoadedTasks)
            setGoals(tempLoadedGoals)
            setAreas(tempLoadedAreas)
        }
        fetchAll()
      }, [])
    

    // console.log("tasks: ", tasks)
    // console.log("goals: ", goals)
    // console.log("areas: ", areas)

    // TODO: Create a form for the user to select the defaults for the task added. Currently defaults are set by the application itself.

    const newTaskForm = () => {
        <NewTaskForm />
    }
    const toggleShowNewTaskForm = () => {
        setShowNewTaskForm(!showNewTaskForm)
    }

    const addTask = async (title) => {
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
        const area_id = null // TODO: Add a dropdown option in the addTask Form for default task area ID
        const goal_id = null // TODO: Add a dropdown option in the addTask Form for default task goal ID
        const status = "later" // TODO: Add a dropdown option in the addTask Form for default task status
        const previous_status = null
        const checked = false
        const estimate = null // TODO: Add a dropdown option in the addTask Form for default task estimate
        const priority = null // TODO: Add a dropdown option in the addTask Form for default task priority
        const progress = null // TODO: Add a dropdown option in the addTask Form for default task progress
        const myNewTask = { id, area_id, goal_id, status, previous_status, checked, estimate, priority, title };
        const listTasks = [...tasks, myNewTask]
        setTasks(listTasks);
    
        const postOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(myNewTask)
        }
    
        // apiRequest returns an error. That will be the result. If the result is not null then we set the FetchError equal to that result.
        const result = await apiRequest(TASKS_API_URL, postOptions)
        if (result) setFetchError(result)
      }


      const handleCheck = async (id) => {
        // Recreate the list of tasks from default state by checking if a task is checked by the user. Swap the checked status if it is checked and return the same task if it is not checked.
        const listTasks = tasks.map((task) => task.id === id ? { ...task, checked: !task.checked } : task)
        setTasks(listTasks);
    
        const myTask = listTasks.filter((task) => task.id === id)
        const updateOptions = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ checked: myTask[0].checked})
        }
    
        const reqUrl = `${TASKS_API_URL}/${id}`
        const result = await apiRequest(reqUrl, updateOptions)
        if (result) setFetchError(result)
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTask) return;
        addTask(newTask);
        setNewTask('');
      }
    
      const handleDelete = async (id) => {
        // console.log(id)
        const listTasks = tasks.filter((task) => task.id !== id)
        setTasks(listTasks);
    
        const deleteOptions = { method: 'DELETE' }
        const reqUrl = `${TASKS_API_URL}/${id}`
        const result = await apiRequest(reqUrl, deleteOptions)
        if (result) setFetchError(result)
      }

    const handleAreaClick = (area, goals) => {
        if (area["checked"] === false) {
            // set previously selected area's selected value to false if not null
            const prevSelArea = areas.find((area) => area["area_id"] === areaSelectedId)
            if (prevSelArea) {
                prevSelArea["checked"] = false
            }
            // find the previously selected goal and unselect it if it exists.
            const prevSelGoal = goals.find((goal) => goal["goal_id"] === goalSelectedId)
            if (prevSelGoal) {
                prevSelGoal["checked"] = false
            }
            area["checked"] = true
            setAreaSelectedId(area["area_id"])
            setGoalSelectedId(null)
        }
    }

    const handleGoalClick = (goal, areas) => {
        if (goal["checked"] === false) {
            const prevSelGoal = goals.find((goal) => goal["goal_id"] === goalSelectedId)
            console.log(prevSelGoal)
            if (prevSelGoal) {
                prevSelGoal["checked"] = false
            }
            goal["checked"] = true
            // Need to fix and actually update the areas not just the variable I created here...
            const areaWithSelGoal = areas.find((area) => area["area_id"] === goal["area_id"])
            if (areaWithSelGoal) {
                areaWithSelGoal["checked"] = true
            }
            setGoalSelectedId(goal["goal_id"])
            setAreaSelectedId(goal["area_id"])
        }  else {
            goal["checked"] = false
            setGoalSelectedId(null)
        }
    }

  return (
    <section className='flex flex-row flex-grow w-full h-full'>
        <div className='flex flex-col bg-gray-800'>
            <div className='w-full flex flex-col pt-10 pb-6 gap-6'>
                <div className='flex justify-start items-center gap-2 ml-8'>
                    <FaCircleArrowRight size={20} fill="white"/>
                    <p className='text-white text-[14px]'>Next to work on</p>
                </div>
                <div className='flex justify-start tasks-center gap-2 ml-8'>
                    <FaCircleCheck size={20} fill="white"/>
                    <p className='text-white text-[14px]'>Logbook</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-4'>
                <h1 className='pl-8 text-gray-400 text-[12px]'>AREAS OF LIFE</h1>
                <div>
                    <ul className='flex flex-col gap-2'>
                        {areas.map((area) => (
                            <li 
                                key={area.area_id} 
                                className={`flex flex-col rounded-lg pl-4 pr-4 ml-3 mr-3 pt-2 pb-2
                                ${area.area_id === areaSelectedId ? 'bg-gray-900' : 'bg-gray750'}`}
                                onClick={() => handleAreaClick(area, goals)}
                                >
                                <label className='absolute -top-full -left-full'>
                                    {area.title}
                                </label>
                                <p className='text-white text-[12px]'>{area.title}</p>
                                {console.log(area.area_id)}
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
                        {areaSelectedId ? goals.filter((goal) => goal.area_id === areaSelectedId).map((goal) => (
                            <li 
                            key={goal.goal_id} 
                            className={`text-[14px] flex flex-col gap-1 rounded-lg pl-4 ml-3 mr-3 pt-2 pb-2 ${goal.goal_id === goalSelectedId ? 'bg-gray-900' : 'bg-gray750'}`}
                            onClick={() => handleGoalClick(goal, areas)}
                            >
                                <label className='absolute -left-full -top-full'>
                                    {goal.title}
                                </label>
                                <p className='text-white text-[12px]'>{goal.title}</p>
                                {console.log(goal.goal_id)}
                                <div className='bg-gray-700 rounded-xl h-[6px] mr-10'>
                                </div>
                                {goals[0].due && goals[0].due < 100 && 
                                    <div>
                                        <p style={ {'font-size' : '12px'} }>DUE IN {goals[0].due} DAYS</p>
                                    </div>
                                }
                            </li>
                            // Otherwise, just map all the goals if no area is selected
                        )) : goals.map((goal) => (
                            <li 
                            key={goal.goal_id} 
                            className={`text-[14px] flex flex-col gap-1 rounded-lg pl-4 ml-3 mr-3 pt-2 pb-2 ${goal.goal_id === goalSelectedId ? 'bg-gray-900' : 'bg-gray750'}`}
                            onClick={() => handleGoalClick(goal, areas)}
                            >
                                <label className='absolute -left-full -top-full'>
                                    {goal.title}
                                </label>
                                <p className='text-white text-[12px]'>{goal.title}</p>
                                {console.log(goal.goal_id)}
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
        <div className='flex flex-col flex-grow bg-gray-900'>
            <div className='flex flex-col flex-grow'>
                <div className='flex ml-14 mr-14 mt-8 justify-between items-center'>
                    <h1 className='flex text-[24px] text-white '>Tasks</h1>
                    <div className='group min-w-[20px] min-h-[20px] flex justify-center items-center rounded-md'>
                        <FaPlus size={20} fill="white" className='group-hover:fill-gray-500' onClick={toggleShowNewTaskForm}/>
                    </div>
                </div>
                {showNewTaskForm && <NewTaskForm />}
                    <ul className='flex flex-col gap-4 ml-14 mr-14 mt-6 mb-6'>
                        {areaSelectedId && goalSelectedId && tasks.filter((task) => task.goal_id === goalSelectedId).map((task) => (
                            <li key={task.id} className='flex justify-start items-center gap-2'>
                                <input type="checkbox" />
                                <label className='absolute -left-full -top-full'>
                                    {task.title}
                                </label>
                                <p className='text-white text-[12px] pl-2'>{task.title}</p>
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
                        {areaSelectedId && goalSelectedId === null && tasks.filter((task) => task.area_id === areaSelectedId).map((task) => (
                            <li key={task.id} className='flex justify-start items-center gap-3'>
                                <input type="checkbox" />
                                <label className='absolute -left-full -top-full'>
                                    {task.title}
                                </label>
                                <p className='text-white text-[12px] pl-2'>{task.title}</p>
                                {task.area_id && 
                                    <button type="button" className='bg-gray-700 rounded-xl text-white text-[12px]'>
                                        {areas.filter((area) => area.area_id === task.area_id).title}
                                    </button>
                                }
                                {task.estimate && 
                                    <button
                                        type="button"
                                        className='bg-gray-700 rounded-xl text-white pl-2 pr-2 text-[10px]'
                                        >
                                        {task.estimate < 60 ? `${task.estimate} minutes` : `${task.estimate / 60} hours`}
                                    </button>
                                }
                            </li>
                        ))}
                        {areaSelectedId === null && goalSelectedId === null && tasks.map((task) => (
                            <li key={task.id} className='flex justify-start items-center gap-2'>
                                <input type="checkbox" />
                                <label className='absolute -left-full -top-full'>
                                    {task.title}
                                </label>
                                <p className='text-white text-[12px] pl-2'>{task.title}</p>
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