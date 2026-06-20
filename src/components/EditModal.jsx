import { useState, useEffect } from "react";


export const EditModal = ({
    lecture,
    closeModal,
    updateLecture
}) => {
    const [form, setForm] = useState(lecture);

    useEffect(() => {

        setForm(lecture)

    }, [lecture])

    function change(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        })

    }

    function submit(e) {

        e.preventDefault();

        updateLecture(form);

        closeModal();

    }

    return (
        <div className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
p-4
">


            <div className="
bg-white
rounded-2xl
p-6
w-full
max-w-md
shadow-xl
">


                <h2 className="
text-xl
font-bold
mb-4
">

                    ✏️ Edit Lecture

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

                        value={form.subject}

                        onChange={change}

                    />



                    <select

                        className="input"

                        name="day"

                        value={form.day}

                        onChange={change}

                    >


                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>


                    </select>




                    <input

                        className="input"

                        name="start"

                        value={form.start}

                        onChange={change}

                    />



                    <input

                        className="input"

                        name="end"

                        value={form.end}

                        onChange={change}

                    />



                    <input

                        className="input"

                        name="room"

                        value={form.room}

                        onChange={change}

                    />




                    <div className="
flex
gap-3
">


                        <button

                            type="submit"

                            className="
flex-1
bg-blue-600
text-white
p-2
rounded-lg
"

                        >

                            Save

                        </button>



                        <button

                            type="button"

                            onClick={closeModal}

                            className="
flex-1
bg-gray-200
p-2
rounded-lg
"

                        >

                            Cancel

                        </button>


                    </div>



                </form>



            </div>



        </div>
    )
}
