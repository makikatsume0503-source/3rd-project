import React from 'react';

export const Profile: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <p className="text-[#d4af37] text-sm font-serif tracking-widest mb-2">INSTRUCTOR</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">講師プロフィール</h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4"></div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row">
                    {/* Top gold accent */}
                    <div className="w-full h-1 md:hidden bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

                    {/* Photo */}
                    <div className="w-full md:w-1/3 flex-shrink-0">
                        <div className="aspect-[3/4] overflow-hidden relative md:h-full">
                            <img
                                src="/assets/maki-profile.jpg"
                                alt="勝目 麻希"
                                className="w-full h-full object-cover transform scale-125 object-[center_30%]"
                            />
                            {/* Gold left border on desktop */}
                            <div className="hidden md:block absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/60 to-[#d4af37]/0" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-[#d4af37] font-bold tracking-widest text-xs font-serif mb-2">講師</span>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800">
                            勝目 麻希
                        </h2>
                        <p className="text-slate-400 text-sm font-serif mb-6">Maki Katsume</p>

                        <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                            <p>
                                2018年に未経験からフリーランスライターとして独立。
                                副業からスタートし、着実に実績を積み上げ会社員時代の収入を超える。
                            </p>
                            <p>
                                現在は企業のオウンドメディア執筆・SNS運用代行・メルマガ代行・広報支援など多岐にわたり活動。
                                AIを活用した高速・高品質なコンテンツ制作手法の普及に取り組んでいる。
                            </p>
                            <p>
                                「スキルさえあれば、場所も時間も選ばず稼げる」をテーマに、
                                ビジネスをスケールしたいすべての方に向けて講座・コンサルを提供中。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
