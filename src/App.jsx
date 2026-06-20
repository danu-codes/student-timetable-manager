import { useState, useEffect } from "react";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { Stats } from "./components/Stats";
import { LectureForm } from "./components/LectureForm";
import { Timetable } from "./components/Timetable";
import { TodaySchedule } from "./components/TodaySchedule";
import { EditModal } from "./components/EditModal";

function App() {

  const [lectures, setLectures] = useState(
    () => JSON.parse(localStorage.getItem("lectures")) || []
  );

  const [search, setSearch] = useState("");
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  // Navigation State
  const [page, setPage] = useState("Home");

  useEffect(() => {
    localStorage.setItem(
      "lectures",
      JSON.stringify(lectures)
    );
  }, [lectures]);

  function addLecture(data) {
    setLectures(prev => [
      ...prev,
      {
        ...data,
        id: Date.now()
      }
    ]);
  }

  function deleteLecture(id) {
    setLectures(prev =>
      prev.filter(item => item.id !== id)
    );
  }

  function updateLecture(updated) {
    setLectures(prev =>
      prev.map(item =>
        item.id === updated.id
          ? updated
          : item
      )
    );
  }

  const filteredLectures = lectures.filter(item =>
    item.subject
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div
      className="
      min-h-screen
      bg-slate-100
      p-3
      sm:p-6
      lg:p-10
    "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        space-y-6
      "
      >
        {/* Navbar */}
        <Navbar
          page={page}
          setPage={setPage}
        />

        {/* HOME PAGE */}
        {page === "Home" && (
          <>
            <Stats lectures={lectures} />

            <div
              className="
      bg-white
      rounded-2xl
      shadow-sm
      p-4
    "
            >
              <input
                className="
        w-full
        p-3
        rounded-xl
        border
        border-slate-200
        outline-none
        focus:ring-2
        focus:ring-blue-400
      "
                placeholder="🔍 Search lectures..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <TodaySchedule lectures={lectures} />

            <div
              className="
      grid
      grid-cols-1
      lg:grid-cols-12
      gap-6
      items-start
    "
            >
              <div className="lg:col-span-3">
                <div
                  className="
          bg-white
          rounded-2xl
          shadow-md
          p-4
          sm:p-6
        "
                >
                  <LectureForm addLecture={addLecture} />
                </div>
              </div>

              <div className="lg:col-span-9">
                <div
                  className="
          bg-white
          rounded-2xl
          shadow-md
          p-4
          sm:p-6
        "
                >
                  <Timetable
                    lectures={filteredLectures}
                    deleteLecture={deleteLecture}
                    editLecture={(lecture) => {
                      setSelectedLecture(lecture);
                      setShowEdit(true);
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* STATS PAGE */}
        {page === "Stats" && (
          <div
            className="
    bg-white
    rounded-2xl
    shadow-md
    p-6
    "
          >
            <Stats lectures={lectures} />
          </div>
        )}

        {/* TODAY PAGE */}
        {page === "Today" && (
          <TodaySchedule lectures={lectures} />
        )}

        {/* WEEKLY PAGE */}
        {page === "Weekly" && (
          <>
            <div
              className="
      bg-white
      rounded-2xl
      shadow-sm
      p-4
      mb-4
      "
            >
              <input
                className="
        w-full
        p-3
        rounded-xl
        border
        border-slate-200
        outline-none
        focus:ring-2
        focus:ring-blue-400
        "
                placeholder="🔍 Search lectures..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div
              className="
      bg-white
      rounded-2xl
      shadow-md
      p-4
      sm:p-6
      "
            >
              <Timetable
                lectures={filteredLectures}
                deleteLecture={deleteLecture}
                editLecture={(lecture) => {
                  setSelectedLecture(lecture);
                  setShowEdit(true);
                }}
              />
            </div>
          </>
        )}
      </div>

      {/* Edit Modal */}
      {showEdit && (
        <EditModal
          lecture={selectedLecture}
          updateLecture={updateLecture}
          closeModal={() =>
            setShowEdit(false)
          }
        />
      )}
    </div>
  );
}

export default App;