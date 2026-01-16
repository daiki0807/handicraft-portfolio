import Image from "next/image";
import Link from "next/link";
import { Work } from "@/data/works";

interface WorkCardProps {
    work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
    return (
        <Link href={`/gallery/${work.id}`} className="group block">
            <article className="bg-[var(--background-card)] rounded-3xl overflow-hidden shadow-soft card-hover">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                    <Image
                        src={work.thumbnail}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-heading text-sm">詳細を見る →</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                    {/* Category Tag */}
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent-cream)] text-[var(--text-secondary)] mb-2">
                        {work.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-heading text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors line-clamp-1">
                        {work.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm text-[var(--text-secondary)] line-clamp-2">
                        {work.description}
                    </p>
                </div>
            </article>
        </Link>
    );
}
