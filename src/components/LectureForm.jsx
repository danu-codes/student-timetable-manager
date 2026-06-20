import { React, useState } from 'react'

export const LectureForm = ({ addLecture }) => {
    const [form, setForm] = useState({

        subject: "",
        day: "Monday",
        start: "",
        end: "",
        room: ""

    })


    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }



    function submit(e) {

        e.preventDefault();

        if (!form.subject) return;


        addLecture(form);


        setForm({

            subject: "",
            day: "Monday",
            start: "",
            end: "",
            room: ""

        })

    }
    return (
        <div className="
bg-white
rounded-2xl
shadow-lg
p-4
sm:p-6
">


            <h2 className="
text-lg
sm:text-xl
font-bold
mb-4
">

                ➕ Add Lecture

            </h2>



            <form
                onSubmit={submit}
                className="
space-y-3
"
            >


                <input

                    className="input"

                    name="subject"

                    placeholder="Subject"

                    value={form.subject}

                    onChange={handleChange}

                />



                <select

                    className="input"

                    name="day"

                    value={form.day}

                    onChange={handleChange}

                >

                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>

                </select>



                <div className="
grid
grid-cols-2
gap-2
">


                    <input

                        className="input"

                        name="start"

                        placeholder="Start"

                        value={form.start}

                        onChange={handleChange}

                    />



                    <input

                        className="input"

                        name="end"

                        placeholder="End"

                        value={form.end}

                        onChange={handleChange}

                    />


                </div>




                <input

                    className="input"

                    name="room"

                    placeholder="Room"

                    value={form.room}

                    onChange={handleChange}

                />



                <button

                    className="
w-full
py-2
rounded-lg
bg-blue-600
text-white
hover:bg-blue-700
transition
"

                >

                    Add Lecture

                </button>



            </form>



        </div>
    )
}
