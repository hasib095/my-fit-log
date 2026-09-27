"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const context = useContext(WorkoutContext);
  const pathname = usePathname();

  if (!context) {
    throw new Error("Navbar must be rendered inside WorkoutProvider");
  }

  const { planWorkouts, savedWorkouts } = context;

  const linkClass = (isActive: boolean) =>
    `rounded-full px-4 py-2 text-xs font-medium transition ${
      isActive
        ? "bg-[#182500] text-[#ccff00]"
        : "text-[#8c8d91] hover:text-white"
    }`;

  return (
    <nav className="h-[68px] w-full border-b border-[#24252a] bg-[#0c0d0f]">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src={logo} alt="Fitlog" width={30} height={30} />
          <span className="text-lg font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={linkClass(pathname === "/")}>
            Workouts
          </Link>
          <Link
            href="/my-plan"
            aria-current={pathname === "/my-plan" ? "page" : undefined}
            className={linkClass(pathname === "/my-plan")}
          >
            My Plan
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-3 text-[11px] sm:gap-6">
          <Link href="/my-plan" className="flex items-center gap-2 text-[#b5b6ba]">
            <span className="hidden sm:inline">Plan</span>
            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#ccff00] px-1 text-[10px] font-bold text-black">
              {planWorkouts.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2 text-[#8c8d91]">
            <span className="hidden sm:inline">Saved</span>
            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-[#3a3b40] px-1 text-[10px] text-[#b5b6ba]">
              {savedWorkouts.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;