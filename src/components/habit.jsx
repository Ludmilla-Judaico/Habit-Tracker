'use client'
import { supabase } from '../lib/supabase'
import { useState, useEffect } from "react";
import ManageHabit from './manageHabit'

//still needing to adjust the streak count. It's only checking the day but not the month, also it don't consider if the day it's really done or not
export default function Habit(props){
    const [data, setData] = useState([]);
    const [streak, setStreak] = useState();

    //it's rendering two times  
    useEffect(() => {
        async function fetchData(){
            const { data, error } = await supabase
            .from('habit_log')
            .select('*')
            .eq('habit_id', props.habit_id);

            if(error){
                alert(error.message);
            }else{
                setData(data);
                const size = data.length-1;
                let today = new Date().toISOString().split("T")[0];
                today = Number(today[8] + today[9]);

                let streakCount = 0;
                for (let day=size ; day>0 ; day--) {
                    
                    console.log(data[day])
                    let actualDay = Number(data[day].date[8] + data[day].date[9]);

                    let prev = Number(data[day-1].date[8] + data[day-1].date[9]);

                    if(today==actualDay || today-1==actualDay) streakCount++;
                    if(actualDay-1 == prev){
                        streakCount++;
                    }else{
                        break;
                    }
                    console.log("today:", today);
                    console.log("prevBefore:", prev);
                    console.log("actualBefore:", actualDay);

                    actualDay = prev;
                    prev = Number(data[day-2].date[8] + data[day-2].date[9]);
                    
                    console.log("prev:", prev);
                    console.log("actual:", actualDay);
                }
                setStreak(streakCount);
                console.log(streakCount);
            }
        }
        fetchData();
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
            <ManageHabit habit_id={props.habit_id} habit_name={props.name}/>
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