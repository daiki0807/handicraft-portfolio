import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WorkCard from "@/components/WorkCard";
import { works, getWorkById, getRelatedWorks } from "@/data/works";

interface WorkDetailPageProps {
    params: Promise<{ id: string }>;
}

export function generateStaticParams() {
    return works.map((work) => ({
        id: work.id,
    }));
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
    const { id } = await params;
    const work = getWorkById(id);

    if (!work) {
        notFound();
    }

    const relatedWorks = getRelatedWorks(work);

    return (
        <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <li>
                            <Link href="/" className="hover:text-[var(--accent-pink)] transition-colors">
                                ホーム
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href="/gallery" className="hover:text-[var(--accent-pink)] transition-colors">
                                ギャラリー
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-[var(--text-primary)] font-medium truncate max-w-[200px]">
                            {work.title}
                        </li>
                    </ol>
                </nav>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Image Section */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-soft-lg bg-[var(--background-card)]">
                            <Image
                                src={work.thumbnail}
                                alt={work.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        {work.images.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {work.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 border-transparent hover:border-[var(--accent-pink)] transition-colors cursor-pointer"
                                    >
                                        <Image
                                            src={image}
                                            alt={`${work.title} - ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Info Section */}
                    <div className="space-y-6">
                        {/* Category */}
                        <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-[var(--accent-cream)] text-[var(--text-secondary)]">
                            {work.category}
                        </span>

                        {/* Title */}
                        <h1 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
                            {work.title}
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            {work.description}
                        </p>

                        {/* Details Card */}
                        <div className="bg-[var(--background-card)] rounded-2xl p-6 shadow-soft space-y-4">
                            {/* Created Date */}
                            <div className="flex items-start gap-3">
                                <span className="text-xl">📅</span>
                                <div>
                                    <h3 className="font-heading text-sm text-[var(--text-light)]">制作日</h3>
                                    <p className="text-[var(--text-primary)]">
                                        {new Date(work.createdAt).toLocaleDateString("ja-JP", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>

                            {/* Materials */}
                            <div className="flex items-start gap-3">
                                <span className="text-xl">🧵</span>
                                <div>
                                    <h3 className="font-heading text-sm text-[var(--text-light)]">使用素材</h3>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {work.materials.map((material, index) => (
                                            <span
                                                key={index}
                                                className="inline-block px-3 py-1 text-sm rounded-full bg-[var(--accent-cream)] text-[var(--text-secondary)]"
                                            >
                                                {material}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back Button */}
                        <Link
                            href="/gallery"
                            className="inline-flex items-center gap-2 text-[var(--accent-pink)] font-heading hover:underline"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            ギャラリーに戻る
                        </Link>
                    </div>
                </div>

                {/* Related Works */}
                {relatedWorks.length > 0 && (
                    <section className="mt-16 sm:mt-24">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-2xl sm:text-3xl text-[var(--text-primary)]">
                                関連作品
                            </h2>
                            <div className="mt-4 w-12 h-1 bg-gradient-soft rounded-full mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedWorks.map((relatedWork) => (
                                <WorkCard key={relatedWork.id} work={relatedWork} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
