import React from 'react';
import { motion } from 'framer-motion';

export const Profile: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                    <p className="text-[#d4af37] text-sm font-serif tracking-widest mb-2">INSTRUCTOR</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">講師プロフィール</h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 relative"
                >
                    {/* Top gold line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

                    <div className="flex flex-col md:flex-row">
                        {/* Photo */}
                        <div className="w-full md:w-[320px] flex-shrink-0">
                            <div className="relative h-72 md:h-full min-h-[320px] overflow-hidden">
                                <img
                                    src="/assets/maki-profile.jpg"
                                    alt="勝目 麻希"
                                    className="w-full h-full object-cover object-top"
                                />
                                {/* Gold divider on right (desktop) */}
                                <div className="hidden md:block absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/50 to-[#d4af37]/0" />
                                {/* Fade at bottom (mobile) */}
                                <div className="block md:hidden absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                            <span className="text-[#d4af37] font-serif tracking-widest text-xs mb-2">講師</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-1 font-serif">
                                勝目 麻希
                            </h3>
                            <p className="text-slate-400 text-sm font-serif tracking-widest mb-8">Maki Katsume</p>

                            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base font-serif">
                                <p>
                                    2018年に未経験からフリーランスライターとして独立。
                                    副業からスタートし、着実に実績を積み上げ会社員時代の収入を超える。
                                </p>
                                <p>
                                    企業のオウンドメディア執筆・SNS運用代行・メルマガ代行・広報支援など多岐にわたり活動。
                                    AIを活用した高速・高品質なコンテンツ制作手法の普及に取り組む。
                                </p>
                                <p>
                                    「スキルさえあれば、場所も時間も選ばず稼げる」をテーマに、
                                    ビジネスをスケールしたいすべての方に向けて講座・コンサルを提供中。
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                {['フリーランスライター', 'SNS運用', 'AI活用', 'コンテンツ制作', '講師・コンサル'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 border border-[#d4af37]/30 text-[#d4af37]/80 text-xs font-serif tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
