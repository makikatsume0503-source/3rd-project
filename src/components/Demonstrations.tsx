import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, Smartphone, Layout } from 'lucide-react';

export const Demonstrations: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        3つの衝撃デモンストレーション
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        「尋ねる力」があれば、ライターは「書く」以外の領域も一瞬で形にできます。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <DemoCard
                        icon={<Presentation className="w-10 h-10 text-secondary" />}
                        title="資料作成"
                        description="記事構成案から、クライアント提案用のスライドを一瞬で生成。構成からデザイン案まで、AIがたたき台を作成します。"
                        delay={0}
                    />
                    <DemoCard
                        icon={<Layout className="w-10 h-10 text-secondary" />}
                        title="ホームページ作成"
                        description="読者の心を動かすベネフィットを言語化し、ホームページの構成・デザインを構築。コピーライティングの枠を超えた提案が可能に。"
                        delay={0.2}
                    />
                    <DemoCard
                        icon={<Smartphone className="w-10 h-10 text-secondary" />}
                        title="アプリ作成"
                        description="プログラミング不要。言葉だけで「自分専用の校正・執筆ツール」を作る。必要な機能を言葉で指示するだけで実装完了。"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

const DemoCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}

        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors duration-300"
    >
        <div className="mb-6 bg-slate-900 w-20 h-20 rounded-2xl flex items-center justify-center border border-slate-700 shadow-lg mx-auto">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-center text-secondary">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed text-center">
            {description}
        </p>
    </motion.div>
);
