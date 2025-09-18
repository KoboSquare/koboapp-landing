"use client";
import { Button } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import logo from "@/assets/logo.svg";
import Image from 'next/image';


export default function Header() {
    return (
        <>
            <div className="hidden md:block z-50">
                <DesktopHeader />
            </div>
            <div className="md:hidden z-50">
                <MobileHeader />
            </div>


        </>
    )
}

function DesktopHeader() {
    const navLinks = [
        {
            label: "Personal",
            href: "/personal",
        },
        {
            label: "Business",
            href: "/business",
        },
        {
            label: "CRS",
            href: "/crs",
        },
    ]

    const pathName = usePathname()

    return (
        <header className='container mx-auto flex justify-between items-center py-5 px-4'>
            <Link href="/">
                <Image src={logo} className='z-50' alt='Logo' width={100} height={100} />
            </Link>
            <div>
                {navLinks.map((link) => (
                    <Link key={link.label} href={link.href} >
                        <Button variant={
                            pathName === link.href ? "light" : "subtle"
                        } color="white">
                            {link.label}
                        </Button>
                    </Link>
                ))}

            </div>


            <div>
                <Link href="/">
                    <Button variant='default' style={{ backgroundColor: "#009A74", color: "white", borderColor: "#008E6A" }}>
                        Get Started
                    </Button>
                </Link>
            </div>
        </header>
    )
}

function MobileHeader() {
    return (
        <header>
            <div>
                header
            </div>
        </header>
    )
}