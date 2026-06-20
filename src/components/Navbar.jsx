import React, { useState } from "react";

export const Navbar = ({ page, setPage }) => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", icon: "🏠" },
        { name: "Stats", icon: "📊" },
        { name: "Today", icon: "📌" },
        { name: "Weekly", icon: "📅" },
    ];

    return (
        <nav
            className="
      bg-white
      rounded-2xl
      shadow-md
      px-5
      py-4
      mb-6
      border
      border-slate-200
    "
        >
            {/* Top Row */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div
                        className="
            w-12
            h-12
            rounded-xl
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-bold
            text-lg
            shadow
          "
                    >
                        U
                    </div>

                    <div>
                        <h1 className="font-bold text-xl text-slate-800">
                            UniPlan
                        </h1>

                        <p className="text-xs text-slate-500">
                            Academic Timetable Manager
                        </p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2">
                    {links.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setPage(item.name)}
                            className={`
                px-4
                py-2
                rounded-xl
                text-sm
                font-medium
                transition-all
                duration-200

                ${page === item.name
                                    ? "bg-blue-600 text-white shadow"
                                    : "text-slate-600 hover:bg-slate-100"
                                }
              `}
                        >
                            {item.icon} {item.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="
            md:hidden
            text-2xl
            p-2
            rounded-lg
            hover:bg-slate-100
          "
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div
                    className="
          md:hidden
          mt-4
          pt-4
          border-t
          border-slate-200
          flex
          flex-col
          gap-2
        "
                >
                    {links.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => {
                                setPage(item.name);
                                setOpen(false);
                            }}
                            className={`
                text-left
                px-4
                py-3
                rounded-xl
                font-medium
                transition-all

                ${page === item.name
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-slate-100"
                                }
              `}
                        >
                            {item.icon} {item.name}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};