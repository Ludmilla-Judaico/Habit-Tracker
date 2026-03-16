import { supabase } from "../lib/supabase"
import { useState } from "react"

export default function AddHabit(){
    const [clicked, setClicked] = useState(false)

    async function add(event){
        event.preventDefault()
        const form = event.currentTarget

        const formData = new FormData(form)

        const name = formData.get('name')

        const { error } = await supabase
        .from('Habits')
        .insert({name:name});

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
        <div className="text-2xl">
            <button 
                className="m-4 hover:cursor-pointer"
                onClick={() => {click(); console.log(clicked)}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
            <div className={`flex items-start ${clicked ? "transition-transform duration-300 ease-in-out transform" : " transition-transform duration-300 ease-in-out transform -translate-x-50"}`}>
                <form
                    onSubmit={(event) => {add(event)}}
                    className="flex flex-col items-center ml-1"
                >
                    <label
                        htmlFor="name"
                    >
                        Nome do novo hábito:
                    </label>
                    <input
                            name="name"
                            id="name"
                            className="border-2 rounded-2xl p-2 mb-2 focus:"
                        ></input>

                    <input
                        type="submit"
                        className="border-2 rounded-2xl p-2 hover:cursor-pointer"
                    >
                    </input>
                </form>
            </div>
        </div>
    )
}