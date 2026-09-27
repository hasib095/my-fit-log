"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import type { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const TodayPlanCart = ({ workout }: { workout: Workout }) => {
  const context = useContext(WorkoutContext);
  const [isDone, setIsDone] = useState(false);

  if (!context) {
    throw new Error("TodayPlanCart must be rendered inside WorkoutProvider");
  }

  const { setPlanWorkouts } = context;
  const handleRemove = () => {
    setPlanWorkouts((currentWorkouts) =>
      currentWorkouts.filter((item) => item.id !== workout.id),
    );
  };

  return (
    <div className="container mx-auto flex flex-col gap-3 rounded-xl border border-[#252a34] bg-[#12151b] p-3 sm:flex-row sm:items-center">
      <div className="flex min-w-0 items-center gap-3">
        <div className="relative h-[120px] w-[150px] shrink-0 overflow-hidden rounded-lg">
          <Image
            src={workout.image}
            alt={workout.name}
            // width={300}
            fill
            // sizes="103px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-xs font-bold text-white text-[20px]">
            {workout.name}
          </h3>
          <p className="mt-1 truncate text-[18px] text-gray-500">
            {workout.muscleGroups.join(", ")}
          </p>
          <div className="mt-1.5 flex items-center gap-3 text-[14px] text-gray-400">
            <span>◷ {workout.duration} min</span>
            <span>🔥{workout.caloriesBurned} kcal</span>
            <span>★ {workout.rating}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:ml-auto sm:justify-end">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-[#303641] px-4 py-2 text-[14px] text-gray-400 transition hover:border-gray-500 hover:text-white"
        >
          View Details
        </Link>
        <button
          type="button"
          onClick={() => setIsDone(true)}
          disabled={isDone}
          className="rounded-full bg-[#b6ff00] px-4 py-2 text-[14px] font-bold text-black transition hover:bg-[#c8ff3b] disabled:cursor-default disabled:bg-[#303641] disabled:text-gray-300"
        >
          {isDone ? "✓ Completed" : "✓ Mark as Done"}
        </button>
        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${workout.name} from today's plan`}
          className="ml-1 px-2 py-1 text-[35px] text-gray-500 transition hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default TodayPlanCart;
