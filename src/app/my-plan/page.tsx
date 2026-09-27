"use client";
import SavedCart from "@/components/my-plan/SavedCart";
import TodayPlanCart from "../../components/my-plan/TodayPlanCart";
import { WorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";
import React, { useContext, useState } from "react";

type PlanTab = "today" | "saved";
type SortField = "duration" | "caloriesBurned" | "rating";

const MyPlanPage = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("MyPlanPage must be rendered inside WorkoutProvider");
  }

  const { planWorkouts, savedWorkouts } = context;
  const [activeTab, setActiveTab] = useState<PlanTab>("today");
  const [sortField, setSortField] = useState<SortField>("duration");

  const activeWorkouts = activeTab === "today" ? planWorkouts : savedWorkouts;
  const sortedWorkouts = [...activeWorkouts].sort((first, second) => {
    return second[sortField] - first[sortField];
  });

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

      <div className="mt-10">
        <div className="flex justify-start border-b border-[#252a34]">
          <div role="tablist" aria-label="Workout lists" className="flex gap-2">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "today"}
              onClick={() => setActiveTab("today")}
              className={`border-b-2 px-4 py-3 text-sm font-semibold transition ${
                activeTab === "today"
                  ? "border-[#b6ff00] text-[#b6ff00]"
                  : "border-transparent text-gray-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "saved"}
              onClick={() => setActiveTab("saved")}
              className={`border-b-2 px-4 py-3 text-sm font-semibold transition ${
                activeTab === "saved"
                  ? "border-[#b6ff00] text-[#b6ff00]"
                  : "border-transparent text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>
        </div>

        <section role="tabpanel" className="w-full py-5">
          <div className="mb-5 flex justify-end">
            <label className="flex items-center gap-3 text-xs text-gray-400">
              <span className="font-bold text-[14px]">Sort By</span>
              <select
                value={sortField}
                onChange={(event) =>
                  setSortField(event.target.value as SortField)
                }
                className="rounded-lg border border-[#252a34] bg-[#12151b] px-3 py-2 text-sm text-white outline-none focus:border-[#b6ff00]"
              >
                <option value="duration">Duration</option>
                <option value="caloriesBurned">Calories</option>
                <option value="rating">Rating</option>
              </select>
            </label>
          </div>

          {sortedWorkouts.length > 0 ? (
            <div className="w-full space-y-3">
              {
              sortedWorkouts.map((workout) =>
                activeTab === "today" ? (
                  <TodayPlanCart key={workout.id} workout={workout} />
                ) : (
                  <SavedCart key={workout.id} workout={workout} />
                ),
              )
              }
            </div>
          ) : (
            <div className="flex h-57 w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#292d35]">
              <h2 className="text-base font-extrabold tracking-wide">
                NOTHING HERE YET
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                href="/"
                className="mt-4 rounded-full bg-[#b6ff00] px-5 py-2 text-[11px] font-bold text-black shadow-[0_0_15px_rgba(182,255,0,0.2)] transition hover:bg-[#c8ff3b]"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MyPlanPage;
