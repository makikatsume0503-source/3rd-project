import React from 'react';
import { motion } from 'framer-motion';

export const Conclusion: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50 text-center">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-px w-12 bg-[#d4af37]/60" />
                        <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
                        <div className="h-px w-12 bg-[#d4af37]/60" />
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold font-serif text-slate-800 leading-tight mb-8">
                        ホームページは、<br />
                        <span className="text-[#d4af37]">あなたのビジネスの顔</span>です。
                    </h2>

                    <div className="bg-[#0c1829] rounded-xl p-10 text-left relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                        <p className="text-slate-200 text-base md:text-lg font-serif leading-loose">
                            どれだけ素晴らしいサービスを持っていても、<br />
                            それが伝わらなければ、存在しないのと同じです。<br /><br />
                            AIを使えば、今日から動ける。<br />
                            技術がなくても、時間がなくても、関係ない。<br /><br />
                            <span className="text-[#d4af37] font-bold">「1日」で、あなたのビジネスは変わります。</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
