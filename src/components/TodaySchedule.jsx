import React from "react";


export const TodaySchedule = ({ lectures }) => {


    const today =
        new Date().toLocaleDateString(
            "en-US",
            {
                weekday: "long"
            }
        );



    const date =
        new Date().toLocaleDateString(
            "en-US",
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );



    const todayLectures =
        lectures.filter(
            (item) => item.day === today
        );



    return (


        <div className="
bg-white
rounded-2xl
shadow-md
p-5
sm:p-6
mb-6
">



            {/* Header */}

            <div className="
flex
flex-col
sm:flex-row
sm:items-center
justify-between
gap-3
mb-5
">


                <div>


                    <h2 className="
text-xl
sm:text-2xl
font-bold
text-slate-800
">

                        📌 Today's Schedule

                    </h2>


                    <p className="
text-sm
text-slate-500
">

                        {today} • {date}

                    </p>


                </div>




                <div className="
bg-green-100
text-green-700
px-4
py-2
rounded-full
text-sm
font-semibold
">

                    {
                        todayLectures.length
                    }
                    : Classes

                </div>



            </div>






            {

                todayLectures.length === 0 ?


                    <div className="
text-center
py-10
">


                        <div className="
text-5xl
mb-3
">

                            🎉

                        </div>


                        <p className="
text-slate-400
">

                            No lectures today. Enjoy your day!

                        </p>


                    </div>




                    :



                    <div className="
grid
grid-cols-1
md:grid-cols-2
gap-4
">


                        {


                            todayLectures.map(item => (



                                <div

                                    key={item.id}

                                    className="
bg-gradient-to-br
from-blue-50
to-white

border-l-4
border-blue-500

rounded-xl

p-5

shadow-sm

hover:shadow-lg

hover:-translate-y-1

transition-all

duration-300

"


                                >




                                    <div className="
flex
justify-between
items-start
gap-3
">


                                        <h3 className="
font-bold
text-lg
text-slate-800
">

                                            {item.subject}

                                        </h3>



                                        <span className="
text-xs
bg-blue-100
text-blue-600
px-3
py-1
rounded-full
">

                                            Upcoming

                                        </span>



                                    </div>






                                    <div className="
mt-4
space-y-2
text-sm
text-slate-600
">


                                        <p>

                                            ⏰

                                            <span className="
font-medium
ml-2
">

                                                {item.start} - {item.end}

                                            </span>


                                        </p>




                                        <p>

                                            📍

                                            <span className="
font-medium
ml-2
">

                                                {item.room}

                                            </span>


                                        </p>



                                    </div>




                                </div>



                            ))



                        }



                    </div>


            }



        </div>


    )

}