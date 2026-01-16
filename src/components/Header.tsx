"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
    { name: "ホーム", href: "/" },
    { name: "ギャラリー", href: "/gallery" },
    { name: "プロフィール", href: "/profile" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--accent-pink)]/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="font-heading text-xl sm:text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                            ママと子どものハンドメイド作品
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="font-heading text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-primary)] group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="メニューを開く"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-[var(--accent-pink)]/20">
                        <div className="flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="font-heading text-lg text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors px-2 py-1"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
