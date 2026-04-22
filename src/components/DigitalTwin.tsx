import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, PenTool } from 'lucide-react';

export const DigitalTwin: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">

                    <h2 className="text-2xl md:text-4xl font-bold mt-2 text-slate-800">
                        プロの取材力をAIに実装。<br />
                        あなたの強みを言語化する<br /><span className="text-secondary">「プロライター監修のヒアリングシート」</span>
                    </h2>
                    <p className="mt-6 text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        AIに「丸投げ」しても、<br className="block md:hidden" />差別化された強みは出てきません。<br />
                        成果を出すのは、AIへの「質の高いインプット」です。
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <FeatureItem
                            icon={<Brain className="w-6 h-6 text-secondary" />}
                            title="プロの「本質を突く質問」を実装"
                            description="プロのライターが取材で使う質問リストをAIにインプット。表面的な情報だけでなく、あなたのビジネスの核心にある強みと実績を引き出します。"
                        />
                        <FeatureItem
                            icon={<Sparkles className="w-6 h-6 text-secondary" />}
                            title="量産ではなく「差別化された」コピー"
                            description="質の高いインプットがあるからこそ、AIは強力なライティングツールになります。ありきたりな量産文章ではなく、成約率の高い言葉が生成されます。"
                        />
                        <FeatureItem
                            icon={<PenTool className="w-6 h-6 text-secondary" />}
                            title="ゼロから始める手間を完全排除"
                            description="ヒアリングに答えるだけで、AIへの指示出しが完了。まるで優秀なコピーライターがインタビューするように、スピーディーに原稿が完成します。"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
        </div>
    </div>
);
