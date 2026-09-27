import Image from "next/image";
import { notFound } from "next/navigation";
import { Workout } from "@/types/workout";
import WorkoutActions from "@/components/workoutDetails/WorkoutAction";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
const WorkoutDetailsPage = async ({params}: WorkoutDetailsPageProps) => {
  const { id } = await params;
  // const booksData = await getBooks();
  const response = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    notFound();
  }
  const workout: Workout = await response.json();

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div>

          {/* Title */}
          <h1 className="text-3xl font-black uppercase leading-tight text-white md:text-4xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-[600px] text-sm leading-5 text-[#D1D5DB]">
            {workout.description}
          </p>

          {/* Categories */}
          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-[#24272d] bg-[#15181e]">

            <SpecRow
              label="EQUIPMENT"
              value={workout.equipment}
            />
            <SpecRow
              label="DIFFICULTY"
              value={workout.difficulty}
            />
            <SpecRow
              label="SETS"
              value={String(workout.sets)}
            />
            <SpecRow
              label="REPS"
              value={workout.reps}
            />
            <SpecRow
              label="DURATION"
              value={`${workout.duration} min`}
            />
            <SpecRow
              label="CALORIES"
              value={`${workout.caloriesBurned} kcal`}
            />
            <SpecRow
              label="RATING"
              value={String(workout.rating)}
              last
            />
          </div>
          <div className="mt-6">
            <h2 className="text-sm font-black uppercase text-[#D1D5DB]">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-xs leading-5 text-[#858991]"
                >
                  <span className="text-[#858991]">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
          <WorkoutActions workout={workout}/>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;

interface SpecRowProps {
  label: string;
  value: string;
  last?: boolean;
}

const SpecRow = ({
  label,
  value,
  last = false,
}: SpecRowProps) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 ${
        !last ? "border-b border-[#24272d]" : ""
      }`}
    >
      <span className="text-[9px] font-bold tracking-wide text-[#858991]">
        {label}
      </span>

      <span className="text-xs text-white">
        {value}
      </span>
    </div>
  );
};