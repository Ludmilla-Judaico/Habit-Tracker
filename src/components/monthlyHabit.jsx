export default function MonthlyHabit(){
    function days(){
        const date = new Date(),
             Nyear = date.getFullYear(),
             Nmonth = date.getMonth()+1,
             Ndays = new Date(Nyear, Nmonth, 0).getDate()
        
        const month = []
        for(let i=1; i<=Ndays; i++){
            month.push(i);
        }
        
        return month
    }
    const month = days()
    console.log(month)

    return (
        <div className="grid grid-cols-7 gap-4 w-100 h-auto m-3">
                {month.map((day) => (
                    <div key={day} className={`${day[1] ? "bg-pink-900" : ""}` + "w-6 h-6 rounded-lg square flex justify-center items-center p-3"} id={`${day}`}>
                    </div>
                ))}
                
            </div>
    )
}