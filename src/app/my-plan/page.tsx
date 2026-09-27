"use client";
import WorkoutCard from "@/components/homepage/WorkoutCard";
import TodayPlanCart from "@/components/my-plan/TodayPlanCart";
import { WorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";
import React, { useContext } from "react";

const MyPlanPage = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("MyPlanPage must be rendered inside WorkoutProvider");
  }

  const { planWorkouts, savedWorkouts } = context;

  return (
    <div className="min-h-screen bg-[#0d0f13] px-6 py-6 text-white container mx-auto ">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold tracking-wide">MY PLAN</h1>

        <p className="mt-1 text-xs text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Statistics */}
      <div className="rounded-xl border border-[#252a34] bg-[#12151b] px-5 py-6">
        <div className="grid grid-cols-3">
          {/* Exercises */}
          <div className="border-r border-[#20242d]">
            <p className="text-[10px] text-gray-500">Exercises</p>

            <h2 className="mt-1 text-3xl font-bold text-[#b6ff00]">
              {planWorkouts.length}
            </h2>
          </div>

          {/* Minutes */}
          <div className="border-r border-[#20242d] pl-6">
            <p className="text-[10px] text-gray-500">Minutes</p>

            <h2 className="mt-1 text-3xl font-bold">
              {planWorkouts.reduce(
                (total, workout) => total + workout.duration,
                0,
              )}
            </h2>
          </div>

          {/* Calories */}
          <div className="pl-6">
            <p className="text-[10px] text-gray-500">Calories</p>

            <h2 className="mt-1 text-3xl font-bold">
              {planWorkouts.reduce(
                (total, workout) => total + workout.caloriesBurned,
                0,
              )}
            </h2>
          </div>
        </div>
      </div>

      <div className="tabs tabs-lift mt-10">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          <div className="space-y-3">
            {planWorkouts.length > 0 ? (
              planWorkouts.map((workout) => (
                <TodayPlanCart key={workout.id} workout={workout} />
              ))
            ) : (
              <div className="mt-4 flex h-57 flex-col items-center justify-center rounded-xl border border-dashed border-[#292d35]">
                <h2 className="text-base font-extrabold tracking-wide">
                  NOTHING HERE YET
                </h2>

                <p className="mt-1 text-[10px] text-gray-500">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="mt-4 rounded-full bg-[#b6ff00] px-5 py-2 text-[10px] font-bold text-black shadow-[0_0_15px_rgba(182,255,0,0.2)] transition hover:bg-[#c8ff3b]"
                >
                  Go to workouts
                </Link>
              </div>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          {savedWorkouts.length > 0 ? (
            savedWorkouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))
          ) : (
            <div className="mt-4 flex h-57 flex-col items-center justify-center rounded-xl border border-dashed border-[#292d35]">
              <h2 className="text-base font-extrabold tracking-wide">
                NOTHING HERE YET
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-4 rounded-full bg-[#b6ff00] px-5 py-2 text-[10px] font-bold text-black shadow-[0_0_15px_rgba(182,255,0,0.2)] transition hover:bg-[#c8ff3b]"
              >
                Go to workouts
              </Link>
            </div>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
