import React from "react";


const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri"
];


const fullDays = {
    Mon:"Monday",
    Tue:"Tuesday",
    Wed:"Wednesday",
    Thu:"Thursday",
    Fri:"Friday"
};



const colors = [
    "from-blue-100 to-blue-50 border-blue-400",
    "from-green-100 to-green-50 border-green-400",
    "from-purple-100 to-purple-50 border-purple-400",
    "from-yellow-100 to-yellow-50 border-yellow-400",
    "from-pink-100 to-pink-50 border-pink-400"
];



export const Timetable = ({
    lectures,
    deleteLecture,
    editLecture
}) => {


return (


<div className="w-full">


{/* Header */}

<div className="
flex
flex-col
sm:flex-row
justify-between
items-start
sm:items-center
mb-4
gap-2
">


<div>


<h2 className="
text-xl
sm:text-2xl
font-bold
text-slate-800
">

📅 Weekly Schedule

</h2>


<p className="
text-xs
text-slate-500
">

Your weekly classes

</p>


</div>



<div className="
bg-blue-100
text-blue-700
rounded-full
px-3
py-1
text-xs
font-semibold
">

{lectures.length} Classes

</div>



</div>





{/* Timetable */}

<div className="
grid
grid-cols-5
gap-2
w-full
">



{


days.map(day => (


<div
key={day}
className="
bg-slate-50
rounded-xl
p-1
sm:p-2
min-h-[250px]
"
>



{/* Day */}

<div className="
bg-slate-900
text-white
rounded-lg
text-center
py-2
text-xs
sm:text-sm
font-semibold
">

{day}

</div>






<div className="
mt-2
space-y-2
">



{


lectures

.filter(
lecture =>
lecture.day === fullDays[day]
)

.map((lecture,index)=>(


<div

key={lecture.id}

className={`
bg-gradient-to-br
${colors[index % colors.length]}

border-l-2

rounded-lg

p-2

shadow-sm

hover:shadow-md

transition

duration-200

`}

>



<h3 className="
font-bold
text-[11px]
sm:text-xs
text-slate-800
truncate
">

{lecture.subject}

</h3>




<div className="
text-[10px]
sm:text-xs
text-slate-600
mt-1
">


<p>

⏰ {lecture.start}

</p>


<p>

📍 {lecture.room}

</p>


</div>






<div className="
flex
gap-1
mt-2
">



<button

onClick={() =>
editLecture(lecture)
}

className="
flex-1
bg-blue-600
text-white
rounded-md
py-1
text-[9px]
hover:bg-blue-700
"

>

Edit ✏️

</button>




<button

onClick={() =>
deleteLecture(lecture.id)
}

className="
flex-1
bg-red-100
text-red-600
rounded-md
py-1
text-[9px]
hover:bg-red-200
"

>

Delete 🗑️

</button>




</div>





</div>



))





}




{


lectures.filter(
l=>l.day===fullDays[day]
).length===0 &&


<p className="
text-center
text-[10px]
text-gray-400
mt-8
">

Empty

</p>


}





</div>





</div>


))


}





</div>





</div>


)

}