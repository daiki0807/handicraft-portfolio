export interface Work {
    id: string;
    title: string;
    description: string;
    category: "編み物" | "刺繍";
    thumbnail: string;
    images: string[];
    materials: string[];
    createdAt: string;
    featured?: boolean;
}

export const works: Work[] = [
    {
        id: "1",
        title: "クロミちゃんのニット帽",
        description: "黒と紫の色合いがかわいい、キャラクターモチーフのニット帽です。耳の部分がポイント。",
        category: "編み物",
        thumbnail: "/works/work-01.jpg",
        images: ["/works/work-01.jpg"],
        materials: ["アクリル毛糸", "ポリエステル綿"],
        createdAt: "2024-01-15",
        featured: true,
    },
    {
        id: "2",
        title: "オレンジとイエローのポーチ",
        description: "ビタミンカラー元気が出る、手編みのポーチです。ボタン留めがアクセント。",
        category: "編み物",
        thumbnail: "/works/work-02.jpg",
        images: ["/works/work-02.jpg"],
        materials: ["コットン糸", "ウッドボタン"],
        createdAt: "2024-02-20",
        featured: true,
    },
    {
        id: "3",
        title: "マイメロディ風ハット",
        description: "ピンクのリボンが特徴的なかわいい帽子です。ブリム（つば）が波打つデザインで可愛らしさをアップ。",
        category: "編み物",
        thumbnail: "/works/work-03.jpg",
        images: ["/works/work-03.jpg"],
        materials: ["ベビーウール", "コットン糸"],
        createdAt: "2024-03-10",
        featured: true,
    },
    {
        id: "4",
        title: "お花の付け襟",
        description: "マーガレットのようなデザインの付け襟。シンプルなTシャツのアクセントにぴったりです。",
        category: "編み物",
        thumbnail: "/works/work-04.jpg",
        images: ["/works/work-04.jpg"],
        materials: ["レース糸", "コットン糸"],
        createdAt: "2024-04-05",
        featured: true,
    },
    {
        id: "5",
        title: "ブルーグレーのボンネット",
        description: "落ち着いた色合いのボンネット（帽子）。紐付きで調整可能、寒い冬もおしゃれに。",
        category: "編み物",
        thumbnail: "/works/work-05.jpg",
        images: ["/works/work-05.jpg"],
        materials: ["ウール混毛糸"],
        createdAt: "2024-05-12",
        featured: true,
    },
    {
        id: "6",
        title: "パステルカラーのポケットティッシュケース",
        description: "淡いミックスカラーの毛糸で編んだ、ふわふわの手触りのポケットティッシュケースです。",
        category: "編み物",
        thumbnail: "/works/work-06.jpg",
        images: ["/works/work-06.jpg"],
        materials: ["アクリル毛糸"],
        createdAt: "2024-06-01",
        featured: true,
    },
    {
        id: "7",
        title: "パールとフリルのデコレーション",
        description: "水色のフリルとパールビーズを組み合わせた、華やかなデコレーションパーツです。",
        category: "編み物",
        thumbnail: "/works/work-07.jpg",
        images: ["/works/work-07.jpg"],
        materials: ["コットン糸", "パールビーズ"],
        createdAt: "2024-06-15",
        featured: true,
    },
    {
        id: "8",
        title: "フリルとパールのストラップ",
        description: "首から下げられる長めのストラップ。フリル編みとパールで可愛らしく仕上げました。",
        category: "編み物",
        thumbnail: "/works/work-08.jpg",
        images: ["/works/work-08.jpg"],
        materials: ["コットン糸", "パールビーズ", "カニカン"],
        createdAt: "2024-07-01",
        featured: true,
    },
    {
        id: "9",
        title: "もこもこイヤーマフ",
        description: "左右でデザインが違う、ユニークで温かいイヤーマフ。冬のお出かけのアクセントに。",
        category: "編み物",
        thumbnail: "/works/work-09.jpg",
        images: ["/works/work-09.jpg"],
        materials: ["ファンシーヤーン", "アクリル毛糸"],
        createdAt: "2024-07-20",
        featured: true,
    },
    {
        id: "10",
        title: "赤いリボンのヘアゴム",
        description: "鮮やかな赤が目を引くリボンモチーフのヘアゴム。シンプルなポニーテールのアクセントに。",
        category: "編み物",
        thumbnail: "/works/work-10.jpg",
        images: ["/works/work-10.jpg"],
        materials: ["アクリル毛糸", "ヘアゴム"],
        createdAt: "2024-08-05",
        featured: true,
    },
    {
        id: "11",
        title: "パープルフラワーのチャーム",
        description: "紫色の花をモチーフにした、ふっくらとした可愛らしいチャームです。",
        category: "編み物",
        thumbnail: "/works/work-11.jpg",
        images: ["/works/work-11.jpg"],
        materials: ["アクリル毛糸"],
        createdAt: "2024-08-20",
        featured: true,
    },
    {
        id: "12",
        title: "水色のロール型ケース",
        description: "編み針などを収納できる、ロールタイプのコンパクトなケース。星のモチーフがアクセント。",
        category: "編み物",
        thumbnail: "/works/work-12.jpg",
        images: ["/works/work-12.jpg"],
        materials: ["コットン糸"],
        createdAt: "2024-09-01",
        featured: true,
    },
    {
        id: "13",
        title: "モチーフ編みのバケットハット",
        description: "茶色と白のモチーフ編みを組み合わせた、温かみのあるデザインのバケットハットです。",
        category: "編み物",
        thumbnail: "/works/work-13.jpg",
        images: ["/works/work-13.jpg"],
        materials: ["ウール毛糸", "アクリル毛糸"],
        createdAt: "2024-09-15",
        featured: true,
    },
    {
        id: "14",
        title: "デイジーの付け襟",
        description: "黄色い縁取りが可愛い、デイジーの花をイメージした付け襟。コーディネートのポイントに。",
        category: "編み物",
        thumbnail: "/works/work-14.jpg",
        images: ["/works/work-14.jpg"],
        materials: ["コットン糸"],
        createdAt: "2024-10-01",
        featured: true,
    },
    {
        id: "15",
        title: "かぎ針編み用収納ケース",
        description: "お気に入りの道具をすっきり収納できる専用ケース。ポケットが沢山あり機能的です。",
        category: "編み物",
        thumbnail: "/works/work-15.jpg",
        images: ["/works/work-15.jpg"],
        materials: ["コットン糸"],
        createdAt: "2024-10-10",
        featured: true,
    },
];

export const categories = ["すべて", "編み物", "刺繍"] as const;

export type Category = (typeof categories)[number];

export function getWorkById(id: string): Work | undefined {
    return works.find((work) => work.id === id);
}

export function getFeaturedWorks(): Work[] {
    return works.filter((work) => work.featured);
}

export function getWorksByCategory(category: Category): Work[] {
    if (category === "すべて") return works;
    return works.filter((work) => work.category === category);
}

export function getRelatedWorks(currentWork: Work, limit: number = 3): Work[] {
    return works
        .filter((work) => work.id !== currentWork.id && work.category === currentWork.category)
        .slice(0, limit);
}
