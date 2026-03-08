'use client'
import { supabase } from '../lib/supabase'
import { useState, useEffect } from "react";

//still needing to adjust the streak count. It's only checking the day but not the month, also it don't consider if the day it's really done or not
export default function Habit(props){
    const [data, setData] = useState([])
    const [streak, setStreak] = useState()
    useEffect(() => {
        async function fetchData(){
            const { data, error } = await supabase
            .from('habit_log')
            .select('*')
            .eq('habit_id', props.habit_id);

            if(error){
                alert(error.message)
            }else{
                setData(data)
                let maxStreak = 0
                

                data.map((day) => {
                    let prev = Number(data[data.length-1].date[8] + data[data.length-1].date[9])
                    let actualDay = Number(day.date[8] + day.date[9])
                    console.log("prev:", prev)
                    console.log("actual:", actualDay)


                    let streakCount = 0
                    //needs to check if the days are done or not
                    if (actualDay <= prev){
                        streakCount++
                    }else{
                        streakCount = 0
                    }

                    if(streakCount > maxStreak){
                        maxStreak = streakCount
                    }
                    prev = actualDay

                    console.log(streakCount)
                    console.log(day)  
                })

                setStreak(maxStreak)
            }
            
        }
        fetchData()
    }, [props.habit_id])

    async function check(){
        const date = new Date().toISOString().split("T")[0]
        const {error} = await supabase
        .from('habit_log')
        .insert({habit_id:props.habit_id, done:true, date:date});
        
        // adjust to undo check
        if(error){
            alert(error.message)
        }
    }

    return(
        <section className="habit p-7 rounded-4xl opacity-70 flex justify-center items-center gap-15 w-auto h-auto">
            <div>
                <p className="text-2xl">
                    {props.name}
                </p>
                <p>
                    Streak: {streak}
                </p>
            </div>
            <button 
                className="w-15 h-15 border-2 square rounded-xl hover:bg-pink-900"
                onClick={() => {check()}}
            >
                    OK
            </button>
        </section>
    );
}