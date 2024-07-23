import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { CloseIcon, MenuIcon } from "@/components/asset/svg/svg";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const handleMenu = () => setIsMenuOpen(!isMenuOpen);
    const menuRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const dipsatch = useDispatch();

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    });

    // Handle keydown event
    const handleMenuKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    return (
        <div className="sticky z-[300] flex h-fit w-full flex-row items-center justify-between px-8 py-[1rem] shadow-lg lg:px-[4.81rem]">
            <Link href="/">
                <h1 className="cursor-pointer select-none font-sans text-[1rem] font-bold text-[#fe5009]">
                    FestFic Ranking
                </h1>
            </Link>
            {/* Hamburger menu */}
            <div
                ref={menuRef}
                className="relative flex w-fit items-center justify-center hover:bg-gray-100 hover:shadow-lg"
                role="button"
                tabIndex={0}
                onClick={handleMenu}
                onKeyDown={handleMenuKeyDown}
            >
                <div
                    className={`transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? "rotate-90" : ""
                    }`}
                >
                    {isMenuOpen ? (
                        <CloseIcon className="z-[400] h-8 w-8" stroke="#fe5009" />
                    ) : (
                        <MenuIcon className="h-8 w-8" stroke="#fe5009" />
                    )}
                </div>
                {isMobile ? (
                    <div
                        className={`fixed left-0 top-0 z-[400] flex h-screen w-full flex-col items-center justify-center bg-white text-[#fe5009] shadow-lg transition-opacity duration-300 ease-in-out ${
                            isMenuOpen ? "block opacity-100" : "hidden opacity-0"
                        } md:hidden`}
                    >
                        {isMenuOpen && (
                            <CloseIcon
                                className="absolute top-20 z-[400] h-8 w-8"
                                stroke="#fe5009"
                            />
                        )}
                        <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
                            <Link
                                className="w-full p-4 text-center text-xl transition-colors duration-200 ease-in-out hover:bg-gray-100"
                                href="/"
                                onClick={() => {
                                    localStorage.setItem("round", "1");
                                }}
                            >
                                Vòng 1
                            </Link>
                            <Link
                                className="w-full p-4 text-center text-xl transition-colors duration-200 ease-in-out hover:bg-gray-100"
                                href="/round-two"
                                onClick={() => {
                                    localStorage.setItem("round", "2");
                                }}
                            >
                                Vòng 2
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div
                        className={`absolute top-10 z-[400] h-fit w-[10rem] rounded-lg bg-white text-[#fe5009] shadow-lg transition-opacity duration-300 ease-in-out ${
                            isMenuOpen ? "block opacity-100" : "hidden opacity-0"
                        }`}
                    >
                        <ul className="flex h-full w-full flex-col items-center justify-center">
                            <li className="flex h-12 w-full cursor-pointer select-none items-center justify-center hover:bg-gray-100">
                                <Link
                                    className="transition-colors duration-200 ease-in-out"
                                    href="/"
                                    onClick={() => {
                                        localStorage.setItem("round", "1");
                                        console.log("Vòng 1");
                                    }}
                                >
                                    Vòng 1
                                </Link>
                            </li>
                            <li className="flex h-12 w-full cursor-pointer select-none items-center justify-center hover:bg-gray-100">
                                <Link
                                    className="transition-colors duration-200 ease-in-out"
                                    href="/round-two"
                                    onClick={() => {
                                        localStorage.setItem("round", "2");
                                        console.log("Vòng 2");
                                    }}
                                >
                                    Vòng 2
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
