'use client'

import './globals.css'
import { supabase } from '../src/lib/supabase'
import { useEffect, useState } from 'react';
import Habit from '../src/components/habit'
import AddHabit from '../src/components/addHabit'
export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData(){
      const { data, error } = await supabase
      .from('Habits')
      .select('*');

      if(error){
        alert(error.message)
      }else{
        setData(data)
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <AddHabit />
      <div className="habits flex flex-col justify-center items-center p-7 gap-10">
        {
          data.map((habit) => (
              <Habit key={habit.id} name={habit.name} habit_id={habit.id}/>
            ))
        }
      </div>
    </section>
  );
}
