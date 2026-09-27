import WorkoutCard from "./WorkoutCard";
import { Workout } from "@/types/workout";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

const getData = async (): Promise<Workout[]> => {
  const res = await fetch(API_URL);
  const data: Workout[] = await res.json();
  return data;
};

const Library = async () => {
  const workouts = await getData();
  return (
    <section
      id="library"
      className="mx-auto max-w-[1200px] scroll-mt-20 px-3 py-12"
    >
      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-4xl font-black uppercase text-white">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-[14px] text-[#777b83]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Library;
