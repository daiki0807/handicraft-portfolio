import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/kagiami_mito?igsh=MWM3NmFycndqNDh3OA%3D%3D&utm_source=qr",
        username: "@handcraft_house",
        color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
        ),
    },
];

const skills = [
    { name: "編み物", level: 90, icon: "🧶" },
    { name: "刺繍", level: 85, icon: "🪡" },
    { name: "レース編み", level: 75, icon: "🕸️" },
];

export default function ProfilePage() {
    return (
        <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <span className="inline-block font-accent text-sm tracking-widest text-[var(--accent-lavender)] uppercase mb-2">
                        Profile
                    </span>
                    <h1 className="font-heading text-4xl sm:text-5xl text-[var(--text-primary)]">
                        プロフィール
                    </h1>
                    <div className="mt-6 w-16 h-1 bg-gradient-soft rounded-full mx-auto"></div>
                </div>

                {/* Main Profile Card */}
                <div className="bg-[var(--background-card)] rounded-3xl shadow-soft-lg overflow-hidden mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image Section */}
                        <div className="relative h-64 sm:h-80 lg:h-auto">
                            <Image
                                src="/profile-image.jpg"
                                alt="作家プロフィール写真"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/30 to-transparent lg:bg-gradient-to-r"></div>
                        </div>

                        {/* Info Section */}
                        <div className="p-8 sm:p-12 flex flex-col justify-center">
                            <h2 className="font-heading text-2xl sm:text-3xl text-[var(--text-primary)] mb-2">
                                手芸作家
                            </h2>
                            <p className="font-accent text-[var(--accent-primary)] mb-6">Handcraft Artist</p>

                            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                                はじめまして、ママと子どものハンドメイド作品へようこそ。<br /><br />
                                幼い頃から母の影響で手芸に親しみ、編み物、刺繍など
                                様々な技法を独学で学んできました。<br /><br />
                                「日常に温もりを」をモットーに、使う人の暮らしに優しく寄り添う
                                作品づくりを心がけています。<br /><br />
                                一点一点、心を込めて丁寧に制作しています。
                            </p>

                            {/* Social Links */}
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-white ${social.color} hover:opacity-90 transition-opacity`}
                                    >
                                        {social.icon}
                                        <span className="text-sm font-medium">{social.username}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="bg-[var(--background-card)] rounded-3xl p-8 shadow-soft">
                        <h3 className="font-heading text-xl text-[var(--text-primary)] mb-6">
                            得意な技法
                        </h3>
                        <div className="space-y-5">
                            {skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                                            <span className="text-xl">{skill.icon}</span>
                                            {skill.name}
                                        </span>
                                        <span className="text-sm text-[var(--text-light)]">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-[var(--accent-cream)] rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-soft rounded-full transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Link to Gallery */}
                <div className="text-center mt-12">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-heading hover:underline"
                    >
                        作品ギャラリーを見る
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
