import React from "react";


const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];


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

<div>


{/* Header */}

<div className="
flex
justify-between
items-center
mb-5
">


<div>

<h2 className="
text-2xl
font-bold
text-slate-800
">

📅 Weekly Schedule

</h2>


<p className="
text-sm
text-slate-500
">

Manage your lectures

</p>


</div>


<div className="
bg-blue-100
text-blue-700
px-3
py-1
rounded-full
text-xs
font-semibold
">

{lectures.length} Classes

</div>


</div>





{/* Responsive timetable */}

<div className="
grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-5

gap-4

">



{

days.map(day=>(


<div

key={day}

className="
bg-slate-50
rounded-2xl
p-3
"

>


{/* Day title */}

<div className="
bg-slate-900
text-white
rounded-xl
py-2
text-center
font-semibold
text-sm
">

{day}

</div>





<div className="
mt-3
space-y-3
">


{


lectures

.filter(
lecture=>lecture.day===day
)

.map((lecture,index)=>(



<div

key={lecture.id}

className={`
bg-gradient-to-br

${colors[index % colors.length]}

border-l-4

rounded-xl

p-3

shadow-sm

`}

>


<h3 className="
font-bold
text-sm
text-slate-800
">

{lecture.subject}

</h3>




<div className="
text-xs
text-slate-600
mt-2
space-y-1
">


<p>
⏰ {lecture.start} - {lecture.end}
</p>


<p>
📍 {lecture.room}
</p>


</div>






{/* Buttons */}

<div className="
grid
grid-cols-2
gap-2
mt-3
">


<button

onClick={()=>editLecture(lecture)}

className="
bg-blue-600
text-white
rounded-lg
py-2
text-xs
hover:bg-blue-700
"

>

✏️ Edit

</button>




<button

onClick={()=>deleteLecture(lecture.id)}

className="
bg-red-100
text-red-600
rounded-lg
py-2
text-xs
hover:bg-red-200
"

>

🗑 Delete

</button>


</div>





</div>


))


}






{

lectures.filter(
l=>l.day===day
).length===0 &&


<div className="
text-center
py-8
text-xs
text-gray-400
">

No classes

</div>


}



</div>




</div>



))


}



</div>


</div>

)

}