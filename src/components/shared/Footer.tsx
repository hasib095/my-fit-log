import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png"
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <div className='flex justify-between bg-[#0c0d0f] container mx-auto items-center'>
                <div>
                    <Link href="/" className="flex items-center gap-2 p-10">
                    <Image
                        src={logo}
                        alt="Book Vibe Logo"
                        width={20}
                        height={20}
                    />
                    <span className="text-[18px] font-bold tracking-wide text-white mx-2">
                        FITLOG
                    </span>
                </Link>
    
                </div>
                <div className='p-4'>
                    <p className='text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;