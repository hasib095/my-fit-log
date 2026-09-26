import Image from "next/image";
import BannerImg from "@/assets/banner.png"

const Banner = () => {
  return (
    <section className="mx-auto mt-6 max-w-[1200px] px-3 mb-15">
      <div className="flex min-h-[300px] items-center justify-between overflow-hidden rounded-xl border border-[#24252a] bg-[#15171c] px-10 py-8">

        {/* Left Content */}
        <div className="max-w-[800px]">
          
          <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.08em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          
          <h1 className="max-w-[800px] text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
           TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mt-4 max-w-[430px] text-sm leading-5 text-[#858991]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* CTA */}
          <a
            href="#library"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-4 py-2.5 text-[10px] font-bold uppercase text-black transition duration-200 hover:bg-[#b8e600]"
          >
            Browse Workouts
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>

        <div className="relative hidden h-[280px] w-[330px] shrink-0 md:block">
          <Image
            src={BannerImg}
            alt="Person doing a workout"
            fill
            priority
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;