"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Workout } from "@/types/workout";
import React, { useContext } from "react";

import { Bounce, toast } from "react-toastify";

const TodayPlanButton = ({ book }: { book: Workout }) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("ReadButton must be used inside BooksProvider");
  }

  const { planWorkouts, setPlanWorkouts } = context;
 
  const handleReadBooks = () => {
    setPlanWorkouts([...planWorkouts, book]);
    toast("Add to Readlist", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
  };

  return (
    <button
      className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
      onClick={() => handleReadBooks()}
    >
      Read
    </button>
  );
};

export default TodayPlanButton;