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
            description: "プレビューを見ながらデザインや文字の大きさなどを微調整したら実装します。"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                        ホームページ作成のフローと解説
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[28px] top-8 bottom-8 w-1 bg-slate-200 hidden md:block"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-md border border-slate-100 relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center"
                        >
                            {/* Number/Icon Bubble */}
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-lg border-4 border-slate-50 z-20">
                                {step.icon}
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="flex-shrink-0 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-sm whitespace-nowrap">
                                        {step.label}
                                    </span>
                                    <h3 className="font-bold text-lg text-slate-800">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl md:text-2xl font-bold text-primary leading-relaxed">
                        このフローに従えば<br />
                        <span className="text-[#d4af37] font-extrabold text-2xl md:text-3xl tracking-wider">最短１日で</span><br />ホームページが完成します！
                    </p>
                </div>
            </div>
        </section>
    );
};
