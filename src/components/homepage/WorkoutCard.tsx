import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="container mx-auto group overflow-hidden rounded-lg border border-[#24272d] bg-[#15171c] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]">
        <div className="relative h-[140px] w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-3">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-sm bg-[#ccff00] px-2 py-[2px] text-[9px] font-black uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="text-[16px] font-black uppercase text-white">
            {workout.name}
          </h3>

          <p className="mt-1 text-[11px] text-[#777b83]">{workout.equipment}</p>

          <div className="mt-4 flex items-center gap-3 border-t border-[#25282e] pt-3 text-[16px] text-[#777b83]">
            <span className="flex items-center gap-1">
              <span>◷</span>
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <span>🔥</span>
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <span>★</span>
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
