import DeleteHabit from './deleteHabit'
import EditHabit from './editHabit'
import { useState } from 'react'
export default function ManageHabit(props){
    const [clicked, setClicked] = useState(false)

    function click(){
        setClicked(!clicked)
    }

    return(
        <section className="relative flex flex-col items-center">
            <button 
            className="hover:cursor-pointer"
            onClick={()=>{click()}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </button>
            <div className={`absolute top-8 flex flex-col gap-3 ${clicked ? " transition-transform duration-300 ease-in-out" : "scale-0 transition-transform duration-300 ease-in-out transform -translate-y-10"}`}>
                <EditHabit habit_id={props.habit_id} habit_name={props.habit_name}/>
                <DeleteHabit habit_id={props.habit_id}/>
            </div>
        </section>
    )
}