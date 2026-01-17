"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import WorkCard from "@/components/WorkCard";
import { works, categories, getWorksByCategory, Category } from "@/data/works";

function GalleryContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    const [selectedCategory, setSelectedCategory] = useState<Category>("すべて");
    const [filteredWorks, setFilteredWorks] = useState(works);

    useEffect(() => {
        if (categoryParam && categories.includes(categoryParam as Category)) {
            setSelectedCategory(categoryParam as Category);
        }
    }, [categoryParam]);

    useEffect(() => {
        setFilteredWorks(getWorksByCategory(selectedCategory));
    }, [selectedCategory]);

    return (
        <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <span className="inline-block font-accent text-sm tracking-widest text-[var(--accent-primary)] uppercase mb-2">
                        Gallery
                    </span>
                    <h1 className="font-heading text-4xl sm:text-5xl text-[var(--text-primary)]">
                        作品ギャラリー
                    </h1>
                    <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto">
                        心を込めて制作した作品たちをご覧ください。<br />
                        各作品をクリックすると詳細をご覧いただけます。
                    </p>
                    <div className="mt-6 w-16 h-1 bg-gradient-soft rounded-full mx-auto"></div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2.5 rounded-full font-heading text-sm transition-all duration-300 ${selectedCategory === category
                                ? "bg-[var(--accent-primary)] text-white shadow-soft"
                                : "bg-[var(--background-card)] text-[var(--text-secondary)] hover:bg-[var(--accent-cream)] hover:text-[var(--text-primary)]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Works Count */}
                <p className="text-center text-sm text-[var(--text-light)] mb-8">
                    {filteredWorks.length}件の作品
                </p>

                {/* Works Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredWorks.map((work, index) => (
                        <div
                            key={work.id}
                            className="animate-fade-in-up opacity-0"
                            style={{ animationFillMode: "forwards", animationDelay: `${index * 0.05}s` }}
                        >
                            <WorkCard work={work} />
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredWorks.length === 0 && (
                    <div className="text-center py-16">
                        <span className="text-5xl mb-4 block">🧵</span>
                        <p className="text-[var(--text-secondary)]">
                            このカテゴリーにはまだ作品がありません
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function GalleryPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <GalleryContent />
        </Suspense>
    );
}
