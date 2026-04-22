import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Image, Code, Smartphone } from 'lucide-react';

export const LPCreationFlow: React.FC = () => {
    const steps = [
        {
            icon: <MessageSquare className="w-6 h-6" />,
            label: "戦略",
            title: "AIと壁打ち（コンセプト設計）",
            description: "ターゲットの悩みやベネフィットをAIと整理し、勝てるコンセプトを固める。"
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            label: "骨子",
            title: "構成・キャッチコピー作成",
            description: "ライティングの型に沿って、AIと文章（セールスライティング）を完成させる。"
        },
        {
            icon: <Image className="w-6 h-6" />,
            label: "視覚",
            title: "デザインの言語化・生成",
            description: "配色や雰囲気をAIで画像生成、またはプロンプト化して視覚的なイメージを固める。"
        },
        {
            icon: <Code className="w-6 h-6" />,
            label: "構築",
            title: "AIでコード生成",
            description: "生成AIを使って一気に形にする。"
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            label: "公開",
            title: "微調整・スマホ最適化",
            description: "プレビューを見ながらデザインや文字の大きさを微調整したら公開します。"
        }
    ];

    return (
        <section className="py-20 bg-[#0c1829]">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <p className="text-[#d4af37] text-sm font-serif tracking-widest mb-3">FLOW</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        ホームページ作成のフローと解説
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
                </div>

                <div className="space-y-4 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[28px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/40 to-[#d4af37]/0 hidden md:block"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-[#d4af37]/20 rounded-xl p-6 relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-[#d4af37]/50 transition-colors duration-300"
                        >
                            {/* Icon Bubble */}
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#d4af37] text-[#0c1829] flex items-center justify-center shadow-lg z-20">
                                {step.icon}
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="flex-shrink-0 px-3 py-1 border border-[#d4af37]/50 text-[#d4af37] font-bold text-xs font-serif tracking-wider whitespace-nowrap">
                                        {step.label}
                                    </span>
                                    <h3 className="font-bold text-lg text-white">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                        このフローに従えば<br />
                        <span className="text-[#d4af37] font-extrabold text-2xl md:text-3xl tracking-wider">最短１日で</span><br />
                        ホームページが完成します。
                    </p>
                </div>
            </div>
        </section>
    );
};
