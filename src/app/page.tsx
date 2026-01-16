import Image from "next/image";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import { getFeaturedWorks } from "@/data/works";

export default function Home() {
  const featuredWorks = getFeaturedWorks();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-summer.png"
            alt="夏の手芸作品と毛糸"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/40 via-transparent to-[var(--background)]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-sm animate-fade-in-up">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl text-[var(--text-primary)] mb-6 whitespace-nowrap">
              心を込めた<span className="text-[var(--accent-primary)]">手作り</span>の温もり
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-primary)] mb-8 font-medium">
              ひと針ひと針、丁寧に仕上げた<br className="hidden sm:inline" />
              手芸作品をご紹介します
            </p>
            <Link
              href="/gallery"
              className="inline-block px-8 py-4 bg-[var(--accent-primary)] text-white font-heading text-lg rounded-full shadow-soft hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
            >
              作品を見る
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[var(--text-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block font-accent text-sm tracking-widest text-[var(--accent-primary)] uppercase mb-2">
              Featured Works
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
              おすすめ作品
            </h2>
            <div className="mt-4 w-16 h-1 bg-gradient-soft rounded-full mx-auto"></div>
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredWorks.map((work, index) => (
              <div key={work.id} className={`animate-fade-in-up opacity-0 delay-${(index + 1) * 100}`} style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.1}s` }}>
                <WorkCard work={work} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] font-heading rounded-full hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300"
            >
              すべての作品を見る
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background-card)]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block font-accent text-sm tracking-widest text-[var(--accent-green)] uppercase mb-2">
            About
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)] mb-8">
            ママと子どものハンドメイド作品
          </h2>

          <div className="bg-[var(--background)] rounded-3xl p-8 sm:p-12 shadow-soft">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              「手芸のおうち」は、日々の暮らしに温もりを添える<br className="hidden sm:inline" />
              ハンドメイド作品を制作しています。<br /><br />
              編み物、刺繍、ソーイングなど、<br className="hidden sm:inline" />
              様々な技法を使って一点一点丁寧に仕上げています。<br /><br />
              あなたの暮らしに寄り添う、<br className="hidden sm:inline" />
              特別な一品が見つかりますように。
            </p>

            <Link
              href="/profile"
              className="inline-flex items-center gap-2 mt-8 text-[var(--accent-green)] font-heading hover:underline"
            >
              作家について詳しく見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block font-accent text-sm tracking-widest text-[var(--accent-lavender)] uppercase mb-2">
              Categories
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)]">
              カテゴリー
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "編み物", icon: "🧶", description: "あたたかなニット作品", color: "var(--accent-pink)" },
              { name: "刺繍", icon: "🪡", description: "繊細な糸の表現", color: "var(--accent-lavender)" },
              { name: "ソーイング", icon: "✂️", description: "実用的な布小物", color: "var(--accent-green)" },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/gallery?category=${encodeURIComponent(category.name)}`}
                className="group bg-[var(--background-card)] rounded-3xl p-8 text-center shadow-soft card-hover"
              >
                <span className="text-5xl block mb-4">{category.icon}</span>
                <h3 className="font-heading text-xl text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
