import { supabase } from '../lib/supabase'
import { useState } from 'react'

export default function EditHabit(props){
    const [clicked, setClicked] = useState(false)

    async function editHabit(event){
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)

        const newName = formData.get('newname')

        const { error } = await supabase
        .from('Habits')
        .update({ name: newName })
        .eq('id', props.habit_id);

        if(error){
            alert(error.message)
        }else{
            location.reload()
        }
    }

    function click(){
        setClicked(!clicked)
    }

    return(
        <div>
            <button 
                className="hover:cursor-pointer"
                onClick={()=>{click()}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
            </button>

            <form 
            className={clicked ? "fixed border-2 rounded-2xl flex flex-col items-center p-10 habit transition-transform duration-300 ease-in-out transform" : "fixed border-2 rounded-2xl flex flex-col items-center p-10 habit scale-0 transition-transform duration-300 ease-in-out transform -translate-y-25 -translate-x-30"}
            onSubmit={(event) => {editHabit(event)}}
            >
                <label
                    htmlFor='newname'
                >
                    Novo nome:
                </label>
                <input
                    name='newname'
                    id='newname'
                    placeholder={props.habit_name}
                    className='border-2 rounded-2xl mb-3'
                >
                </input>

                <input
                    type='submit'
                    className='hover:cursor-pointer'
                >
                </input>
            </form>

        </div>
    )
}