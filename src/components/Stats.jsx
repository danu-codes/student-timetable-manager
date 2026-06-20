import React from 'react'


export const Stats = ({ lectures }) => {
    const total = lectures.length;
    

    const days = [
        ...new Set(
            lectures.map(
                (l) => l.day
            )
        )
    ];


    return (

        <div className="
grid
grid-cols-1
sm:grid-cols-3
gap-4
mb-6
">


            <Card
                title="Total Lectures"
                value={total}
                icon="📚"
            />


            <Card
                title="Active Days"
                value={days.length}
                icon="📅"
            />



            <Card
                title="Status"
                value="Ready"
                icon="🚀"
            />


        </div>


    )

}



function Card({ title, value, icon }) {


    return (

        <div className="
bg-white
rounded-2xl
shadow-sm
p-5
border
hover:shadow-lg
transition
">


            <div className="
text-3xl
">

                {icon}

            </div>


            <p className="
text-gray-500
mt-2
">

                {title}

            </p>


            <h2 className="
text-3xl
font-bold
text-blue-600
">

                {value}

            </h2>



        </div>
    )
}
