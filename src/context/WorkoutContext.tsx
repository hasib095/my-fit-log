"use client";

import {
  createContext,
  type ReactNode,
  useState,
} from "react";

import type { Workout } from "@/types/workout";

type WorkoutContextValue = {
  // Today's Plan
  planWorkouts: Workout[];
  setPlanWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;

  // Saved
  savedWorkouts: Workout[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;

};

export const WorkoutContext =
  createContext<WorkoutContextValue | null>(null);

const WorkoutProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [planWorkouts, setPlanWorkouts] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);


  const sharedData = {
    planWorkouts,
    setPlanWorkouts,

    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;