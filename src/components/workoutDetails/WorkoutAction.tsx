"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { Workout } from "@/types/workout";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("WorkoutAction must be used inside WorkoutProvider");
  }

  const { setPlanWorkouts, setSavedWorkouts } = context;

  const handleAddToPlan = () => {
    setPlanWorkouts((currentWorkouts) => {
      if (currentWorkouts.some((item) => item.id === workout.id)) {
        toast.info("This workout is already in today's plan");
        return currentWorkouts;
      }
      toast.success("Added to today's plan");
      return [...currentWorkouts, workout];
    });

  };

  const handleSave = () => {
     setSavedWorkouts((currentWorkouts) => {
      if (currentWorkouts.some((item) => item.id === workout.id)) {
        toast.info("This workout is already saved");
        return currentWorkouts;
      }

      toast.success("Workout saved for later");
      return [...currentWorkouts, workout];
    });
  };

  return (
    <div className="mt-7 flex flex-wrap gap-3">

      {/* Add to Plan */}
      <button
        onClick={handleAddToPlan}
        className="inline-flex items-center gap-2 rounded-lg bg-[#ccff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#b8e600]"
      >
        {/* Calendar icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="12" y1="14" x2="12" y2="18" />
          <line x1="10" y1="16" x2="14" y2="16" />
        </svg>

        Add to today's plan
      </button>

      {/* Save */}
      <button
        onClick={handleSave}
        className="inline-flex items-center gap-2 rounded-lg border border-[#343943] px-5 py-3 text-xs font-medium text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
      >
        {/* Bookmark icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 3h12v18l-6-4-6 4V3z" />
        </svg>

        Save for later
      </button>

    </div>
  );
};

export default WorkoutActions;