import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"

const Navbar = () => {
    return (
        <nav className="mx-[10px] h-[68px] border border-[#24252a] bg-[#0c0d0f] container mx-auto">
            <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-3">

                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="Book Vibe Logo"
                        width={30}
                        height={30}
                    />
                    <span className="text-[18px] font-bold tracking-wide text-white">
                        FITLOG
                    </span>
                </Link>

                <div className="flex items-center gap-2">
                    <Link
                        href="/workouts"
                        className="rounded-full bg-[#182500] px-4 py-1.5 text-[12px] font-medium text-[#ccff00]"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full px-4 py-1.5 text-[12px] font-medium text-[#8c8d91] transition hover:text-white"
                    >
                        My Plan
                    </Link>
                </div>

                <div className="flex items-center gap-6 text-[11px]">
                    <div className="flex items-center gap-2 text-[#b5b6ba]">
                        <span>Plan</span>
                        <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#ccff00] px-1 text-[10px] font-bold text-black">
                            0
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-[#8c8d91]">
                        <span>Saved</span>

                        <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-[#3a3b40] px-1 text-[10px] text-[#b5b6ba]">
                            0
                        </span>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;